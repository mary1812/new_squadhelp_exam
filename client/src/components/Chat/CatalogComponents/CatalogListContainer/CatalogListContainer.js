import React from 'react';
import { connect } from 'react-redux';
import { getCatalogList, removeChatFromCatalog } from '../../../../actions/actionCreator';
import CatalogList from '../CatalogList/CatalogList';
import DialogList from '../../DialogComponents/DialogList/DialogList';

class CatalogListContainer extends React.Component {
  componentDidMount() {
    this.props.getCatalogList();
  }

    removeChatFromCatalog = (event, chatId) => {
      const { id } = this.props.chatStore.currentCatalog;
      this.props.removeChatFromCatalog({ chatId, catalogId: id });
      event.stopPropagation();
    };

    getDialogsPreview = () => {
      const { messagesPreview, currentCatalog } = this.props.chatStore;
      const { chats } = currentCatalog;
      const dialogsInCatalog = [];
      for (let i = 0; i < messagesPreview.length; i++) {
        for (let j = 0; j < chats.length; j++) {
          if (chats[j] === messagesPreview[i].id) {
            dialogsInCatalog.push(messagesPreview[i]);
          }
        }
      }
      return dialogsInCatalog;
    };

    render() {
      const { catalogList, isShowChatsInCatalog } = this.props.chatStore;
      const { id } = this.props.auth.data;
      return (
        <>
          {isShowChatsInCatalog ? (
            <DialogList
              userId={id}
              preview={this.getDialogsPreview()}
              removeChat={this.removeChatFromCatalog}
            />
          )
            : <CatalogList catalogList={catalogList} />}
        </>
      );
    }
}

const mapStateToProps = (state) => {
  const { chatStore, auth } = state;
  return { chatStore, auth };
};

const mapDispatchToProps = (dispatch) => ({
  getCatalogList: (data) => dispatch(getCatalogList(data)),
  removeChatFromCatalog: (data) => dispatch(removeChatFromCatalog(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CatalogListContainer);
