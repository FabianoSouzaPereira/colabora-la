import * as React from 'react';
import { useState, useContext } from 'react';
import {
  Button,
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  Text,
  ListViewComponent,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import SystemContext from '../../contexts/systemContext';
import * as HomeActions from './actions';
import Itypes from './Itype';

const DATA = [
  {
    id: '1',
    title: 'First Item',
    name: 'Carlos Eduardo',
    picture: 'Foto',
    message: 'Tudo bem aqui.',
    createdAt: '2020-05-01',
    updatedAt: '2020-05-02',
    comments: [
      {
        id: '3',
        name: 'Ana Maria',
        comment: 'Gostei da idéia amigo.',
        createdAt: '2020-05-01',
        updatedAt: '2020-05-02',
      },
      {
        id: '4',
        name: 'Pedro paulo',
        comment: 'Excelente postagem!',
        createdAt: '2020-05-01',
        updatedAt: '2020-05-02',
      },
    ],
  },
  {
    id: '2',
    title: 'Second Item',
    picture: '',
    message: '',
    createdAt: '2020-05-01',
    updatedAt: '2020-05-02',
    comments: [
      {
        id: '3',
        name: 'Ana Maria',
        comment: 'Gostei da idéia amigo.',
        createdAt: '2020-05-01',
        updatedAt: '2020-05-02',
      },
      {
        id: '4',
        name: 'Pedro paulo',
        comment: 'Excelente postagem!',
        createdAt: '2020-05-01',
        updatedAt: '2020-05-02',
      },
    ],
  },
  {
    id: '3',
    title: 'Third Item',
    picture: '',
    message: '',
    createdAt: '2020-05-01',
    updatedAt: '2020-05-02',
    comments: [
      {
        id: '3',
        name: 'Ana Maria',
        comment: 'Gostei da idéia amigo.',
        createdAt: '2020-05-01',
        updatedAt: '2020-05-02',
      },
      {
        id: '4',
        name: 'Pedro paulo',
        comment: 'Excelente postagem!',
        createdAt: '2020-05-01',
        updatedAt: '2020-05-02',
      },
    ],
  },
];

const Item: React.FC<Itypes> = ({
  id,
  title,
  message,
  picture,
  comments,
  createdAt,
  updatedAt,
}) => (
  <View style={styles.item}>
    <Text style={styles.id}>{id}</Text>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.message}>{message}</Text>
    <Text style={styles.picture}>{picture}</Text>
    <Text style={styles.createdAt}>{createdAt}</Text>
    <Text style={styles.updatedAt}>{updatedAt}</Text>

    <Text style={styles.commnentsId}>{comments.id}</Text>
    <Text style={styles.commnentsname}>{comments.name}</Text>
    <Text style={styles.comcomment}>{comments.comment}</Text>
    <Text style={styles.comm_date}>{comments.createdAt}</Text>
    <Text style={styles.comm_update}>{comments.updatedAt}</Text>
  </View>
);

function HomeScreen({ navigation, homeaction }) {
  const { OS, SysIOS, SysAndroid, SysWeb, SysWindows, SysMacOs } = useContext(
    SystemContext
  );
  const styleTypes = [ 'default', 'dark-content', 'light-content' ];
  const [ visibleStatusBar, setVisibleStatusBar ] = useState(false);
  const [ styleStatusBar, setStyleStatusBar ] = useState(styleTypes[ 0 ]);

  const renderItem = ({ item }) => (
    <Item
      id={item.id}
      title={item.title}
      message={item.message}
      picture={item.picture}
      comments={[ item.comments.id, item.comments.name ]}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={styleStatusBar}
        backgroundColor="blue"
        hidden={false}
      />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Button
        title="Go to Details"
        onPress={() => navigation.push('Details')}
      />
    </SafeAreaView>
  );
}

const mapStateToProps = (state: { homereducer: { homedata: any } }) => {
  return {
    homedata: state.homereducer,
  };
};

const mapDispatchToProps = (
  dispatch: (arg0: { type: string; homedata: any }) => any
) => {
  return {
    homeaction: (homedata: any) => dispatch(HomeActions.homeaction(homedata)),
  };
};

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: '#0e0e0e',
      },
      android: {
        backgroundColor: '#0e0e0e',
      },
      web: {
        backgroundColor: '#blue',
      },
      windows: {
        backgroundColor: '#0e0e0e',
      },
      macos: {
        backgroundColor: '#0e0e0e',
      },
    }),
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginBottom: 0,
    top: 10,
    bottom: 0,
  },
  item: {},
  title: {},
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
