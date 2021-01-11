import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component {
    renderMap(){
        if (this.props.tracks){
           
         return  this.props.tracks.map(track => {
             return <Track track={track}  
                key={track.id} 
                onAdd={this.props.onAdd}
                onRemove={this.props.onRemove}
                isRemoval={this.props.isRemoval}
              /> 
            });
           
        } 
       }
       
    render() {
        return (
            <div className="TrackList">
                {this.renderMap()}
            </div>
        )
    }
}

export default TrackList;
