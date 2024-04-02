import { useEffect, useState } from "react";
import axios from "axios";

const PostWithoutReducer = () => {
    const [loader, setLoader] = useState(false);
    const [post, setPost] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function fetchData() {
            try {
                setLoader(true);
                const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
                setPost(response.data);
                setLoader(false);
            } catch (error) {
                setError(error.message);
                setLoader(false);
            }
        }
        fetchData();
    }, []);
    return (
        <div>
            <h1>Hello Posts</h1>
            {loader ? <span>Loading</span> : post.map((postItem) => (
                <div key={postItem.id}>
                    <span>{postItem.title}</span>
                    <p>{postItem.body}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default PostWithoutReducer;