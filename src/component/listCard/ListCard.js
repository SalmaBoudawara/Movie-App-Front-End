import React, { Component } from 'react'
import './ListCard.css'
import Card from'../card/Card'
import {connect} from "react-redux";
import {fetchMovie} from '../../action/Action'

 class ListCard extends Component {
  componentDidMount(){
    this.props.fetchMovie();
  }
 
     render(){
       
    return (
        <div className="list">
          {this.props.List.filter(el=> el.title.toUpperCase().includes(this.props.nameFilter.toUpperCase()) && (el.rating.watching >= this.props.rate))
          .map((el)=>(<Card key={el._id} index={el._id}cards={el}/>))} 
          <button className="adde" onClick={() => {this.props.modal() }} >  + </button>
         
          
        </div>
    )
}
}
const mapStateToProps= state=>({
    List:state.reducerMovie,
    nameFilter:state.reducerSearch,
    rate:state.reducerSearchRating
})

export default connect(mapStateToProps,{fetchMovie})(ListCard)