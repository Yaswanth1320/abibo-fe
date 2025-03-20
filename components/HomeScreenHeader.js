
import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

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
            source={require('../assets/logo-r.png')} // Replace with your logo path
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

const styles = StyleSheet.create({
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
    fontFamily: "Montserrat_400Regular",
  },
});

export default HomeScreenHeader;