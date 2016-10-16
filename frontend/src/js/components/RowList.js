import React from 'react'
import { connect } from 'react-redux'
import Account from './Account'
import { deleteGoto } from '../actions'

class Row extends React.Component {
  state = {
    focus: false
  }

  onFocus = () => {
    this.setState({focus: true})
  }

  onBlur = () => {
    this.setState({focus: false})
  }

  onClick = () => {
    this.props.dispatch(deleteGoto({id: this.props.id}))
  }

  render() {
    let className = ''
    if (this.state.focus || (this.props.skill && this.props.skill.length == 0)) {
      className += ' editing'
    }
    return (
      <a target="_blank" className="row-link">
        <li
          className={'row' + className}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
        >
          <input type="text"
            ref="skill"
            className="skill craft"
            placeholder="Write a skill..."
            defaultValue={this.props.skill}
          />
          <Account handle={this.props.nickname} {...this.props} />
          <div className="remove x" onClick={this.onClick}>x</div>
        </li>
      </a>
    )
  }
}

const ConnectedRow = connect()(Row)

export default ({items}) => (
  <section className="profile people">
    <div className="content">
      <ul>
        { items.map(row => <ConnectedRow key={row.id} {...row} />) }
      </ul>
    </div>
  </section>
)
