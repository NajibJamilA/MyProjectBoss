import React, { Component } from 'react';
import {  StyleSheet,  Text,  View,  Image, TextInput, TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Apps from './App';

class Login extends Component {
  render() {
    return (
    	<View style={styles.container}>
    	<Image
    	style={{width:80,height:80}}
    	source={require('./igku.png')} />
    	<TextInput
    	style = {styles.inputBox}
    	placeholder="Username"
    	/>
    	<TextInput
    	style = {styles.inputBox}
    	placeholder="Password"
    	secureTextEntry={true}
    	/>
    	<TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Details')}>
    	<Text style={styles.buttonText}> Log In </Text>
    	</TouchableOpacity>

    	<TouchableOpacity>
    	<Text style={styles.pass}> Forgot Password? </Text>
    	</TouchableOpacity>

      <Text style={styles.akhir}> Dont Have an account?</Text>
      <TouchableOpacity>
      <Text style={styles.signup}> Sign Up</Text>
      </TouchableOpacity>
    	</View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <Apps/>
    );
  }
}

const styles = StyleSheet.create({
  	container: {
	    flex: 1,
	    justifyContent: 'center',
	    alignItems: 'center',
	    backgroundColor: '#fff'
	},

	inputBox:{
		width: 250,
		fontSize: 13,
    borderRadius: 25,
		color: '#000000'
	},

	button:{
		width: 250,
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#40A1F2',
		marginVertical: 10,
		paddingHorizontal: 80
	},

	buttonText:{
		fontSize:15,
		color:'#f7f7f7'
	},

  pass:{
    color:'#405671',
  },

  akhir:{
  },

  signup:{
    color: '#40A1F2',
  }
})

const RootStack = createStackNavigator(
  {
  Home: Login,
  Details: DetailsScreen,
  },

  {
   initialRouteName: 'Home',
 }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
