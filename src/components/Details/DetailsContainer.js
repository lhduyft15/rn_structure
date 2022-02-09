import React, {useState} from 'react';
import DetailsScreen from './DetailsScreen';

export default function DetailsContainer(props) {
  const {changeCount, count, navigation} = props;
  //const [count, setCount] = useState(0);

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

  const goToHome = () => {
    navigation.navigate('Home');
  };

  const detailProps = {
    decrementCount,
    incrementCount,
    goToHome,
    count,
    props,
  };
  return <DetailsScreen {...detailProps} />;
}
