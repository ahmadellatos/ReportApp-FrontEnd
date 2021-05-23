import React, { Component } from 'react'
import { Text, TextInput, StyleSheet, TouchableOpacity, View } from 'react-native'
import axios from 'axios'


export class LoginPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: {},
            name: '',
            onChangeValue: ''

        }
    }

    componentDidMount = () => {
        this.getUserData()
    }

    getUserData = () => {
        axios.get('http://192.168.100.3:8080/userdata/')
            .then((response) => {
                // handle success
                console.log(response.data);
                let infoData = response.data
                this.setState({ data: infoData })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });
    }


    loginAuthentication = () => {
        for (let i = 0; i < this.state.data.length; i++) {


        }
    }


    render() {
        return (
            <View style={styles.contianer}>
                <Text>Name</Text>
                <TextInput placeholder="Insert Name" onChangeText={(text) => { this.setState({ onChangeValue: text }) }} />
                <TouchableOpacity onPress={this.loginAuthentication.bind(this)}>
                    <Text style={{ textAlign: 'center' }}>Login</Text>
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

export default LoginPage
