import { StyleSheet, View, Text } from "react-native";
import Slider from "@react-native-community/slider";
import { SvgProps } from "react-native-svg";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { useEffect, useState } from "react";

interface Props {
  title: string;
  minimum: number;
  maximum: number;
  onChange: (value: number) => void;
  value: number;
  unit?: string;
  svg?: React.FC<SvgProps>;
}

export default function BodyInput({
  title,
  minimum,
  maximum,
  onChange,
  value,
  unit = "",
  svg: Svg,
}: Props) {
  const [sliderValue, setSliderValue] = useState(value);

  useEffect(() => {
    setSliderValue(value);
  }, [value]);

  return (
    <View style={styles.inputContainer}>
      <View style={styles.detailContainer}>
        <View style={styles.inputTitleContainer}>
          {Svg ? <Svg /> : null}
          <Text style={styles.inputText}>{title}</Text>
        </View>
        <Text style={styles.valueText}>{`${sliderValue} ${unit}`}</Text>
      </View>

      <Slider
        style={{ width: "100%", height: 40 }}
        minimumValue={minimum}
        maximumValue={maximum}
        minimumTrackTintColor="#3C5AFF"
        maximumTrackTintColor="#707070"
        thumbTintColor="#3C5AFF"
        onValueChange={setSliderValue}
        onSlidingComplete={onChange}
        value={value}
        step={1}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: 50,
  },

  detailContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  inputTitleContainer: {
    flexDirection: "row",
  },

  inputText: {
    color: "white",
    fontSize: 20,
    marginLeft: 10,
  },

  valueText: {
    color: "white",
    fontSize: 12,
  },
});
