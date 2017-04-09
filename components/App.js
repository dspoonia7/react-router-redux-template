import React from 'react'
import { Link, browserHistory } from 'react-router'

export default class App extends React.Component {

  render() {
    const { children } = this.props

    return (
      <div>
        <header>
          <div className="nav-link">
            <Link to="/" activeClassName="active-page" onlyActiveOnIndex>Home</Link>
          </div>
          <div className="nav-link">
            <Link to="/foo" activeClassName="active-page" onlyActiveOnIndex>Foo</Link>
          </div>
          <div className="nav-link">
            <Link to="/bar" activeClassName="active-page" onlyActiveOnIndex>Bar</Link>
          </div>
          <div className="nav-link">
            <Link to="/destination" activeClassName="active-page" onlyActiveOnIndex>Destination</Link>
          </div>
        </header>
        <br />
        <hr />
        <div style={{ marginTop: '1.5em' }}>{children}</div>
      </div>
    )
  }
}
