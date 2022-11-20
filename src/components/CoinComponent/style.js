import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';
import { vh, vw } from '../../common/Dimensions';

const styles = StyleSheet.create({
  caretDownImageContainer: {
    justifyContent: 'center',
  },
  caretDownImageStyle: {
    height: vh(10),
    width: vw(10),
  },
  cryptoCoinDetails: {
    alignItems: 'center',
    flexDirection: 'row',
    // justifyContent: 'space-around',
  },
  cryptoDetailsSubDetails: {
    marginRight: vw(5),
  },
  cryptoPriceDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  currentPriceStyle: {
    alignSelf: 'flex-end',
  },
  firstContainer: {
    alignItems: 'center',
    flex: 0.1,
    justifyContent: 'center',
  },
  imageStyle: {
    height: vh(30),
    width: vw(30),
  },
  mainContainer: {
    // backgroundColor: ColorTheme.GOOGLE_BLACK_COLOR,
    // backgroundColor: ColorTheme.BAR_RED,
    borderBottomColor: ColorTheme.LIGHT_GREY_COIN_COLOR,
    borderBottomWidth: 0.27,
    flex: 0.05,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: vh(10),
  },
  marketCapStyle: {
    color: ColorTheme.WHITE,
    fontSize: 10,
    fontWeight: 'bold',
  },
  rankContainer: {
    alignItems: 'center',
    backgroundColor: ColorTheme.LIGHT_GREY_COIN_COLOR,
    borderRadius: 5,
    height: vh(15),
    justifyContent: 'center',
    width: vw(15),
  },
  secondContainer: {
    flex: 0.55,
  },
  subTextColor: {
    color: ColorTheme.WHITE,
    fontFamily: 'Sans-Serif',
    fontSize: 12,
    fontWeight: '400',
  },
  textColor: {
    color: ColorTheme.WHITE,
    fontFamily: 'Sans-Serif',
    fontSize: 16,
    fontWeight: 'bold',
  },
  thirdContainer: {
    flex: 0.2,
  },
});

export default styles;
