/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View ,Image} from 'react-native';
import Judul from './Components/Judul';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.android}>Nama : Najib Jamil Abdurrahman</Text>
        <Text style={styles.android}>Kelas : XI RPL 1</Text>
        <Text style={styles.android}>No.Abs : 25</Text>
        <Image source={require('E:/reactnative/horai25/najib.jpg')} style={{width: 200, height: 200}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d900aa',
  },
  welcome: {
    fontSize: 25,
    color: 'black',
  },
  android: {
    fontSize: 18,
    textAlign: 'center',
    color: 'black',
    margin: 5,
  },
});
