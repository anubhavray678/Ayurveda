import {
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Text,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import reusable from "../../components/Reuseable/reuseable.style";
import styles from "./search.style";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../constants/themes";
import Reusabletile from "../../components/Reuseable/Reusabletile";

const Search = ({ navigation }) => {
  const [searchKey, setSearchKey] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const search = [
    {
      _id: "1",
      department: "Dermatology",
      description: "tulsi is good for health",
      imageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/022/690/476/small/logo-design-for-beauty-salon-dermatology-center-wellness-house-skincare-cosmetic-natural-healthy-body-care-service-spa-sophisticate-and-feminine-vector.jpg",
    },
    {
      _id: "2",
      department: "ENT",
      description: "tulsi is good for health",
      imageUrl:
        "https://srisriayurvedahospital.org/wp-content/uploads/2021/02/Image-13.jpg",
    },
    {
      _id: "3",
      department: "Kaya Chikitsa- Medicine",
      description: "tulsi is good for health",
      imageUrl:
        "https://www.kevaayurveda.com/wp-content/uploads/2022/04/Additional-Specialities.png",
    },
    {
      _id: "4",
      department: "Balaroga (pediatrics)",
      description: "tulsi is good for health",
      imageUrl:
        "https://thumbs.dreamstime.com/b/family-health-logo-37868056.jpg",
    },
    {
      _id: "5",
      department: "Shalakya tantra (Eye & Ent)",
      description: "tulsi is good for health",
      imageUrl:
        "https://i.pinimg.com/originals/cb/94/dd/cb94ddcf0456e911832fd4f8b57dc93e.jpg",
    },
  ];
  return (
    <SafeAreaView style={reusable.container}>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.input}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder="Search your medicine..."
          />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Feather name="search" size={26} color={COLORS.white} />
        </TouchableOpacity>
      </View>

      {search.length === 0 ? (
        <View>
          <Image
            source={require("../../assets/images/search/resulticon.png")}
            style={styles.searchImage}
          />
        </View>
      ) : (
        <FlatList
          data={search}
          // contentContainerStyle={{ columnGap: SIZES.medium }}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={styles.tile}>
              <Reusabletile
                item={item}
                onPress={() =>
                  navigation.navigate("Departmentdetails", item._id)
                }
              />
            </View>
          )}
        />
      )}
    </SafeAreaView>
  );
};

export default Search;
