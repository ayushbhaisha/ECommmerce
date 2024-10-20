import React, { useEffect, useState, useContext } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { CartContext } from "../../Contexts/CartContext";
import styles from "./styles";
import { SvgXml } from "react-native-svg";
import { BackButton } from "../../assets/assets";

const CartScreen = ({ navigation }) => {
  const { flattenArray, addToCart, removeFromCart } = useContext(CartContext);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [flattenArray]);

  const calculateTotal = () => {
    const totalPrice = flattenArray.reduce((sum, item) => sum + item.data[0].price * item.data.length, 0);
    setTotalSum(totalPrice);
  };

  const renderFlatListItem = ({ item }) => {
    const foundProduct = flattenArray.find((product) => product.id === item.id);
    const itemData = item.data[0];

    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: itemData.image }} style={styles.itemImage} resizeMode='contain' />
        <View style={styles.itemContent}>
          <Text numberOfLines={2}>{itemData.title}</Text>
          <Text style={styles.itemPrice}>{`₹ ${itemData.price}`}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={() => removeFromCart(itemData)}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{foundProduct.data.length}</Text>
          <TouchableOpacity onPress={() => addToCart(itemData)}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backContainer} onPress={() => navigation.navigate('productListing')}>
          <SvgXml xml={BackButton} height={25} width={25} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Basket</Text>
      </View>
      <View style={styles.flatList}>
        <FlatList
          data={flattenArray.flat()}
          renderItem={(item) => renderFlatListItem(item)}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={() => {
            return (
              <View style={styles.emptyListComponentContainer}>
                <Text style={styles.emptyListComponentText}>Your cart is empty. Start adding products!</Text>
              </View>
            )
          }}
        />
      </View>
      <View style={styles.footer}>
        <View>
          <Text style={styles.totalText}>Total</Text>
          <Text style={styles.totalAmount}>{`₹ ${totalSum.toFixed(2)}`}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton} onPress={() => { }}>
          <Text style={styles.checkoutButtonText}>CheckOut</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;