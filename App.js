import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import PrevisaoItem from './components/PrevisaoItem';

export default function App() {
  // API primário, por onde recuperará o valor da cidade
  const endPointForecast = "https://api.openweathermap.org/data/2.5/forecast?lang=pt&units=metric&q=";

  // API onde será feita a chamada que realmente interessa
  const endPointOneCall = "https://api.openweathermap.org/data/2.5/onecall?lang=pt_br&units=metric&";
  const apiKey = ""; // Sem a key no commit


  // Faz uma requisição primária ao web service para obter os dados da cidade (latitude e longitude)
  const obterPrevisoes = () => {
    setDailyWeatherData([]);
    // faz chamada para obter dados da cidade
    const target = endPointForecast + city + '&appid=' + apiKey;
    fetch(target)
      .then((dados => dados.json()))
      .then(dados => setCityData(dados["city"]));
  }


  // Captura os dados da cidade e já faz uma nova chamada para obter os dados do dia
  const setCityData = (cidade) =>{
    
    // atribui valor a cidade
    setCity(cidade);

    // Latitude e longitude
    lat = cidade.coord.lat;
    lon = cidade.coord.lon;

    // Monta a chamada para a api One Call
    const targetDailyWeather = endPointOneCall +
     'lat=' + lat +
     '&lon=' + lon;

    // Faz a chamada e captura o resultado
    fetch(targetDailyWeather)
      .then((dadosDaily => dadosDaily.json()))
      .then(dadosDaily => setDailyWeatherData(dadosDaily[""])); // Teste para ver se pega todos os dados
    
  } 

  const lat = 0;
  const lon = 0;
  const [city, setCity] = useState('');
  const [dailyWeatherData, setDailyWeatherData] = useState([]);

  return (
    <View style={styles.container}>
      <View style={styles.entrada}>
        <TextInput
          style={styles.nomeCidade}
          placeholder="Digite o nome de uma cidade"
          onChangeText={capturarCidade}
        />
        <Button 
          title="OK"
          onPress={obterPrevisoes}
        />
      </View>
      <FlatList
        data={dailyWeatherData}
        renderItem={
          previsao => <PrevisaoItem previsao={previsao.item}></PrevisaoItem>}
      />        
        
    </View>
  );
}

const styles = StyleSheet.create({
  entrada:{
    flexDirection: 'column'
  },
  nomeCidade:{
    padding: 10,
    borderBottomColor: '#BB96F3',
    borderBottomWidth: 2,
    textAlign: 'left',
    marginBottom: 4,
    fontsize: 18,
  },  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 40
  }
})
