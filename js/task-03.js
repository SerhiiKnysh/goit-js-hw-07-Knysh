const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Як повинна виглядати розмітка

{
  /* <ul id="gallery" class="gallery">
    <li class="item">
    <img class="image" src="https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      alt="White and Black Long Fur Cat" />
    </li>
    <li class="item">
    <img class="image" src='https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      alt='Orange and White Koi Fish Near Yellow Koi Fish' />
    </li>
    <li class="item">
    <img class="image" src='https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
      alt='Group of Horses Running' />
    </li>
    ...
</ul> */
}

// 1 Спосіб (через insertAdjacentHTML())

const galleryEl = document.querySelector('#gallery');
galleryEl.classList.add('gallery');

const makeImagesItems = ({ url, alt }) => {
  return `
  <li class="item">
    <img class="image"
        src = ${url} 
        alt = ${alt}
        /> 
  </li>`;
};

const imagesMarkup = images.map(makeImagesItems).join('');

galleryEl.insertAdjacentHTML('afterbegin', imagesMarkup);

console.log(galleryEl);

// 2 Спосіб (через createElement та append)

// const galleryEl = document.querySelector("#gallery");
// galleryEl.classList.add("gallery");

// const makeImagesItems = ({url, alt}) => {
//   const itemsEl = document.createElement("li");
//   itemsEl.classList.add("item");

//   const imgEl = document.createElement("img");
//   imgEl.classList.add("image");
//   imgEl.src = url;
//   imgEl.alt = alt;
//   imgEl.width = 600;

//   itemsEl.append(imgEl);
//   // galleryEl.append(itemsEl);

//   return itemsEl;
// };

// const imagesMarkup = images.map(makeImagesItems);
// galleryEl.append(...imagesMarkup);
