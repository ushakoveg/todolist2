import { useState } from 'react'
import post from './posts.json'
import Posts from './Components/Posts/Posts'
import './style/App.scss'

function App() {
  const [ arr, setArr] = useState(post);
  

  function delPost(id){
    const copyArr = [...arr]
    const resualtArr = copyArr.filter(item => item.id != id)
    setArr(resualtArr)
  }

  const addPost = () => {
    const newPost = {
    id: Date.now(),
    title: 'New Post',
    body: 'Lorem ipsum dolor sit amet',
    };
    
    setArr([...arr, newPost]);
    };

  return (
    <div>
      <button onClick={addPost}>Add post</button>
    <>
    {arr.map((item,index)=>(
<Posts object ={item} delPost ={delPost} key={index}/>
    ))}
    </>
    </div>
  )
}

export default App
