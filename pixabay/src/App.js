import React from 'react';
import Nav from './components/Nav'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Search from './components/Search'



function App() {
  return (
 <MuiThemeProvider>

 <Nav/>
 <Search/>

  </MuiThemeProvider>
  );
}

export default App;
