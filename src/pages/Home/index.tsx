import * as React from 'react';
import { useState, useContext } from 'react';
import {
  Button,
  SafeAreaView,
  View,
  StyleSheet,
  FlatList,
  Text,
  StatusBar,
  Image,
  Platform,
} from 'react-native';
import { connect } from 'react-redux';
import SystemContext from '../../contexts/systemContext';
import * as HomeActions from './actions';
import Itypes from './Itype';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput } from 'react-native-gesture-handler';

const DATA = [
  {
    id: '1',
    title: 'Problema em Barranco',
    name: 'Carlos Eduardo',
    picture: require('../../assets/img/buraco.jpg'),
    message: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \n\n Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \n\n Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."',
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
    picture: require('../../assets/img/buraco.jpg'),
    message: 'Gostei da idéia amigo.',
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
    picture: require('../../assets/img/buraco.jpg'),
    message: 'Gostei da idéia amigo.',
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
  <>
    <View style={styles.item}>
      <View style={styles.header}>
        <View style={styles.headerGroup}>
          <Icon name="person" size={50} color="#b5b5b5" style={styles.photoUser} />
          <Text style={styles.id}>{id}</Text>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
      <View style={styles.pictureHeader}>
        <Image style={styles.picture} source={picture} />
        <TextInput style={styles.message} multiline maxLength={900}>{message}</TextInput>
        <View style={styles.message1}>
          <Text style={styles.createdAt}>{createdAt}</Text>
          <Text style={styles.updatedAt}>{updatedAt}</Text>
        </View>
      </View>
      <View style={styles.messageGroup}>
        <View style={styles.commnetsText}>
          <Text style={styles.commnentsId}>{comments.id}</Text>
          <Text style={styles.commnentsname}>{comments.name}</Text>
          <Text style={styles.comcomment}>{comments.comment}</Text>
          <Text style={styles.comm_date}>{comments.createdAt}</Text>
          <Text style={styles.comm_update}>{comments.updatedAt}</Text>
        </View>
      </View>
    </View>
  </>

);

function HomeScreen({ navigation }) {
  const styleTypes = [ 'default', 'dark-content', 'light-content' ];
  const [] = useState(false);
  const [ styleStatusBar ] = useState(styleTypes[ 0 ]);

  const renderItem = ({ item }) => (
    <Item
      id={item.id}
      title={item.title}
      picture={item.picture}
      message={item.message}
      createdAt={'date: ' + item.createdAt + ' '}
      updatedAt={'update: ' + item.updatedAt}
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
        backgroundColor: '#000000',
      },
      web: {
        backgroundColor: '#DD9393',
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
    marginTop: 0,
    backgroundColor: 'green',
  },
  item: {
    minHeight: 500,
    // maxHeight: 550,
    paddingTop: 10,
    paddingBottom: 100,
    backgroundColor: '#D7EAB9',
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 15,
  },
  header: {
    minHeight: 50,
    maxHeight: 50,
  },
  id: {
    display: 'none',
  },
  title: {
    minHeight: 20,
    maxHeight: 20,
  },
  commentText: {
    // backgroundColor: 'blue',
  },
  pictureHeader: {
    // backgroundColor: '#fffafa', 
  },
  picture: {
    minHeight: 250,
    maxHeight: 250,
  },
  messageGroup: {
    backgroundColor: '#D4BBBB',
    display: 'flex',
  },
  message: {
    paddingStart: 8,
    paddingEnd: 8,
    paddingTop: 8,

    paddingBottom: 15,
    minHeight: 100,
    // maxHeight: 500,
    backgroundColor: '#CEEF9A',
  },
  message1: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  createdAt: {
    display: 'none',
  },
  updatedAt: {
    display: 'none',
  },
  commnentsId: {},
  commnetsText: {},
  commnentsname: {},
  comcomment: {},
  comm_date: {},
  comm_update: {},
  headerGroup: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 15,
  },
  photoUser: {
    minHeight: 50,
    maxHeight: 50,
    minWidth: 50,
    maxWidth: 50,
    marginEnd: 10,
    borderRadius: 45,
    backgroundColor: '#ECF1E3',
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
