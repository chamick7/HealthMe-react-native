import { useAtom } from "jotai";
import { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  useWindowDimensions,
} from "react-native";
import { ageAtom, canContinueAtom, nameAtom } from "../../../store/Store";
import { defaultFont } from "../../../utils/systemDesign";

export default function AgeSection() {
  const [age, setAge] = useAtom(ageAtom);
  const [, setCanContinue] = useAtom(canContinueAtom);
  const layout = useWindowDimensions();

  useEffect(() => {
    age !== "" ? setCanContinue(true) : setCanContinue(false);
  }, [age]);

  return (
    <View style={[styles.container, { width: layout.width }]}>
      <Text style={styles.title}>How old are you ?</Text>
      <TextInput
        onChangeText={setAge}
        value={age}
        keyboardType="number-pad"
        maxLength={2}
        style={[
          styles.inputStyle,
          age != "" ? { borderBottomColor: "#3C5AFF" } : null,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
  },

  title: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    marginBottom: 200,
  },

  inputStyle: {
    borderBottomWidth: 1.0,
    borderBottomColor: "#353951",
    textAlign: "center",
    color: "white",
    fontFamily: defaultFont,
    fontSize: 24,
    width: 180,
    paddingBottom: 5,
  },
});
