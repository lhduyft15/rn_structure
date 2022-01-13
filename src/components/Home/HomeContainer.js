import React, {useState} from 'react';
import HomeScreen from './HomeScreen';
import {Alert, useColorScheme} from 'react-native';

export default function HomeContainer(props) {
  const [number, setNumber] = useState(0);

  const isDarkMode = useColorScheme() === 'dark';

  const onPressLearnMore = () => {
    Alert.alert('Increase Number button pressed');
    setNumber(preNumber => preNumber + 1);
  };

  const homeProps = {
    onPressLearnMore,
    number,
    isDarkMode,
    props,
  };
  return <HomeScreen {...homeProps} />;
}
