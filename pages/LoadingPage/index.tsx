import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import BouncingPreloader from "react-native-bouncing-preloaders";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import useSendData from "../../hooks/useSendData";
import { RootStackParamList } from "../screen";
import {
  nameAtom,
  predictDataAtom,
  predictRequestAtom,
} from "./../../store/Store";
import { useAtom } from "jotai";

type HomeScreenProp = StackNavigationProp<RootStackParamList, "Loading">;

export default function LoadingPage() {
  const navigation = useNavigation<HomeScreenProp>();
  const [predictRequest] = useAtom(predictRequestAtom);
  const [, setPredictData] = useAtom(predictDataAtom);
  const [name] = useAtom(nameAtom);
  const { sendData } = useSendData();

  useEffect(() => {
    const sendRequest = async () => {
      const data = await sendData(predictRequest);
      if (data) {
        setPredictData({
          asthma: data.Asthma === "Positive",
          diabetes: data.Diabetes === "Positive",
          heartDisease: data.Heart === "Positive",
          health: data.GoodHealth,
          name: name,
        });

        navigation.navigate("Result");
      }
    };

    sendRequest();
  }, []);

  return (
    <View style={styles.pageStyle}>
      <View style={{ marginBottom: 50 }}>
        <BouncingPreloader
          icons={[
            require("../../assets/images/loading/doll.png"),
            require("../../assets/images/loading/dumbell.png"),
            require("../../assets/images/loading/hand.png"),
          ]}
          leftRotation="-680deg"
          rightRotation="360deg"
          leftDistance={-280}
          rightDistance={-450}
          speed={1200}
          size={wp("25%")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageStyle: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
