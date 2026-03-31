import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function Atividade04() {

    const [texto, setTexto] = useState('Inserir nome e sobrenome');
    const [txt2, setTxt2] = useState(''); 
    const [mensagem, setMensagem] = useState(''); 

    function handleExibeMensagem() {
        setMensagem(txt2);
        setTxt2('');
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>

            <Text style={styles.txt}>{texto}</Text>

            <TextInput
                onChangeText={setTexto}
                placeholder='Nome'
                keyboardType='ascii-capable'
                // editable={false}
                // multiline
                // numberOfLines={4}
                maxLength={7}
                // secureTextEntry 
                style={styles.input}
            />

            <Text style={styles.txt}>{mensagem}</Text>
            <TextInput
                value={txt2} 
                onChangeText={setTxt2}
                placeholder='Sobrenome'
                keyboardType='ascii-capable'                
                style={styles.input}
            />

            <TouchableOpacity 
                style={styles.botao} 
                onPress={() => handleExibeMensagem()}
            >
                <Text style={styles.txtBotao}>Exibir texto</Text>
            </TouchableOpacity> 

        </View>
    );
}


