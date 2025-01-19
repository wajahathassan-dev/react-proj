import { useState } from "react"

import Post from "./components/Post"

export default function (){

    const [posts, setPosts] = useState([
        {id: 1, username: "johndoe", imageUrl: "https://picsum.photos/200?random=1", likeCount: 28, caption: "Testing my cam."},
        {id: 2, username: "janedoe", imageUrl: "https://picsum.photos/200?random=2", likeCount: 22, caption: "Wow."},
        {id: 3, username: "tomdoe", imageUrl: "https://picsum.photos/200?random=3", likeCount: 19, caption: "Amazing view."}
    ])

    const [formData, setFormData] = useState({
        username: "",
        imageLink: "",
        caption: ""
    })

    const createPost = () => {
        const newUsername  = formData.username;
        const newImageLink = formData.imageLink;
        const newCaption   = formData.caption;

        if (newUsername && newImageLink && newCaption){

            const newPost = {
                id: posts.length+1,
                username: newUsername,
                imageUrl: newImageLink,
                likeCount: 0,
                caption: newCaption
            }

            const newPosts = [...posts, newPost];

            setPosts(newPosts);
        }

        setFormData({
            username: "",
            imageLink: "",
            caption: ""
        })
    }
    return (
    <>
        <div className="container text-center mt-5">
            <h1 className="pb-4">My Feed</h1>

            <div className="container col-md-8 mb-5">
                <input className="form-control mb-2" type="text" placeholder="Username" value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})}/>
                <input className="form-control mb-2" type="text" placeholder="Image Link" value={formData.imageLink}  onChange={e => setFormData({...formData, imageLink: e.target.value})}/>
                <input className="form-control mb-3" type="text" placeholder="Caption" value={formData.caption}  onChange={e => setFormData({...formData, caption: e.target.value})}/>
                <button className="btn btn-primary" onClick={createPost}>Create Post</button>
            </div>

            <div className="container">
                {posts && (
                    posts.map(post => {
                        return (
                            <Post post={post}/>
                        )
                    })
                )}
            </div>
        </div>
    </>
    )
}