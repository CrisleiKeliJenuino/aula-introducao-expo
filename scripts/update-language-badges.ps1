$ErrorActionPreference = 'Stop'

$RepoRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$ReadmePath = Join-Path $RepoRoot 'README.md'

$StartMarker = '<!-- Language badges:start -->'
$EndMarker = '<!-- Language badges:end -->'

$ExcludeDirs = @(
  '.git',
  'node_modules',
  '.expo',
  '.expo-shared',
  'dist',
  'build',
  'coverage',
  '.next',
  'android',
  'ios',
  'web-build'
)

$ExcludeExts = @(
  '.png', '.jpg', '.jpeg', '.gif', '.webp', '.ico', '.bmp', '.tiff', '.psd',
  '.mp4', '.mov', '.avi', '.mkv', '.mp3', '.wav', '.ogg',
  '.zip', '.7z', '.rar', '.pdf'
)

$ExcludeFileNames = @(
  'package-lock.json',
  'yarn.lock',
  'pnpm-lock.yaml',
  'bun.lockb'
)

$ExtToLang = @{
  '.js'   = @{ name='JavaScript'; color='F7DF1E'; logo='javascript'; logoColor='black' };
  '.jsx'  = @{ name='JavaScript'; color='F7DF1E'; logo='javascript'; logoColor='black' };
  '.ts'   = @{ name='TypeScript'; color='3178C6'; logo='typescript'; logoColor='white' };
  '.tsx'  = @{ name='TypeScript'; color='3178C6'; logo='typescript'; logoColor='white' };
}

function Get-BadgeUrl {
  param(
    [Parameter(Mandatory=$true)][string]$Label,
    [Parameter(Mandatory=$true)][string]$Message,
    [Parameter(Mandatory=$true)][string]$Color,
    [string]$Logo,
    [string]$LogoColor
  )

  $encodedLabel = [uri]::EscapeDataString($Label)
  $encodedMsg = [uri]::EscapeDataString($Message)
  $encodedColor = [uri]::EscapeDataString($Color)

  $qs = @('style=for-the-badge')
  if ($Logo) { $qs += ('logo=' + [uri]::EscapeDataString($Logo)) }
  if ($LogoColor) { $qs += ('logoColor=' + [uri]::EscapeDataString($LogoColor)) }

  return "https://img.shields.io/badge/$encodedLabel-$encodedMsg-${encodedColor}?" + ($qs -join '&')
}

function Format-Pct {
  param([double]$Value)
  $fixed = [math]::Round($Value, 1)
  if (($fixed % 1) -eq 0) { return ([int]$fixed).ToString() }
  return $fixed.ToString('0.0', [System.Globalization.CultureInfo]::InvariantCulture)
}

