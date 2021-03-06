import React, {createContext, Component} from 'react';

export const UserContext = createContext();

class UserContextProvider extends Component {
  state = {
    isLoggedIn: true,
    firstName: "Estefan",
    lastName: "Hu",
    credibility: 83658
  }
  render() {
    return (
      <UserContext.Provider value={{...this.state}}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserContextProvider;