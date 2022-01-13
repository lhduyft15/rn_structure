import React from 'react';
import {ScrollView, Text, View, Button} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import styles from './_style';
import Section from './subComponents/Section';

const HomeScreen = ({onPressLearnMore, number, isDarkMode}) => {
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <Header />
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <Section title="Step One">
          Edit <Text style={styles.highlight}>App.js</Text> to change this
          screen and then come back to see your edits.
        </Section>
        <Section title="See Your Changes">
          <ReloadInstructions />
        </Section>
        <Section title="Debug">
          <DebugInstructions />
        </Section>

        <Button
          onPress={onPressLearnMore}
          title="Increase Number"
          color="#841584"
        />

        <View style={styles.numberView}>
          <Text
            style={[
              styles.sectionTitle,
              {
                color: isDarkMode ? Colors.white : Colors.black,
              },
            ]}>
            Number : {number}
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
