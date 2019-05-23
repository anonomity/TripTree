import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import firebase from '../config/firebase';


class MailDropbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: []
        }
    }

    componentDidMount() {
        firebase
      .firestore()
      .collection("users")
      .get()
      .then(querySnapshot => {
        const users = [];

        querySnapshot.forEach(function(doc) {
          users.push({
            key: Math.random() * 10000,
            text: doc.data().email,
            value: doc.data().email,
            image: { avatar: true, src: 'data:image/png;base64,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'}
          });
        });
        this.setState({ userList: users });
      })
      .catch(function(error) {
        console.log("Error getting documents: ", error);
      });
    }
    render() {
        return (
            <React.Fragment>
                <Dropdown
                clearable
                search
                name={this.props.to}
                placeholder='Select Friend'
                fluid
                onChange={this.props.handleChange}
                selection
                options={this.state.userList}
            />
            </React.Fragment>
        )
    }
}

export default MailDropbox