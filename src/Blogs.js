import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const Blog = () => {
    const {id} = useParams();
    const  {data: blog, isPending, iserror} = useFetch('http://localhost:8000/blogs/' + id);
    const navigate = useNavigate();

    const deleteHandler = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        })
        .then(() => {
            navigate('/')
        });
    }
    return(
        <div className="blog-details">
            {isPending && <>Loading...</>}
            {iserror && <div> {iserror} </div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p> written by {blog.author} </p>
                    <div> {blog.body} </div>
                    <button onClick={deleteHandler}>delete</button>
                </article>
            )}
        </div>
    );
}

export default Blog