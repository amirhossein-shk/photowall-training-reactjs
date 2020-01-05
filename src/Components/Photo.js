import React, { Component } from 'react'
import {removePost} from "../redux/actions";

class Photo extends Component{
    render() {
        const post = this.props.post
        return (
            <figure className="figure">
                <img className="photo" src={post.imageLink} alt={post.description} />
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
