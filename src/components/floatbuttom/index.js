import * as React from 'react';
import { Component } from 'react';

import { View, StyleSheet, Animated, TouchableNativeFeedback } from 'react-native';
import {AntDesign, Entypo} from 'react-native-vector-icons';


class FabButom extends Component {
  animation = new Animated.Value(0);

  toggleMenu = () =>{
    const toValue = this.open ? 0 : 1

    Animated.spring(this.animation, {
      toValue,
      friction: 6,
      useNativeDriver: true,
    }).start();

    this.open = !this.open;
  }

  openCamera = () => {
    alert('Camera')
  }
  sendLike = () => {
    alert('like')
  }

  render() {


    const likeStyle = {
      transform:[
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange:[0, 1],
            outputRange:[0, -120]
          })
        }
      ]
    }

    const cameraStyle = {
      transform:[
        {scale: this.animation},
        {
          translateY: this.animation.interpolate({
            inputRange:[0, 1],
            outputRange:[0, -60]
          })
        }
      ]
    }

    const rotation = {
      transform: [
        {
          rotate: this.animation.interpolate({
            inputRange: [0,1],
            outputRange: ["0deg", "45deg"],
          })
        }
      ]
    }


    return (
    <>
      <View style={[styles.container, this.props.style]}>
      <TouchableNativeFeedback onPress={this.sendLike}>
          <Animated.View style={[styles.buttom,styles.submenu, likeStyle]}>
            <AntDesign name="hearto" size={20} color={"#FFF"}/>
          </Animated.View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={this.openCamera}>
          <Animated.View style={[styles.buttom,styles.submenu, cameraStyle]}>
            <AntDesign name="camera" size={20} color={"#FFF"}/>
          </Animated.View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback onPress={this.toggleMenu}>
          <Animated.View style={[styles.buttom, styles.menu, rotation]}>
            <AntDesign name="plus" size={24} color={"#FFF"}/>
          </Animated.View>
        </TouchableNativeFeedback>
      </View>
    </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    position: 'absolute',
  },
  buttom:{
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 60 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 10,
    shadowColor: '#5d8aa8',
    shadowOpacity: 0.3,
    shadowOffset:{
      height: 10,
    }
  },
  menu:{
    backgroundColor:'#5d8aa8',
  },
  submenu:{
    width: 35,
    height: 35,
    borderRadius: 48/ 2,
    backgroundColor: '#5d8aa8',
  }

});

export default FabButom;