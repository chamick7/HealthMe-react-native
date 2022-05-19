import { useAtom } from "jotai";
import {
  StyleSheet,
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { canContinueAtom, genderAtom } from "../../../store/Store";
import MALE from "../../../assets/svg/gender/male.svg";
import FEMALE from "../../../assets/svg/gender/female.svg";
import { GenderType } from "../../../utils/enum";

export default function GenderSection() {
  const [gender, setGender] = useAtom(genderAtom);
  const [, setCanContinue] = useAtom(canContinueAtom);
  const layout = useWindowDimensions();

  const onSelect = (gender: GenderType) => {
    setCanContinue(true);
    setGender(gender);
  };

  return (
    <View style={[styles.container, { width: layout.width }]}>
      <Text style={styles.title}>Choose your gender</Text>
      <View style={styles.selectContainer}>
        <TouchableOpacity
          style={[
            styles.selectType,
            gender === GenderType.MALE && styles.activeSelect,
          ]}
          onPress={() => onSelect(GenderType.MALE)}
        >
          <MALE />
          <Text style={styles.selectText}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.selectType,
            gender === GenderType.FEMALE && styles.activeSelect,
          ]}
          onPress={() => onSelect(GenderType.FEMALE)}
        >
          <FEMALE />
          <Text style={styles.selectText}>Female</Text>
        </TouchableOpacity>
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
    marginBottom: 145,
  },

  selectContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  selectType: {
    width: 120,
    height: 120,
    borderWidth: 1,
    borderColor: "#353951",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  activeSelect: {
    borderColor: "#3C5AFF",
  },

  selectText: {
    color: "white",
    marginTop: 5,
  },
});
