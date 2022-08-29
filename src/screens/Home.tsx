import { Text, ImageBackground, StyleSheet, SafeAreaView} from 'react-native'
import commomStyles from "../commomStyles"

import moment from 'moment'
import 'moment/locale/pt-br'

export default function Home() {
  const today = moment().locale('en-us').format('ddd, D [/] MMMM ')
    return (
      <SafeAreaView style={styles.container}> 
        <ImageBackground 
          source={require('../../assets/imgs/today.jpg')}
          style={styles.background}>
            <SafeAreaView style={styles.titleBar}>
              <Text style={styles.title}>Today</Text>
              <Text style={styles.subtitle}>{today}</Text>
            </SafeAreaView>
        </ImageBackground>
        <SafeAreaView style={styles.TaskList}>
            <Text>Task #01</Text>
            <Text>Task #02</Text>
            <Text>Task #03</Text>
        </SafeAreaView>
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
  title: {
    color: commomStyles.colors.secondary,
    fontSize: 50,
    marginLeft: 20,
    marginBottom: 20,
  },
  subtitle: {
    color: commomStyles.colors.secondary,
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 20,
  }
})
