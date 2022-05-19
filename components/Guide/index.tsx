import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import { GuideData } from "../../pages/HomePage/types";
import Logo from "../../assets/svg/healthme-logo.svg";

interface Props {
  data: GuideData;
}

export default function Guide({ data }: Props) {
  const layout = useWindowDimensions();

  return (
    <View style={[styles.container, { width: layout.width }]}>
      <View style={styles.subContainer}>
        <ImageBackground
          source={data.image}
          resizeMode="cover"
          style={{ flex: 1 }}
        ></ImageBackground>
        <Logo style={styles.logo} />
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  subContainer: {
    flex: 1,
    position: "relative",
  },

  detailContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },

  title: {
    color: "white",
    fontSize: 30,
    textAlign: "center",
    marginTop: 20,
    fontFamily: "KanitMedium",
  },

  description: {
    marginTop: 20,
    textAlign: "center",
    color: "#7F7F7F",
    fontSize: 12,
  },

  logo: {
    position: "absolute",
    left: 15,
    top: 40,
  },
});
