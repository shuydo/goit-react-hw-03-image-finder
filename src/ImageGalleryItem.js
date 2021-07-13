// import Modal from "./Modal";
export default function ImageGalleryItem({ id, url, clickOnImg }) {
  return (
    <img
      className="galleryImg"
      id={id}
      src={url}
      alt="img"
      // onClick={e => {
      //   console.log(e.target.id);
      //   <Modal id={e.target.id} />;
      // }}
      onClick={clickOnImg}
    ></img>
  );
} // <li className="ImageGalleryItem" key={img.id}></li>
