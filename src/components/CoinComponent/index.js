import { View, Text, Image } from 'react-native';
import React from 'react';
import propTypes from 'prop-types';
import styles from './style';
import { Images } from '../../common/Images';
import { marketCapLimit } from '../../common/marketCapLimit';
import { ColorTheme } from '../../common/AppStyles';

export function CoinComponent({
  name,
  image,
  market_cap_rank,
  symbol,
  current_price,
  market_cap,
  price_change_percentage_24h,
}) {
  const percentageColor = price_change_percentage_24h < 0
    ? ColorTheme.NEW_RED
    : ColorTheme.NEW_GREEN;
  return (
    <View style={styles.mainContainer}>
      <View style={styles.firstContainer}>
        <Image
          source={{ uri: image }}
          style={styles.imageStyle}
          resizeMode="contain"
        />
      </View>
      <View style={styles.secondContainer}>
        <Text style={styles.textColor}>{name}</Text>
        <View style={styles.cryptoCoinDetails}>
          <View style={[styles.rankContainer, styles.cryptoDetailsSubDetails]}>
            <Text style={styles.marketCapStyle}>{market_cap_rank}</Text>
          </View>
          <Text style={[styles.subTextColor, styles.cryptoDetailsSubDetails]}>
            {symbol.toUpperCase()}
          </Text>
          <View
            style={[
              styles.caretDownImageContainer,
              styles.cryptoDetailsSubDetails,
            ]}
          >
            <Image
              source={Images.CARET_DOWN}
              style={styles.caretDownImageStyle}
              resizeMode="contain"
              tintColor
            />
          </View>
          <Text style={[styles.subTextColor, { color: percentageColor }]}>
            {`${price_change_percentage_24h.toFixed(2)} %`}
          </Text>
        </View>
      </View>
      <View style={styles.thirdContainer}>
        <Text style={[styles.textColor, styles.currentPriceStyle]}>
          {current_price}
        </Text>
        <View style={styles.cryptoPriceDetails}>
          <Text style={styles.subTextColor}>MCap</Text>
          <Text style={styles.subTextColor}>{marketCapLimit(market_cap)}</Text>
        </View>
      </View>
    </View>
  );
}

CoinComponent.propTypes = {
  name: propTypes.string,
  image: propTypes.string,
  market_cap_rank: propTypes.number,
  symbol: propTypes.string,
  current_price: propTypes.number,
  market_cap: propTypes.number,
  price_change_percentage_24h: propTypes.number,
};
