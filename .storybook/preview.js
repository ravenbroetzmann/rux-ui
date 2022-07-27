import "../styles/output.css";
import RuxContext from "../src/context/RuxContext";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <RuxContext>
      <Story />
    </RuxContext>
  ),
];
