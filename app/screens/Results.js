import React, { Component } from 'react';
import {
  Platform,
  View,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator
  } from 'react-native';

import { Container, Header, Content, Button, Text } from 'native-base';

class Results extends Component {
  constructor(props){
  super(props);
  this.state ={ isLoading: true}
}

componentDidMount(){
  return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {

      this.setState({
        isLoading: false,
        dataSource: responseJson.movies,
      }, function(){

      });

    })
    .catch((error) =>{
      console.error(error);
    });
}


  render() {

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Image source={require('./../assets/bra.png')} />
        <Text style={styles.title}>Your suggested size:</Text>
        <Text style={styles.size}>{this.props.screenProps.bandSize.toString()}{this.props.screenProps.cupSize.toString()}</Text>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={(item, index) => index}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fbe9e7',
    ...Platform.select({
      ios: { paddingTop: 30 }
    })
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    margin: 10,
  },
  size: {
    fontSize: 20,
  }
})

export default Results;
