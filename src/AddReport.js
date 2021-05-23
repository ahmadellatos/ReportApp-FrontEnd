import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Button } from 'react-native'
import * as Location from 'expo-location'
import * as ImagePicker from 'expo-image-picker'



export default class AddReport extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nama: '',
            kejadian: '',
            alamat: '',
            keterangan: '',
            gambar: '',
            latitude: 0.0,
            longitude: 0.0,
        }
    }

    componentDidMount = async () => {
        if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Sorry, we need camera roll permissions to make this work!');
            }
        }
    }

    pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            quality: 1,
        });

        console.log(result);
        this.setState({ gambar: result.uri })
    }

    addUserReport = () => {
        axios.post('http://192.168.100.3:8080/addreport/', this.state)
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
            <View>
                <Text> Nama : </Text>
                <TextInput placeholder="Nama" onChangeText={(text) => { this.setState({ nama: text }) }} />
                <Text> Kejadian : </Text>
                <TextInput placeholder="Kejadian" onChangeText={(text) => { this.setState({ kejadian: text }) }} />
                <Text> Alamat : </Text>
                <TextInput placeholder="Alamat" onChangeText={(text) => { this.setState({ alamat: text }) }} />
                <Text> Keterangan : </Text>
                <TextInput placeholder="Keterangan" onChangeText={(text) => { this.setState({ keterangan: text }) }} />
                <Button title="Pick an image from camera roll" onPress={this.pickImage.bind(this)} />
                <TouchableOpacity onPress={() => { this.addUserReport.bind(this) }}>
                    <Text>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
