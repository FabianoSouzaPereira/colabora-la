import * as React from 'react';
import * as Updates from 'expo-updates';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {

  React.useEffect(() => {
    async function updateApp(){
      const { isAvailable } = await Updates.checkForUpdateAsync();

      if(isAvailable){
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    }

    updateApp();

  }, []);


  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
