import store from './store';
import * as actions from './actions';

export function addUserMessage(text) {
  store.dispatch(actions.addUserMessage(text));
}

export function addResponseMessage(text) {
  store.dispatch(actions.addResponseMessage(text));
}

export function addLinkSnippet(link) {
  store.dispatch(actions.addLinkSnippet(link));
}

export function renderCustomComponent(component, props, showAvatar = false, entity) {
  store.dispatch(actions.renderCustomComponent(component, props, showAvatar, entity));
}

export function toggleWidget() {
  store.dispatch(actions.toggleChat());
}

export function toggleInputDisabled() {
  store.dispatch(actions.toggleInputDisabled());
}

export function dropMessages() {
  store.dispatch(actions.dropMessages());
}

export function isWidgetOpened() {
  return store.getState().behavior.get('showChat');
}

export function uploadImage(image) {
  store.dispatch(actions.uploadImageAction(image));
}

export function deleteImage() {
  store.dispatch(actions.deleteImageAction())
}
