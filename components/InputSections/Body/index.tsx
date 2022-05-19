import { SetStateAction, useAtom } from "jotai";
import { StyleSheet, View, Text, useWindowDimensions } from "react-native";
import {
  canContinueAtom,
  heightAtom,
  sleepAtom,
  weightAtom,
} from "../../../store/Store";
import BodyInput from "./Input";
import Height from "../../../assets/svg/body/height.svg";
import Weight from "../../../assets/svg/body/weight.svg";
import Sleep from "../../../assets/svg/body/sleep.svg";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function BodySection() {
  const [height, setHeight] = useAtom(heightAtom);
  const [weight, setWeight] = useAtom(weightAtom);
  const [sleep, setSleep] = useAtom(sleepAtom);
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
      <Text style={styles.title}>Let's check your body measurements</Text>
      <View style={styles.bodyContainer}>
        <BodyInput
          title="Height"
          minimum={100}
          maximum={200}
          value={height}
          onChange={(value: number) => changeValue(value, setHeight)}
          unit="cm."
          svg={Height}
        />

        <BodyInput
          title="Weight    "
          minimum={30}
          maximum={100}
          value={weight}
          onChange={(value: number) => changeValue(value, setWeight)}
          unit="kg."
          svg={Weight}
        />

        <BodyInput
          title="Sleep time"
          minimum={1}
          maximum={12}
          value={sleep}
          onChange={(value: number) => changeValue(value, setSleep)}
          unit="hr."
          svg={Sleep}
        />
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
    marginBottom: hp("7%"),
  },

  bodyContainer: {
    width: "100%",
    paddingHorizontal: 40,
  },
});
