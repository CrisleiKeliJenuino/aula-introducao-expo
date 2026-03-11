import {View, Text } from 'react-native';

import styles from './styles';

function Atividade01 () {
    return(
        <View style={styles.container} >
            <Text style={styles.titulo} >Atividade 01</Text>

            <Text style={styles.texto}>
                Aula de React Native com Expo
            </Text>

            <Text style={styles.texto2}>
                Aula de React Native com Expo para dar uma fuçada
            </Text>

            <Text style={styles.textorodape}>
                by Crislei Jenuino
            </Text>
        </View>
    );
}

export default Atividade01;