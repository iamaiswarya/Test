import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native';
import Colors from '../config/colors';

const Welcome = ({navigation}) => {
  return (
    <View style={{backgroundColor:'white'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.head}>
            
          <Text style={style.name}>TAXI</Text>
          <Text style={style.name2}>CAB</Text>
        </View>
        <View style={style.imageView}>
                <Image style={style.image} source = {require('../assets/taxi.png')} resizeMode ='contain'/>
            </View>
        <View>
          <TouchableOpacity style={style.button} onPress={()=> {navigation.navigate("Login")}}>
            <View>
              <Text style={style.start}>Start</Text>
            </View>
          </TouchableOpacity>
          <Text style={style.text}>Click start for exploring our taxi services</Text>
        <Text style={style.version}>Version 1.0.0</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Welcome;

const style = StyleSheet.create({
  head: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 70,
    marginTop:100

  },
  name: {
    fontSize: 30,
    color: Colors.primary,
    fontWeight: 'bold',
  },
  name2: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'bold',
  },
  button: {
    width: '30%',
    borderRadius: 20,
    backgroundColor: Colors.primary,
    alignSelf: 'center',
    marginVertical:30
  },
  start: {
    fontSize: 13,
    alignSelf: 'center',
    padding:5,
    color: 'white',
    fontWeight:'bold'
  },
  imageView:{
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 20,
  },
  image:{
    width: 200,
    height: 200,
      
  },
  text:{
     alignSelf:'center',
     fontWeight:'bold',
     marginBottom:20
  },
  version:{
      marginTop:50,
      marginBottom:70,
      alignSelf:'center',
      color:'grey'
  }
});
