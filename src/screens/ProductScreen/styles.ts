import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
  },
  price: {fontSize: 18, fontWeight: 'bold'},
  oldPrice: {
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  description: {
    marginVertical: 10,
    lineHeight: 20,
  },
});

export default styles;
