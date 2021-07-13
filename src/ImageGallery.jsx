import ImageGalleryItem from "./ImageGalleryItem";
export default function ImageGallery({ imgs, clickOnGall }) {
  return (
    <ul className="ImageGallery">
      {imgs.map(({ id, webformatURL }) => (
        <li key={id}>
          <ImageGalleryItem
            id={id}
            url={webformatURL}
            clickOnImg={clickOnGall}
          />
        </li>
      ))}
    </ul>
  );
}
