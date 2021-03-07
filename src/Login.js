import React, {useState, useEffect} from 'react';

import {
  ActivityIndicator,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

export default () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState({
    loading: false,
    loadedData: {},
  });

  const submitLogin = () => {
    fetch('http://localhost:3000/')
      .then((res) => res.json())
      .then(console.log);
  };

  return (
    (data.loading && (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" />
      </View>
    )) || (
      <View style={styles.loginContainer}>
        <Text>Email</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text style={styles.passwordText}>Password</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Button
          style={styles.button}
          onPress={submitLogin}
          title="Submit"
          color="#841584"
          accessibilityLabel="Logs you in"
        />
      </View>
    )
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  passwordText: {},
});
