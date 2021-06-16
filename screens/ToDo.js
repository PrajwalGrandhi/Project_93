import React from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity, Alert,Modal, ScrollView, KeyboardAvoidingView,Icon} from 'react-native';

export default class ToDoScreen extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
        <View>

<TouchableOpacity onPress={()=>{this.props.navigation.navigate('TodoForm')}}>
  <Text>
    Add
  </Text>
</TouchableOpacity>
        </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{

  }
})