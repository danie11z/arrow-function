import React, {Component} from "react"

export default class arrowFunction extends Component{
  Msg = () => ("Aprendendo arrowFunction")

  Conta = (x) => {
    return(
      <div>
        <p>{x + x}</p>
      </div>
    )
  }

  render(){
    return(
      <div>
        <p>{this.Msg()}</p>
        {this.Conta(4)}
      </div>
    )
  }
}