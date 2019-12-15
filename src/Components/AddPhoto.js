import React, { Component } from 'react'

class AddPhoto extends Component {
    constructor () {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit (event) {
        event.preventDefault()
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        const newPost = {
            id: 0,
            imageLink,
            description
        }
        if (imageLink && description) {
            this.props.addPhoto(newPost)
        }
    }

    render() {
        return (
            <div>
                <h2>Photowall</h2>
                <div className='form'>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' placeholder='Link' name="link"/>
                        <input type='text' placeholder='Description' name="description"/>
                        <button>POST</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto