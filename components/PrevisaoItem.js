import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Cartao from './Cartao';


const PrevisaoItem = (props) => {
    return (
        <Cartao estilos={estilos.cartao}>
            <View style={estilos.tela}>
                <View>
                    <View style={estilos.primeiraLinha}>
                        <Text>Date - {new Date(props.previsao.dt * 1000).toLocaleDateString()}
                        </Text>
                    </View>
                    <View style={estilos.segundaLinha}>
                        <Text style={estilos.valor}>Sunrise:
                         {new Date(props.previsao.sunrise * 1000).toLocaleTimeString()}
                        </Text>
                        <Text style={estilos.valor}>Sunset:
                        {new Date(props.previsao.sunset * 1000).toLocaleTimeString()}</Text>
                    </View>
                    <Image
                        style={estilos.imagem}
                        source={{ uri: 'https://openweathermap.org/img/wn/01d.png' }}
                    />
                    <View style={estilos.terceiraLinha}>
                        <Text style={estilos.valor}>Morning Feels Like:
                        {props.previsao.feels_like.morn}</Text>
                        <Text style={estilos.valor}>Day Feels Like:
                        {props.previsao.feels_like.day}</Text>
                        <Text style={estilos.valor}>Evening Feels Like:
                        {props.previsao.feels_like.eve}</Text>
                        <Text style={estilos.valor}>Night Feels Like:
                        {props.previsao.feels_like.night}</Text>
                    </View>
                </View>
            </View>
        </Cartao>
    )
}

const estilos = StyleSheet.create({
    cartao: {
        marginBottom: 5
    },
    tela: {
        flexDirection: 'row'
    },
    imagem: {
        width: 50,
        height: 50
    },
    primeiraLinha: {
        justifyContent: 'center',
        flexDirection: 1
    },
    segundaLinha: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 4,
        borderTopWidth: 1,
        borderTopColor: '#DDD'
    },
    valor: {
        marginHorizontal: 2
    }
});


export default PrevisaoItem;