import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TouchableHighlight, FlatList} from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-web';
import { TextInput } from "react-native-paper";
import shop from '../data/drink.js';
export default function Screen02({navigation}) {
    const [Images,setImages] = useState(shop);
    return (
        <View style={styles.container}>   
            <ScrollView>
                <FlatList
                    data={Images}
                    renderItem={({item})=>(
                        <TouchableOpacity onPress={() =>{
                            navigation.navigate('Screen03',item);
                        }}>
                        <View>
                            <Image style={{ width: '300px',height: '150px',}}
                            source={item.uri} />
                        </View>
                        <Text>{item.name}</Text>
                        </TouchableOpacity>   
                    )}
                />                         
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    btnimage:{
        padding:20,
        height:250,
    },
});