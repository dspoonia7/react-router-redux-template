import React from 'react'
import { connect } from 'react-redux'
import {  updateText } from '../actions/count'

@connect((state) => {
  return {
    count: state.count
  }
})
export default class Home extends React.Component {

  updateText = (e) => {
    this.props.dispatch(updateText(e.target.value))
  }

  render() {
    const { count } = this.props

    return (
      <div>
        <div>At Home! </div>
        <br />
        <input value={count.text} onChange={(e) => this.updateText(e)} />
        <div>Entered text.. </div>
        <div>{count.text}</div>
      </div>
    )
  }
}
