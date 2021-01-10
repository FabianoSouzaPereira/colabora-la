import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { homeaction } from './actions';
import * as HomeActions from './actions';

function HomeScreen({ navigation, homeaction }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.push('Details')}
      />
    </View>
  );
}

const mapStateToProps = (state: { homereducer: { homedata: any; }; }) =>{
  return{
    homedata: state.homereducer
  }
};

const mapDispatchToProps = (dispatch: (arg0: { type: string; homedata: any; }) => any) => {
  return{
  homeaction: (homedata: any) => dispatch(HomeActions.homeaction(homedata))
  }
};
export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen);