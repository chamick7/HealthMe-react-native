import { StyleSheet, Text, View } from "react-native";
import { SvgProps } from "react-native-svg";
import Sad from "../../assets/svg/result/sad.svg";
import Happy from "../../assets/svg/result/happy.svg";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

interface Props {
  title: string;
  value: boolean;
  svg: React.FC<SvgProps>;
}

export default function DiseaseBox({ title, value, svg: Svg }: Props) {
  return (
    <View
      style={[styles.container, { borderColor: value ? "#F52A4F" : "#33CB85" }]}
    >
      <View style={styles.textContainer}>
        <Text style={{ fontSize: 14 }}>
          {value ? "You have a chance to be" : "Far form"} {title}.
        </Text>
        <Svg style={{ marginLeft: 5 }} fill="black" />
      </View>
      <View style={{ marginRight: 12 }}>{value ? <Sad /> : <Happy />}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1.5,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: hp("2%"),
    // backgroundColor: "red",
  },

  textContainer: {
    marginVertical: 16,
    flexDirection: "row",
    alignItems: "center",
  },
});
