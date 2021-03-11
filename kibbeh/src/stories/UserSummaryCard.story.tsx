import React from "react";
import { Story } from "@storybook/react";

import { UserSummaryCard, UserSummaryCardProps } from "../ui/UserSummaryCard";

export default {
  title: "UserSummaryCard",
  component: UserSummaryCard,
};

const avatar = require("../img/avatar.png");

const SVG = () => {
  return (
    <svg width="13" height="10" viewBox="0 0 13 10" fill="none">
      <path
        d="M11.804 2.41708C11.435 1.67909 10.8816 1.12561 10.1436 0.756613C9.49784 0.387621 8.57536 0.203125 7.65288 0.203125H6.5459V2.41708H7.46838C7.92962 2.41708 8.39086 2.50933 8.75985 2.60157C9.12884 2.78607 9.40559 3.06281 9.59009 3.43181C9.77458 3.8008 9.86683 4.35429 9.86683 5.00002C9.86683 5.64576 9.77458 6.19925 9.59009 6.56824C9.40559 6.93723 9.12884 7.21397 8.75985 7.30622C8.48311 7.49072 8.02187 7.58297 7.56063 7.58297H6.5459V9.79692H7.65288C8.6676 9.79692 9.49784 9.61242 10.1436 9.24343C10.8816 8.87444 11.435 8.32095 11.804 7.58297C12.173 6.84498 12.3575 6.01475 12.3575 5.00002C12.4498 3.98529 12.2653 3.15506 11.804 2.41708Z"
        fill="white"
      />
      <path
        d="M6.73078 3.70862H4.33233C4.05559 3.70862 3.87109 3.52412 3.87109 3.24737C3.87109 2.97063 4.05559 2.78613 4.33233 2.78613H6.63854C6.91528 2.78613 7.09978 2.97063 7.09978 3.24737C7.09978 3.52412 6.91528 3.70862 6.73078 3.70862Z"
        fill="white"
      />
      <path
        d="M6.73078 7.1217H4.33233C4.14784 7.1217 3.87109 6.9372 3.87109 6.66046C3.87109 6.38371 4.05559 6.19922 4.33233 6.19922H6.63854C6.91528 6.19922 7.09978 6.38371 7.09978 6.66046C7.09978 6.9372 6.91528 7.1217 6.73078 7.1217Z"
        fill="white"
      />
      <path
        d="M6.73042 5.4613H1.01105C0.734301 5.4613 0.549805 5.2768 0.549805 5.00006C0.549805 4.72331 0.734301 4.53882 1.01105 4.53882H6.73042C7.00717 4.53882 7.19167 4.72331 7.19167 5.00006C7.19167 5.2768 6.91492 5.4613 6.73042 5.4613Z"
        fill="white"
      />
    </svg>
  );
};

const userSummary: UserSummaryCardProps = {
  avatar,
  userId: "1",
  displayName: "Arnau Jiménez",
  username: "@ajmnz",
  following: 89,
  followers: 3400,
  bio:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis nunc sit pulvinar ut tellus sit tincidunt faucibus sapien. ⚡️",
  website: "https://loremipsum.com",
  isOnline: true,
  badges: [
    { content: "ƉC", variant: "primary", type: "text" },
    { content: "ƉS", variant: "primary", type: "text" },
    { content: SVG, variant: "secondary", type: "svg" },
  ],
};

export const Main: Story<UserSummaryCardProps> = ({ ...props }) => (
  <UserSummaryCard {...props} {...userSummary} />
);

Main.bind({});
