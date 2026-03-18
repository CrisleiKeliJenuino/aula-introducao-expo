import { View, Text, Image } from 'react-native'; 

import styles from './styles'; 

import Mensagem from './mensagens';

import img from '../../../assets/002-1-react-native.png';

function Exemplo02 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 2</Text>
            <Image source={img} style={styles.imagem} /> 

            <Mensagem titulo={'Sucesso'}>
                Valor enviado corretamente!
            </Mensagem>
            <Mensagem titulo={'Erro'}>
                O programa não respondeu como esperado!
            </Mensagem>
            <Mensagem titulo={'Alerta'}>
                Você não pode fazer isso!
            </Mensagem>
        </View>
    );
}

export default Exemplo02;