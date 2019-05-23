import React from 'react'
import { List, Image, Dimmer, Loader } from 'semantic-ui-react'
import firebase from '../config/firebase';
import MessageDetailModalBox from './MessageDetailModalBox';

class MailboxList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      open: false,
      index: null,
      to: '',
      From: '',
      message: ''
    }
  }
  componentDidMount() {
    firebase
      .firestore()
      .collection("messages")
      .get()
      .then(querySnapshot => {
        const messages = [];

        querySnapshot.forEach(function (doc) {
          if (localStorage.getItem('user') === doc.data().to) {
            messages.push({
              to: doc.data().to,
              From: doc.data().From,
              message: doc.data().message,
            });
          }
        });
        this.setState({ messages: messages });

        console.log(this.state.messages);
      })
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });
  }

  handleToggleModal = (message) => {
    this.setState({
      open: !this.state.open,
      to: message.to,
      From: message.From,
      message: message.message
    });
  }
  render() {
    return (
      <List>
        {
          this.state.messages.length > 0 ?
            this.state.messages.map((message, i) => {
              return (
                <List.Item key={i} onClick={() => this.handleToggleModal(message)}>
                  <Image avatar src='data:image/png;base64,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' />
                  <List.Content>
                    <List.Header>From: {message.From} {' '} To: {message.to}</List.Header>
                    <List.Description>
                      Status: <b>{message.read ? 'Read' : 'Not read'}</b>
                      <p>{message.message}</p>
                    </List.Description>
                  </List.Content>
                </List.Item>
              )
            }) :
            <Dimmer active style={{minHeight: '300px'}}>
              <Loader indeterminate>Preparing Messages...</Loader>
            </Dimmer>
        }
        <MessageDetailModalBox to={this.state.to} From={this.state.From} message={this.state.message} close={this.handleToggleModal} open={this.state.open} />
      </List>
    )
  }
}

export default MailboxList