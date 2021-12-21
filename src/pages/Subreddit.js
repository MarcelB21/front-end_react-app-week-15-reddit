import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { useHistory, useParams} from "react-router-dom";

const Subreddit = () => {
    const [posts, setPosts] = useState('')
    const history = useHistory()

    function handleClick(){
        history.push('/')
    }

    const { id } = useParams();

    useEffect(() => {
        async function fetchRedditPosts() {
            try {
                const result = await axios.get(`https://www.reddit.com/r/${id}/about.json`);
                console.log(result.data.data);
                setPosts(result.data.data);
            } catch (e) {
                console.error(e);
            }
        }
        fetchRedditPosts()
    }, [])

    return (
        <>
            <div>
                <h1>Title</h1>
                <a href={`https://www.reddit.com/${posts.url}`}>{posts.title}</a>

                <h2>Description: </h2>
                <p>{posts.public_description}</p>

                <h3>Number of subscribers: </h3>
                <p>{posts && posts.subscribers.toLocaleString()}</p>

                <h3>Image:</h3>
                <img src={posts.banner_img} alt="subreddit-image"/>
                <br/>

                <button type="button" onClick={handleClick}>Back to Homepage</button>

            </div>
        </>
    );
};

export default Subreddit;