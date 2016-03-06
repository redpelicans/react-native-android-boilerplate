/* @flow */
import EStyleSheet from 'react-native-extended-stylesheet'
EStyleSheet.build()

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native'

// doc here : https://github.com/apptailor/react-native-google-signin
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin'
import styles from './styles'

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.main_title}>It works</Text>
      </View>
    )
  }
}
