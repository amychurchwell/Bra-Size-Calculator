import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Platform,
  ListView,
  Keyboard,
 } from "react-native";

import {
  StackNavigator,
} from 'react-navigation';

import Header from "./header";
import Footer from "./footer";
import SplashPage from "./app/screens/SplashPage";
import SizeSurvey from "./app/screens/SizeSurvey";
import SizeSurvey2 from "./app/screens/SizeSurvey2";
import SizeSurvey3 from "./app/screens/SizeSurvey3";
import Results from "./app/screens/Results";

import {RkTheme} from 'react-native-ui-kitten';

RkTheme.setType('RkButton', 'basic', {
    backgroundColor: '#4b2c20'
  });

const RootStack = StackNavigator(
  {
    Home: {
      screen: SplashPage,
    },
    Form: {
      screen: SizeSurvey,
    },
    Form2: {
      screen: SizeSurvey2,
    },
    Form3: {
      screen: SizeSurvey3,
    },
    Results: {
      screen: Results,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: "blep",
      cupSize: "",
      bandSize: "this is the band size",

      updateState:
        updateState = (text) => {
          this.setState({
            bandSize: text
          });
          console.log(text);
        },

      calculateCupSize:
      calculateCupSize = (leanB, standB, looseUB) => {
        if ((leanB - standB) > 2.5){
          let x = (leanB + standB + looseUB)/3
          let cup = x - 31.5
          console.log(cup + "avg calc")
          this.setState({
            cupSize: cup
          })
        }else{
          let cup = leanB - 31.5
          console.log(cup + "leanB calc")
          this.setState({
            cupSize: cup
          })
        }
      },

      calculateBand:
      calculateBand = (snugUB) => {
        const roundedUp = Math.ceil(snugUb)
        if(roundedUp % 2 === 0){
          console.log(roundedUp)
          this.setState({
            bandSize: roundedUp
          })
        }else{
          console.log(roundedUp + 1)
          this.setState({
            bandSize: roundedUp + 1
          })
        }
      }
    }
  }

  render() {
    return <RootStack
            screenProps={{...this.state}}
          />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    ...Platform.select({
      ios: { paddingTop: 30 }
    })
  }
})
