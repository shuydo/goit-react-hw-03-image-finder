// import { Component } from "react";
// import fetchPix from "./js/Api";

// console.log("in ImageGalleryItem");

// export default class ImageGalleryItem extends Component {
//   state = {
//     imgs: [],
//     is: false,
//   };
//   componentDidUpdate(pProps, _) {
//     console.log("in componentDidUpdate");
//     if (this.state.length === 0) {
//       fetchPix("forest", 1).then(imgs => {
//         this.setState({
//           imgs,
//         });
//       });
//       console.log("hello", this.state.imgs[0]);
//     }
//   }

//   render() {
//     if (this.state.img.length === 0) console.log("0");
//     else console.log("1", this.state);
//     // if (this.state.length === 0) this.setState({is:false})
//     // else this.setState({is:true});

//     return (
//       <div>
//         {}
//         {/* <img src={webformatURL} alt="some pic"></img> */}
//       </div>
//     );
//   }
// }

// import React, { Component } from "react";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default class ImageGalleryItem extends Component {
// state = {
// imgs: [],
// };
// render() {
// if (this.state.imgs.length === 0) toast.error("No match!");
// return <div></div>;
// }
// }
//
