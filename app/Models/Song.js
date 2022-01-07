export default class Song {
    constructor(data) {
        this.title = data.trackName || data.title;
        this.albumArt = data.albumArt || data.artworkUrl100.replace(/100x100/g, "300x300");
        this.artist = data.artistName || data.artist;
        this.album = data.collectionName || data.album;
        this.price = data.trackPrice || data.price;
        this.preview = data.previewUrl || data.preview
        this.id = data.trackId?.toString() || data.id;
    }
    get Template() {
        return `
        <div>
        <ul>
          <li onclick="app.songsController.setActive('${this.id}')" class="selectable"><img src="${this.albumArt}" width="40%" alt="${this.album}"  class="d-flex justify-content-center"> <p> ${this.title} - ${this.artist}</p>
          </li>
        </ul>
      </div>`;
    }

    get CTemplate() {
        return `
        <div class="col-6">
            <div class="text-center text-white">
              <p>${this.album}</p>
            </div>
            <div class="text-white">
              <img src="${this.albumArt}" alt="${this.album}" class="img-fluid">
              <h4 class="text-center">${this.title}</h4>
              <p class="text-center">${this.artist} <span><p class="text-white mdi mdi-heart-circle d-flex justify-content-center" onclick=""></p> </span></p>
            </div>
          </div>`
    }

    get playlistTemplate() {
        return `
        <div>
        <ul>
          <li onclick="app.songsController.setActive('${this.id}')" class="selectable"><img src="${this.albumArt}" width="40%" alt="${this.album}"  class="d-flex justify-content-center"> <p> ${this.title} - ${this.artist}</p>
          </li>
        </ul>
      </div>`;
    }
}