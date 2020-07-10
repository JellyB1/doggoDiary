import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome5';

const SplashScreen = () => {
  return (
    <ScrollView style={styles.mainView}>
      <View style={styles.main}>
        <Icon name="dog" size={100} />

        <Text style={styles.splashText}>Doggo Diary</Text>
      </View>
      <View style={styles.footer}>
        <Text>
          <Icon name="copyright" /> Raisin Toast, LLC
        </Text>
        <Text>All rights reserved</Text>

        <Text>2020</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#C0C0C0',
  },
  main: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 200,
  },
  splashText: {
    fontSize: 30,
    marginTop: 50,
  },
  img: {
    height: 50,
    width: 50,

    // borderRadius: 300 / 2,
  },
  footer: {
    marginTop: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: '#FFF',
    fontSize: 12,
  },
});

export default SplashScreen;
