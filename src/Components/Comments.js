import React, {Component} from 'react'

class Comments extends Component{
  constructor () {
    super ()

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    const comment = event.target.elements.comment.value
    console.log(this.props)

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Place Your Comment Here" name="comment"/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Comments
