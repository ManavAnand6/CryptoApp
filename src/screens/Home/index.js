import React from 'react';
import { FlatList, View } from 'react-native';
import styles from './style';
import { CoinComponent } from '../../components';
import cryptocurrencies from '../../assets/data/cryptocurrencies.json';

const renderItem = ({ item }) => {
  return (
    <CoinComponent
      name={item.name}
      image={item.image}
      market_cap_rank={item.market_cap_rank}
      symbol={item.symbol}
      current_price={item.current_price}
      market_cap={item.market_cap}
      price_change_percentage_24h={item.price_change_percentage_24h}
    />
  );
};

export function Home() {
  return (
    <View style={styles.mainContainer}>
      <FlatList data={cryptocurrencies} renderItem={renderItem} keyExtractor={(item) => item.id} />
    </View>
  );
}
