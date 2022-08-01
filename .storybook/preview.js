import "../styles/output.css";
import RuxContext, { useRuxContext } from "../src/context/RuxContext";
import { useDarkMode } from "storybook-dark-mode";
import { useEffect } from "react";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const StoryBookDarkModeWrapper = ({ children }) => {
  const darkMode = useDarkMode();
  const ruxContext = useRuxContext();
  darkMode ? ruxContext.darkmode.on() : ruxContext.darkmode.off();

  return children;
};

export const decorators = [
  (Story) => {
    return (
      <RuxContext>
        <StoryBookDarkModeWrapper>
          <div className="w-full min-h-screen bg-default-light dark:bg-default-dark p-10 ">
            <Story />
          </div>
        </StoryBookDarkModeWrapper>
      </RuxContext>
    );
  },
];
