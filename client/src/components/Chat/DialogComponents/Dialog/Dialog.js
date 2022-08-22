import React from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import className from 'classnames';
import { getDialogMessages, clearMessageList } from '../../../../actions/actionCreator';
import ChatHeader from '../../ChatComponents/ChatHeader/ChatHeader';
import styles from './Dialog.module.sass';
import ChatInput from '../../ChatComponents/ChatInut/ChatInput';

class Dialog extends React.Component {
  componentDidMount() {
    this.props.getDialog({ interlocutorId: this.props.interlocutor.id });
    this.scrollToBottom();
    if (document.getElementById('chatInput')) {
      document.getElementById('chatInput').focus()
    }
  }

    messagesEnd = React.createRef();

    scrollToBottom = () => {
      this.messagesEnd.current.scrollIntoView({ behavior: 'smooth' });
    };

    componentWillUnmount() {
      this.props.clearMessageList();
    }

    componentDidUpdate(prevProps) {
      if (this.messagesEnd.current) this.scrollToBottom();
      if (prevProps.interlocutor.id !== this.props.interlocutor.id) this.props.getDialog({ interlocutorId: this.interlocutor.id })
    }

    renderMainDialog = () => {
      const messagesArray = [];
      const uniqueIdSet = new Set();
      const { messages, userId } = this.props;
      let currentTime = moment();
      messages.forEach((message, i) => {
        if (!currentTime.isSame(message.createdAt, 'date')) {
          messagesArray.push(
            <div key={message.createdAt} className={styles.date}>
              {moment(message.createdAt).format('MMMM DD, YYYY')}
            </div>,
          );
          currentTime = moment(message.createdAt);
        }
        if (!uniqueIdSet.has(message.id)) {
          messagesArray.push(
        <div
          key={i}
          className={className(userId === message.senderId ? styles.ownMessage : styles.message)}
        >
          <span>{message.body}</span>
          <span className={styles.messageTime}>{moment(message.createdAt).format('HH:mm')}</span>
          <div ref={this.messagesEnd} />
        </div>,
          )
          uniqueIdSet.add(message.id)
        }
       
      });
      return (
        <div className={styles.messageList}>
          {messagesArray}
        </div>
      );
    };

    blockMessage = () => {
      const { userId, chatData } = this.props;
      const { blackList, participants } = chatData;
      const userIndex = participants.indexOf(userId);
      let message;
      if (chatData && blackList[userIndex]) {
        message = "You blocked this user, so you can't send messages to him.";
      } else if (chatData && blackList.includes(true)) {
        message = "You're blocked. You can't send messages to this user.";
      }
      return (
        <span className={styles.messageBlock}>{message}</span>
      );
    };

    render() {
      const { chatData, userId } = this.props;
      return (
        <>
          <ChatHeader userId={userId} />
          {this.renderMainDialog()}
          <div ref={this.messagesEnd} />
          {(chatData && chatData.blackList.includes(true)) ? this.blockMessage() : <ChatInput />}
        </>
      );
    }
}

const mapStateToProps = (state) => state.chatStore;

const mapDispatchToProps = (dispatch) => ({
  getDialog: (data) => dispatch(getDialogMessages(data)),
  clearMessageList: () => dispatch(clearMessageList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);
