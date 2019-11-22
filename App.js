import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <Button title="React Meeting Up"
          style={{ borderRadius: 10, }} />
        <Button title="React Meeting Up"
          color="#f00"
          style={{ borderRadius: 10, }} />
        <Button title="React Meeting Up"
          color="#0f0"
          style={{ borderRadius: 10, }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor:'#fff',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    height: '50%',
    backgroundColor: '#ddd',
    justifyContent:'space-evenly'
  }
});

export default App;
