import {StyleSheet} from 'react-native';

const styles=StyleSheet.create({
    container: {
        backgroundColor: '#81122a',
        //margin: 20,
        padding: 20,
        flex: 1,
        borderRadius: 20,
    },
    titulo: {
        fontFamily: 'Lucida Calligraphy',
        fontSize: 30,
        color: '#fff',
        width:'100%',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 50,
    },
    texto:{
        textAlign: 'justify',
        fontFamily: 'Lucida',
        fontSize: 18,
        color: '#fff'
    },
});

export default styles;