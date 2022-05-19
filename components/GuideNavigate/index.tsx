import { StyleSheet, View, Text } from "react-native";
import { GuideData } from "../../pages/HomePage/types";
import GetStartedButton from "../Buttons/GetStarted";
import Step from "../Step";

interface Props {
  data: GuideData[];
  index: number;
  navigate: () => void;
}

export default function GuideNavigate({ data, index, navigate }: Props) {
  return (
    <View style={styles.container}>
      <Step length={data.length} index={index} />
      <GetStartedButton onPress={navigate} />
      <Text style={styles.privacyText}>
        By continuing you agree to the{" "}
        <Text style={styles.blue}>Privacy Policy</Text> and{" "}
        <Text style={styles.blue}>Terms of Use</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 15,
  },

  privacyText: {
    color: "white",
    fontSize: 12,
    marginBottom: 34,
    textAlign: "center",
  },

  blue: {
    color: "#3C5AFF",
  },
});
