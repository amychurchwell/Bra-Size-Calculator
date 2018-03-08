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
      cupSize: "this is the cup size",
      bandSize: "this is the band size",
      standB: "standing bust",
      leanB: "leaning bust",
      looseUB: "loose underbust",

      setBand:
        setBand = (text) => {
          this.setState({
            bandSize: text
          });
          calculateBand(text)
        },

        setLooseUB:
          setLooseUB = (x) => {
            this.setState({
              looseUB: x
            });
          },

        setLeanB:
          setLeanB = (x) => {
            this.setState({
              leanB: x
            });
          },

        setStandB:
          setStandB = (x) => {
            this.setState({
              standB: x
            });
          },

        calculateCupSize:
        calculateCupSize = () => {

          let leanBust = this.state.leanB;
          let standBust = this.state.standB;
          let looseUnderBust = this.state.looseUB;

          if ((leanBust - standBust) > 2.5){
            let x = (leanBust + standBust + looseUnderBust)/3
            let cup = x - 31.5
            console.log(cup + "avg calc")
            this.setState({
              cupSize: cup
            })
          }else{
            let cup = leanBust - 31.5
            console.log(cup + "leanB calc")
            this.setState({
              cupSize: cup
            })
          }
        },

        calculateBand:
        calculateBand = (snugUB) => {
          console.log(snugUB)
          let x = Math.ceil(snugUB)
           if(x % 2 === 0){
            this.setState({
              bandSize: x
            })
          }else{
            console.log(x + 1)
            this.setState({
              bandSize: x + 1
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
