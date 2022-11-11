import './css/App.css';
import Card from './components/Card/Card';
import Navbar from './components/Navbar/Navbar';
import AddCardForm from './components/AddCardForm/AddCardForm';
import { useEffect, useState } from 'react';
import routes from './routes';

function App() {

  const [posts, setPosts] = useState([]);
  const [activeaddpost, setActiveaddpost] = useState(false);

  useEffect(() => {
    fetch(routes.posts())
    .then(res => res.json())
    .then(result => {
      setPosts(result);
    })
  }, [])

  return (
    <div className="App">
      <Navbar>
        <button 
          className='plusbutton'
          onClick={() =>{
            setActiveaddpost(true);
          }}
        >
            &#43;
        </button>
      </Navbar>
      {
        activeaddpost
        ?<AddCardForm 
          setActiveaddpost={setActiveaddpost}
          setPosts={setPosts}
          posts={posts}
        />
        :<></>
      }
      <div className='cards'>
      {
        posts.length === 0
        ? <></>
        : posts.map(post => {
          return(
            <Card 
              key={post.id}
              title={post.title} 
              body={post.body}
            />
          )
        })
      }
      </div>
    </div>
  );
}

export default App;
