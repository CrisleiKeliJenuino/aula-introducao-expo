import { StyleSheet } from 'react-native';  

import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        borderWidth: RFPercentage(0.5), 
        borderColor: 'darkslategrey', 
        padding: RFPercentage(1.5), 
        borderRadius: RFPercentage(1.5), 
        width: '90%', 
        marginBottom: RFPercentage(0.5), 
        flexDirection: 'row', 
        alignItems: 'center',
    }, 
    titulo: {
        fontSize: RFPercentage(2), 
        fontWeight: 'bold', 
        color: 'darkslategrey', 
        textAlign: 'center',
    }, 
    descricao: {
        fontSize: RFPercentage(1.5), 
        color: '#222',
        textAlign: 'center',
    }, 
    preco: {
        fontSize: RFPercentage(1.5), 
        color: '#222',
        fontWeight: 'bold', 
        textAlign: 'center',
    },  
    imagem: {
        height: RFPercentage(16), 
        width: RFPercentage(48),  
        width: '25%', 
        resizeMode: 'contain', 
        // filter: 'grayscale(80%)', 
        // filter: 'sepia(80%)', 
        // filter: 'saturate(10%)', 
        // filter: 'brightness(30%)', 
        // filter: 'contrast(50%)', 
        // filter: 'invert(100%)', 
    }, 
});

export default styles;