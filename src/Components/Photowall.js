import React, { Component } from 'react'
import Photo from './Photo'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

class Photowall extends Component{
    render() {
        const posts = this.props.posts
        return (
            <div>
                <Link to='/AddPhoto' className='addButton'>+</Link>
                <div className="container">
                { posts.map((post, index) => <Photo key={index} post={post} removePhoto={this.props.removePhoto} />) }
            </div>
            </div>
        )
    }
}

Photowall.propTypes = {
    posts: PropTypes.array.isRequired,
    removePhoto: PropTypes.func.isRequired
}

export default Photowall