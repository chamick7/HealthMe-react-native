import { useRef, useState } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import Guide from "../../components/Guide";
import { guideList } from "./data";
import { GuideData } from "./types";
import GuideNavigate from "../../components/GuideNavigate";
import { RootStackParamList } from "../screen";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { SwiperFlatList } from "react-native-swiper-flatlist";

type HomeScreenProp = StackNavigationProp<RootStackParamList, "Home">;

export default function HomePage() {
  const navigation = useNavigation<HomeScreenProp>();
  const ref = useRef(null);
  const [guideIndex, setGuideIndex] = useState(0);

  const navigateNextPage = () => {
    navigation.navigate("Input");
  };

  const _renderItem = ({ item, index }: { item: GuideData; index: number }) => (
    <Guide key={item.title} data={guideList[index]} />
  );

  return (
    <View style={styles.pageStyle}>
      <SwiperFlatList
        ref={ref}
        data={guideList}
        renderItem={_renderItem}
        onChangeIndex={({ index }) => setGuideIndex(index)}
      />
      <GuideNavigate
        data={guideList}
        index={guideIndex}
        navigate={navigateNextPage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pageStyle: {
    flex: 1,
    position: "relative",
  },
});
