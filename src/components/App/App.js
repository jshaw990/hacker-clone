import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import List from 'components/List';
import { coloursDark } from 'styles/palette';

import { Wrapper, Title } from './styles';

class App extends Component {
    componenetDidMount() {
        this.props.fetchStoriesFirstPage();
    }

  render() {
    const { stories } = this.props;
    return (
      <ThemeProvider theme={coloursDark}>
        <div>
          <Wrapper>
            <Title>Hacker News Reader</Title>
            <List stories={stories}/>
          </Wrapper>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;