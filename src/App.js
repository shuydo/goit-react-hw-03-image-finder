// import "./App.css";
// import axios from "axios";
import React, { Component } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import ImageGalleryItem from "./ImageGalleryItem";

import Searchbar from "./Comps/Searchbar";
import ImageGallery from "./ImageGallery";
// alert("www");
import fetchPix from "./js/Api";

// import  Searchbar  from "./Comps/Searchbar";

export default class App extends Component {
  state = {
    query: null,
    imgs: [],
    status: "idle",
  };

  handleSubmit = (query) => this.setState({ query });

  async componentDidUpdate(_, pState) {
    console.log(pState.query, this.state.query);
    if (pState.query !== this.state.query) {
      // console.log("fetch!");

      // https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=21031732-6fee4eefe658f550324b0a29e
      // const {data}=await axios.get(`https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.state.query}$&page=1&per_page=12&key=21031732-6fee4eefe658f550324b0a29e`)
      // const resp = await fetchPix(this.state.query, 1)
      // .then(imgs => {
      this.setState({
        imgs: await fetchPix(this.state.query, 1),
      });
      // // });
      // console.log("hello", this.state.imgs[0]);
      // console.log("hello data.hits:", this.state.imgs[0]);
    }
  }

  render() {
    // const notify = () => toast("Wow so easy!");
    const { imgs } = this.state;
    const showImgs = imgs.length > 0;
    return (
      <div className="App">
        {/* <button onClick={notify}>Notify!</button> */}
        <Searchbar onSubmitGo={this.handleSubmit} />
        {showImgs && <ImageGallery imgs={imgs} />}
        <ToastContainer />

        {/* <img src={} width='320' alt='img'></img> */}
        {/* <Searchbar /> */}
        {/* {r()} */}
        {/* <ImageGalleryItem /> */}
      </div>
    );
  }
}

// `<Searchbar>`, `<ImageGallery>`, `<ImageGalleryItem>`,
// `<Loader>`, `<Button>` ,`<Modal>`
