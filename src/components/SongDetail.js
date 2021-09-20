import React from 'react';
import {connect} from 'react-redux';

function SongDetail({songName}) {
    if(!songName){
        return <div>Select a Song</div>
    }
    return (
        <div>
            <h3>Details:</h3>
            <p>Title: {songName.title}
            <br />
            Duration: {songName.duration}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {songName: state.selectedSong}
}
export default connect(mapStateToProps)(SongDetail);
