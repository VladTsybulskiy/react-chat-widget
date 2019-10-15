import React, { Component } from "react";
import './styles.scss';

export default class ImageContainer extends Component {
  render() {
    return(
      <div className="rcw-image-container">
        <div className="uploaded-image">
          <span className="close" onClick={() => this.props.deleteImage()}>&times;</span>
          <img src={this.props.image} className="rcw-image-container-uploaded-image" alt="image" />
        </div>
      </div>
    )
  }
}
