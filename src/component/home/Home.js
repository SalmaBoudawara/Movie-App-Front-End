import React, { Component } from 'react'
import ListCard from '../listCard/ListCard'
import AddCard from '../addCard/AddCard'
import SearchMovie from '../searchMovie/SearchMovie';

export default class Home extends Component {
  
        state={
            show:false,
         }
         showModal=()=> {
            this.setState({
              show: true
            });
          };
          hideModal = () => {
            this.setState({
              show: false
          })
          }
          render() {
              
        return (
            <div className="home">
                <div className="searched" >
                <SearchMovie/>
               </div>
       <ListCard modal={this.showModal}/>
       <AddCard show={this.state.show} hide={this.hideModal} />
     
            </div>
        )
    }
}
