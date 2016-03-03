/* @flow */
import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

//import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin'

export class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>It works</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    alignSelf: "center",
    marginTop: 32,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(232, 232, 232)',
  },
});
