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
      department: "Shalakya tantra",
      description: "Eye & Ent",
      imageUrl:
        "https://srisriayurvedahospital.org/wp-content/uploads/2021/02/Image-13.jpg",
      page: "Ent",
    },
    {
      _id: "2",
      department: "Kaya Chikitsa",
      description: "Medicine",
      imageUrl:
        "https://www.kevaayurveda.com/wp-content/uploads/2022/04/Additional-Specialities.png",
      page: "Kaya",
    },
    {
      _id: "3",
      department: "Balaroga",
      description: "pediatrics",
      imageUrl:
        "https://thumbs.dreamstime.com/b/family-health-logo-37868056.jpg",
      page: "Balaroga",
    },

    {
      _id: "4",
      department: "Shalya Tantra",
      description: "Surgery",
      imageUrl:
        "https://robertshospital.com/wp-content/uploads/2022/04/General-Surgery.png",
      page: "Surgery",
    },
    {
      _id: "5",
      department: "Roga & VikritiVigyan",
      description: "Pathology",
      imageUrl:
        "https://media.gettyimages.com/id/1529932624/vector/medical-tests-female-scientist-looking-through-microscope-a-scientist-experiment-in-the-lab.jpg?s=612x612&w=0&k=20&c=E1DB2TLWxrSFfT_T2M9nl_OXD3GZPmIatZIotjJtEyI=",
      page: "Pathology",
    },
    {
      _id: "6",
      department: "Prasuti & StriRoga",
      description: "Obstetrics & Gynaecology",
      imageUrl:
        "https://www.motherhoodayurveda.edu.in/wp-content/uploads/2022/02/gynae.jpg",
      page: "Striroga",
    },
    {
      _id: "7",
      department: "Vajikaran",
      description: "Sexology",
      imageUrl:
        "https://previews.123rf.com/images/winwinartlab/winwinartlab2203/winwinartlab220300127/183516587-educaci%C3%B3n-sexual-profesor-y-estudiantes-durante-la-lecci%C3%B3n-de-salud-sexual-la-gente-aprende.jpg",
      page: "Sexology",
    },
    {
      _id: "8",
      department: "Vatavyadhi",
      description: "Brain and Nuerology",
      imageUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/004/698/245/small/brain-human-anatomy-biology-organ-body-system-health-care-and-medical-hand-drawn-cartoon-art-illustration-vector.jpg",
      page: "Brain",
    },
    {
      _id: "9",
      department: "Rachana Sharir",
      description: "Human Anatomy",
      imageUrl:
        "https://thumbs.dreamstime.com/b/cartoon-illustration-human-body-anatomy-hba-white-background-62425127.jpg",
      page: "Anatomy",
    },
  ];
  return (
    <View style={reuseable.container}>
      <View style={{ marginTop: 10 }}>
        <FlatList
          data={departments}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item._id}
          contentContainerStyle={{ columnGap: SIZES.small }}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <Reusabletile
                item={item}
                onPress={() => navigation.navigate(item.page, { item })}
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
