import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import React from "react";
import { SIZES } from "../../constants/themes";
import Reusabletile from "../../components/Reuseable/Reusabletile";
import reuseable from "../../components/Reuseable/reuseable.style";
import { SafeAreaView } from "react-native-safe-area-context";
const Departmentlist = ({ navigation }) => {
  const departments = [
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
    <View style={reuseable.container}>
      <View style={{ marginTop: 10 }}>
        <FlatList
          data={departments}
          keyExtractor={(item) => item._id}
          contentContainerStyle={{ columnGap: SIZES.small }}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <Reusabletile
                item={item}
                onPress={() =>
                  navigation.navigate("Departmentdetails", item._id)
                }
              />
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default Departmentlist;

const styles = StyleSheet.create({});
