import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Divider} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import Colors from '../config/colors';
const taxi = [
  {
    id: '1',
    type: 'AC',
    location: 'Kochi',
    rating: '8.9',
    ratecount: '290',
  },
  {
    id: '2',
    type: 'Non/AC',
    location: 'Kochi',
    rating: '7',
    ratecount: '240',
  },
  {
    id: '3',
    type: 'AC',
    location: 'Trivandrum',
    rating: '6.8',
    ratecount: '190',
  },
  {
    id: '4',
    type: 'AC',
    location: 'Calicut',
    rating: '9',
    ratecount: '4290',
  },
  {
    id: '5',
    type: 'Non/AC',
    location: 'Thrissur',
    rating: '7.8',
    ratecount: '200',
  },
];

const TaxiCards = () => {
  const navigation = useNavigation();
  return taxi.map((item) => {


    return (
      <TouchableWithoutFeedback
        key={item.id}
        >
        <View style={style.cardView}>

        <View
            style={{flexDirection: 'row', alignItems: 'center', width: '100%',marginBottom:10}}>
            <Text style={style.type}>{item.type}</Text>
          </View>
          <View style={style.rateView}>
            <View style={style.rate}>
              <Text style={style.rating}>{item.rating}</Text>
            </View>
            <Text style={style.ratecount}>{item.ratecount} ratings</Text>
          </View>
         
          
          <View style={{flexDirection: 'row', alignContent: 'space-around', paddingBottom:5}}>
            <Ionicons
              name="location-sharp"
              size={20}
              style={{marginTop: 10, paddingLeft: 15}}
            />
            <Text style={style.location}>{item.location}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  });
};
export default TaxiCards;

const style = StyleSheet.create({
  cardView: {
    marginHorizontal: 15,
    borderRadius: 5,
    elevation: 4,
    backgroundColor: 'white',
    paddingBottom:8,
    marginBottom:15,
    backgroundColor:Colors.primary
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingLeft: 15,
    paddingTop: 10,
  },
  type: {
    paddingLeft: 5,
    fontSize: 12,
  },
  location: {
    fontSize: 15,
    paddingTop: 10,
    paddingLeft: 15,
  },
  divider: {
    height: 1,
    color: 'grey',
    margin: 5,
    marginTop:10
  },
 
  rateView: {
    flexDirection: 'row',
    position: 'absolute',
    top: '30%',
    left: '5%',
    flexWrap: 'wrap',
  },
  rate: {
    width: 28,
    height: 18,
    backgroundColor: "#004526",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  rating: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
  },
  ratecount: {
    color: 'white',
    fontSize: 12,
    marginLeft: 4,
    fontWeight: 'bold',
  },
});
