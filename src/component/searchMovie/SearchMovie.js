import React, { Component } from 'react'
import './SearchMovie.css'
import StarRatingComponent from 'react-star-rating-component';
import{searchCard,searchStar} from'../../action/Action'
import {connect} from "react-redux";
class SearchMovie extends Component {
    state={
        rating:0
    }
    onStarClick=(nextValue)=> {
        this.setState({rating: nextValue});
      }
     
    render() {
        // const {nameFilter}=this.props
        return (
            <div className="searchCard">
              
                        <StarRatingComponent name="rate1"  starCount={5} emptyStarColor={'#DEEFE8'} 
                        onStarClick={this.props.searchRating(this.state.rating),this.onStarClick} 
                           starColor={'#2B886F'} />
            <input className="search" type="text" placeholder="Search" onChange={(e)=>this.props.search(e.target.value)}/>
        </div>
        )
    }
}


const mapDispatchToProps=dispatch=>{
    return{
        search:(movieName)=>dispatch(searchCard(movieName)),
        searchRating:(rating)=>dispatch(searchStar(rating))
    }
    
}
export default connect(null,mapDispatchToProps)(SearchMovie)