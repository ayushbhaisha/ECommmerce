import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    filterButton: {
        padding: 16,
        borderRadius: 16,
    },
    flatListContainer: {
        flex: 11,
        paddingTop: 10,
    },
    skeletonItemContainer: {
        margin: 10,
        height: 210,
        width: 160,
        borderRadius: 16,
        backgroundColor: 'white',
        shadowColor: '#808080',
        shadowOffset: {
            width: 0,
            height: 15,
        },
        shadowOpacity: 0.12,
        shadowRadius: 50,
        elevation: 1,
    },
    skeletonItemImageContainer: {
        height: 150,
        width: 160,
        borderRadius: 16,
        backgroundColor: '#F3F4F9',
    },
    skeletonItemTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    skeletonItemText: {
        height: 15,
        width: 120,
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: '#F3F4F9',
    },
    skeletonItemSubText: {
        height: 15,
        width: 80,
        borderRadius: 10,
        backgroundColor: '#F3F4F9',
    },
    emptyListComponentContainer: {
        flex: 1,
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
    flatlistContainer: {
        flex: 1,
        margin: 10,
        borderRadius: 16,
        backgroundColor: 'white',
        shadowColor: '#808080',
        shadowOffset: {
            width: 0,
            height: 15,
        },
        shadowOpacity: 0.12,
        shadowRadius: 50,
        elevation: 1,
    },
    image: {
        height: 145,
        width: "100%",
    },
    title: {
        fontSize: 16,
        fontWeight: '400',
        color: '#27214D',
        lineHeight: 24,
        padding: 5,
    },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10
    },
    price: {
        fontSize: 16,
        fontWeight: '700',
        color: '#27214D',
    },
    quantityContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFA451',
        height: 25,
        borderRadius: 8,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5,
        width: 60,
        margin: 5,
    },
    textContent: {
        color: 'white',
        fontSize: 22
    },
    displayText: {
        color: 'white',
        fontWeight: '800',
        fontSize: 14,
        lineHeight: 20,
        fontSize: 18
    },
    addButtonContainer: {
        backgroundColor: '#FFF2E7',
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        width: 30,
        borderRadius: 15,
        top:-3
    },
    addIcon: {
        top: -1,
        right: -0.5,
        fontSize: 25,
        color: '#FFA451'
    }    
});

export default styles;