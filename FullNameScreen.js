import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { withGlobalContext } from './context/globalContext'

class FullNameScreen extends React.Component {
  // const [value, onChangeText] = React.useState('Useless Placeholder');
  componentDidMount() {
    console.log('props', this.props)
  }
  render() {
    return (
      <View style={styles.main} >
        <TextInput
          placeholder='age'
          style={styles.textInput}
        />
        <TextInput
          placeholder='last name'
          style={styles.textInput}
        />
        <TouchableOpacity
          style={styles.button}
        >
          <Text style={styles.text}>Next</Text>
          {/* <Text>{`here: ${context.state.count}`}</Text> */}
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    paddingTop: 40,
    backgroundColor: '#FFF',
    height: '100%',
    paddingHorizontal: 20
  },
  textInput: {
    height: 60,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20
  },
  button: {
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0000FF'
  },
  text: {
    color: '#FFF'
  }
})

export default withGlobalContext(FullNameScreen)