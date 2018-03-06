import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MegadraftIcons, insertDataBlock } from 'megadraft'

export default class Button extends Component {
  static propTypes = {
    onChange: PropTypes.func,
    editorState: PropTypes.object,
    className: PropTypes.string,
    title: PropTypes.string
  }

  onClick = () => {
    const src = window.prompt('Enter a URL')
    if (!src) return

    const data = { src: src, type: 'image', display: 'medium' }
    this.props.onChange(insertDataBlock(this.props.editorState, data))
  }

  render() {
    return (
      <button
        className={this.props.className}
        type="button"
        onClick={this.onClick}
        title={this.props.title}
      >
        <MegadraftIcons.ImageIcon className="sidemenu__button__icon" />
      </button>
    )
  }
}
