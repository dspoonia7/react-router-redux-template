import React from 'react'
import { connect } from 'react-redux'
import {  updateText } from '../actions/user'

@connect((state) => {
  return {
    user: state.user
  }
})
export default class Home extends React.Component {

  updateText = (e) => {
    this.props.dispatch(updateText(e.target.value))
  }

  render() {
    const { user } = this.props

    return (
      <div className="page-wrapper">
        <div>At Home! </div>
        <br />
        <div>
          Enter your name: 
          <input value={user.name} onChange={(e) => this.updateText(e)} />
        </div>
        <br />
        <div>Name: {user.name}</div>
      </div>
    )
  }
}
