import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Block extends Component {
  static propTypes = {
    data: PropTypes.object
  }

  render() {
    console.log('hello!!!!') // this is never called!!!
    return <img src={this.props.data.src} />
  }
}
