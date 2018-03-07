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
      updateState:
        updateState = () => {
          this.setState({
            value: "whoop"
          });
        },
      calculateCupSize:
      calculateCupSize = (leanB, standB, looseUB) => {
        if ((leanB - standB) > 2.5){
          let x = (leanB + standB + looseUB)/3
          let cup = x - 31.5
          console.log(cup + "avg calc")
        }else{
          let cup = leanB - 31.5
          console.log(cup + "leanB calc")
        }
      },
      calculateBand:
      calculateBand = (snugUB) => {
        // round snug UB to nearest EVEN whole #
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
