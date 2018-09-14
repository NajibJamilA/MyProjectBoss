/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View ,Image, StatusBar} from 'react-native';
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
      <View  style={styles.container}>
        <StatusBar
          backgroundColor="blue"
          barStyle="light-content"
        />
      <Text style={{color:'#ffffff',fontSize:20}}>Hey I am There</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    backgroundColor : '#455a64',
    alignItems : 'center',
    justifyContent : 'center',
    flex : 1
  }
});
