import React from "react";
import { Image, Text, TextInput, View } from "react-native";
import { assets, COLORS, FONTS, SIZES } from "../constants";

const HomeHeader = ({ onSearch }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
        paddingTop: SIZES.header,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{ width: 90, height: 25 }}
        />
        <View style={{ width: 45, height: 45 }}>
          <Image
            source={assets.person01}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            source={assets.badge}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>
      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Hello, Ha Phan 👋
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Let's find a masterpiece
        </Text>
      </View>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: COLORS.gray,
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.base,
          borderRadius: SIZES.font,
        }}
      >
        <Image
          source={assets.search}
          resizeMode="contain"
          style={{ width: 20, height: 20, marginRight: SIZES.base }}
        />
        <TextInput
          placeholder="Search NFTs"
          style={{ flex: 1 }}
          onChangeText={onSearch}
        />
      </View>
    </View>
  );
};

export default HomeHeader;
