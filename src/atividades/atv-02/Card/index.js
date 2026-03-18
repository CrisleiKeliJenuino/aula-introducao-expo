import { View, Text, Image} from 'react-native'; 

import styles from './styles';

function Card({titulo, descricao, preco, img}){
    return(
        <View style={styles.container}>
            <Image source={img} style={styles.imagem} />
            <View style={styles.textContainer}>
                <Text style={styles.titulo}>{titulo}</Text>
                <Text style={styles.descricao}>{descricao}</Text><br></br>
                <Text style={styles.preco}>R${preco}</Text>
            </View>
        </View>
    );
}

export default Card;