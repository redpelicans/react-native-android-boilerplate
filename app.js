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

export class App extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Text style={[styles.title]}>It works</Text>
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
    backgroundColor: '$mainColor',
  },
});
