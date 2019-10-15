import React from 'react';
import PropTypes from 'prop-types';

import send from '@assets/send.svg';
import upload from '@assets/upload.svg';

import './style.scss';

const Sender = ({ sendMessage, placeholder, disabledInput, autofocus, uploadImage }) =>
  <form className="rcw-sender" onSubmit={sendMessage}>
    <input type="text" className="rcw-new-message" name="message" placeholder={placeholder} disabled={disabledInput} autoFocus={autofocus} autoComplete="off" />
    <div className="rcw-upload">
      <input
        style={{ display: "none" }}
        accept="image/*"
        id="contained-button-file"
        type="file"
        onChange={e => uploadImage(e)}
      />
      <label
        htmlFor="contained-button-file"
        className="rcw-upload"
      >
        <img src={upload} className="rcw-upload-icon" alt="upload" />
      </label>
    </div>
    <button type="submit" className="rcw-send">
      <img src={send} className="rcw-send-icon" alt="send" />
    </button>
  </form>;

Sender.propTypes = {
  sendMessage: PropTypes.func,
  placeholder: PropTypes.string,
  disabledInput: PropTypes.bool,
  autofocus: PropTypes.bool
};

export default Sender;
