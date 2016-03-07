/* @flow */
import React, {
  Component,
  Text,
  View,
  Navigator,
} from 'react-native';

import StyleSheet from 'react-native-extended-stylesheet';
StyleSheet.build({mainColor: color.paperBlue200.color})

import { typography, color } from 'react-native-material-design-styles';

import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin'
// doc here : https://github.com/apptailor/react-native-google-signin

import {Button, Avatar, Divider, Card} from 'react-native-material-design'


var Icon = require('react-native-vector-icons/FontAwesome')
var myIcon = (<Icon.Button name="rocket" size={30} backgroundColor={color.paperBlue200.color} color="#900">Hello World</Icon.Button>)

export class App extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Button raised={true}
          text="Hello World"/>
          <Divider />
        <Text style={[styles.title]}>It works</Text>
          <Divider inset />
          <Avatar icon="folder" backgroundColor="paperBlue"/>
          <Card>
            <Card.Body>
              <Text>Some text to go in the body.</Text>
            </Card.Body>
            <Card.Actions position="right">
              <Button text="ACTION" />
            </Card.Actions>
          </Card>
        </View>
    )
  }
}


const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    ...typography.paperFontTitle,
    ...color.paperGrey900,
  },
  container: {
    flexDirection: "column",
    backgroundColor: '$mainColor',
  },
});
