import { StatusBar, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';
import { THEME } from './src/theme';
import { Routes } from './src/routes/index';

export default function App() {

  const [ fonstLoaded ] = useFonts({ Roboto_400Regular, Roboto_700Bold })
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />

    { fonstLoaded ? <Routes/> :  <Loading/> }
    </NativeBaseProvider>
  );
}
