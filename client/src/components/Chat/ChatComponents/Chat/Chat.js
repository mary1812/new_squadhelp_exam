import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import DialogListContainer from '../../DialogComponents/DialogListContainer/DialogListContainer';
import styles from './Chat.module.sass';
import Dialog from '../../DialogComponents/Dialog/Dialog';
import {
  changeChatShow,
  setPreviewChatMode,
  changeShowModeCatalog,
  clearChatError,
  getPreviewChat,
} from '../../../../actions/actionCreator';
import { chatController, notificationController } from '../../../../api/ws/socketController';
import CONSTANTS from '../../../../constants';
import CatalogListContainer from '../../CatalogComponents/CatalogListContainer/CatalogListContainer';
import CatalogCreation from '../../CatalogComponents/CatalogCreation/CatalogCreation';
import CatalogListHeader from '../../CatalogComponents/CatalogListHeader/CatalogListHeader';
import ChatError from '../../../ChatError/ChatError';

class Chat extends React.Component {
  componentDidMount() {
    notificationController.subscribe(this.props.auth.data.id)
    chatController.subscribeChat(this.props.auth.data.id);
    this.props.getPreviewChat();
  }

  componentWillUnmount() {
    notificationController.unsubscribe(this.props.auth.data.id)
    chatController.unsubscribeChat(this.props.auth.data.id);
  }

    renderDialogList = () => {
      const { setChatPreviewMode } = this.props;
      const { chatMode, isShowChatsInCatalog } = this.props.chatStore;
      const { id } = this.props.auth.data;
      const {
        NORMAL_PREVIEW_CHAT_MODE,
        FAVORITE_PREVIEW_CHAT_MODE,
        BLOCKED_PREVIEW_CHAT_MODE,
        CATALOG_PREVIEW_CHAT_MODE,
      } = CONSTANTS;
      return (
        <div>
          {isShowChatsInCatalog && <CatalogListHeader />}
          {!isShowChatsInCatalog && (
          <div className={styles.chatHeader}>
            <img src={`${CONSTANTS.STATIC_IMAGES_PATH}logo.png`} alt="logo" />
          </div>
          )}
          {!isShowChatsInCatalog && (
          <div className={styles.buttonsContainer}>
            <span
              onClick={() => setChatPreviewMode(NORMAL_PREVIEW_CHAT_MODE)}
              className={classNames(styles.button, { [styles.activeButton]: chatMode === NORMAL_PREVIEW_CHAT_MODE })}
            >
              Chats
            </span>
            <span
              onClick={() => setChatPreviewMode(FAVORITE_PREVIEW_CHAT_MODE)}
              className={classNames(styles.button, { [styles.activeButton]: chatMode === FAVORITE_PREVIEW_CHAT_MODE })}
            >
              Favorite
            </span>
            <span
              onClick={() => setChatPreviewMode(BLOCKED_PREVIEW_CHAT_MODE)}
              className={classNames(styles.button, { [styles.activeButton]: chatMode === BLOCKED_PREVIEW_CHAT_MODE })}
            >
              Blocked
            </span>
            <span
              onClick={() => setChatPreviewMode(CATALOG_PREVIEW_CHAT_MODE)}
              className={classNames(styles.button, { [styles.activeButton]: chatMode === CATALOG_PREVIEW_CHAT_MODE })}
            >
              Catalogs
            </span>
          </div>
          )}
          {chatMode === CATALOG_PREVIEW_CHAT_MODE ? <CatalogListContainer /> : <DialogListContainer userId={id} />}
        </div>
      );
    };

    render() {
      const {
        isExpanded, isShow, isShowCatalogCreation, error,
      } = this.props.chatStore;
      const { id } = this.props.auth.data;
      const { changeShow, getPreviewChat } = this.props;
      return (
        <div className={classNames(styles.chatContainer, { [styles.showChat]: isShow })}>
          {error && <ChatError getData={getPreviewChat} />}
          {isShowCatalogCreation && <CatalogCreation />}
          {isExpanded ? <Dialog userId={id} /> : this.renderDialogList()}
          <div
            id="Chat-widget"
            className={styles.toggleChat}
            onClick={() => changeShow()}
          >
            {isShow ? 'Hide Chat' : 'Show Chat'}
          </div>
        </div>
      );
    }
}

const mapStateToProps = (state) => {
  const { chatStore, auth } = state;
  return { chatStore, auth };
};

const mapDispatchToProps = (dispatch) => ({
  changeShow: () => dispatch(changeChatShow()),
  setChatPreviewMode: (mode) => dispatch(setPreviewChatMode(mode)),
  changeShowModeCatalog: () => dispatch(changeShowModeCatalog()),
  clearChatError: () => dispatch(clearChatError()),
  getPreviewChat: () => dispatch(getPreviewChat()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
