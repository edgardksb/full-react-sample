import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Register from './components/Register';
import axios from 'axios';

export default () => {
  // Define backend token
  axios.defaults.headers.common.Authorization =
    'Token 8b1a25898570e2af904c2d96001b114ca9500ec1';

  return (
    <SafeAreaView style={style.App}>
      <PaperProvider>
        <Register />
      </PaperProvider>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
  },
});
