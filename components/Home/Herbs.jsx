import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HeightSpacer from "../Reuseable/HeightSpacer";
import { SIZES } from "../../constants/themes";
import { VirtualizedList } from "react-native";
import Herbtile from "../Tiles/Herbs/Herbtile";
const Herbs = () => {
  const herbs = [
    {
      _id: "1",
      herb: "Tulsi",
      description: "tulsi is good for health",
      imageUrl:
        "https://media.istockphoto.com/id/178131902/photo/medicinal-holy-basil-or-tulsi-leaves.jpg?s=612x612&w=0&k=20&c=u0BUk4rQjKJJKoCFOTO2U0EsqKlPLunqNU3VTr6VGZA=",
      productLink:
        "https://www.amazon.in/Organic-India-Tulsi-Original-100/dp/B07B61GM2C/ref=sr_1_1_sspa?crid=16SRR2RMJRNAG&keywords=tulsi+powder&qid=1702449905&sprefix=tulsi+powder%2Caps%2C200&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    },
    {
      _id: "2",
      herb: "Aloe Vera",
      description: "tulsi is good for health",
      imageUrl:
        "https://5.imimg.com/data5/NP/GJ/XY/SELLER-15011588/natural-aloe-vera-leaf.jpg",
      productLink:
        "https://www.amazon.in/Organic-India-Tulsi-Original-100/dp/B07B61GM2C/ref=sr_1_1_sspa?crid=16SRR2RMJRNAG&keywords=tulsi+powder&qid=1702449905&sprefix=tulsi+powder%2Caps%2C200&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    },
    {
      _id: "3",
      herb: "Neem",
      description: "tulsi is good for health",
      imageUrl:
        "https://t3.ftcdn.net/jpg/04/09/16/02/360_F_409160229_cgsY3FzQce1luJK7wASQ1xy1Ax4wtsdL.webp",
      productLink:
        "https://www.amazon.in/Organic-India-Tulsi-Original-100/dp/B07B61GM2C/ref=sr_1_1_sspa?crid=16SRR2RMJRNAG&keywords=tulsi+powder&qid=1702449905&sprefix=tulsi+powder%2Caps%2C200&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    },

    {
      _id: "4",
      herb: "AshwGndha",
      description: "tulsi is good for health",
      imageUrl:
        "https://satvikagro.com/wp-content/uploads/2016/10/1-500x500-1.jpg",
      productLink:
        "https://www.amazon.in/Organic-India-Tulsi-Original-100/dp/B07B61GM2C/ref=sr_1_1_sspa?crid=16SRR2RMJRNAG&keywords=tulsi+powder&qid=1702449905&sprefix=tulsi+powder%2Caps%2C200&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
    },
  ];
  return (
    <View>
      <HeightSpacer height={20} />

      <VirtualizedList
        data={herbs}
        horizontal
        refreshing
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item._id}
        getItemCount={(data) => data.length}
        getItem={(data, index) => data[index]}
        renderItem={({ item, index }) => (
          <View style={{ marginRight: SIZES.medium }}>
            <Herbtile item={item} />
          </View>
        )}
      />
    </View>
  );
};

export default Herbs;

const styles = StyleSheet.create({});
