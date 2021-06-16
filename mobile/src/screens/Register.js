import React, {useState} from 'react';
import {StyleSheet, View, Button, Alert} from 'react-native';
import {TextInput, Headline} from 'react-native-paper';

import axios from 'axios';
import {server} from '../common';

import {useAuthorization} from '../components/AuthProvider';

const Register = props => {
  const [user, setUserState] = useState({});
  const {signIn} = useAuthorization();

  const createAccount = async () => {
    if (!user) {
      Alert.alert('Invalid registration :(');
    } else if (!user.name || user.name.trim().length < 5) {
      Alert.alert('Invalid name');
    } else if (
      !user.email ||
      user.email.trim().length < 5 ||
      user.email.indexOf('@') === -1 ||
      user.email.indexOf('.') === -1
    ) {
      Alert.alert('Invalid email');
    } else if (!user.cellphone || user.cellphone.trim().length < 5) {
      Alert.alert('Invalid cell phone');
    } else {
      try {
        const jsonPost = {
          name: user.name,
          email: user.email,
          phone: user.cellphone,
        };
        const response = await axios.post(`${server}/usermobiles/`, jsonPost);
        if (response.status < 300) {
          const newUser = response.data;
          signIn(newUser.token);
          props.navigation.navigate('Welcome');
        } else {
          Alert.alert('Invalid registration ;(');
        }
      } catch (err) {
        Alert.alert('Invalid registration ;(');
      }
    }
  };

  return (
    <View style={style.form}>
      <Headline style={style.headline}>Create your account</Headline>
      <TextInput
        label="Name"
        style={style.input}
        onChangeText={text => setUserState(Object.assign(user, {name: text}))}
      />
      <TextInput
        label="e-mail"
        style={style.input}
        onChangeText={text => setUserState(Object.assign(user, {email: text}))}
      />
      <TextInput
        label="Cell phone"
        style={style.input}
        onChangeText={text =>
          setUserState(Object.assign(user, {cellphone: text}))
        }
      />
      <Button title="Create account" onPress={createAccount} />
    </View>
  );
};

const style = StyleSheet.create({
  form: {
    padding: 12,
  },
  headline: {
    marginTop: 80,
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    marginBottom: 15,
  },
});

export default Register;
