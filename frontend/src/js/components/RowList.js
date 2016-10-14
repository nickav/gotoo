import React from 'react'
import Account from './Account'

export class Row extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      focus: false
    }
    this.onBlur = this.onBlur.bind(this)
    this.onFocus = this.onFocus.bind(this)
  }

  onFocus() {
    this.setState({focus: true})
  }

  onBlur() {
    this.setState({focus: false})
  }

  render() {
    let className = ''
    if (this.state.focus || this.props.skill.length == 0) {
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
            className="craft"
            placeholder="Write a skill..."
            defaultValue={this.props.skill}
          />
          <Account {...this.props} />
        </li>
      </a>
    )
  }
}

export default ({data}) => (
  <section className="profile people">
    <div className="content">
      <ul>
        { (data || []).map(row => <Row {...row} />) }
      </ul>
    </div>
  </section>
)
