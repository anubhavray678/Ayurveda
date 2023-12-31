import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import reuseable from "../Reuseable/reuseable.style";
import ReuseableText from "../Reuseable/ReuseableText";
import { COLORS, SIZES, TEXT } from "../../constants/themes";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Departmentcard from "../Tiles/Departments/Departmentcard";

const Departments = () => {
  const navigation = useNavigation();
  const departments = [
    {
      _id: "1",
      department: "Dermatology",
      description: "tulsi is good for health",
      imageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/022/690/476/small/logo-design-for-beauty-salon-dermatology-center-wellness-house-skincare-cosmetic-natural-healthy-body-care-service-spa-sophisticate-and-feminine-vector.jpg",
      productLink:
        "https://www.amazon.in/Organic-India-Tulsi-Original-100/dp/B07B61GM2C/ref=sr_1_1_sspa?crid=16SRR2RMJRNAG&keywords=tulsi+powder&qid=1702449905&sprefix=tulsi+powder%2Caps%2C200&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    },
    {
      _id: "2",
      department: "ENT",
      description: "tulsi is good for health",
      imageUrl:
        "https://srisriayurvedahospital.org/wp-content/uploads/2021/02/Image-13.jpg",
      productLink:
        "https://www.amazon.in/Organic-India-Tulsi-Original-100/dp/B07B61GM2C/ref=sr_1_1_sspa?crid=16SRR2RMJRNAG&keywords=tulsi+powder&qid=1702449905&sprefix=tulsi+powder%2Caps%2C200&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    },
    {
      _id: "3",
      department: "Kaya Chikitsa- Medicine",
      description: "tulsi is good for health",
      imageUrl:
        "https://www.kevaayurveda.com/wp-content/uploads/2022/04/Additional-Specialities.png",
      productLink:
        "https://www.amazon.in/Organic-India-Tulsi-Original-100/dp/B07B61GM2C/ref=sr_1_1_sspa?crid=16SRR2RMJRNAG&keywords=tulsi+powder&qid=1702449905&sprefix=tulsi+powder%2Caps%2C200&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    },
    {
      _id: "4",
      department: "Balaroga (pediatrics)",
      description: "tulsi is good for health",
      imageUrl:
        "https://thumbs.dreamstime.com/b/family-health-logo-37868056.jpg",
      productLink:
        "https://www.amazon.in/Organic-India-Tulsi-Original-100/dp/B07B61GM2C/ref=sr_1_1_sspa?crid=16SRR2RMJRNAG&keywords=tulsi+powder&qid=1702449905&sprefix=tulsi+powder%2Caps%2C200&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
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
    <View>
      <View
        style={[reuseable.rowWithSpace("space-between"), { paddingBottom: 20 }]}
      >
        <ReuseableText
          text={"Med by Departments"}
          family={"medium"}
          size={TEXT.Large}
          color={COLORS.black}
        />
        <TouchableOpacity onPress={() => navigation.navigate("Departmentlist")}>
          <Feather name="list" size={20} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={departments}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: SIZES.medium }}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Departmentcard
            item={item}
            margin={10}
            onPress={() => navigation.navigate("Departmentdetails", item._id)}
          />
        )}
      />
    </View>
  );
};

export default Departments;

const styles = StyleSheet.create({});
