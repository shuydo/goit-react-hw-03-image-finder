export default function ImageGallery({ imgs }) {
  return (
    <ul>
      {imgs.map((img) => (
        <li key={img.id}>
          <img src={img.webformatURL} alt="some pic"></img>
        </li>
      ))}
    </ul>
  );
}
