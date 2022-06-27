import React from "react";
import { Text } from "react-native";
import ErrorPage from "./error-page";

export default function NotFoundError() {
  return(
    <ErrorPage>
      <Text>404 Not Found.</Text>
    </ErrorPage>
  );
}