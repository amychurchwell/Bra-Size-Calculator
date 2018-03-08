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

import PropTypes from 'prop-types';

import Header from "./header";
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

const cupChart = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
  5: 'DD',
  6: 'E',
  7: 'F',
  8: 'FF',
  9: 'G',
  10: 'GG',
  11: 'H',
  12: 'HH',
  13: 'J',
  14: 'JJ',
  15: 'K',
  16: 'KK',
  17: 'L',
  18: 'LL',
  19: 'M',
  20: 'MM'
};

export default class App extends React.Component {
  static propTypes = {
    navigate: PropTypes.object,
  }
  constructor(props){
    super(props);
    this.state = {
      cupSize: "cup",
      bandSize: "band",
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
//Remove math.ceil for more accuracy later
          if ((leanBust - standBust) > 2.5){
            let x = (leanBust + standBust + looseUnderBust)/3
            let cup = Math.ceil(x - 31.5);;
            this.setState({
              cupSize: cupChart[cup]
            })
          }else{
            let cup = Math.ceil(leanBust - 31.5);
            this.setState({
              cupSize: cupChart[cup]
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
