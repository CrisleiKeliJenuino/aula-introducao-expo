import { View, Text, Image } from 'react-native'; 

import styles from './styles';

import img from '../../../assets/002-1-react-native.png'; 

import Mensagem from './mensagens';

function Atividade02 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>
            <Image source={img} style={styles.imagem} /> 

            <Mensagem titulo={'FLORATTA ROMANCE DE VERÃO'}>
                Valor enviado corretamente!
            </Mensagem>
            <Mensagem titulo={'FLORATTA BLUE'}>
                O programa não respondeu como esperado!
            </Mensagem>
            <Mensagem titulo={'FLORATTA RED BLOSS'}>
                Você não pode fazer isso!
            </Mensagem><Mensagem titulo={'FLORATTA GOLD'}>
                Você não pode fazer isso!
            </Mensagem>
        </View>
    );
}

export default Atividade02;