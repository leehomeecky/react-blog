import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Create from './Create';
import Blog from './Blogs';
import P404 from './404';


const App = () => {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
            <Route path='/' Component = {Home} />
            <Route path='/create' Component={Create} />
            <Route path='/blogs/:id' Component={Blog} />
            <Route path='*' Component={P404}/>
        </Routes>

      </div>
    </div>
    </Router>
  );
}

export default App;
