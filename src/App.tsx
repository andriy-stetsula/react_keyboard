import React from 'react';

interface State {
  pressKey: string | null;
}

class App extends React.Component<{}, State> {
  state: State = {
    pressKey: null,
  };

  hundleKey = (event: KeyboardEvent) => this.setState({ pressKey: event.key });

  componentDidMount(): void {
    document.addEventListener('keyup', this.hundleKey);
  }

  componentWillUnmount(): void {
    document.removeEventListener('keyup', this.hundleKey);
  }

  render() {
    return (
      <div className="App">
        <p className="App__message">
          {this.state.pressKey
            ? `The last pressed key is [${this.state.pressKey}]`
            : 'Nothing was pressed yet'}
        </p>
      </div>
    );
  }
}

export { App };
