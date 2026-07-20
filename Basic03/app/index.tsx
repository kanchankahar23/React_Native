
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Flatcard from '@/components/Flatcard'
import Elevator from '@/components/Elevator'

const index = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>
          <Flatcard/>
          <Elevator/>
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})