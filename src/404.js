import { Link } from "react-router-dom";

const P404 = () => {
    return ( 
        <div className="notfound">
            <h2>hoops!!!, sems you entered the wrong address</h2>
            <Link to = '/'> click to go back to home page </Link>
        </div>
     );
}
 
export default P404;