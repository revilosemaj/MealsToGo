import React from "react";
import styled from "styled-components";
import { Text } from "react-native";
import { Card } from "react-native-paper";

const StyledTitle = styled(Text)`
  background-color: #fff;
  color: red;
  padding-top: 10px;
`;

const RestaurantCard = styled(Card)`
  padding: 20px;
  background-color: #fff;
`;

const RestaurantCardCover = styled(Card.Cover)`
  background-color: #fff;
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some restaurant",
    icons,
    photos = ["https://picsum.photos/700"],
    address = "100 some random street",
    ratings = 4,
    isOpenNow = true,
    isClosedTemporarily,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <StyledTitle>{name}</StyledTitle>
    </RestaurantCard>
  );
};
