import { View, Text } from 'react-native'

export default function Task(props) {
  return (
    <View>
      <Text>{props.desc}</Text>
      <Text>{props.estimateAt + ""}</Text>
      <Text>{props.doneAt + ""}</Text>
    </View>
  )
}