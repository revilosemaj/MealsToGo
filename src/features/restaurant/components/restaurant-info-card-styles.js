import { Image, View } from "react-native";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Text } from "../../../components/typography/text.component";
import { SvgXml } from "react-native-svg";

export const Title = styled(Text)`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
`;

export const Address = styled(Text)`
  color: ${(props) => props.theme.colors.text.primary};
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const Info = styled(View)`
  margin-top: ${(props) => props.theme.space[2]};
`;

export const OpenNow = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  flex-basis: 50%;
  text-align: right;
`;

export const Container = styled(View)`
  flex-direction: row;
`;

export const Rating = styled(View)`
  flex-direction: row;
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
`;
export const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;
export const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;

export const Icon = styled(Image)`
  width: 15;
  height: 15;
`;

export const SvgIcon = styled(SvgXml)`
  width: 20;
  height: 20;
`;

export const RestaurantCard = styled(Card)`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
