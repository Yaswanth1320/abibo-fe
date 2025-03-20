import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  TextInput,
  Animated,
  Dimensions,
  Easing,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import BestDeals from "../components/BestDeals";

const { width: screenWidth } = Dimensions.get("window");

const HomeScreenHeader = ({ menuOpen, setMenuOpen }) => {
  const navigation = useNavigation();

  const handleMenuPress = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <View style={styles.header}>
      <View style={styles.wrapper}>
        <View style={styles.leftSection}>
          <TouchableOpacity onPress={handleMenuPress}>
            <Ionicons name="menu-outline" size={30} color="#333" />
          </TouchableOpacity>
          <Image
            source={require("../assets/logo-r.png")}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.rightSection}>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={24} color="crimson" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.notificationButton}>
            <Ionicons name="notifications-outline" size={22} color="crimson" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cartButton}
            onPress={() => navigation.navigate("Orders")}
          >
            <Ionicons name="cart-outline" size={22} color="crimson" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons
          name="search-outline"
          size={22}
          color="#888"
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search here"
          placeholderTextColor="#aaa"
        />
        <TouchableOpacity>
          <Ionicons name="mic-outline" size={26} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const HomeScreen = () => {
  const navigation = useNavigation();
  const scrollX = useRef(new Animated.Value(0)).current;
  const [menuOpen, setMenuOpen] = useState(false);
  const translateX = useRef(new Animated.Value(-screenWidth * 0.7)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: menuOpen ? 0 : -screenWidth * 0.7,
      duration: 300,
      easing: Easing.linear, // simple animation
      useNativeDriver: true, // performance of the system
    }).start();
  }, [menuOpen]);

  const categories = [
    { id: "1", title: "Flours", image: require("../assets/flour.webp") },
    {
      id: "2",
      title: "Essentials",
      image: require("../assets/essentials.webp"),
    },
    { id: "3", title: "Machines", image: require("../assets/machines.webp") },
    { id: "4", title: "Decoration", image: require("../assets/bd.webp") },
    { id: "5", title: "Essence", image: require("../assets/essence.avif") },
  ];

  const topRatedProducts = [
    {
      id: "5",
      sellerName: "Seller1",
      productName: "Product 1",
      rating: 4.9,
      image: require("../assets/cupcakes.jpg"),
    },
    {
      id: "6",
      sellerName: "Seller2",
      productName: "Product 2",
      rating: 4.8,
      image: require("../assets/cookies.jpeg"),
    },
    {
      id: "7",
      sellerName: "Seller3",
      productName: "Product 3",
      rating: 4.1,
      image: require("../assets/pan.webp"),
    },
    {
      id: "8",
      sellerName: "Seller4",
      productName: "Product 4",
      rating: 4.5,
      image: require("../assets/dough.jpg"),
    },
    {
      id: "9",
      sellerName: "Seller5",
      productName: "Product 5",
      rating: 4.3,
      image: require("../assets/cakes.jpg"),
    },
  ];

  const topBrands = [
    {
      id: "9",
      brandName: "Brand 1",
      productType: "Type A",
      description: "Description 1",
      rating: 4.9,
      image: require("../assets/brand1.png"),
    },
    {
      id: "10",
      brandName: "Brand 2",
      productType: "Type B",
      description: "Description 2",
      rating: 4.9,
      image: require("../assets/brand2.jpg"),
    },
    {
      id: "11",
      brandName: "Brand 3",
      productType: "Type C",
      description: "Description 3",
      rating: 4.9,
      image: require("../assets/brand3.webp"),
    },
  ];

  const deals = [
    {
      id: "1",
      title: "Today's Deal",
      discount: "50% OFF",
      text: "Grab it now to get the offer",
      image: require("../assets/cake.jpg"),
    },
    {
      id: "2",
      title: "Summer Sale",
      discount: "70% OFF",
      text: "Summer discounts are here!",
      image: require("../assets/brand2.jpg"),
    },
    {
      id: "3",
      title: "Winter Deal",
      discount: "80% OFF",
      text: "Winter is coming",
      image: require("../assets/dough.jpg"),
    },
  ];

  const flatListRef = useRef(null);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % deals.length;
      flatListRef.current?.scrollToOffset({
        offset: currentIndex * screenWidth,
        animated: true,
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [deals.length]);

  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.categoryItem} key={item.id}>
      <Image
        source={item.image}
        style={styles.categoryImage}
        resizeMode="contain"
      />
      <Text style={styles.categoryText}>{item.title}</Text>
    </TouchableOpacity>
  );

  const menuCategoryItem = ({ item }) => (
    <TouchableOpacity style={styles.menuCategoryItem} key={item.id}>
      <Text style={styles.menuCategoryText}>{item.title}</Text>
      <Image
        source={item.image}
        style={styles.menuCategoryImage}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );

  const renderTopRatedItem = ({ item }) => (
    <TouchableOpacity style={styles.topRatedItem} key={item.id}>
      <Image
        source={item.image}
        style={styles.topRatedImage}
        resizeMode="contain"
      />
      <Text style={styles.topRatedSeller}>{item.sellerName}</Text>
      <Text style={styles.topRatedProduct}>{item.productName}</Text>
      <View style={styles.ratingContainer}>
        <Ionicons name="star" size={14} color="crimson" />
        <Text style={styles.rating}>{item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderBrandItem = ({ item }) => (
    <View style={styles.brandCard} key={item.id}>
      <Image source={item.image} style={styles.brandImage} resizeMode="cover" />
      <View style={styles.brandDetails}>
        <View style={styles.brandTop}>
          <Ionicons name="person-circle-outline" size={36} color="black" />
          <View style={styles.detailsRight}>
            <Text style={styles.brandName}>{item.brandName}</Text>
            <Text style={styles.brandType}>{item.productType}</Text>
          </View>
        </View>
        <Text style={styles.brandDescription}>{item.description}</Text>
        <View style={styles.brandBottom}>
          <View style={styles.ratingContainer}>
            <Ionicons name="star" size={14} color="crimson" />
            <Text style={styles.rating}>{item.rating}</Text>
          </View>
          <TouchableOpacity style={styles.shopNowButton}>
            <Text style={styles.shopNowText}>Shop Now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  const renderDealItem = ({ item, index }) => {
    return (
      <View style={styles.dealBanner} key={item.id}>
        <Text style={styles.dealTitle}>{item.title}</Text>
        <Text style={styles.dealDiscount}>{item.discount}</Text>
        <Text style={styles.dealText}>{item.text}</Text>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buyButtonText}>
            Buy it now <Ionicons name="arrow-forward" size={16} color="white" />
          </Text>
        </TouchableOpacity>
        <Image
          source={item.image}
          style={styles.dealImage}
          resizeMode="contain"
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <HomeScreenHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Animated.View
          style={[
            styles.menuContainer,
            { transform: [{ translateX }] }, // Apply translateX animation
          ]}
        >
          <View style={styles.menuTop}>
            <Text style={styles.menuText}>Shop by Categories</Text>
            <TouchableOpacity
              onPress={() => setMenuOpen(false)}
              style={styles.menuButton}
            >
              <Ionicons name="close" size={25} color="black" />
            </TouchableOpacity>
          </View>

          <View style={styles.catListContainer}>
            <FlatList
              data={categories}
              renderItem={menuCategoryItem}
              keyExtractor={(item) => item.id}
            />
          </View>
        </Animated.View>

        <ScrollView style={styles.scrollContainer}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <FlatList
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesContainer}
          />

          <Animated.FlatList
            ref={flatListRef}
            data={deals}
            renderItem={renderDealItem}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: false }
            )}
            scrollEventThrottle={16}
          />

          {/* Top Rated Products */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Rated Products</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={topRatedProducts}
            renderItem={renderTopRatedItem}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.topRatedContainer}
          />

          {/* Top Brands */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Top Brands</Text>
            <TouchableOpacity>
              <Text style={styles.viewAll}>View All</Text>
            </TouchableOpacity>
          </View>
          {topBrands.map((item) => (
            <React.Fragment key={item.id}>
              {renderBrandItem({ item })}
            </React.Fragment>
          ))}

          <View>
            <BestDeals />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flex: 1, // added
  },
  header: {
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logo: {
    width: 120,
    height: 40,
    marginLeft: 10,
  },
  notificationButton: {
    marginLeft: 16,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "rgba(255, 182, 193, 0.3)",
  },
  cartButton: {
    marginLeft: 16,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "rgba(255, 182, 193, 0.3)",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  menuContainer: {
    flexDirection: "column",
    backgroundColor: "rgba(0,0,0,0.6)", // Black for the side menu
    width: screenWidth * 0.7, // 70% of the screen width
    height: "100%", // Fill the whole screen height
    position: "absolute",
    top: 0,
    left: 0, // Moved position to use absolute on the left 0
    zIndex: 2,
    padding: 5,
    borderTopRightRadius: 20,
  },
  menuTop: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 10,
  },
  menuButton: {
    padding: 10,
    borderRadius: 10,
    paddingBottom: 5,
  },
  menuText: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Montserrat_400Regular",
  },
  catListContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  menuCategoryItem: {
    backgroundColor: "rgba(63, 57, 57, 0.1)",
    marginBottom: 10,
    borderRadius: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  menuCategoryImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  menuCategoryText: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Montserrat_400Regular",
    marginLeft: 15,
  },
  menuCategoryImage: {
    width: 80,
    height: 80,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    paddingHorizontal: 20,
    marginTop: 6,
    fontFamily: "Montserrat_400Regular",
    marginBottom: 2,
  },
  categoriesContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 5,
  },
  categoryItem: {
    marginRight: 8,
    padding: 8,
    alignItems: "center",
  },
  categoryImage: {
    width: 77,
    height: 77,
    borderRadius: 25,
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "#f5f5f5",
  },
  categoryText: {
    fontSize: 12,
    fontFamily: "Montserrat_400Regular",
  },
  dealBanner: {
    width: screenWidth,
    backgroundColor: "rgba(255, 182, 193, 0.3)",
    height: 235,
    padding: 20,
    position: "relative",
    justifyContent: "center",
    marginBottom: 20,
  },
  dealGradient: {
    backgroundColor: "rgba(255, 182, 193, 0.3)",
    padding: 20,
    borderRadius: 15,
    marginHorizontal: 20,
    marginBottom: 20,
    position: "relative",
    overflow: "hidden",
  },

  dealTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
    fontFamily: "Montserrat_400Regular",
  },
  dealDiscount: {
    fontSize: 36,
    fontWeight: "bold",
    color: "crimson",
    marginBottom: 10,
    fontFamily: "Montserrat_400Regular",
  },
  dealText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 25,
    fontFamily: "Montserrat_400Regular",
  },
  buyButton: {
    backgroundColor: "#222",
    color: "#000000",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  buyButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
    fontFamily: "Montserrat_400Regular",
  },
  dealImage: {
    position: "absolute",
    bottom: 0,
    right: 15,
    width: 180,
    height: 220,
    borderRadius: 30,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 4,
    marginBottom: 25,
  },
  viewAll: {
    marginRight: 20,
    color: "crimson",
    fontFamily: "Montserrat_400Regular",
    textDecorationLine: "underline",
  },
  topRatedContainer: {
    paddingHorizontal: 23,
    marginBottom: 30,
  },
  topRatedItem: {
    marginRight: 15,
    alignItems: "center",
  },
  topRatedImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 6,
  },
  topRatedSeller: {
    fontSize: 10,
    color: "#666",
    fontFamily: "Montserrat_400Regular",
    marginBottom: 2,
  },
  topRatedProduct: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 5,
    fontFamily: "Montserrat_400Regular",
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "whitesmoke",
    fontFamily: "Montserrat_400Regular",
    padding: 5,
    borderRadius: 20,
  },
  rating: {
    fontSize: 12,
    color: "#333",
    marginLeft: 3,
  },
  brandCard: {
    flexDirection: "row",
    marginHorizontal: 20,
    marginBottom: 15,
    overflow: "hidden",
    position: "relative",
    marginLeft: 30,
  },
  brandImage: {
    width: 200,
    height: 160,
    borderRadius: 10,
  },
  brandDetails: {
    backgroundColor: "whitesmoke",
    flex: 1,
    padding: 15,
    position: "absolute",
    top: 17,
    left: 150,
    borderRadius: 10,
    width: "55%",
  },
  brandTop: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
  },
  detailsRight: {
    marginLeft: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  brandName: {
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Montserrat_400Regular",
    marginBottom: 2,
  },
  brandType: {
    fontSize: 12,
    color: "#666",
    fontFamily: "Montserrat_400Regular",
    color: "crimson",
  },
  brandDescription: {
    fontSize: 12,
    color: "#666",
    fontFamily: "Montserrat_400Regular",
    marginBottom: 7,
  },
  brandBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    fontFamily: "Montserrat_400Regular",
  },
  shopNowButton: {
    backgroundColor: "crimson",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 8,
  },
  shopNowText: {
    color: "#fff",
    fontSize: 12,
    fontFamily: "Montserrat_400Regular",
  },
  menuButton: {
    alignItems: "flex-end",
  },
  otpMessageTextContainer: {
    alignItems: "flex-start",
  },

  clickHereLink: {
    color: "crimson",
    textDecorationLine: "underline",
    fontSize: 14,
    fontFamily: "Montserrat_400Regular",
    paddingVertical: 2,
  },
  menuFalse: {
    position: "absolute",
    width: "70%",
    height: "100%",
    zIndex: 1,
    left: -1000,
  },
  menuContainer: {
    flexDirection: "column",
    backgroundColor: "white",
    width: screenWidth * 0.7,
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    padding: 20,
    transform: [{ translateX: 10 }],
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  catListContainer: {
    flex: 1,
  },
});

export default HomeScreen;
