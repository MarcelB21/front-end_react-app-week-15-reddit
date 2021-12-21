import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";


function Homepage() {
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        async function fetchReddit() {
            try {
                const result = await axios.get('https://www.reddit.com/hot.json?limit=15')
                console.log(result.data.data.children)
                setPosts(result.data.data.children)
            } catch (e) {
                console.error(e)
            }
        }
        fetchReddit();
    }, [])

    return (
        <div>
            <h1>Dit is de homepagina</h1>
            {posts.map((post)=>{
                return (
                    <>
                        <h2><Link to={`/subreddit/${post.data.subreddit}`}>{post.data.title}</Link></h2>
                        <p>{post.data.subreddit_name_prefixed} | {post.data.num_comments.toLocaleString('nl-NL')} comments - {post.data.ups.toLocaleString('nl-NL')} ups</p>
                    </>
                )
            })}
        </div>
    )
}
export default Homepage;