import { useAtom } from "jotai";
import { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { canContinueAtom, smokeAtom } from "../../../store/Store";
import SmokeYes from "../../../assets/svg/smoke/smoke-yes.svg";
import SmokeNo from "../../../assets/svg/smoke/smoke-no.svg";

export default function SmokeSection() {
  const [smoke, setSmoke] = useAtom(smokeAtom);
  const [, setCanContinue] = useAtom(canContinueAtom);
  const layout = useWindowDimensions();

  const onSelect = (value: boolean) => {
    setCanContinue(true);
    setSmoke(value);
  };

  return (
    <View style={[styles.container, { width: layout.width }]}>
      <Text style={styles.title}>Do you smoke?</Text>
      <TouchableOpacity
        onPress={() => onSelect(true)}
        style={[styles.inputContainer, smoke && styles.activeInput]}
      >
        <Text style={styles.textStyle}>I always smoke.</Text>
        <SmokeYes />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onSelect(false)}
        style={[styles.inputContainer, smoke === false && styles.activeInput]}
      >
        <Text style={styles.textStyle}>I don't smoke.</Text>
        <SmokeNo />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    paddingHorizontal: 15,
  },

  title: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    marginBottom: 75,
  },

  inputContainer: {
    borderWidth: 1,
    borderColor: "#353951",
    width: "100%",
    height: 65,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  activeInput: {
    borderColor: "#3C5AFF",
  },

  textStyle: {
    color: "white",
    fontSize: 20,
  },
});
