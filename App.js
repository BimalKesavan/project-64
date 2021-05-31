import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Text, View,StyleSheet, TextInput, TouchableOpacity,} from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      displayText: '',
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#9c8210'}
          centerComponent={{
            text: 'Monkey Chunky',
            style: { color: '#fff', fontSize: 20 },
          }}
        />

        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text,
              isSearchPressed: false,
              word   : "Loading...",
              lexicalCategory :'',
              examples : [],
              defination : ""
            });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            this.setState({ displayText: this.state.text });
          }}>
          <Text style={styles.buttonText}>GO</Text>
        </TouchableOpacity>
        <Text style={styles.displayText}>{this.state.displayText}</Text>
        
        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>
            word:{" "}
          </Text>
          <Text style={{fontSize:18}}>
            {this.state.word}
          </Text>
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>
            word:{" "}
          </Text>
          <Text style={{fontSize:18}}>
            {this.state.lexicalCategory}
          </Text>
        </View>

        <View style={flexDirecction:'row' ,flexWrap: 'wrap'}>
          <Text style={styles.detailsTitle}>
            word:{" "}
          </Text>
          <Text style={{fontSize:18}}>
            {this.state.definition}
          </Text>
        </Veiw>

      </View>
    );
  }
}
getword=(word)=>{
  var searchKeyword=word.toLowerCase()
  var url = "https://rupinwhitehatjr.github.io/dictionary/"+searchKeyword+".json"
  return fetch(url)
  .then((data)=>{
    if(data.status===200)
    {
      return data.json()
    }
    else
    {
      return null
    }
  })
  .then((response)=>{
    var responseObject = response
    if(responseObject)
    {
      var wordData = responseObject.definitions[0]
      var definition=wordData.description
      var lexicalCategory=wordData.wordtype
      this.setState({
        "word" : this.state.text,
        "definition" :"Not Found",
      })
    }
  })
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBoxContainer: {
    flex:0.3,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
