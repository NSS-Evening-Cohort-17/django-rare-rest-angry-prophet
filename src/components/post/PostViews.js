import React, { useEffect, useState } from "react"
import { getPosts } from "./PostManager.js"
import { useHistory, Link } from "react-router-dom"

export const PostViews = () => {
    const [posts, setPosts] = useState([
        //you will need this when you create a form; not in here! 
        // userId: 1,
        // category_id: 1,
        // title: "",
        // publication_date: "",
        // image_url: "",
        // content: "",
        // approved: true
    ])

    // console.log(posts)

    const history = useHistory()

    useEffect(() => {
        getPosts().then(data => setPosts(data))
    }, [])

    return <>

        <article className="posts">
            {
                posts.map(post => {
                    return <section key={`post--${post.id}`} className="post">
                        <div className="post__title" >
                            <a href="/posts/${post.id}/details" rel="post details"> {post.title} </a>
                        </div>
                        <div className="post__Name">Author: {post.user_id.user.first_name}</div>
                        <div className="post__category">{post.category_id.label}</div>
                    </section>
                })
            }
        </article>


    </>
}