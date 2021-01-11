import * as React from 'react';
import { useContext } from 'react';
import { SysProvider } from './contexts/systemContext';
import SystemContext from './contexts/systemContext';
import * as Updates from 'expo-updates';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from "./store";

const App = () => {
  const { OS, SysIOS, SysAndroid, SysWeb, SysWindows, SysMacOs } = useContext(
    SystemContext
  );
  React.useEffect(() => {
    async function updateApp() {

      if (SysIOS || SysAndroid) {
        const { isAvailable } = await Updates.checkForUpdateAsync();

        if (isAvailable) {
          await Updates.fetchUpdateAsync();
          await Updates.reloadAsync();
        }
      }
    }

    updateApp();
  }, []);

  return (
    <Provider store={store}>
      <SysProvider>
        <Routes />
      </SysProvider>
    </Provider>
  );
};

export default App;
