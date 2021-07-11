// 21031732-6fee4eefe658f550324b0a29e
// https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=что_искать&page=номер_страницы&per_page=12&key=твой_ключ
const rootURL = "https://pixabay.com/api/?image_type=";
// const tCont = 'photo'; // type contetnt
// const orient = 'horizontal';
// let query = 'cat';
// let pageN = 1; // page No
const pPage = 12; // 12 ===== 200 max
const KEY = "21031732-6fee4eefe658f550324b0a29e"; // my
const constURL = rootURL + "photo&orientation=horizontal&key=" + KEY + "&q=";

const fKeys = (arr) => {
  return arr.map((el) => {
    return {
      id: el.id,
      webformatURL: el.webformatURL,
      largeImageURL: el.largeImageURL,
    };
  });
};

export default async function fetchPix(query, pageN) {
  //   console.log(`${rootURL}${tCont}&orientation=${orient}&q=${query}&page=${pageN}&per_page=${pPage}&key=${KEY}`);
  //   fetch(
  //     `${rootURL}${tCont}&orientation=${orient}&q=${query}&page=${pageN}&per_page=${pPage}&key=${KEY}`,
  //   );
  // fetch(
  //     `${rootURL}${tCont}&q=${query}&per_page=${pPage}&key=${KEY}`,
  //   );
  return await fetch(`${constURL}${query}&page=${pageN}&per_page=${pPage}`)
    .then((r) => r.json())
    .then((r) => fKeys(r.hits));
  // .then(fKeys);
  // then(r=>r.map(el=>el.id))
  // .then(r => {
  //   [1, 2, 3].map(el => console.log(el));

  //   r.map(el => console.log(el));
  // });
}
// export default { fetchPix };
