import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flatcard = () => {
  return (
    <View>
      <Text style={styles.headText}>Flatcard</Text>
      <View style={styles.container}>
        <View style={[styles.box, styles.red]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.box, styles.yellow]}>
          <Text>Yellow</Text>
        </View>
        <View style={[styles.box, styles.pink]}>
          <Text>pink</Text>
        </View>
         <View style={[styles.box, styles.red]}>
          <Text>Red</Text>
        </View>
      </View>

    </View>
  )
}

export default Flatcard

const styles = StyleSheet.create({
  headText: {
    fontSize: 30,
    fontWeight: 600,
    padding: 10
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    gap:10,
    
  },
  box: {
    // backgroundColor:'red', 
    flex:1,
    margin:10,
    alignItems:'center',
    width: 150,
    gap:10,
    height: 150,
    textAlign: 'center',
    justifyContent: 'center'
  },
  red: {
    backgroundColor: 'red'
  },
  yellow: {
    backgroundColor: 'yellow'
  },
  pink: {
    backgroundColor: 'pink'
  }
})