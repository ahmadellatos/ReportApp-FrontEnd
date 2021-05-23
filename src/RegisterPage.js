import React, { Component } from 'react'
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native'
import axios from 'axios'

export class RegisterPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phone: '',
            address: ''
        }
    }


    getData = () => {
        axios.post('http://192.168.100.3:8080/register/', this.state)
            .then((response) => {
                // handle success
                console.log((response.data));
                alert(response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }


    render() {
        return (
            <View style={styles.contianer}>
                <Text> Name : </Text>
                <TextInput placeholder="Insert Name" onChangeText={(text) => { this.setState({ name: text }) }} />
                <Text> Email : </Text>
                <TextInput placeholder="Insert Email" onChangeText={(text) => { this.setState({ email: text }) }} />
                <Text> Phone : </Text>
                <TextInput placeholder="Insert Phone" onChangeText={(text) => { this.setState({ phone: text }) }} />
                <Text> Address : </Text>
                <TextInput placeholder="Insert Address" onChangeText={(text) => { this.setState({ address: text }) }} />
                <TouchableOpacity onPress={this.getData.bind(this)}>
                    <Text style={{ textAlign: 'center' }}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contianer: {
        margin: 10
    }
});

export default RegisterPage
