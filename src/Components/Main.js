import React, { Component } from 'react'
import Title from "./Title"
import Photowall from './Photowall'
import AddPhoto from "./AddPhoto";
import { Route } from 'react-router-dom'

class Main extends Component {
    constructor () {
        super ()
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Route exact path='/' render={() => (
                    <div>
                        <Title/>
                    </div>
                )}/>
            </div>
        )
    }
}

export default Main
