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
      <div className="w-full rounded-lg bg-default-light dark:bg-default-dark p-10 transition-all duration-500">
        <Story />
      </div>
    </RuxContext>
  ),
];
