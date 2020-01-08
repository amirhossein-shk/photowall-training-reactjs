import React, { Component } from 'react'
import Title from "./Title"
import { Route } from 'react-router-dom'
import Photowall from "./Photowall";
import AddPhoto from "./AddPhoto";
import Single from "./Single";

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
                <Route path='/addPhoto' render={({history}) => (
                    <div>
                      <AddPhoto {...this.props} history={history}/>
                    </div>
                )}/>
                <Route path='/single/:id' render={(params) => (
                  <Single {...this.props} {...params}/>
                )}/>
            </div>
        )
    }
}

export default Main
