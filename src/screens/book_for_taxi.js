import { NavigationHelpersContext } from '@react-navigation/native';
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

const BookTaxi = ({navigation}) => {
    const [value, onChangeText] = React.useState('');
    const [passwd, onChangePass] = React.useState('');
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.head}>
          <Text style={style.name}>TAXI</Text>
          <Text style={style.name2}>CAB</Text>
        </View>
        <View style={{alignItems:'center', marginTop:50}}>
            <TextInput
            style={style.input}
            placeholder="Email"
            placeholderTextColor='grey'
            onChangeText={text => onChangeText(text)}
            value={value}
            />
            <TextInput
            style={style.input}
            placeholder="Password"
            placeholderTextColor='grey'
            onChangeText={pass => onChangePass(pass)}
            value={passwd}
            />
            <TouchableOpacity style={style.button} onPress={()=>{navigation.navigate('Home')}}>
            <View>
                <Text style={style.start}>
                    Login
                </Text>
            </View>
        </TouchableOpacity>
        </View>
        <View style={{width:'100%',flexDirection:'row',justifyContent:'center', marginTop:30}}>
            <Text style={style.text}>Don't have an Account, Click here</Text><Text style={style.sign}> Sign Up</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookTaxi;

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
      input:{
        height: 45,
        borderColor: Colors.primary,
        borderWidth: 1 ,
        borderRadius:30,
        width:'85%',
        marginTop:10,
        padding:10
      },
      button:{
        width:150,
        borderRadius:10,
        backgroundColor:Colors.primary,
        alignItems:'center',
        padding:10,
        marginTop:30
    },
    text:{
        
        fontWeight:'bold',
        marginBottom:20
     },
     sign:{
        
        fontWeight:'bold',
        marginBottom:20,
        color:Colors.primary

     },
      
});
