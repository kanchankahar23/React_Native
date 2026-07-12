import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'

const index = () => {
  const isDarkMode = useColorScheme() === "dark"
  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.lightmode : styles.darktheme}>
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