// import {Component} from "react"

import React from "react"

export class CountClass extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count:0
        }
    }

    addCount(){
        this.setState({count:this.state.count+1})
    }

    // componentDidMount(){
    //     this
    // }
    
    render(){
        return(
            <div>
                <h4>Makan</h4>
                {this.state.count}
                <br/>
                <button onClick={this.addCount}>Add Count</button>
            </div>
        )
    }
}