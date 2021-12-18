import React, { Component } from 'react'

export default class FormSoalUjianCreate extends Component {
  

  createTable = (id) => {
    // Outer loop to create parent
      let children = []
      //Inner loop to create children
      for (let j = 0; j < 50; j++) {

      }
      return children
  }
  render() {
    return (
      <div>
        {this.createTable()}
      </div>
    )
  }
}
