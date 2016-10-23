import React from 'react'
import { connect } from 'react-redux'
import Goto from './Goto'

export default ({items}) => (
  <section className="people">
    <div className="content">
      <ul>
        { items.map(row => <Goto key={row.id} {...row} />) }
      </ul>
    </div>
  </section>
)
