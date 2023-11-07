import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-web';
import { TextInput } from "react-native-paper";
export default function Screen01({navigation}) {
    return (
        <View style={styles.container}>   
            <Text style={styles.txtManage}>Welcome to Cafe world</Text>
            <View>
                 <View style={styles.containerImg}>
                    <Image style={{ width: '200px',height: '100px', borderRadius:10,}}
                        source={require('../assets/Image.png')} />
                </View>
                <View style={styles.containerImg}>
                    <Image style={{ width: '200px',height: '100px', borderRadius:10,}}
                        source={require('../assets/Image (1).png')} />
                </View>
                <View style={styles.containerImg}>
                    <Image style={{ width: '200px',height: '100px', borderRadius:10,}}
                        source={require('../assets/Image (2).png')} />
                </View>
            </View>        
            
            <TouchableOpacity style={styles.buttonStart} 
                onPress={() =>{
                    navigation.navigate('Screen02');
                }}
                >
                <Text style={styles.txtButton} >Get Started</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        alignItems: 'center',
    },txtManage:{
        fontSize:25,
        width:'300px',
        textAlign:'center',
        fontWeight:'bold'
    },
    containerImg:{
        padding:20,
    },
    buttonStart: {
        width: '300px',
        backgroundColor: '#00BDD6',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    txtButton:{
        fontSize:15,
        padding: 15,      
        backgroundColor:'#00BDD6',
        color:'white',
    },
});