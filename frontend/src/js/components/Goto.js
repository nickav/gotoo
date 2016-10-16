import React from 'react'
import { connect } from 'react-redux'
import { deleteGoto } from '../actions'

class Goto extends React.Component {
  state = {
    focus: false
  }

  onFocus = () => {
    this.setState({focus: true})
  }

  onBlur = () => {
    this.setState({focus: false})
  }

  delete = () => {
    if (!this.props.editable) {
      return;
    }
    this.props.dispatch(deleteGoto({id: this.props.id}))
  }

  onSubmit = (e) => {
    //console.log('submit', e)
  }

  onKeyDown = (e) => {
    if (e.key == 'Enter') {

    }
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
        <form className="row" onSubmit={(e) => { console.log(e) }}>
          <input type="text"
            ref="skill"
            className="skill craft"
            placeholder="Write a skill..."
            defaultValue={this.props.skill}
            disabled={!this.props.editable}
          />
          <div className="profile">
            <div className="user">
              <span className="name">{this.props.name}</span>
              <input
                className="handle"
                type="text"
                placeholder="Add a Twitter handle..."
                defaultValue={this.props.nickname}
                disabled={!this.props.editable}
              />
            </div>
            <img src={this.props.image} />
          </div>
          {this.props.editable ?
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
