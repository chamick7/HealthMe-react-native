import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import HealthBackground from "../../assets/svg/result/healthBackground.svg";
import DiseaseBox from "../../components/DiseaseBox";
import Diabetes from "../../assets/svg/result/diabetes.svg";
import Asthma from "../../assets/svg/result/asthma.svg";
import Heart from "../../assets/svg/result/heart.svg";
import { useAtom } from "jotai";
import { predictDataAtom, resetAtom } from "../../store/Store";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../screen";
import { StackNavigationProp } from "@react-navigation/stack";

const goodColor = "#3C5AFF";

type HomeScreenProp = StackNavigationProp<RootStackParamList, "Loading">;

export default function ResultPage() {
  const [predictData] = useAtom(predictDataAtom);
  const [, reset] = useAtom(resetAtom);
  const navigation = useNavigation<HomeScreenProp>();

  const tryAgain = () => {
    navigation.navigate("Input");
    reset();
  };

  return (
    <View style={styles.pageStyle}>
      <View style={styles.circle}></View>
      <Text style={styles.nameStyle}>{`${predictData?.name}`} . .</Text>
      <Text style={styles.title}>Your health is at the level...</Text>
      <View style={styles.healthContainer}>
        <HealthBackground style={{ position: "absolute" }} />
        <Text style={[styles.healthText, { color: goodColor }]}>
          {predictData?.health.toUpperCase()}
        </Text>
      </View>
      <Text style={styles.subText}>Health</Text>
      <DiseaseBox
        title="diabetes"
        value={predictData?.diabetes!}
        svg={Diabetes}
      />
      <DiseaseBox
        title="heart disease"
        value={predictData?.heartDisease!}
        svg={Heart}
      />
      <DiseaseBox title="asthma" value={predictData?.asthma!} svg={Asthma} />
      <View style={{ alignItems: "flex-end" }}>
        <Pressable onPress={tryAgain}>
          <Text style={styles.tryText}>Try Again</Text>
        </Pressable>
      </View>

      <View style={styles.footageContainer}>
        <Image
          style={styles.footage}
          source={require("../../assets/images/result/footage.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageStyle: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 35,
    position: "relative",
  },

  nameStyle: {
    fontSize: 30,
    fontFamily: "KanitSemiBold",
    marginLeft: wp("7%"),
    marginTop: hp("6%"),
    marginBottom: hp("4%"),
  },

  circle: {
    position: "absolute",
    width: wp("100%"),
    height: wp("100%"),
    borderRadius: wp("100%") / 2,
    opacity: 0.13,
    backgroundColor: "#139B5C",
    top: "-20%",
    right: "-45%",
  },

  title: {
    width: "100%",
    fontSize: 24,
    fontFamily: "KanitSemiBold",
    textAlign: "center",
    marginBottom: hp("4%"),
  },

  healthContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },

  healthText: {
    fontSize: 74,
    textAlign: "center",
    fontFamily: "KanitSemiBold",
  },

  subText: {
    color: "#D6C90D",
    fontSize: 22,
    fontFamily: "KanitSemiBold",
    textAlign: "center",
    marginBottom: hp("4%"),
  },

  tryText: {
    fontSize: 16,
    color: "#8CD8F9",
  },

  footageContainer: {
    position: "absolute",
    bottom: 5,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },

  footage: {
    width: wp("65%"),
    height: wp("45%"),
  },
});
