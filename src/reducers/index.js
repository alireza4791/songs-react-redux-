import { combineReducers } from "redux";

const SongListReducer = () => {
    return[{title: 'its raining men', duration: '4:05'},
            {title: 'whatever it takes', duration: '3:52'},
                {title: 'E for extiction', duration: '2:49'},
                    {title: 'something just like this', duration: '4:20'}]
}

const SelectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: SongListReducer,
    selectedSong: SelectedSongReducer
});