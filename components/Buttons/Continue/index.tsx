import { Pressable, View, Text, StyleSheet } from "react-native";

interface Props {
  text?: string;
  disabled?: boolean;
  onPress: () => void;
}

export default function ContinueButton({
  text = "Continue",
  disabled,
  onPress,
}: Props) {
  return (
    <View style={styles.outer}>
      <Pressable
        onPress={onPress}
        disabled={disabled}
        style={({ pressed }) =>
          pressed
            ? [styles.inner, styles.pressStyle]
            : disabled
            ? [styles.inner, { backgroundColor: "#353951" }]
            : styles.inner
        }
      >
        <Text style={styles.text}>{text}</Text>
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
    backgroundColor: "#3C5AFF",
  },

  pressStyle: {
    backgroundColor: "#2B43C7",
  },

  text: {
    fontSize: 16,
    fontFamily: "KanitMedium",
    textAlign: "center",
    color: "white",
    paddingVertical: 9,
  },
});
