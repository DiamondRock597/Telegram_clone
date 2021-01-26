import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  messageContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '8%',
  },
  imageBlock: {
    width: 82,
    height: 82,
  },
  image: {
    width: 82,
    height: 82,
  },
  info: {
    width: '72%',
  },
  nameContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontFamily: 'Gilroy-Bold',
    color: 'black',
    fontSize: 23,
    paddingRight: 10,
    lineHeight: 28,
  },
  time: {
    fontSize: 17,
    fontFamily: 'Gilroy-Medium',
    color: '#848484',
    lineHeight: 21,
    textAlign: 'center',
  },
  nameBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  messageBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  unReadMessage: {
    fontSize: 16,
    lineHeight: 19,
    color: '#2675EC',
    fontFamily: 'Gilroy-Medium',
  },
  number: {
    color: '#FFFFFF',
    fontFamily: 'Gilroy-Medium',
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 18,
    backgroundColor: '#2675EC',
    borderRadius: 30,
    width: 26,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
