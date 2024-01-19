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
      description:
        "Tulsi or Holy basil is a widely known herb in the family Lamiaceae. It is native to India and vastly cultivated throughout Southeast Asia.Tulsi has a special place in Ayurveda as well as the home of Hindus in India. It is considered sacred by Hindus and worshipped by them. Three main types of Tulsi are seen growing in India:",
      imageUrl:
        "https://media.istockphoto.com/id/178131902/photo/medicinal-holy-basil-or-tulsi-leaves.jpg?s=612x612&w=0&k=20&c=u0BUk4rQjKJJKoCFOTO2U0EsqKlPLunqNU3VTr6VGZA=",
      productLink:
        "https://www.amazon.in/Organic-India-Tulsi-Original-100/dp/B07B61GM2C/ref=sr_1_1_sspa?crid=16SRR2RMJRNAG&keywords=tulsi+powder&qid=1702449905&sprefix=tulsi+powder%2Caps%2C200&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
      benefits: {
        point1: "1. Natural Immunity Booster:",
        desc1:
          "Tulsi is rich in Vitamin C and zinc. It thus acts as a natural immunity booster and keeps infections at bay. It has immense anti-bacterial, anti-viral and anti-fungal properties which protect us from a variety of infections. Tulsi leaves extract increases the T helper cells and natural killer cells activity, boosting the immune system.",
        point2: "2. Reduces Fever (antipyretic) & Pain(analgesic):",
        desc2:
          "Tulsi has anti-bacterial and anti-viral properties which help to fight infections, thus reducing fever. The fresh juice of Tulsi taken with black pepper powder cures periodic fevers. Tulsi leaves boiled with powdered cardamom (elaichi) in half a litre of water and mixed with sugar and milk, are also effective in reducing temperature.",
        point3: "3. Reduces Cold, Cough & Other Respiratory Disorders:",
        desc3:
          "Camphene, cineole and eugenol present in Tulsi help reduce cold and congestion in the chest. Juice of Tulsi leaves mixed with honey and ginger is effective in bronchitis, asthma, influenza, cough and cold.",
      },
    },
    {
      _id: "2",
      herb: "Aloe Vera",
      description:
        "The scientific name of aloe vera is Aloe barbadensis miller. It belongs to the family Liliaceae. Its leaves are fleshy with tiny thorns at the edges. Its flowers are like tubes and its fruits have lots of seeds. The aloe vera plant may have a diverse range of potential uses in health, skincare and beauty. Aloe vera has been held in high regard for a long time, about 2000 years ago. It was regarded as the universal panacea by Greek scientists. It has been used by some of the most prominent names in history like Queen Cleopatra, Alexander the great and Christopher Columbus.",
      imageUrl:
        "https://5.imimg.com/data5/NP/GJ/XY/SELLER-15011588/natural-aloe-vera-leaf.jpg",
      productLink:
        "https://www.amazon.in/Organic-India-Tulsi-Original-100/dp/B07B61GM2C/ref=sr_1_1_sspa?crid=16SRR2RMJRNAG&keywords=tulsi+powder&qid=1702449905&sprefix=tulsi+powder%2Caps%2C200&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
      benefits: {
        point1: "1. Potential uses of Aloe vera juice for Diabetes:",
        desc1:
          "Aloe vera has been used traditionally for the treatment of diabetes since a long time in different parts of the world. Studies done in animals and even on humans have shown that aloe vera might have a positive effect on the blood sugar level. In some studies, aloe vera gel was administered alone, while in some studies it was mixed with certain other ingredients like psyllium husk (isabgol) and in one study it was given with a medicine prescribed for diabetes.",
        point2: "2.Potential uses of Aloe vera for Constipation:",
        desc2:
          "The presence of a bioactive anthraquinone glycosides in aloe vera might be responsible for its laxative potential (promotes passage of stools). In one of the studies, a preparation containing aloe vera was found to potentially help with a range of symptoms that occur due to chronic constipation.4 However, more studies are required to prove such claims.  ",
        point3: "3. Potential uses of Aloe vera for Stomach problems:",
        desc3:
          "Aloe vera might have a potential as a remedy for ulcers of the stomach and inflammatory disease of the bowel.4 Many studies have been conducted to prove the use of aloe vera gel in the form of juice for ulcerative colitis, irritable bowel syndrome (IBS), etc. but the results were not consistent. Also helpful for Skin and Hair problems.",
      },
    },
    {
      _id: "3",
      herb: "Neem",
      description:
        "Azadirachta indica, commonly known as neem in India, is also called ‘Margosa’ or ‘Indian Lilac’. It is the most versatile, diverse (different varieties of species) tree in the tropical region (hot regions), that might have medicinal potential. Neem has a lot of beneficial non-wood products like flowers, leaves, fruits, bark, gum, oil, seeds, and neem cake (residue left over after oil is pressed from neem seeds).Leaf meals from some tropical legumes have been explored due to the need to look for alternative sources of food for humans and feed for livestock. Neem leaf meal was analysed in a study that found that it has 18.10% crude protein and relatively high crude fibre of about 15-56%. Though the  gross energy content was high at 4.16 kcal/g, the metabolizable energy is low.",
      imageUrl:
        "https://t3.ftcdn.net/jpg/04/09/16/02/360_F_409160229_cgsY3FzQce1luJK7wASQ1xy1Ax4wtsdL.webp",
      productLink:
        "https://www.amazon.in/Organic-India-Tulsi-Original-100/dp/B07B61GM2C/ref=sr_1_1_sspa?crid=16SRR2RMJRNAG&keywords=tulsi+powder&qid=1702449905&sprefix=tulsi+powder%2Caps%2C200&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
      benefits: {
        point1: "1. Potential uses of Neem for Inflammation and Arthritis:",
        desc1:
          "Studies have shown that a chemical found in neem, called nimbidin, might possess anti-inflammatory and anti-arthritic activity. Nimbidin might help inhibit the inflammatory action of macrophages and neutrophils. Neem might aid in lowering inflammation and might help reduce associated swelling and pain. It might also be helpful for rheumatoid arthritis, a disease characterised by inflammation and pain in the joints and muscles due to auto-immune reactions.",
        point2: "2. Potential uses of Neem for Infections:",
        desc2:
          "Viral infections: Neem might help with dengue fever by possibly stopping the growth of the dengue virus. It might interfere with the replication of the coxsackie B virus, a group of viruses that causes ailments ranging from stomach upset to full-fledged infections in humans. Neem leaf has traditionally been used for viral diseases such as chickenpox and smallpox as well.However, more studies are required to prove such claims.Bacterial infections and Skin infections: Recent studies have focused on antibacterial activities of neem in the mouth, specifically in gum disease and tooth cavities.Neem is also thought to be very effective in managing scabies, but sufficient scientific data does not exist for human studies.Since neem might have potential antimicrobial properties, it may be helpful for various skin problems and diseases such as acne, eczema, and other skin conditions. Neem oil might also help with psoriasis symptoms.Fungal infections: Studies have shown that neem might have antifungal characteristics, which might help with fungal infections like athlete’s foot, ringworm and candida, commonly called as a yeast infection or thrush-causing organism. Thrush is a fungal infection that can occur in the mouth, throat or other parts of the body.3 However, more research is required.",
        point3: "3. Potential uses of Neem for Liver:",
        desc3:
          "Neem might have some effect on liver protection, which in turn might aid the purification of blood. Neem leaf might help reduce liver damage occurring due to chemicals by stabilising serum marker enzyme levels and by increasing antioxidant levels, like those present in natural carotenoids, vitamin E and C. These antioxidants might help to neutralize free radicals and may inhibit damage.",
      },
    },

    {
      _id: "4",
      herb: "AshwGndha",
      description:
        "Ashwagandha or Withania somnifera is a popular herb in the Ayurvedic system of medicine. It is a small shrub that belongs to the family Solanaceae. It might be useful for different diseases and mostly as a nervine tonic (has a soothing effect on nerves). Ashwagandha is commonly called Indian Ginseng or Indian winter cherry. Ashwagandha is known for its rasayana (tonic) property. Rasayana is a herbal or metallic formulation that stimulates a youthful physical and mental state of health as well as happiness.",
      imageUrl:
        "https://satvikagro.com/wp-content/uploads/2016/10/1-500x500-1.jpg",
      productLink:
        "https://www.amazon.in/Organic-India-Tulsi-Original-100/dp/B07B61GM2C/ref=sr_1_1_sspa?crid=16SRR2RMJRNAG&keywords=tulsi+powder&qid=1702449905&sprefix=tulsi+powder%2Caps%2C200&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1",
      benefits: {
        point1: "1. Potential use of ashwagandha for pain:",
        desc1:
          "In a study, treatment with an aqueous extract of ashwagandha showed potential to increase the pain threshold (a point beyond which a trigger produces pain) compared to that of placebo showing that ashwagandha might be an analgesic agent.",
        point2: "1. Natural Immunity Booster:",
        desc2:
          "The circulatory system and cardiovascular health are adversely affected due to mental stress. Stress also affects the body’s antioxidant defence system. Ashwagandha might help the body adapt to stress. It may also effective in improving mental and physical health.",
        point3: "3. Potential use of ashwagandha for arthritis:",
        desc3:
          "Ashwagandha might have potential anti-arthritic properties that may be widely accepted and reported. Ashwagandha might help relieve pain by soothing the nervous system. In an experimental study, patients were given a formula containing ashwagandha. This herbal formulation showed the potential to reduce the severity of pain and disability.",
      },
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
