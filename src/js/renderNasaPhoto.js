const containerEl = document.querySelector('.container');

export default function (photo) {
  const rend = `<div class="gallery">
    <div class="gallery-item">
        <img src="${photo.img_src}" alt="${photo.id}" />
        <div class="image-overlay">
            <p>${photo.earth_date}</p>
        </div>
    </div>
    <div class="gallery-item">
        <img src="${photo.img_src}" alt="${photo.id}" />
        <div class="image-overlay">
            <p>${photo.earth_date}</p>
        </div>
    </div>
    <div class="gallery-item">
        <img src="${photo.img_src}" alt="${photo.id}" />
        <div class="image-overlay">
            <p>${photo.earth_date}</p>
        </div>
    </div>
    <div class="gallery-item">
        <img src="${photo.img_src}" alt="${photo.id}" />
        <div class="image-overlay">
            <p>${photo.earth_date}</p>
        </div>
    </div>
    <div class="gallery-item">
        <img src="${photo.img_src}" alt="${photo.id}" />
        <div class="image-overlay">
            <p>${photo.earth_date}</p>
        </div>
    </div>
    <div class="gallery-item">
        <img src="${photo.img_src}" alt="${photo.id}" />
        <div class="image-overlay">
            <p>${photo.earth_date}</p>`;

  return containerEl.insertAdjacentHTML('beforeend', rend);
}
