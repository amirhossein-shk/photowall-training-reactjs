import React, {Component} from 'react'
import Comments from './Comments'
import Photo from "./Photo";

class Single extends Component{
  render() {
    const {match, posts} = this.props
    const id = match.params.id
    const post = posts.find((post) => {
      return post.id === id
    })

    return (
      <div>
        <Comments addComment={this.props.addComment} comments={this.props.comments}/>
        <Photo post={post}/>
      </div>
    )
  }
}

export default Single
