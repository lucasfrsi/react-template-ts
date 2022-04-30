import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ThemeProvider, { useTheme } from '../ThemeProvider';

const renderThemeProvider = (Child: React.FunctionComponent) =>
  render(
    <ThemeProvider>
      <Child />
    </ThemeProvider>
  );

describe('<ThemeProvider />', () => {
  it('should render children and its useTheme hook should work', async () => {
    const user = userEvent.setup();
    const child = () => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const { theme, setTheme } = useTheme();

      return (
        <button type="button" onClick={() => setTheme('dark')}>
          {theme}
        </button>
      );
    };
    const { getByText } = renderThemeProvider(child);
    expect(getByText('light')).toBeInTheDocument();

    await user.click(getByText('light'));
    expect(getByText('dark')).toBeInTheDocument();
  });
});
