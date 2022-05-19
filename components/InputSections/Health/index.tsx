import { SetStateAction, useAtom } from "jotai";
import { StyleSheet, View, Text, useWindowDimensions } from "react-native";
import VerticalSlider from "rn-vertical-slider";
import {
  canContinueAtom,
  metalHealthAtom,
  physicalHealthAtom,
} from "../../../store/Store";
import Mental from "../../../assets/svg/health/mental.svg";
import Physical from "../../../assets/svg/health/physical.svg";

export default function HealthSection() {
  const [mental, setMental] = useAtom(metalHealthAtom);
  const [physical, setPhysical] = useAtom(physicalHealthAtom);
  const [canContinue, setCanContinue] = useAtom(canContinueAtom);
  const layout = useWindowDimensions();

  const changeValue = (
    value: number,
    callback: (update: SetStateAction<number>) => void
  ) => {
    !canContinue && setCanContinue(true);
    callback(value);
  };

  return (
    <View style={[styles.container, { width: layout.width }]}>
      <Text style={styles.title}>Let's rate yourself.</Text>
      <View style={styles.bodyContainer}>
        <View style={[styles.inputContainer, { marginRight: 50 }]}>
          <Text style={styles.textStyle}>Mental Health</Text>
          <VerticalSlider
            value={mental}
            disabled={false}
            min={0}
            max={30}
            onChange={(value: number) => changeValue(value, setMental)}
            width={115}
            height={285}
            step={1}
            borderRadius={20}
            minimumTrackTintColor="#ffffff"
            maximumTrackTintColor="#353951"
          />
          <Mental style={styles.svgStyle} />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.textStyle}>Physical Health</Text>
          <VerticalSlider
            value={physical}
            disabled={false}
            min={0}
            max={30}
            onChange={(value: number) => changeValue(value, setPhysical)}
            width={115}
            height={285}
            step={1}
            borderRadius={20}
            minimumTrackTintColor="#ffffff"
            maximumTrackTintColor="#353951"
          />
          <Physical style={styles.svgStyle} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    flex: 1,
  },

  title: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    marginTop: 20,
    marginBottom: 40,
  },

  bodyContainer: {
    width: "100%",
    paddingHorizontal: 40,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  inputContainer: {
    alignItems: "center",
  },

  svgStyle: {
    marginTop: 25,
  },

  textStyle: {
    color: "white",
    marginBottom: 5,
  },
});
