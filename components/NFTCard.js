import React from "react";
import { Image, Text, View } from "react-native";
import { assets, COLORS, SHADOWS, SIZES } from "../constants";
import { CircleButton } from "./Button";

const NFTCard = ({ data }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.image}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopRightRadius: SIZES.font,
            borderTopLeftRadius: SIZES.font,
          }}
        />
      </View>
      <CircleButton imgUrl={assets.heart} top={10} right={10} />
    </View>
  );
};

export default NFTCard;
