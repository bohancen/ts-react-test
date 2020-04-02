import * as React from "react";

import {Header} from './components/Header'

import alertDialog from 'ui/alert-dialog'

const event = {
  async click(){
    console.log('1秒后显示')
    await new Promise(r=>setTimeout(r,1000))
    alertDialog('显示')
  }
}

export default class App extends React.Component {
    render() {
        return <div>
          <h1>app</h1>
          <button onClick={event.click}>click</button>
          <Header name="coder" />
        </div>
    }
}
