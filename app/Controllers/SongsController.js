import { ProxyState } from "../AppState.js";
import service from "../Services/SongsService.js";

function _drawSearch() {
    let template = ''
    ProxyState.songs.forEach(s => template += s.Template)
    document.getElementById('search').innerHTML = template

}

function _drawPlaylist() {

}

function _drawClicked() {
    document.getElementById('active').innerHTML = ProxyState.activesong.CTemplate

}


export default class SongsController {
    constructor() {
        ProxyState.on('songs', _drawSearch)
        ProxyState.on('activesong', _drawClicked)
    }

    setActive(id) {
        service.setActive(id)
    }

    search() {
        //NOTE You dont need to change this method
        try {
            window.event.preventDefault();
            service.getMusicByQuery(window.event.target.query.value);
        } catch (error) {
            console.error(error);
        }
    }

    async addSong(id) {
        try {
            window.event.preventDefault()
            let form = window.event.target
            const newPlaylist = {
                title: form.title.value,
                artist: form.artist.value,
                album: form.album.value

            }
            console.log('new player obj', newPlaylist)
            await service.addSong(newPlaylist)
            form.reset()
        } catch (error) {
            console.log(error.message)
        }
    }
    removeSong(id) {

    }
}


