import { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setPost(response.data);
        }
        fetchData();
    }, []);
    return (
        <div>
            <h1>Hello Posts</h1>
            {post.map((postItem) => (
                <div key={postItem.id}>
                    <span>{postItem.title}</span>
                    <p>{postItem.body}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default Posts;