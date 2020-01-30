import React, { Component } from 'react'
import './Card.css'
import {connect} from 'react-redux'
import StarRatingComponent from 'react-star-rating-component';
import {deleteCard} from '../../action/Action'
import EditCard from '../editCard/EditCard';
import {Link} from'react-router-dom'

class Card extends Component { 
    
    state={
        isEdit:false,
        id:'',
      
     }
     showModalEdit=(id)=> {
        this.setState({
            isEdit: true,
            id:id
    });
      };
      hideModalEdit = () => {
        this.setState({
            isEdit: false
      })
      }   
    

    render() {
        return (
            <div className="card">
                  <div className="affiche">
                        <img className="image" src={this.props.cards.images.poster} alt=""/>
                        <p className="name">{this.props.cards.title}</p>
                        <p className="date">{this.props.cards.year}</p>
                        <span >
                        <StarRatingComponent name="rate1"  starCount={5} value={this.props.cards.rating.watching}   emptyStarColor={'black'}  starColor={'#728F82'}/></span>
                        <Link to={'/' + this.props.index}>
                        <button className="description"> Movie Description </button>
                        </Link>
                  </div>

                  <div className="modifier">
                          <button className="edit" onClick={this.showModalEdit}>  Edit </button>
                          <EditCard edits={this.state.isEdit} hide={this.hideModalEdit} myMovie={this.props.cards} />
                          <button className="delete" onClick={()=>this.props.deleteCard(this.props.index)}> Remove </button>
                  </div>
                  
            </div>
            
        )
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        deleteCard:id=> dispatch(deleteCard(id))}
}
export default connect(null,mapDispatchToProps)(Card)
