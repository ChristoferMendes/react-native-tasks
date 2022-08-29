import { Component } from "react";
import { StyleSheet, SafeAreaView} from 'react-native'
import Home from "./src/screens/Home";


export default function App() {
    return (
      <SafeAreaView style={styles.container}> 
        <Home />
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 3,
  },
  TaskList: {
    flex: 7
  },
  titleBar:{
    flex: 1,
    justifyContent: 'flex-end'
  },
})
