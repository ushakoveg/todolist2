import './Posts.scss'

export default function Posts(props) {
    console.log(props.object);
  return (
    <div className="post__container" onClick={()=>props.delPost(props.object.id)}>
        
        <div className="post__title"><h2>{props.object.title}</h2></div>
        <div className="post__body"><h3>{props.object.body}</h3></div>
        
        
    </div>
  )
}
