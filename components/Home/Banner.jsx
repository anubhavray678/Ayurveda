import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ReuseableText from "../Reuseable/ReuseableText";
import reuseable from "../Reuseable/reuseable.style";
import { COLORS, SIZES, TEXT } from "../../constants/themes";
import Bannercard from "../Tiles/Banner/Bannercard";

const Banner = () => {
  const departments = [
    {
      _id: "1",
      department: "Tulsi",
      description: "tulsi is good for health",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlTLa9HUEbxKqLDp1B64CUN54IxFmvewjrcg&usqp=CAU",
      productLink:
        "https://www.amazon.in/Organic-India-Tulsi-Original-100/dp/B07B61GM2C/ref=sr_1_1_sspa?crid=16SRR2RMJRNAG&keywords=tulsi+powder&qid=1702449905&sprefix=tulsi+powder%2Caps%2C200&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    },
    {
      _id: "2",
      department: "Tulsi",
      description: "tulsi is good for health",
      imageUrl:
        "https://media.istockphoto.com/id/178131902/photo/medicinal-holy-basil-or-tulsi-leaves.jpg?s=612x612&w=0&k=20&c=u0BUk4rQjKJJKoCFOTO2U0EsqKlPLunqNU3VTr6VGZA=",
      productLink:
        "https://www.amazon.in/Organic-India-Tulsi-Original-100/dp/B07B61GM2C/ref=sr_1_1_sspa?crid=16SRR2RMJRNAG&keywords=tulsi+powder&qid=1702449905&sprefix=tulsi+powder%2Caps%2C200&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    },
    {
      _id: "3",
      department: "Tulsi",
      description: "tulsi is good for health",
      imageUrl:
        "https://yashremedies.com/cdn/shop/files/Banner1_6617d195-69fd-484c-99a9-9eeac21e126a.jpg?v=1692598358",
      productLink:
        "https://www.amazon.in/Organic-India-Tulsi-Original-100/dp/B07B61GM2C/ref=sr_1_1_sspa?crid=16SRR2RMJRNAG&keywords=tulsi+powder&qid=1702449905&sprefix=tulsi+powder%2Caps%2C200&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    },
    {
      _id: "4",
      department: "Tulsi",
      description: "tulsi is good for health",
      imageUrl:
        "https://www.shutterstock.com/image-photo/different-fresh-herbs-spices-on-600nw-2162714633.jpg",
      productLink:
        "https://www.amazon.in/Organic-India-Tulsi-Original-100/dp/B07B61GM2C/ref=sr_1_1_sspa?crid=16SRR2RMJRNAG&keywords=tulsi+powder&qid=1702449905&sprefix=tulsi+powder%2Caps%2C200&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    },
    {
      _id: "5",
      department: "Tulsi",
      description: "tulsi is good for health",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXVPWwL0sZnX5Y-mv1NJOlIH5_412EsjfpPA&usqp=CAU",
      productLink:
        "https://www.amazon.in/Organic-India-Tulsi-Original-100/dp/B07B61GM2C/ref=sr_1_1_sspa?crid=16SRR2RMJRNAG&keywords=tulsi+powder&qid=1702449905&sprefix=tulsi+powder%2Caps%2C200&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    },
  ];
  return (
    <View>
      <View
        style={[reuseable.rowWithSpace("space-between"), { paddingBottom: 10 }]}
      ></View>

      <FlatList
        data={departments}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: SIZES.small }}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Bannercard item={item} margin={1} mode={"contain"} />
        )}
      />
    </View>
  );
};

export default Banner;

const styles = StyleSheet.create({});
