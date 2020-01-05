import React, { Component } from 'react'
import Title from "./Title"

import { Route } from 'react-router-dom'
import {removePost} from "../redux/actions";
import Photowall from "./Photowall";

class Main extends Component {
    constructor () {
        super ()
    }

    render() {
        return (
            <div>
                <Route exact path='/' render={() => (
                    <div>
                      <Title/>
                      <Photowall {...this.props} />
                    </div>
                )}/>
            </div>
        )
    }
}

export default Main
