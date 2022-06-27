import React from "react";
import { Text } from "react-native";
import ErrorPage from "./error-page";

export default function NetworkIssue() {
  return(
    <ErrorPage>
      <Text>네트워크를 확인해 주세요.</Text>
    </ErrorPage>
  );
}