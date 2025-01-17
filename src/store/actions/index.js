import * as actions from './actionTypes';

export function toggleChat() {
  return {
    type: actions.TOGGLE_CHAT
  };
}

export function toggleInputDisabled() {
  return {
    type: actions.TOGGLE_INPUT_DISABLED
  };
}

export function addUserMessage(text) {
  return {
    type: actions.ADD_NEW_USER_MESSAGE,
    text
  };
}

export function addResponseMessage(text) {
  return {
    type: actions.ADD_NEW_RESPONSE_MESSAGE,
    text
  };
}

export function addLinkSnippet(link) {
  return {
    type: actions.ADD_NEW_LINK_SNIPPET,
    link
  };
}

export function renderCustomComponent(component, props, showAvatar, entity) {
  return {
    type: actions.ADD_COMPONENT_MESSAGE,
    component,
    props,
    showAvatar,
    entity
  };
}

export function dropMessages() {
  return {
    type: actions.DROP_MESSAGES
  };
}

export function hideAvatar() {
  return {
    type: actions.HIDE_AVATAR
  };
}
export function uploadImageAction(image) {
  return {
    type: actions.UPLOAD_IMAGE,
    image,
  }
}

export function deleteImageAction() {
  return {
    type: actions.DELETE_IMAGE,
  }
}