import React, { Component } from 'react'
import './EditCard.css'
import {connect} from "react-redux";
import{editCard} from'../../action/Action'
class EditCard extends Component {
    state={
        _id:this.props.myMovie._id,
        title:this.props.myMovie.title,
        year:this.props.myMovie.year, 
       images:{poster:this.props.myMovie.images.poster},
        rating:{watching:this.props.myMovie.rating.watching},
        synopsis:this.props.myMovie.synopsis,
      
    }
    onChangEdit=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    handleRating = event => {
        this.setState({
          rating: { watching: event.target.value },
        });
      };
    handlePoster = event => {
        this.setState({
          images: { poster: event.target.value },
        });
      };
   setMovie=(id)=>{
       let newFilm={
              _id:this.state._id,
              title:this.state.title,
              year:this.state.year,
              images:{poster:this.state.images.poster},
              rating:{watching:this.state.rating.watching},
              synopsis:this.state.synopsis
       }
       this.props.editCard(id,newFilm)
   }
    render() {if(this.props.edits){
      console.log(this.props.myMovie)
        return (
          
            <div className="modal-edit">
            <div className="poster">
                <h2 className="title-edit">Edit Movie:</h2>
              <form className="edit-value">
                  <input className="value"  type="text" onChange={this.handlePoster} value={this.state.images.poster}/> 
                  <input className="value" name="title" type="text"onChange={this.onChangEdit} value={this.state.title} />
                  <input className="value" name="year" type="text"onChange={this.onChangEdit} value={this.state.year}/>
                  <input className="value" type="text"onChange={this.handleRating}value={this.state.rating.watching} />
                  <textarea className="textarea" name="movieDescription" type="text"onChange={this.onChangEdit}value={this.state.synopsis} />
               </form>
               
              <button className="save" onClick={()=>{this.setMovie(this.props.myMovie._id);this.props.hide()}}>Save</button>
                    </div>
            </div>
           
        )
    }
     else return null
    }
}
const mapDispatchToProps=dispatch=>(
    {
        editCard:(id,newMovie)=> dispatch(editCard(id,newMovie))
    })

export default connect(null,mapDispatchToProps)(EditCard);