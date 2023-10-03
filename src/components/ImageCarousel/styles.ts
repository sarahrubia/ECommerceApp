import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  image: {
    height: 250,
    resizeMode: 'contain',
    margin: 10,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: '#ededed',
    borderColor: '#c9c9c9',
    margin: 5,
  },
});

export default styles;
