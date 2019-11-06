// jshint esversion:6
import React from 'react';
import './chatpage.styles.scss';
import { connect } from 'react-redux';
import { socket } from '../../socketIO.utils';

class ChatPage extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
            msg: '',
            msgs: []
        };
        socket.removeAllListeners('receiveMessage');
        socket.on('receiveMessage', function(data) {
            addMessage(data);
        });

        const addMessage = data => {
        this.setState({msgs: [...this.state.msgs, data]});
        };
    
        this.sendMessage = ev => {
            ev.preventDefault();
            socket.emit('sendMessage', {
                author: socket.id.slice(0,7),
                msg: this.state.msg
            });
            this.setState({msg: ''});
        };
    }
  
    render() {
        return (
            <div className='chat-total-container'>
            <div className='about-content'>
                <div className='about-title'>
                    <h1 align='center'>CHAT EXAMPLE</h1>
                </div>
                <div className='about-list'>
                <ul>
                    <li>state.msg is set to input bar</li>
                    <li>client socket sends msg data and user to server</li>
                    <li>server sends msg data and user to every client</li>
                    <li>msg is added to msgs object and displayed</li>
                </ul>
                </div>
            </div>
            <div className='chatbox-container sticky'>
                <div className='chatlog-container'>
                {
                    this.state.msgs.map(msg => {
                        return (
                            <p>{msg.author}: {msg.msg}</p>
                        );
                    })
                }
                </div>
                <div className='chat-message-container'>
                    <form onSubmit={this.handleSubmit}>
                        <label>CHAT:</label>
                        <input className='input-line' type="text" autoComplete='off' value={this.state.msg} onChange={ev => this.setState({msg: ev.target.value})}/>
                        <button onClick={this.sendMessage} className='chatButton'>Send</button>
                    </form> 
                </div>
            </div>
            </div>
        );
    }
}   

const mapStateToProps = (state) => {
    return ({
    });
};

export default connect(mapStateToProps)(ChatPage);

