
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';


class Result extends Component{

    render(){
       
    let ListImages
        const {images}=this.props
        if(images){
            ListImages=(
              <GridList col={3}>
               {images.map(img=>(
                   <GridTile 
                   key={img.id}
                   title={img.tags}
                   subtitle={
                       <span>
                       <strong>{img.user}</strong>
                       </span>
                   }
                   actionIcon={
                       <IconButton>
                       <ZoomIn color="white"/>
                       </IconButton>
                   }
                   >
                   
                   <img src={img.largeImageURL} alt=""/>
                   </GridTile>
               ))}
              </GridList>
          )
        }else{
            ListImages=null
        }
        return (
           {ListImages}
        )
    }

}
Result.propTypes={
    images:PropTypes.array.isRequired
}
export default Result