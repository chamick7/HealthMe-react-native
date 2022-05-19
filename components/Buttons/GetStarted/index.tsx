import { Pressable, View, Text, StyleSheet } from "react-native";

interface Props {
  onPress: () => void;
}

export default function GetStartedButton({ onPress }: Props) {
  return (
    <View style={styles.outer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed ? [styles.inner, styles.pressStyle] : styles.inner
        }
      >
        <Text style={styles.text}>GET STARTED</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outer: {
    marginBottom: 12,
    borderRadius: 20,
    overflow: "hidden",
  },

  inner: {
    backgroundColor: "#D6C90D",
  },

  pressStyle: {
    backgroundColor: "#B1A60B",
  },

  text: {
    fontSize: 16,
    fontFamily: "KanitMedium",
    textAlign: "center",
    color: "white",
    paddingVertical: 9,
  },
});
