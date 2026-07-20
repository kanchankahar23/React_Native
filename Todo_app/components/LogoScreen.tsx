import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { Text } from '@react-navigation/elements';

const LogoScreen = () => {
  return (
    <View className='' style={styles.container}>
      <Image
        source={require('../assets/kushal.jpg')}
        style={styles.img}
      />
      <Text className='bg-pink-700 '>kushal</Text>
    </View>
  
  );
};

export default LogoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 120,
    height:120,
    borderWidth:5,
    borderColor:'blue',
    borderRadius:80,
    marginTop:220
  },
});