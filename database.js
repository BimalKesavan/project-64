import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View,StyleSheet, TextInput, TouchableOpacity,} from 'react-native';
import dictionary from '../database'

this.setState({
    "word" : word,
    "lexicalCatagory" : lexicalCatagory,
    "definition" : definition
}) 
getWord=(text)=>{
    var text = text.toLowerCase()
    try{
        var word = dictionary[text]["word"]
        var lexicalCatagory = dictionary[text]["lexicalCategory"]
        var definition = dictionary[text]["definition"]
        this.setState({
           "word" : word,
           "lexicalCategory" : lexicalCatagory,
           "definition" : definition 
        })
    }
    catch(err){
        alert("Sorry This word is not available for now")
        this.setState({
            text:'',
            'isSearchPressed':false
        })
    }
}