import React from "react";
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
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const HomeScreenHeader = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      {/* Menu Icon and Logo */}
      <View style={styles.wrapper}>
        <View style={styles.leftSection}>
          <TouchableOpacity>
            <Ionicons name="menu-outline" size={30} color="#333" />
          </TouchableOpacity>
          <Image
            source={require("../assets/logo-r.png")} // Replace with your logo
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Heart, Notification, and Cart Icons */}
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

      {/* Search Bar */}
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

  const categories = [
    { id: "1", title: "Flours", image: require("../assets/flour.webp") }, // Replace paths
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
      rating: 4.9,
      image: require("../assets/cookies.jpeg"),
    },
    {
      id: "7",
      sellerName: "Seller3",
      productName: "Product 3",
      rating: 4.9,
      image: require("../assets/pan.webp"),
    },
    {
      id: "8",
      sellerName: "Seller4",
      productName: "Product 4",
      rating: 4.9,
      image: require("../assets/dough.jpg"),
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
    <TouchableOpacity style={styles.brandCard} key={item.id}>
      <Image source={item.image} style={styles.brandImage} resizeMode="cover" />
      <View style={styles.brandDetails}>
        <Ionicons name="person-circle-outline" size={36} color="black" />
        <Text style={styles.brandName}>{item.brandName}</Text>
        <Text style={styles.brandType}>{item.productType}</Text>
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
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        <HomeScreenHeader />

        {/* Categories */}
        <Text style={styles.sectionTitle}>Categories</Text>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
        />

        {/* Todays Deal */}
        <View style={styles.dealBanner}>
          <Text style={styles.dealTitle}>Today's Deal</Text>
          <Text style={styles.dealDiscount}>50% OFF</Text>
          <Text style={styles.dealText}>Grab it now to get the offer</Text>
          <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>
              Buy it now{" "}
              <Ionicons name="arrow-forward" size={16} color="white" />
            </Text>
          </TouchableOpacity>
          <Image
            source={require("../assets/cake.jpg")} // Replace with actual path
            style={styles.dealImage}
            resizeMode="contain"
          />
        </View>

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
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 10,
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
    borderRadius: 25, //Make it a circle if width and height are the same
    marginBottom: 5,
    borderWidth: 1,
    borderColor: "#f5f5f5",
  },
  categoryText: {
    fontSize: 12,
    fontFamily: "Montserrat_400Regular",
  },
  dealBanner: {
    backgroundColor: "rgba(255, 182, 193, 0.3)",
    padding: 30,
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
    right: 10,
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
  },
  topRatedContainer: {
    paddingHorizontal: 23,
    marginBottom: 30,
  },
  topRatedItem: {
    marginRight: 18,
    alignItems: "center",
  },
  topRatedImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 5,
  },
  topRatedSeller: {
    fontSize: 10,
    color: "#666",
  },
  topRatedProduct: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 3,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  rating: {
    fontSize: 12,
    color: "#333",
    marginLeft: 3,
  },
  brandCard: {
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    borderRadius: 15,
    marginHorizontal: 20,
    marginBottom: 15,
    overflow: "hidden",
  },
  brandImage: {
    width: 120,
    height: 120,
  },
  brandDetails: {
    flex: 1,
    padding: 15,
  },
  brandName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  brandType: {
    fontSize: 12,
    color: "#666",
  },
  brandDescription: {
    fontSize: 12,
    color: "#555",
    marginTop: 5,
  },
  brandBottom: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
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
  },
});

export default HomeScreen;
