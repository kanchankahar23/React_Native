import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const Elevator = () => {
  return (
    <View>
      <Text style={styles.headText}>Elevator</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={[styles.box, styles.red]}>
          <Text style={styles.boxText}>Red</Text>
        </View>

        <View style={[styles.box, styles.green]}>
          <Text style={styles.boxText}>Green</Text>
        </View>

        <View style={[styles.box, styles.grey]}>
          <Text style={styles.boxText}>Grey</Text>
        </View>

        <View style={[styles.box, styles.blue]}>
          <Text style={styles.boxText}>Blue</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Elevator;

const styles = StyleSheet.create({
  headText: {
    fontSize: 30,
    fontWeight: '600',
    padding: 10,
  },

  scrollContent: {
    paddingHorizontal: 10,
  },

  box: {
    width: 150,
    height: 150,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },

  boxText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  red: {
    backgroundColor: 'red',
  },

  green: {
    backgroundColor: 'green',
  },

  grey: {
    backgroundColor: 'grey',
  },

  blue: {
    backgroundColor: 'blue',
  },
});