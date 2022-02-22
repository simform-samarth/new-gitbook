import React,{useState , useEffect} from 'react'
import './App.css';
// import README from ''
// import Markdown from 'markdown-to-jsx';
import Markdown from 'markdown-to-jsx';
// import Page2 from './docs/README.md'

function App() {
//   let [ content, setContent] = useState({md: ""});
// const file_name = 'react_pinterest_clone.md';
const [post, setPost] = useState('');
// useEffect(() => {
//   import('./docs/README.md')
//       .then(res => {
//           fetch(res.default)
//               .then(res => res.text())
//               .then(res => setPost(res))
//               .catch(err => console.log(err));
//       })
//       .catch(err => console.log(err));
// });
console.log("post",post);
  return (
    <div className="App">
           <Markdown>
                {post}
            </Markdown>
    </div>
  );
}

export default App;
