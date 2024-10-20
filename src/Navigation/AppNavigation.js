import { createStackNavigator } from '@react-navigation/stack';
import ProductListingScreen from '../Screens/ProductListingScreen/ProductListingScreen';
import CartScreen from '../Screens/CartScreen/CartScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="productListing" component={ProductListingScreen} />
            <Stack.Screen name="cartScreen" component={CartScreen} />
        </Stack.Navigator>
    );
}

export default AppNavigation