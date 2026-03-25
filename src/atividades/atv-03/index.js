import { useState } from 'react';
import { View, Text, Button, Alert, TouchableOpacity } from 'react-native';

import styles from './styles';

function Atividade03() {

    const [numero, setNumero] = useState(0);

    function handleIncrementa() {
        setNumero(numero + 1);
    }

     function handleDecrementa() {
        setNumero(numero - 1);
    }

    function handleExibeBotao() {
        Alert.alert('Alerta', 'Alguém clicou no botão!');
    }

    const handleExibeBotao2 = () => {
        Alert.alert(
            'Alerta',
            'Alguém clicou no botão!',
            [
                {
                    text: 'Sim',
                    onPress: () => Alert.alert('Mensagem', 'Clicou em sim'),
                    style: 'default',
                },
                {
                    text: 'Não',
                    onPress: () => Alert.alert('Clicou em não'),
                    style: 'default',
                },
                {
                    text: 'Cancelar',
                    onPress: () => Alert.alert('Clicou em cancelar'),
                    style: 'default',
                },
            ]
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>
            <Text style={styles.texto}>Variáveis e State</Text>

            <View style={styles.botaoSomaSubtrair}>
           <Text style={styles.valor}>{numero}</Text>
                <TouchableOpacity style={styles.botao} onPress={handleDecrementa}>
                    <Text style={styles.txtBotao}>-</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} onPress={handleIncrementa}>
                    <Text style={styles.txtBotao}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Atividade03;