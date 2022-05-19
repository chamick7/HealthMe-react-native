import {
  StyleSheet,
  View,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import NameSection from "../../components/InputSections/Name";
import GenderSection from "../../components/InputSections/Gender";
import Step from "../../components/Step";
import { STEP_TYPE } from "../../components/Step/types";
import { useAtom } from "jotai";
import { canContinueAtom, stepAtom } from "../../store/Store";
import ContinueButton from "../../components/Buttons/Continue";
import { useRef } from "react";
import BodySection from "../../components/InputSections/Body";
import SmokeSection from "../../components/InputSections/Smoke";
import DrinkSection from "../../components/InputSections/Drink";
import ExerciseSection from "../../components/InputSections/Exercise";
import HealthSection from "../../components/InputSections/Health";
import { RootStackParamList } from "../screen";
import { StackNavigationProp } from "@react-navigation/stack";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import AgeSection from "../../components/InputSections/Age";

type HomeScreenProp = StackNavigationProp<RootStackParamList, "Input">;

export default function InputPage() {
  const [step, setStep] = useAtom(stepAtom);
  const [canContinue, setCanContinue] = useAtom(canContinueAtom);
  const navigation = useNavigation<HomeScreenProp>();
  const layout = useWindowDimensions();
  const scrollViewRef = useRef<null | ScrollView>(null);

  const sectionCount = 8;

  const scrollToIndex = () => {
    if (step < sectionCount - 1) {
      setStep(step + 1);
      setCanContinue(false);

      if (scrollViewRef.current !== null)
        return scrollViewRef.current.scrollTo({ x: layout.width * (step + 1) });
    }

    if (step === sectionCount - 1) {
      navigation.navigate("Loading");
      scrollViewRef.current?.scrollTo({ x: 0 });
    }
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: hp("15%") }}>
        <Step length={sectionCount} index={step} type={STEP_TYPE.SQUARE} />
      </View>

      <ScrollView
        ref={scrollViewRef}
        scrollEnabled={false}
        nestedScrollEnabled={false}
        pagingEnabled={true}
        horizontal
      >
        <NameSection />
        <AgeSection />
        <GenderSection />
        <BodySection />
        <ExerciseSection />
        <SmokeSection />
        <DrinkSection />
        <HealthSection />
      </ScrollView>

      <View style={styles.buttonContainer}>
        <ContinueButton
          text={step === sectionCount - 1 ? "Let's Start" : "Continue"}
          onPress={scrollToIndex}
          disabled={!canContinue}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },

  buttonContainer: {
    position: "absolute",
    width: "100%",
    bottom: hp("6%"),
    paddingHorizontal: 15,
  },
});
