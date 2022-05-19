import { useAtom } from "jotai";
import { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { canContinueAtom, exerciseAtom } from "../../../store/Store";
import ExerciseYes from "../../../assets/svg/exercise/exercise-yes.svg";
import ExerciseNo from "../../../assets/svg/exercise/exercise-no.svg";

export default function ExerciseSection() {
  const [exercise, setExercise] = useAtom(exerciseAtom);
  const [, setCanContinue] = useAtom(canContinueAtom);
  const layout = useWindowDimensions();

  const onSelect = (value: boolean) => {
    setCanContinue(true);
    setExercise(value);
  };

  return (
    <View style={[styles.container, { width: layout.width }]}>
      <Text style={styles.title}>Do you exercise?</Text>
      <TouchableOpacity
        onPress={() => onSelect(true)}
        style={[styles.inputContainer, exercise && styles.activeInput]}
      >
        <Text style={styles.textStyle}>I always exercise.</Text>
        <ExerciseYes />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => onSelect(false)}
        style={[
          styles.inputContainer,
          exercise === false && styles.activeInput,
        ]}
      >
        <Text style={styles.textStyle}>I don't like exercise.</Text>
        <ExerciseNo />
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
