import { StyleSheet } from 'react-native'; 

import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        flex: 1, // container ocupa 100% da tela
        backgroundColor: '#fafafa', // cor do container
        borderRadius: 10, // borda curvada
        padding: 8, 
        alignItems: 'center', // alinhamento horizontal - flexDirection collumn
    },
    titulo: {
        fontSize: RFPercentage(4), // tamanho da fonte
        fontWeight: 'bold', 
        borderWidth: 3, // expessura da borda
        marginTop: 20, // margem acima do elemento
        marginBottom: 20, // margem abaixo do elemento
        paddingVertical: 10, // espaço interno
        width: '100%', // largura do objeto
        textAlign: 'center', // alinhamento horizontal do texto no container
        textAlignVertical: 'center', // alinhamento vertical do texto no container
        color: 'darkslategrey', // cor do texto 
        borderColor: 'darkslategrey', // cor da borda 
        borderRadius: 20, // arrendondar borda
    }, 
    texto: {
        fontSize: RFPercentage(3),  
    }, 
    botao:{
        flexDirection: 'row', // alinha os botões na horizontal
        alignItems: 'center', // alinhamento vertical
        justifyContent: 'center', // alinhamento horizontal
    },
    valor: {
        color: '#000',  
        fontSize: RFPercentage(4),
        alignItems: 'center',
        justifyContent: 'center', 
        marginHorizontal: RFPercentage(5),
    }, 
    botaoSomaSubtrair: {
        backgroundColor: 'darkslategrey', 
        width: '35%',  
        padding: RFPercentage(1.5), 
        alignItems: 'center', 
        justifyContent: 'center', 
        margin: RFPercentage(2),
        borderRadius: RFPercentage(6), 
    }, 
    botaoZerar: {
        width: '55%', 
        margin: RFPercentage(2), 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'darkslategrey',   
        borderRadius: RFPercentage(5),     
    }, 
    txtBotao: {
        fontSize: RFPercentage(4), 
        color: '#f5f4f4',

    }, 
});

export default styles;