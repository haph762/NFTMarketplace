import { useIsFocused } from "@react-navigation/core";
import { StatusBar } from "expo-status-bar";
import React from "react";

const FocusedStatusBar = (props) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated={true} {...props} hidden /> : null;
};

export default FocusedStatusBar;
