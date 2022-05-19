import { useAtom } from "jotai";
import { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  useWindowDimensions,
} from "react-native";
import { canContinueAtom, nameAtom } from "../../../store/Store";
import { defaultFont } from "../../../utils/systemDesign";

export default function NameSection() {
  const [name, setName] = useAtom(nameAtom);
  const [, setCanContinue] = useAtom(canContinueAtom);
  const layout = useWindowDimensions();

  useEffect(() => {
    name !== "" ? setCanContinue(true) : setCanContinue(false);
  }, [name]);

  return (
    <View style={[styles.container, { width: layout.width }]}>
      <Text style={styles.title}>What is your name?</Text>
      <TextInput
        onChangeText={setName}
        value={name}
        style={[
          styles.inputStyle,
          name != "" ? { borderBottomColor: "#3C5AFF" } : null,
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
