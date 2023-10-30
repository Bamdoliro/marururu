import { GlobalStyle } from '@maru/theme';
import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import type { Preview } from '@storybook/react';

export const decorators = [
  withThemeFromJSXProvider({
    GlobalStyles: GlobalStyle, // Adds your GlobalStyle component to all stories
  }),
];

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
