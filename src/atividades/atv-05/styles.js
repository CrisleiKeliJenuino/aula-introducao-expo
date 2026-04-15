import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fafafa',
        padding: RFValue(8),
        width: '100%',
        borderRadius: RFValue(20),
    },
    titulo: {
        margin: RFValue(6),
        fontSize: RFValue(28),
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#d72865',
    },
    txtSaida: {
        margin: RFValue(6),
        fontSize: RFValue(20),
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#d72865',
    },
    txtEntrada: {
        borderWidth: RFValue(4),
        textAlign: 'center',
        fontSize: RFValue(20),
        borderColor: '#d72865', 
        color: '#d72865',
        borderRadius: RFValue(10),
        padding: RFValue(10)
    },
    button: {
        backgroundColor: '#d72865',
        height: RFValue(50),
        width: RFValue(80),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: RFValue(10),
        marginTop: RFValue(20),
    },
    buttonZerar: {
        backgroundColor: '#d72865',
        height: RFValue(50),
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: RFValue(10),
        marginTop: RFValue(20),
    },
    buttonTouch: {
        backgroundColor: '#fff',
    },
    textButton: {
        fontSize: RFValue(28),
        color: '#fafafa',
        textAlign: 'center',
    },
    textLabel: {
        fontSize: RFValue(15),
        fontWeight: 'bold',
        color: '#d72865',
    },
    txtTotal: {
        color: '#d72865',
        fontWeight: 'bold',
    },
});

export default styles;