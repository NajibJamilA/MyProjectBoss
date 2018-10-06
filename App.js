/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Text, View ,Image} from 'react-native';

export default App = (props) => (
      <View style={forstyle.back}>
      <View style={forstyle.background}>
      <View>
        <Image style={forstyle.photo} source={require('E:/reactnative/horai25/najib.jpg')}/>
      </View>
      <View style={forstyle.description}>
        <Text style={forstyle.name}>Nama : Najib Jamil Abdurrahman</Text>
        <Text style={forstyle.subs}>Kelas : XI RPL 1</Text>
        <Text style={forstyle.subs}>No : 25</Text>
      </View>
      </View>
      <View style={forstyle.footer}>
        <Text style={forstyle.school}>SMK TELKOM PWT</Text>
        <Text style={forstyle.akhir}>By The Way</Text>
        </View>
      </View>
)

const forstyle= {
  back: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3A89C9',
  },

  background: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#40A1F2',
    width: 300,
    height: 400,
    padding: 0,
    borderRadius: 10,
    marginBottom: 0
  },

  photo: {
    width: 100,
    height: 100,
    marginTop: 20
  },

  description:{
    margin: 50,
    marginTop: 35,
    marginLeft: 5,
    marginRight: 5
  },

  name:{
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#f2f2f2'
  },

  subs:{
    color: '#f2f2f2',
    fontSize: 15,
  },

  footer:{
    marginTop: 80,
    alignItems: 'center'
  },

  school:{
    fontSize: 20,
    fontWeight: 'bold',
    color: "black"
  },

  akhir:{
    color: 'black'
  }
};
