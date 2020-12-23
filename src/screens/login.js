import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';
import Colors from '../config/colors';

const Login = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.head}>
          <Text style={style.name}>TAXI</Text>
          <Text style={style.name2}>CAB</Text>
        </View>
        <View style={{alignItems:'center', marginTop:50, marginBottom:20}}>
        <TouchableOpacity style={style.button} onPress={()=>{navigation.navigate('BookTaxi')}}>
            <View>
                <Text style={style.start}>
                    Book for a Taxi
                </Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={()=>{navigation.navigate('RegisterTaxi')}}>
            <View>
                <Text style={style.start}> 
                    Register a Taxi
                </Text>
            </View>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Login;

const style = StyleSheet.create({
    head: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 100,
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
      button:{
          width:150,
          borderRadius:10,
          backgroundColor:Colors.primary,
          alignItems:'center',
          padding:10,
          marginTop:30
      },
      start: {
        fontSize: 13,
        alignSelf: 'center',
        padding:5,
        color: 'white',
        fontWeight:'bold'
      },
});
