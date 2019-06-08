import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

const MessageDetailModalBox = ({ open, close, message, to, From }) => (
    <Modal open={open} onClose={close}>
        <Modal.Header>Profile Picture</Modal.Header>
        <Modal.Content image scrolling>
            <Modal.Description>
                <Header>Message</Header>
                <p>{message ? message : null}</p>
            </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
            <b style={{
                float: 'left'}}>
        From: { From } to: { to }{' '}(me)</b>
      <Button primary>
                Close <Icon name='times right' />
            </Button>
        </Modal.Actions>
    </Modal>
)

export default MessageDetailModalBox