import React, { Component } from 'react';
import {
  Platform,
  View,
  Animated,
  StyleSheet,
  Image } from 'react-native';

import { Container, Header, Content, Button, Text } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

class SplashPage extends Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
        <Container>
          <Content>
            <Grid>
              <Col>
                <Image  style={styles.titlelogo} source={require('./../assets/logo1.gif')} resizeMode='contain'/>
                <Image source={require('./../assets/bra.png')} />
                <Text style={styles.title}>Does your cup runneth over?</Text>
                <Text style={styles.content}>Hello and welcome to bra size calculator! A react native application created by Amy.</Text>
                <Button dark
                  onPress={() => this.props.navigation.navigate('Form')}>
                  <Text>Let's go!</Text>
                </Button>
              </Col>
            </Grid>
          </Content>
        </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fbe9e7',
    ...Platform.select({
      ios: { paddingTop: 15 }
    })
  },
  title: {
    fontSize: 40,
    textAlign: 'center'
  },
  content: {
    margin: 25,
    fontSize: 20,
  },
  titlelogo: {
    marginBottom: 20,
  },
});

export default SplashPage;
