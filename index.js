import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

module.exports = React.createClass({
  getInitialState: function () {

    var style = styles.wrapper;
    var styleTextInput = styles.textinput;
    var styleButton = styles.button;
    var styleImage = styles.image;
    var editable = true;
    var stepsize = 1;
    var value = "0";
    var min = 0;
    var max = null;

    if(this.props.style != null) {
      style = this.props.style;
    }

    if(this.props.styleTextInput != null) {
      styleTextInput = this.props.styleTextInput;
    }

    if(this.props.styleButton != null) {
      styleButton = this.props.styleButton;
    }

    if(this.props.styleImage != null) {
      styleImage = this.props.styleImage;
    }

    if(this.props.editable != null) {
      editable = this.props.editable;
    }

    if(this.props.stepsize != null) {
      stepsize = this.props.stepsize;
    }

    if(this.props.initialValue != null) {
      value = this.props.initialValue.toString();
    }

    if(this.props.min != null) {
      min = this.props.min;
    }

    if(this.props.max != null) {
      max = this.props.max;
    }

    return {
      style: style,
      styleTextInput: styleTextInput,
      styleButton: styleButton,
      styleImage: styleImage,
      editable: editable,
      stepsize: stepsize,
      value: value,
      min: min,
      max: max
    }
  },
  render: function () {
    return <View style={this.state.style}>
      <View style={styles.horizontal}>
        <TouchableHighlight underlayColor={'#fff'} onPress={this.downBtnPressed} style={[styles.button, this.state.styleButton]}>
          <Icon name="ios-remove" size={30} color="#666" />
        </TouchableHighlight>
        <TextInput
          style={[styles.textinput, this.state.styleTextInput]}
          editable={this.state.editable}
          keyboardType={'numeric'}
          value={this.state.value}
          onChangeText={(text) => this.onChangeText(text)}/>
        <View style={styles.verticle}>
          <TouchableHighlight underlayColor={'#fff'} onPress={this.upBtnPressed} style={[styles.button, this.state.styleButton]}>
            <Icon name="ios-add" size={30} color="#666" />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  },
  upBtnPressed: function () {
    if(this.state.value != this.state.max){
      var value = (parseInt(this.state.value) + parseInt(this.state.stepsize)).toString();

      this.setState({
        value: value
      });

      /*this.props.onChangeText(value);*/
    }
  },
  downBtnPressed: function () {
    if(this.state.value != this.state.min){
      var value = (parseInt(this.state.value) - parseInt(this.state.stepsize)).toString();

      this.setState({
        value: value
      });

      /*this.props.onChangeText(value);*/
    }
  },
  onChangeText: function (text) {
    if(!isNaN(text)){
      this.setState({
        value: text
      });

      this.props.onChangeText(text);
    } else {
      this.setState({
        value: "0"
      })

      /*this.props.onChangeText("0");*/
    }
  }
});


var styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#eeeeee'
  },
  verticle: {
    flexDirection: 'column'
  },
  horizontal: {
    flexDirection: 'row'
  },
  textinput: {
    flex:10,
    backgroundColor: '#eeeeee',
    padding: 5,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#fff',
    padding: 5
  },
  image: {
    width: 18,
    height: 18
  }
});
