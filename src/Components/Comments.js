import React, {Component} from 'react'

class Comments extends Component{
  constructor () {
    super ()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (event) {
    event.preventDefault()
    const comment = event.target.elements.comment.value
    this.props.addComment(comment)
  }

  render() {
    return (
      <div>
        {
          this.props.comments.map((comment, index) => {
            return (
              <p key={index}>
                {comment}
              </p>
            )
          })
        }
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Place Your Comment Here" name="comment"/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default Comments
