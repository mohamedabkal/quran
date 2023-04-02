import { useWindowDimensions } from "react-native";
import React from "react";
import { Image, ImageSource } from "expo-image";
import { FlashList } from "@shopify/flash-list";

type Props = {
  data: ImageSource[];
};

export default function Pages(props: Props) {
  const { width, height } = useWindowDimensions();

  return (
    <FlashList
      data={props.data}
      renderItem={({ item }) => (
        <Image
          source={item}
          style={{ width: width / 2, height: height / 2 }}
          contentFit="fill"
        />
      )}
      numColumns={2}
      snapToInterval={height}
      snapToAlignment={"center"}
      decelerationRate="fast"
      estimatedItemSize={height / 2}
      // horizontal
    />
  );
}
