import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'

const index = () => {
  const isDarkMode = useColorScheme() === "light"
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.darktheme : styles.lightmode}>
        Hello world !
      </Text>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  darktheme: {
    color: 'white'
  },
  lightmode: {
    color: 'black'
  }
})