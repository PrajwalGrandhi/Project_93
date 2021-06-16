import React from 'react';
import { StyleSheet, Text, View ,TextInput,TouchableOpacity, Alert,Modal, ScrollView, KeyboardAvoidingView} from 'react-native';
import firebase from 'firebase';
import db from '../config';

export default class TodoForm extends React.Component{
    constructor(){
        super();
        this.state={
            task:'',
            deadline:'',
            impValue:'',
        }
    }

    updateData= async ()=>{
db.collection('TodoLists').add({
    'task':this.state.task,
    'deadline':this.state.deadline,
    'impValue':this.state.impValue,

})
    }

  render(){
    return (
        <View>
 <TextInput
//style={styles.inputBox}
placeholder={'Task: '}
 onChangeText={(text)=>{this.setState({task:text})}}/>

<TextInput
//style={styles.inputBox}
 placeholder={'Deadline: (date: yyyy/mm/dd)'}
 onChangeText={(text)=>{this.setState({deadline:text})}}/>
 
 <TextInput
//style={styles.inputBox}
 placeholder={"Plese enter if it is important(yes) or not important(no)"}
 onChangeText={(text)=>{this.setState({impValue:text})}}/>

 <TouchableOpacity onPress={()=>{
     this.updateData()
     this.props.navigation.navigate('ToDoList')
 }}>
     <Text>
         Submit 
     </Text>
 </TouchableOpacity>
 <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ToDoList')}}>
     <Text>Back</Text>
 </TouchableOpacity>
        </View>
    );
  }
}
