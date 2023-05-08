import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
    
    const  {data: blogs, isPending, iserror} = useFetch('http://localhost:8000/blogs');

    return(
        <div className="home">
            {iserror && <div> {iserror} </div>}
            {isPending && <div> Loading... </div>}
            {blogs && <BlogList blogs = {blogs} title = "All Blogs!" />}
        </div>
    );
}
 
export default Home;