function Get-RelativePath {
  param([string]$Path, [string]$Base)
  $uriPath = New-Object System.Uri($Path)
  $uriBase = New-Object System.Uri(($Base.TrimEnd('\') + '\'))
  return $uriBase.MakeRelativeUri($uriPath).ToString().Replace('/', '\')
}

if (!(Test-Path $ReadmePath)) {
  throw 'README.md não encontrado na raiz do projeto.'
}

$readme = Get-Content -LiteralPath $ReadmePath -Raw -Encoding UTF8

# Collect files (excluding directories by path prefix)
$allFiles = Get-ChildItem -LiteralPath $RepoRoot -Recurse -File | Where-Object {
  $rel = (Get-RelativePath -Path $_.FullName -Base $RepoRoot)
  $parts = $rel.Split('\')
  if ($parts.Count -gt 0 -and $ExcludeDirs -contains $parts[0]) { return $false }
  return $true
}

$stats = @{} # langName -> @{ bytes=...; meta=... }

foreach ($file in $allFiles) {
  if ($file.FullName -eq $ReadmePath) { continue }

  if ($ExcludeFileNames -contains $file.Name) { continue }

  $ext = $file.Extension.ToLowerInvariant()
  if ($ExcludeExts -contains $ext) { continue }
  if (-not $ExtToLang.ContainsKey($ext)) { continue }

  $lang = $ExtToLang[$ext]
  $name = $lang.name

  if (-not $stats.ContainsKey($name)) {
    $stats[$name] = @{ bytes = 0; meta = $lang }
  }
  $stats[$name].bytes += $file.Length
}

$rows = $stats.GetEnumerator() | ForEach-Object {
  [pscustomobject]@{
    name = $_.Key
    bytes = [double]$_.Value.bytes
    color = $_.Value.meta.color
    logo = $_.Value.meta.logo
    logoColor = $_.Value.meta.logoColor
  }
} | Sort-Object -Property bytes -Descending

$totalBytes = ($rows | Measure-Object -Property bytes -Sum).Sum

$rowsWithPct = @($rows | ForEach-Object {
  $p = 0
  if ($totalBytes -gt 0) { $p = ($_.bytes / $totalBytes) * 100 }
  [pscustomobject]@{
    name = $_.name
    pct = (Format-Pct $p)
    color = $_.color
    logo = $_.logo
    logoColor = $_.logoColor
  }
})

function Build-BadgeBlock {
  param($Rows)

  if (-not $Rows -or $Rows.Count -eq 0) {
    return "$StartMarker`n<!-- (no detectable source files) -->`n$EndMarker"
  }

  $topN = 4
  $top = $Rows | Select-Object -First $topN
  $main = $top | Select-Object -First 1

  $lines = @()
  $mainUrl = Get-BadgeUrl -Label 'Linguagem principal' -Message ("{0} {1}%" -f $main.name, $main.pct) -Color $main.color -Logo $main.logo -LogoColor $main.logoColor
  $lines += "![Linguagem principal: {0} {1}%]({2})" -f $main.name, $main.pct, $mainUrl

  foreach ($row in ($top | Select-Object -Skip 1)) {
    $url = Get-BadgeUrl -Label $row.name -Message ("{0}%" -f $row.pct) -Color $row.color -Logo $row.logo -LogoColor $row.logoColor
    $lines += "![{0} {1}%]({2})" -f $row.name, $row.pct, $url
  }

  return "$StartMarker`n" + ($lines -join "`n") + "`n$EndMarker"
}

$block = Build-BadgeBlock -Rows $rowsWithPct

$startIdx = $readme.IndexOf($StartMarker)
$endIdx = $readme.IndexOf($EndMarker)

if ($startIdx -ge 0 -and $endIdx -gt $startIdx) {
  $updated = $readme.Substring(0, $startIdx) + $block + $readme.Substring($endIdx + $EndMarker.Length)
} else {
  # Insert after first non-empty line (usually the title)
  $lines = $readme -split "`r?`n"
  $firstNonEmpty = -1
  for ($i = 0; $i -lt $lines.Length; $i++) {
    if ($lines[$i].Trim().Length -gt 0) { $firstNonEmpty = $i; break }
  }

  if ($firstNonEmpty -ge 0) {
    $newLines = New-Object System.Collections.Generic.List[string]
    for ($i = 0; $i -le $firstNonEmpty; $i++) { $newLines.Add($lines[$i]) }
    $newLines.Add('')
    $newLines.Add($block)
    $newLines.Add('')
    for ($i = $firstNonEmpty + 1; $i -lt $lines.Length; $i++) { $newLines.Add($lines[$i]) }
    $updated = $newLines -join "`n"
  } else {
    $updated = $block + "`n`n" + $readme
  }
}

Set-Content -LiteralPath $ReadmePath -Value $updated -Encoding UTF8

if ($rowsWithPct -and $rowsWithPct.Count -gt 0) {
  Write-Host ("OK: Linguagem principal = {0} ({1}%)" -f $rowsWithPct[0].name, $rowsWithPct[0].pct)
} else {
  Write-Host 'OK: Nenhuma linguagem detectada.'
}
