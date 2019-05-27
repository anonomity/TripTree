import React from 'react'
import { Label, Menu, Tab, Icon, Button, Loader } from 'semantic-ui-react'
import MailboxList from './MailboxList';
import SendMail from './SendMail';
import firebase from '../config/firebase';


class TabExampleCustomMenuItem extends React.Component {
    state = { open: false, messages: [] }

    logout = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('user-type');
        localStorage.removeItem('clientId');
        this.props.history.push('/');
    }

    componentDidMount() {
        if (!localStorage.getItem('user')) {
            this.props.history.push('/');
        } else {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                }
            });
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
                })
                .catch(function (error) {
                    console.log("Error getting documents: ", error);
                });
        }
    }

    show = size => () => this.setState({ size, open: true })
    close = () => this.setState({ open: false })
    render() {
        return (
            <React.Fragment>
                <h1>Inbox</h1>
                <h4>Logged in as <b>{localStorage.getItem('user')}</b></h4>
                <Tab panes={[
                    {
                        menuItem: { key: 'users', icon: 'plus', content: 'Send a mail' },
                        render: () => <Tab.Pane>
                            <Button primary onClick={this.show('tiny')}>
                                <Icon name="plus" />
                                Send a mail
        </Button>
                        </Tab.Pane>,
                    },
                    {
                        menuItem: (
                            <Menu.Item key='messages'>
                                <Icon name='inbox' />
                                Inbox{this.state.messages.length ? <Label>{this.state.messages.length}</Label> : <Loader style={{ position: 'relative', left: '20px' }} size={"tiny"} active/>}
                            </Menu.Item>
                        ),
                        render: () => <Tab.Pane>
                            <MailboxList />
                        </Tab.Pane>,
                    },
                    ,
                    {
                        menuItem: (
                            <Menu.Item key='logout' onClick={this.logout}>
                                <Icon name='times' />
                                Logout
                            </Menu.Item>
                        )
                    },
                ]} />
                <SendMail close={this.close} open={this.state.open} />
            </React.Fragment>
        )
    }
}

export default TabExampleCustomMenuItem
