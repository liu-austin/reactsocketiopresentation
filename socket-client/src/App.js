// jshint esversion:6
// Updated. Thanks to: Paul Luna
import React, { Component } from "react";
import { socket } from '../src/socketIO.utils';
import { connect } from 'react-redux';
import NavBar from '../src/navbar/navbar.component';
import { selectCurrentPage } from '../src/redux/currentpage/currentpage.selectors';
import MainPage from './pages/mainpage/mainpage.component';
import AboutPage from './pages/aboutpage/aboutpage.component';
import UsagePage from './pages/usagepage/usagepage.component';
import ChatPage from './pages/chatpage/chatpage.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ///
      color: 'white'
      ///

    };
  }

  // sending sockets
  send = () => {

    socket.emit('change color', this.state.color) // change 'red' to this.state.color
  }
  ///

  // adding the function
  setColor = (color) => {
    this.setState({ color });
  };

  componentDidMount = () => {
      setInterval(this.send(), 1000);
      socket.on('change color', (col) => {
          document.body.style.backgroundColor = col
      });
  };

  render() {
    // testing for socket connections

    return (
      <div>
        <NavBar/>
        {
          this.props.currentpage === '/' ? 
          (
            <MainPage/>
          ) 
          : 
          (
            null
          )
        }
        {
          this.props.currentpage === '/about' ? 
          (
            <AboutPage/>
          ) 
          : 
          (
            null
          )
        }
        {
          this.props.currentpage === '/usage' ? 
          (
            <UsagePage/>
          ) 
          : 
          (
            null
          )
        }
        {
          this.props.currentpage === '/1' ? 
          (
            <ChatPage/>
          ) 
          : 
          (
            null
          )
        }
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return ({
      currentpage: selectCurrentPage(state)
  });
};

export default connect(mapStateToProps)(App);
