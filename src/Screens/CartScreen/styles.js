import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFA451',
    paddingHorizontal: 25,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    marginBottom: 20,
  },
  backContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  headerTitle: {
    color: '#FFFFFF',
    lineHeight: 32,
    fontWeight: '800',
    fontSize: 24,
    flex: 2,
  },
  flatList: {
    flex: 11,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
    paddingBottom:20
  },
  totalText: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
  },
  totalAmount: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
  },
  checkoutButton: {
    backgroundColor: '#FFA451',
    height: 50,
    width: 160,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkoutButtonText: {
    fontSize: 18,
    lineHeight: 24,
    color: 'white',
    fontWeight: '600',
  },
  itemContainer: {
    height: 120,
    width: "100%",
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 25,
    justifyContent: 'space-between',
  },
  itemImage: {
    height: 100,
    width: 100,
  },
  itemContent: {
    flex: 1,
    marginHorizontal: 15,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: '700',
    color: '#27214D',
  },
  quantityContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFA451',
    height: 30,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    width: 65,
  },
  quantityButton: {
    color: 'white',
    fontSize: 22,
  },
  quantity: {
    color: 'white',
    fontWeight: '800',
    fontSize: 18,
  },
  emptyListComponentContainer: {
    flex: 1,
    paddingTop:100,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyListComponentText: {
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 24,
      color: '#222222',
  },
});

export default styles;