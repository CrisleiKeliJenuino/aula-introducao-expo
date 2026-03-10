import {StyleSheet} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles=StyleSheet.create({
    container: {
        backgroundColor: '#81122a',
        //margin: 20,
        padding: RFPercentage(2),
        flex: 1,
        borderRadius: 20,
    },
    titulo: {
        fontFamily: 'Lucida Calligraphy',
        fontSize: RFPercentage(5),
        color: '#fff',
        width:'100%',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 50,
    },
    texto:{
        textAlign: 'justify',
        fontFamily: 'Lucida',
        fontSize: RFPercentage(3),
        color: '#fff'
    },
});

export default styles;