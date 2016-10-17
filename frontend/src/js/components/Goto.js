import React from 'react'
import { connect } from 'react-redux'
import { saveGoto, editGoto, deleteGoto } from '../actions'

class Goto extends React.Component {
  state = {
    dirty: false,
    focus: false
  }

  onFocus = () => {
    this.setState({focus: true})
  }

  onBlur = () => {
    this.setState({focus: false})
    this.onSubmit()
  }

  delete = () => {
    if (!this.props.editable) {
      return
    }
    this.props.dispatch(deleteGoto({id: this.props.id}))
  }

  editAttribute = (attr) => {
    return e => {
      const change = {}
      change[attr] = e.target.value
      const goto = Object.assign({}, this.props, change)
      this.props.dispatch(editGoto(goto))

      if (change[attr] != this.props[attr]) {
        this.setState({dirty: true})
      }
    }
  }

  onKeyDown = (e) => {
    if (e.key == 'Enter') {
      this.onSubmit()
    }
  }

  onSubmit = (e) => {
    if (!this.props.editable || !this.state.dirty) {
      return
    }
    this.props.dispatch(saveGoto(this.props))
    this.setState({dirty: false})
  }

  render() {
    let className = ''
    if (this.state.focus || (this.props.skill && this.props.skill.length == 0)) {
      className += ' editing'
    }
    return (
      <a target="_blank" className="row-link">
        <li
          className={'goto' + className}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onKeyDown={this.onKeyDown}
        >
        <form className="row" onSubmit={this.onSubmit}>
          <input type="text"
            ref="skill"
            className="skill craft"
            placeholder="Write a skill..."
            value={this.props.skill}
            onChange={this.editAttribute('skill')}
            disabled={!this.props.editable}
          />
          <div className="profile">
            <div className="user">
              <span className="name">{this.props.name}</span>
              <input
                className="handle"
                type="text"
                placeholder="Add a Twitter handle..."
                value={this.props.nickname}
                onChange={this.editAttribute('nickname')}
                disabled={!this.props.editable}
              />
            </div>
            <img src={this.props.image} />
          </div>
          {this.props.editable && this.props.created_at ?
            <div className="remove x" onClick={this.delete}>x</div>
            : null
          }
        </form>
        </li>
      </a>
    )
  }
}

const props = state => ({
  editable: state.user.id == state.profile.id,
})

export default connect(props)(Goto)
