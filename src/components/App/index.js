import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import List from 'components/Lists';
import { coloursDark } from 'styles/palette';

import { Wrapper, Title } from './styles';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={coloursDark}>
        <div>
          <Wrapper>
            <Title>Hacker News Reader</Title>
            <List />
          </Wrapper>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;