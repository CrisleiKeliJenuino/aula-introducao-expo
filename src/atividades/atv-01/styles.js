import {StyleSheet} from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const styles=StyleSheet.create({
    container: {
        backgroundColor: '#f5a2b4',
        //margin: 20,
        padding: RFPercentage(2),
        flex: 1,
        borderRadius: RFPercentage(2),
    },
    titulo: {
        fontFamily: 'Lucida Calligraphy',
        fontSize: RFPercentage(5),
        color: '#130a0a',
        width:'100%',
        fontWeight: 'bold',
        textAlign: 'center',
        // textShadowColor: '#f0e8e8',
        // textShadowOffset: {width: 1, height: 1},
        // textShadowRadius: 1, 
        marginBottom: 50,
    },
    texto:{
        textAlign: 'justify',
        fontFamily: 'Lucida',
        fontSize: RFPercentage(3),
        textDecorationLine: 'underline',
        color: '#fff',
        // textShadowColor: '#000',
        // textShadowOffset: {width: 1, height: 1},
        // textShadowRadius: 1,
    },
    texto2:{
        textAlign: 'right',
        fontFamily: 'comic sans ms',
        fontSize: RFPercentage(2),
        color: '#46257b',
        marginTop: 50,
        // textShadowColor: '#fefcfc',
        // textShadowOffset: {width: 1, height: 1},
        // textShadowRadius: 1,
    },
    textorodape:{
        textAlign: 'right',
        fontFamily: 'comic sans ms',
        fontSize: RFPercentage(2),
        color: '#46257b',
        marginTop: 50,
        // textShadowColor: '#fefcfc',
        // textShadowOffset: {width: 1, height: 1},
        // textShadowRadius: 1,
    },
});

export default styles;