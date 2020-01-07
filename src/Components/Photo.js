import React, { Component } from 'react'
import {removePost} from "../redux/actions";
import {Link} from 'react-router-dom'

class Photo extends Component{
    render() {
        const post = this.props.post
        return (
            <figure className="figure">
                <Link to={`/single/${post.id}`}><img className="photo" src={post.imageLink} alt={post.description} /></Link>
                <figcaption>
                    <p> {post.description} </p>
                </figcaption>
                <div className="button-container">
                    <button className="remove-button" onClick={ () => this.props.dispatch(removePost(this.props.index)) }> Remove </button>
                </div>
            </figure>
        );
    }
}

export default Photo
