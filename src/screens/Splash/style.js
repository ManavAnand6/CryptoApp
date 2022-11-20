import { StyleSheet } from 'react-native';
import { ColorTheme } from '../../common/AppStyles';

const styles = StyleSheet.create({
  firstTextColor: {
    color: ColorTheme.WHITE,
    fontFamily: 'Sans-Serif',
    fontSize: 35,
    fontWeight: 'bold',
  },
  mainContainer: {
    alignItems: 'center',
    backgroundColor: ColorTheme.GOOGLE_BLACK_COLOR,
    flex: 1,
    justifyContent: 'center',
  },
  secondTextColor: {
    color: ColorTheme.ERROR_RED,
    fontFamily: 'Sans-Serif',
    fontSize: 35,
    fontWeight: 'bold',
  },
  subContainer: {
    alignItems: 'center',
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;
