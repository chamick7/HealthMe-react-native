import { useAtom } from "jotai";
import { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { canContinueAtom, drinkAtom } from "../../../store/Store";
import DrinkYes from "../../../assets/svg/drink/drink-yes.svg";
import DrinkNo from "../../../assets/svg/drink/drink-no.svg";

export default function DrinkSection() {
  const [drink, setDrink] = useAtom(drinkAtom);
  const [, setCanContinue] = useAtom(canContinueAtom);
  const layout = useWindowDimensions();

  const onSelect = (value: boolean) => {
    setCanContinue(true);
    setDrink(value);
  };

  return (
    <View style={[styles.container, { width: layout.width }]}>
      <Text style={styles.title}>Do you drinking?</Text>
      <TouchableOpacity
        onPress={() => onSelect(true)}
        style={[styles.inputContainer, drink && styles.activeInput]}
      >
        <Text style={styles.textStyle}>Yes, I drink a lot.</Text>
        <DrinkYes />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onSelect(false)}
        style={[styles.inputContainer, drink === false && styles.activeInput]}
      >
        <Text style={styles.textStyle}>No, I don't drink</Text>
        <DrinkNo />
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
