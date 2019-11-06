// jshint esversion:6
import React from 'react';
import './navbar.styles.scss';
import { connect } from 'react-redux';
import { socket } from '../../src/socketIO.utils';
import { setCurrentPage } from '../redux/currentpage/currentpage.action';

class NavBar extends React.Component {
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

  goToIntro = () => {
    this.props.setCurrentPage('/');
  };

  goToAbout = () => {
    this.props.setCurrentPage('/about');
  };

  goToUsage = () => {
    this.props.setCurrentPage('/usage');
  };

  goTo1 = () => {
    this.props.setCurrentPage('/1');
  };

  render() {
    return (
      <div className="topnav sticky">
          <a onClick={this.goToIntro} className='menu-item' href="#gamerules">SOCKET.IO INTRO</a>
          <a onClick={this.goToAbout} className='menu-item' href="#gamerules">SOCKET.IO ABOUT</a>
          <a onClick={this.goToUsage} className='menu-item' href="#gamerules">HOW TO USE</a>
          <a onClick={this.goTo1} className='menu-item' href={'#lobby'}>CHAT EXAMPLE</a>
          <a className='menu-item' onClick={() => this.send() } href={"#about"}>Change Color</a>
          <a className='menu-item' id="white" onClick={() => this.setColor('white')} href={"#about"}>White</a>
          <a className='menu-item' id="blue" onClick={() => this.setColor('blue')} href={"#about"}>Blue</a>
          <a className='menu-item' id="red" onClick={() => this.setColor('red')} href={"#about"}>Red</a>
          <a className='menu-item' id="green" onClick={() => this.setColor('green')} href={"#about"}>Green</a>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return ({
    setCurrentPage: (page) => dispatch(setCurrentPage(page))
  });
};

export default connect(null, mapDispatchToProps)(NavBar);
