import React, {useState} from 'react';
import HomeScreen from './HomeScreen';
import {Alert, useColorScheme} from 'react-native';

export default function HomeContainer(props) {
  const {changeCount, count, navigation} = props;

  const isDarkMode = useColorScheme() === 'dark';

  const goToDetails = () => {
    navigation.navigate('Details');
  };

  const decrementCount = () => {
    //setCount(preNumber => preNumber - 1);
    const newCount = count - 1;
    changeCount(newCount);
  };
  const incrementCount = () => {
    //setCount(preNumber => preNumber + 1);
    const newCount = count + 1;
    changeCount(newCount);
  };

  const homeProps = {
    goToDetails,
    decrementCount,
    incrementCount,
    count,
    isDarkMode,
    props,
  };
  return <HomeScreen {...homeProps} />;
}
