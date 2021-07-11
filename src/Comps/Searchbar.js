export default function Searchbar({ onSubmitGo }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmitGo(e.target.elements.query.value);
      }}
      // autoComplete="off"
    >
      <input type="text" name="query" />
      <button>Search</button>
    </form>
  );
}
