import React from 'react';
import {Home} from './components/Home';
import {AuthProvider} from './components/AuthProvider';

export default () => {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
};
