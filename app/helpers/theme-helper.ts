import type { DefaultTheme } from "styled-components";

const colors = {
  lightGreen: "#c8efbd",
  green: "#4acb27",
  greenHover: "#24A700",
  darkBlue: "#18172e",
  darkBlueHover: "#060515",
  lightGray: "#F4F5FC",
  white: "#fff",
};

const fonts = {
  text: "neuzeit-grotesk, sans-serif",
};

const transition = "0.3s all";

export const theme: DefaultTheme = { colors, fonts, transition };
