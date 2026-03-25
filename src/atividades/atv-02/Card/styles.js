import { StyleSheet } from 'react-native';  

import { RFPercentage } from 'react-native-responsive-fontsize';

const styles = StyleSheet.create({
    container: {
        borderWidth: RFPercentage(0.1), 
        borderColor: '#f90c67', 
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
        color: '#f90c67', 
        textAlign: 'center',
    }, 
    descricao: {
        fontSize: RFPercentage(1.8), 
        color: '#3a0323',
        textAlign: 'center',
    }, 
    preco: {
        fontSize: RFPercentage(1.8), 
        color: '#3a0323',
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