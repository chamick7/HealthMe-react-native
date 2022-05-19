import { View, StyleSheet, Text } from "react-native";
import { uniqueId } from "lodash";
import { STEP_TYPE } from "./types";

interface Props {
  length: number;
  index: number;
  type?: STEP_TYPE;
}

export default function Step({
  length,
  index,
  type = STEP_TYPE.CIRCLE,
}: Props) {
  return (
    <View style={styles.container}>
      {[...Array(length)].map((_, idx) => (
        <View
          key={uniqueId()}
          style={
            idx === index
              ? [
                  type === STEP_TYPE.CIRCLE ? styles.dot : styles.dotSquare,
                  styles.activeDot,
                ]
              : type === STEP_TYPE.CIRCLE
              ? styles.dot
              : styles.dotSquare
          }
        ></View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    marginBottom: 20,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 8 / 2,
    backgroundColor: "#7F7F7F",
    marginHorizontal: 10,
  },

  dotSquare: {
    width: 14,
    height: 2,
    backgroundColor: "#7F7F7F",
    marginHorizontal: 5,
  },

  activeDot: {
    backgroundColor: "white",
  },
});
