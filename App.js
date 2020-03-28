import React, { useState } from 'react';
import { StyleSheet, Text, StatusBar, TextInput, SafeAreaView, View } from 'react-native';

export default function App() {
  const [height, setHeight] = useState(168);
  const [weight, setWeight] = useState(70);
  var hei = parseInt(height);
  var wei = parseInt(weight);
  var hei = hei/100;
  var hei = hei*hei;
  var result = wei/hei;
  var result = parseInt(result);
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar style={{backgroundColor:'#232323'}}></StatusBar>
    <View style={styles.head}>
      <Text style={styles.header}>Body Mass Index - (BMI)</Text>
    </View>

    <View style={styles.contain}>
      <View style={styles.option}>
      <Text style={styles.Option}>Height(cm) :</Text>
        <TextInput 
          style={styles.Option1} 
          placeholder='e.g.168'
          onChangeText={(val) => setHeight(val)}/>
        </View>
      <View style={styles.option}>
      <Text style={styles.Option}>Weight(kg) :</Text>
        <TextInput 
          style={styles.Option1} 
          placeholder='e.g.70'
          onChangeText={(val) => setWeight(val)}/>
      </View>
    </View>
    <View style={styles.Bmi}>
      <Text style={styles.bmi}>BMI</Text>
      <Text style={styles.value}>{result}</Text>
      {(function() {
        if (result<18) {
           return <Text style={styles.rateUnder}>UNDER</Text>
        } else if (result>30) {
           return <Text style={styles.rateObese}>OBESE</Text>
        } else if (result>25) {
           return <Text style={styles.rateOver}>OVER</Text>  
        } else if(result<25){
           return  <Text style={styles.rateNormal}>NORMAL</Text>
        }
      })()}
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',

    
  },
  contain: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  head: {
    backgroundColor:'#232323',
    height: 55,
    marginTop: 28,
    marginBottom: 60
  },
  header: {
    marginTop:11,
    marginLeft:15,
    color:'#ffffff',
    fontWeight:"bold",
    fontSize:25
  },
  Option: {
    
    paddingRight:10,
    paddingBottom: 5,
    marginTop: 50,
    marginBottom: 25,
    fontWeight: "bold",
    fontSize:20,
  },
  Option1: {
    paddingRight:10,
    paddingBottom: 5,
    marginLeft:50,
    marginTop: 50,
    marginBottom: 25,
    fontWeight: "bold",
    fontSize:20,
    
    width:150,
    textAlign:'right'
  },
  bmi:{
    fontWeight: "bold",
    fontSize:20,
    marginRight:25,
    marginTop: 15,
  },
  value:{
    padding: 10,
    marginRight:25,
    marginTop: 15,
    backgroundColor: 'lightgrey',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    borderRadius: 5,
  },
  rateNormal: {
    fontSize:17,
    marginTop: 15,
    color: 'green',
    fontWeight: "bold",
  },
  rateUnder: {
    fontSize:17,
    marginTop: 15,
    color: 'yellow',
    fontWeight: "bold",
  },
  rateOver: {
    fontSize:17,
    marginTop: 15,
    color: 'orange',
    fontWeight: "bold",
  },
  rateObese: {
    fontSize:17,
    marginTop: 15,
    color: 'red',
    fontWeight: "bold",
  },
  Bmi:{
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  option:{
    marginLeft: 25,
    flexDirection: 'row',
  }
});
