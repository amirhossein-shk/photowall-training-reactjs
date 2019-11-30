import React, { Component } from 'react'

class AddPhoto extends Component {
    render() {
        return (
            <div>
                <h2>Photowall</h2>
                <div className='form'>
                    <form>
                        <input type='text' placeholder='Link'/>
                        <input type='text' placeholder='Description'/>
                        <button>POST</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddPhoto