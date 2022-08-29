import { Component } from "react";
import { Text, ImageBackground, StyleSheet, SafeAreaView} from 'react-native'
import Task from "../components/Task";


export default class TaskList extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}> 
        <ImageBackground 
          source={require('../../assets/imgs/today.jpg')}
          style={styles.background}>
        </ImageBackground>
        <Text>TaskList</Text>
      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  }
})
