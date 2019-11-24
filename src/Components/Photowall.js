import React, { Component } from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'

class Photowall extends Component{
    render() {
        const posts = this.props.posts
        return (
            <div className="container">
                { posts.map((post, index) => <Photo key={index} post={post} removePhoto={this.props.removePhoto} />) }
            </div>
        )
    }
}

Photowall.propTypes = {
    posts: PropTypes.array.isRequired,
    removePhoto: PropTypes.func.isRequired
}

export default Photowall