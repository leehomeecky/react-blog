import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('meecky');
  const [isPending, setPending] = useState(false);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    setPending(true)
    e.preventDefault();
    const blog = {title, body, author}

    fetch('http://localhost:8000/blogs',
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        })
        .then(() => {
            setPending(false)
            navigate('/');
        });
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={submitHandler}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="meecky">meecky</option>
          <option value="bim">bim</option>
        </select>
        {(isPending) ? <button disabled>Adding Blog...</button> : <button>Add Blog</button>}
      </form>
    </div>
  );
}
 
export default Create;