import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import {Headline} from 'react-native-paper';
import {useAuthorization} from '../components/AuthProvider';
import axios from 'axios';
import {server} from '../common';

const Welcome = props => {
  const {authToken, signOut} = useAuthorization();
  const [name, setName] = useState('');
  const [email, setEmail] = useState(null);
  const [cellphone, setCellphone] = useState(null);

  const logout = async () => {
    signOut();
    props.navigation.navigate('Register');
  };

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${server}/usermobiles/`, {
        headers: {
          'x-api-key': authToken,
        },
      });

      if (Array.isArray(response.data) && response.data.length > 0) {
        const userData = response.data[0];
        setName(userData.name);
        setEmail(userData.email);
        setCellphone(userData.phone);
      }
    };

    getData();
  }, []);

  return (
    <View>
      <Headline style={style.headline}>Welcome ;)</Headline>
      <Text style={style.text}>{name}</Text>
      <Text style={style.text}>{email}</Text>
      <Text style={style.text}>{cellphone}</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

const style = StyleSheet.create({
  headline: {
    marginTop: 80,
    marginBottom: 30,
    textAlign: 'center',
  },
  text: {
    marginBottom: 10,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Welcome;
