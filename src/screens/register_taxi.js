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
import Icon from 'react-native-vector-icons/Feather';


const RegisterTaxi = ({navigation}) => {
    const [value, onChangeText] = React.useState('');
    const [passwd, onChangePass] = React.useState('');
    const [type, setType] = React.useState();
  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.head}>
          <Text style={style.name}>TAXI</Text>
          <Text style={style.name2}>CAB</Text>
        </View>
        <View style={{alignItems:'center', marginTop:20}}>
        <TextInput
            style={style.input}
            placeholder="Registration Number"
            placeholderTextColor='grey'
            onChangeText={text => onChangeText(text)}
            value={value}
            />
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
            <TextInput
            style={style.input}
            placeholder="Confirm Password"
            placeholderTextColor='grey'
            onChangeText={pass => onChangePass(pass)}
            value={passwd}
            />
            {/* <DropDownPicker
                items={[
                {label: 'USA', value: 'usa', icon: () => <Icon name="flag" size={18} color="#900" />, hidden: true},
                {label: 'UK', value: 'uk', icon: () => <Icon name="flag" size={18} color="#900" />},
                {label: 'France', value: 'france', icon: () => <Icon name="flag" size={18} color="#900" />},
                ]}
                defaultValue={type}
                containerStyle={{height: 40}}
                style={{backgroundColor: '#fafafa'}}
                itemStyle={{
                justifyContent: 'flex-start'
                }}
                dropDownStyle={{backgroundColor: '#fafafa'}}
               
            /> */}
            <TouchableOpacity style={style.button} onPress={()=>{navigation.navigate('Home')}}>
            <View>
                <Text style={style.start}>
                    Register
                </Text>
            </View>
        </TouchableOpacity>
        </View>
        
      </ScrollView>
    </View>
  );
};

export default RegisterTaxi;

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
        borderRadius:10,
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
