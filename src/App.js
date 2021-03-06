import React, { Component } from "react"; // import axios from "axios";
import Loader from "react-loader-spinner"; // import { ToastContainer } from "react-toastify";
import fetchPix from "./js/Api";

import Searchbar from "./Comps/Searchbar"; // import "react-toastify/dist/ReactToastify.css";
import ImageGallery from "./Comps/ImageGallery";
import Modal from "./Comps/Modal";

import Button from "./Comps/Button";

export default class App extends Component {
  state = {
    query: null,
    curPage: 1,
    imgs: [],
    modalImgId: null,
    showM: false,
    status: false,
  };

  handleSubmit = (query) => this.setState({ query, curPage: 1 });
  toggleModal = () => this.setState({ showM: !this.state.showM });
  handleMore = () => this.setState(({ curPage }) => ({ curPage: curPage + 1 }));

  handleTakeID = (e) => {
    this.setState({ modalImgId: +e.target.id });
    this.toggleModal();
  };

  async componentDidUpdate(_, pState) {
    const { state } = this;
    const { query, curPage, imgs } = state;

    if (pState.query !== query) {
      this.setState({
        status: true,
        imgs: [...(await fetchPix(query, curPage))],
      });
      this.setState({ status: false });
    }

    if (pState.curPage !== curPage) {
      this.setState({
        status: true,
        imgs: [...imgs, ...(await fetchPix(query, curPage))],
      });
      this.setState({ status: false });
    }

    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    }); // console.log("finall cDU");
  }

  render() {
    // const notify = () => toast("Wow so easy!");
    const { state, handleTakeID, handleMore, toggleModal } = this;
    const { imgs, status, showM, modalImgId } = state;
    const toSearch = (id) => {
      return imgs[imgs.map((el) => el.id).indexOf(id)].largeImageURL;
    }; // return big img url by id (take from DOM by click on screen)

    return (
      <div className="App">
        {status && (
          <Loader
            className="Loader"
            type="Watch"
            // type="ThreeDots" color="red" color="#00BFFF" height={100} width={100} timeout={3000} 303f9f
            // Audio Watch Triangle BallTriangle Bars Circles Grid Hearts Oval Puff Rings TailSpin ThreeDots RevolvingDot MutatingDots
          />
        )}
        {/* <button onClick={notify}>Notify!</button>  */}
        <Searchbar onSubmitDo={(query) => this.setState({ query })} />
        {!status && imgs.length > 0 && (
          <>
            <ImageGallery imgs={imgs} clickOnGall={handleTakeID} />
            <Button onClick={handleMore} />
          </>
        )}
        {showM && (
          <Modal urlBigImg={toSearch(modalImgId)} onClose={toggleModal} />
        )}{" "}
        {/* <ToastContainer /> */}
      </div>
    );
  }
} // <Searchbar> <ImageGallery> <ImageGalleryItem> <Loader> <Button> <Modal>
