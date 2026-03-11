import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Exemplo01 from './src/exemplos/ex-01';
import Exemplo02 from './src/exemplos/ex-02';

import Atividade01 from './src/atividades/atv-01';
import Atividade02 from './src/atividades/atv-02';

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade02 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d72865',
    padding: 16,
    // alignItems: 'center',
    // justifyContent: 'center',
  }, 
});
