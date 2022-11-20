import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import styles from './style';
import { Strings } from '../../common/String';

export function Splash({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('HomeStack');
    }, 3000);
  }, []);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={styles.firstTextColor}>{Strings.TITLE_PART_ONE}</Text>
        <Text style={styles.secondTextColor}>{Strings.TITLE_PART_TWO}</Text>
      </View>
    </View>
  );
}

Splash.propTypes = {
  navigation: propTypes.any,
};
