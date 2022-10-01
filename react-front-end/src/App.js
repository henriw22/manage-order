import React, { Component } from 'react';
import './App.scss';
import Approute from './AppRoute';
import { Container } from '@mui/material';

import {
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/404';
//import MessageChatBox from './components/message';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isChatBoxVisible: false };
    this.toggleChatBoxVisible = this.toggleChatBoxVisible.bind(this);
    this.test = () => { alert("This is the Alert!!") };
  }


  toggleChatBoxVisible = () => {
    this.setState({ isChatBoxVisible: !this.state.isChatBoxVisible })
  }

  // test = () => {
  //   alert("This is the Alert!!");
  // }


  render() {
    return (


      <Router>
        <Container maxWidth="false" sx={{ height: "100vh" }}>
          <Switch>
            <Approute exact path="/" component={HomePage} sx={{ margin: "100px" }} />
          {/* <Route exact path="/message" component={MessageChatBox} /> */}
            <Approute component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
        </Container>
      </Router>




    );
  }
}
export default App;
