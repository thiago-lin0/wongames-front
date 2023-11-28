import { ThemeProvider } from "styled-components";
import { RenderResult, render } from "@testing-library/react";

import theme from '../../styles/theme';
import React from "react";

export const renderWithTheme = (children: React.ReactNode): RenderResult =>
render(
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )