import React from 'react'
import { connect } from 'react-redux'

@connect((state) => {
  return {
    user: state.user
  }
})
export default class Destination extends React.Component {

  render() {
    const { user } = this.props

    return (
      <div className="page-wrapper">
        <div>At Destination! </div>
        <br />
        <div>Hey {user.name}, you have reached your destination!!</div>
      </div>
    )
  }
}
