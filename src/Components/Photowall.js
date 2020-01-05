import React, { Component } from 'react'
import Photo from './Photo'
import { Link } from "react-router-dom";

class Photowall extends Component{
    render() {
        const posts = this.props.posts
        return (
            <div>
                <Link to='/AddPhoto' className='addButton'>+</Link>
                <div className="container">
                { posts.map((post, index) => <Photo key={index} post={post} {...this.props} index={index} />) }
            </div>
            </div>
        )
    }
}

export default Photowall
