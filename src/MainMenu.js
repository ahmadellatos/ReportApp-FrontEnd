import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'


export default class MainMenu extends Component {


    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.view} onPress={() => { this.props.navigation.navigate('Add Report') }}>
                    <Text style={styles.text}> Laporan </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.view}>
                    <Text style={styles.text}>History Laporan</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.view}>
                    <Text style={styles.text}>Map Kejadian</Text>
                </TouchableOpacity >
                <TouchableOpacity style={styles.view}>
                    <Text style={styles.text}> Sign Out </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    view: {
        width: "40%",
        height: "35%",
        margin: 5,
        backgroundColor: "green",
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white'
    }
})
