import { Component } from "react";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown = (e) => {
    if (e.code === "Escape") this.props.onClose();
  };
  handleClickOnBD = (e) => {
    if (e.target === e.currentTarget) this.props.onClose();
  };
  render() {
    return (
      <div className="Overlay" onClick={this.handleClickOnBD}>
        <div className="Modal">
          <img src={this.props.urlBigImg} alt="oversize" />
        </div>
      </div>
    );
  }
} // https://basiclightbox.electerious.com/
