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
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import TaxiCards from './taxies';

const Home = () => {
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
        {/* <TouchableWithoutFeedback
            >
            <View
              style={{
                width: '100%',
                height: 240,
                borderRadius: 7,
                overflow: 'hidden',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                elevation: 2,
                marginTop: 10,
                marginBottom:10
              }}>
              <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={style.map}
                showsUserLocation={true}
                zoomEnabled={false}
                zoomControlEnabled={false}
                scrollEnabled={false}
                pitchEnabled={false}
                rotateEnabled={false}
                region={{
                  latitude: 11.775251,
                  longitude: 78.2092576,
                  latitudeDelta: 0.009,
                  longitudeDelta: 0,
                }}>
                <Marker
                  coordinate={{
                    latitude: 11.775251,
                    longitude: 78.2092576,
                    latitudeDelta: 0.009,
                    longitudeDelta: 0,
                  }}>
                </Marker>
              </MapView>
            </View>
          </TouchableWithoutFeedback> */}
        </View>
        <View>
            <View style={{paddingLeft:15}}>
                <Text style={{fontSize:18}}>Available taxies near you</Text>
            </View>
            <View>
                <TaxiCards/>
            </View>

        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const style = StyleSheet.create({
    head: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 100,
        marginTop:80
    
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
     map: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        
        // borderRadius: 10,
      }, 
});
