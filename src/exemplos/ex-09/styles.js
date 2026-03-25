import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const style = StyleSheet.create({
    square: {
        backgroundColor: '#fff',
        borderWidth: RFValue(1),
        borderColor: '#999',
        fontWeight: 'bold',
        height: RFValue(64),
        width: RFValue(64),
        alignItems: 'center',
        justifyContent: 'center'
    },
    mensagem: {
        fontSize: RFValue(34),
    },
    status: {
        marginBottom: RFValue(20),
        fontSize: RFValue(34),
    },
    game: {
        display: 'flex',
    },
    gameBoard: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
    },
    boardRow: {
        flexDirection: 'row',
    },
    historico: {
        fontSize: RFValue(18),
    },
    containerHistorico: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '50%'
    },
    btnReiniciar: {
        backgroundColor: '#999',
        padding: RFValue(20),
        marginBottom: RFValue(10),
        borderRadius: RFValue(20),
    },
});

export default style;