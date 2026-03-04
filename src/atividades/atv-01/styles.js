import {StyleSheet} from 'react-native';

const styles=StyleSheet.create({
    container: {
        backgroundColor: '#f5a2b4',
        //margin: 20,
        padding: 20,
        flex: 1,
        borderRadius: 20,
    },
    titulo: {
        fontFamily: 'Lucida Calligraphy',
        fontSize: 50,
        color: '#130a0a',
        width:'100%',
        fontWeight: 'bold',
        textAlign: 'center',
        textShadowColor: '#f0e8e8',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1, 
        marginBottom: 50,
    },
    texto:{
        textAlign: 'justify',
        fontFamily: 'Lucida',
        fontSize: 20,
        textDecorationLine: 'underline',
        color: '#fff',
        textShadowColor: '#000',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
    },
    texto2:{
        textAlign: 'right',
        fontFamily: 'comic sans ms',
        fontSize: 15,
        color: '#46257b',
        marginTop: 50,
        textShadowColor: '#fefcfc',
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
    },
});

export default styles;