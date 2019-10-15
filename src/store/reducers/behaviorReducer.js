import { Map } from 'immutable';

import { createReducer } from '@utils/store';

import * as actionTypes from '../actions/actionTypes';

const initialState = Map({ showChat: false, disabledInput: false, uploadedFile: null });

const behaviorReducer = {
  [actionTypes.TOGGLE_CHAT]: state =>
    state.update('showChat', showChat => !showChat),

  [actionTypes.TOGGLE_INPUT_DISABLED]: state =>
    state.update('disabledInput', disabledInput => !disabledInput),

  [actionTypes.UPLOAD_IMAGE]: (state, { image }) =>
    state.set('uploadedFile', image),

  [actionTypes.DELETE_IMAGE]: state =>
    state.set('uploadedFile', null),
};

export default (state = initialState, action) => createReducer(behaviorReducer, state, action);
