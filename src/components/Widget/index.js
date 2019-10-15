import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleChat, addUserMessage, uploadImageAction, deleteImageAction } from '@actions';

import WidgetLayout from './layout';

class Widget extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.fullScreenMode) {
      this.props.dispatch(toggleChat());
    }
  }

  toggleConversation = () => {
    this.props.dispatch(toggleChat());
  }

  handleMessageSubmit = (event) => {
    event.preventDefault();
    const userInput = event.target.message.value;
    if (userInput || this.props.uploadedFile) {
      const message = {};
      if(this.props.addUserMessage) {
        this.props.dispatch(addUserMessage(userInput));
      }
        message.image = this.props.uploadedFile?this.props.uploadedFile: null;
        this.deleteImage();
        message.text = userInput?userInput: null
      this.props.handleNewUserMessage(message.text, message.image);
    }
    event.target.message.value = '';
  }

  deleteImage = () => {
    this.props.dispatch(deleteImageAction())
  };

  uploadImage = (event) => {
    var input = event.target;
    var reader = new FileReader();
    reader.onload = this.readOnLoad();
    reader.readAsDataURL(input.files[0]);
  };

  readOnLoad = () => (e) => {
    this.props.dispatch(uploadImageAction(e.target.result));
  };

  render() {
    return (
      <WidgetLayout
        onToggleConversation={this.toggleConversation}
        uploadImage={this.uploadImage}
        deleteImage={this.deleteImage}
        onSendMessage={this.handleMessageSubmit}
        title={this.props.title}
        titleAvatar={this.props.titleAvatar}
        subtitle={this.props.subtitle}
        senderPlaceHolder={this.props.senderPlaceHolder}
        profileAvatar={this.props.profileAvatar}
        showCloseButton={this.props.showCloseButton}
        fullScreenMode={this.props.fullScreenMode}
        badge={this.props.badge}
        autofocus={this.props.autofocus}
        customLauncher={this.props.customLauncher}
      />
    );
  }
}

Widget.propTypes = {
  title: PropTypes.string,
  titleAvatar: PropTypes.string,
  subtitle: PropTypes.string,
  handleNewUserMessage: PropTypes.func.isRequired,
  // handleUploadImage: PropTypes.func.isRequired,
  // handleDeleteImage: PropTypes.func.isRequired,
  addUserMessage: PropTypes.bool,
  senderPlaceHolder: PropTypes.string,
  profileAvatar: PropTypes.string,
  showCloseButton: PropTypes.bool,
  fullScreenMode: PropTypes.bool,
  badge: PropTypes.number,
  autofocus: PropTypes.bool,
  customLauncher: PropTypes.func
};

export default connect(store => ({
  uploadedFile: store.behavior.get("uploadedFile"),
}))(Widget);
