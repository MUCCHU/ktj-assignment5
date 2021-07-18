import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import Signin from './Signin';
import Signup from './Signup';
import { useState } from 'react';

function App() {
  const [Posts, setPosts] = useState([
    { title: "Template post #1", body: "This is body of Template Post #1", username: "User 1", likes: 0, dislikes: 0, id: 1 },
    { title: "Template post #2", body: "This is body of Template Post #2", username: "User 2", likes: 0, dislikes: 0, id: 2 },
    { title: "Template post #3", body: "This is body of Template Post #3", username: "User 3", likes: 0, dislikes: 0, id: 3 }
  ]);
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/ktj-assignment5">
              <Dashboard Posts={Posts} setPosts={setPosts} />
            </Route>
            <Route path="/signin">
              <Signin />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
