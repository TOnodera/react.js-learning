import BaseLayout from './components/templates/BaseLayout'
import React from 'react'

//dummy
const isAuthenticated = true

class App extends React.Component {
  render() {
    return <BaseLayout isAuthenticated={isAuthenticated} />
  }
}

export default App
