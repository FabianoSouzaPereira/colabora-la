import React, { createContext, useState, useEffect } from 'react';
import { Platform } from 'react-native';

interface SysContextData {
  plataform?: Object;
  version?: number;
  ios?: string;
  android?: string;
  windows?: string;
  web?: string;
  OS?: string;
  SysIOS: boolean;
  SysAndroid: boolean;
  SysWeb: boolean;
  SysWindows: boolean;
  SysMacOs: boolean;
}

const SystemContext = createContext<SysContextData>({} as SysContextData);

export const SysProvider: React.FC = ({ children }) => {
  const [OS, setOS] = useState<undefined | null | ''>('');
  const [SysIOS, setSysIOS] = useState<boolean>(false);
  const [SysAndroid, setSysAndroid] = useState<boolean>(false);
  const [SysWeb, setSysWeb] = useState<boolean>(false);
  const [SysWindows, setSysWindows] = useState<boolean>(false);
  const [SysMacOs, setSysMacOs] = useState<boolean>(false);

  useEffect(() => {
    async function getSystemValues() {
      switch (Platform.OS) {
        case 'ios':
          setSysIOS(true);
          break;
        case 'android':
          setSysAndroid(true);
          break;
        case 'web':
          setSysWeb(true);
          break;
        case 'windows':
          setSysWindows(true);
          break;
        case 'macos':
          setSysMacOs(true);
          break;

        default:
          break;
      }
    }

    getSystemValues();
  }, []);

  return (
    <SystemContext.Provider
      value={{ OS, SysIOS, SysAndroid, SysWeb, SysWindows, SysMacOs }}
    >
      {children}
    </SystemContext.Provider>
  );
};

export default SystemContext;
