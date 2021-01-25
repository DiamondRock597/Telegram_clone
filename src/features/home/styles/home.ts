import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    marginTop: '8%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    width,
  },
  title: {
    fontSize: 30,
    lineHeight: 37,
    color: '#2675EC',
    fontFamily: 'Gilroy-Bold',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '30%',
    justifyContent: 'space-between',
  },
});
