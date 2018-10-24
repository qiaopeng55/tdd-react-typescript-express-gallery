// import { CssBaseline, MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import CssBaseline from "@material-ui/core/CssBaseline";
import * as React from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
      font-family: sans-serif;
    }
  `;
// Create a <Wrapper> react component that renders a <section> with
// some padding and a papayawhip background
const Wrapper = styled.section`
  padding: 1em 2em;
  background: "#e5e5e5";
`;

function withRoot(Component: React.ComponentType) {
  function WithRoot(props: object) {
    return (
      <Wrapper>
        {/* Reboot kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <GlobalStyle />
        <Component {...props} />
      </Wrapper>
    );
  }

  return WithRoot;
}

export default withRoot;
