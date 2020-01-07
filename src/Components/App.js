import Main from './Main'
import { connect } from 'react-redux'

function mapStateToProps (state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

const App = connect(mapStateToProps)(Main);

export default App
