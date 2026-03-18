import { View, Text, Image } from 'react-native'; 

import styles from './styles';

import Card from './Card';

import FlorattaRomanceDeVerao from '../../../assets/FlorattaRomancedeVerao.jpg';
import FlorattaBlue from '../../../assets/FlorattaBlue.jpg';
import FlorattaRedBlosson from '../../../assets/FlorattaRedBlosson.png';
import FlorattaGold from '../../../assets/ForattaGold.jpg';

function Atividade02 () {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 2</Text>

            <Card titulo={'FLORATTA ROMANCE DE VERÃO'}
                descricao={'Colônia feminina (família Floral Frutal)'}
                preco={"156,66, 75ml"}
                img={FlorattaRomanceDeVerao}
            />
             <Card titulo={'FLORATTA BLUE'}
                descricao={'Colônia feminina floral almiscarada'}
                preco={"156,66, 75ml"}  
                img={FlorattaBlue}
            />
            <Card titulo={'FLORATTA RED BLOSS'}
                descricao={'Colônia feminina floral frutada'}
                preco={"159,90, 75ml"}
                img={FlorattaRedBlosson}
            />
            <Card titulo={'FLORATTA GOLD 75ml'}
                descricao={'Colônia feminina Oriental Floral'}
                preco={"156,66, 75ml"}
                img={FlorattaGold}
            />
        </View>
    );
}

export default Atividade02;