import React, { Component } from 'react'
import './AddCard.css'
import {connect} from "react-redux";
import {addCard} from '../../action/Action'
class AddCard extends Component {
    state={
        title:"",
        year:"",
        images:"",
        rating:"",
        synopsis:""
    }
    changEvent=(event)=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    render() {if(this.props.show)  {
        return (
            <div className="affiche-modal">
            <div className="add">
                <h2 className="title">Add Movie:</h2>
              <form className="inputadd">
                  <input className="champs" name="images" type="text" onChange={this.changEvent} value={this.state.images}/> 
                  <input className="champs" name="title" type="text" onChange={this.changEvent} value={this.state.title}/>
                  <input className="champs" name="year" type="text" onChange={this.changEvent} value={this.state.year}/>
                  <input className="champs" name="rating" type="text" onChange={this.changEvent} value={this.state.rating} />
                  <input className="champs" name="synopsis" type="text" onChange={this.changEvent} value={this.state.synopsis}/>
               </form>
              <button className="valide" onClick={()=>{
                  
                    this.props.addCard({id:Date.now,title:this.state.title,year:this.state.year,images:{poster:this.state.images},rating:{watching:this.state.rating},synopsis:this.state.synopsis});this.props.hide()}} >Validate</button>
            </div>
            </div>
        )}
        else return null
    }
}
const mapDispatchToProps=dispatch=>(
    {
        addCard:(movie)=> dispatch(addCard(movie))
        
})

export default connect(null,mapDispatchToProps)(AddCard);