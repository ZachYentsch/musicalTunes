import { ProxyState } from "../AppState.js"
import Song from "../Models/Song.js"
import { sandBoxApi } from "./AxiosService.js"

class SongsService {
    getMusicByQuery(query) {
        //NOTE You will not need to change this method
        let url = "https://itunes.apple.com/search?callback=?&term=" + query;
        // @ts-ignore
        $.getJSON(url)
            .then(res => {
                ProxyState.songs = res.results.map(rawData => new Song(rawData));
                console.log(ProxyState.songs)
            })
            .catch(err => {
                throw new Error(err);
            });
    }

    async getMySongs() {
    }

    setActive(id) {
        console.log(id)
        ProxyState.activesong = ProxyState.songs.find(a => a.id == id)
        console.log(ProxyState.activesong)
    }

    addSong(id) {

    }

    removeSong(id) {

    }
}

const service = new SongsService();
export default service;