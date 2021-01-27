import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerContainer: {
    width,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    marginTop: '8%',
    marginBottom: '4%',

    justifyContent: 'space-between',
    paddingHorizontal: 20,
    alignItems: 'center',
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
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  messagesContainer: {
    width: '100%',
    paddingVertical: 20,
  },
  scroll: {},
});
