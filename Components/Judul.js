import React, {Component} from 'react';
import {Text} from 'react-native';

class Judul extends Component {
    render(){
        return (
            <Text style={Mumet.judul}>{this.props.coy}</Text>
        )
    }
}

const Mumet = {
    judul: {
        color: '#f00',
        fontWeight: 'bold',
        fontSize: 35
    }
}
export default Judul;