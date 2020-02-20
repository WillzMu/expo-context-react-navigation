import React from 'react'

export const GlobalContext = React.createContext()

const globalState = { count: 0 }

export class GlobalContextProvider extends React.Component {
  render() {
    return (
      <GlobalContext.Provider value={{
        state: globalState,
        updateState: (field, newState) => this.setState({ [field]: newState })
      }}>
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}

export const withGlobalContext = ChildComponent => props => (
  <GlobalContext.Consumer>
    {
      context => <ChildComponent {...props} global={context} />
    }
  </GlobalContext.Consumer>
);
