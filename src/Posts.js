import { useState } from "react";
const Postsdisplay = (props) => {
    const posts = props.posts;
    const editposts = props.editpost;
    const [editedTitle, setEditedTitle] = useState("");
    const [editedPost, setEditedPost] = useState("");
    // console.log(posts)
    const handleLike = (id) => {
        // console.log("post number " + id + " got liked")
        let EditedPostlist = [];
        for (let i = 0; i < posts.length; i++) {
            let postNew = posts[i];
            if (posts[i].id == id) {
                postNew = { "title": postNew.title, "body": postNew.body, "username": postNew.username, "likes": postNew.likes + 1, "dislikes": postNew.dislikes, "id": postNew.id }
            }
            EditedPostlist.push(postNew)
        }
        editposts(EditedPostlist)
        // console.log(posts)
    }
    const handleDislike = (id) => {
        // console.log("post number " + id + " got disliked")
        let EditedPostlist = [];
        for (let i = 0; i < posts.length; i++) {
            let postNew = posts[i];
            if (posts[i].id == id) {
                postNew = { "title": postNew.title, "body": postNew.body, "username": postNew.username, "likes": postNew.likes, "dislikes": postNew.dislikes + 1, "id": postNew.id }
            }
            EditedPostlist.push(postNew)
        }
        editposts(EditedPostlist)
        // console.log(posts)
    }
    const handleEdit = (id) => {
        document.getElementById(id).style.display = "none";
        document.getElementById("f" + id).style.display = "flex";
        setEditedTitle(posts[id - 1].title)
        setEditedPost(posts[id - 1].body)
    }
    const handleDelete = (id) => {
        let newPost = posts.filter((post) => (post.id != id))
        editposts(newPost)
        // console.log(newPost)
    }
    const handleSubmit = (id, e) => {
        e.preventDefault();
        // console.log("Edit submitted")
        // console.log(e, id)
        let EditedPostlist = [];
        for (let i = 0; i < posts.length; i++) {
            let postNew = posts[i];
            if (posts[i].id == id) {
                postNew = { "title": editedTitle, "body": editedPost, "username": postNew.username, "likes": postNew.likes, "dislikes": postNew.dislikes, "id": postNew.id }
            }
            EditedPostlist.push(postNew)
        }
        editposts(EditedPostlist)
        document.getElementById(id).style.display = "flex";
        document.getElementById("f" + id).style.display = "none";

    }
    return (
        <div className="seeposts">
            <div className="card text-center">
                <div className="card-header text-white bg-info fw-bold hoverp">
                    Posts
                </div>
            </div>
            {
                posts.map((posts) => (
                    <div key={posts.id}>
                        <div className="card text-center" id={posts.id}>
                            <div className="card-header text-white bg-primary">
                                {posts.title}
                            </div>
                            <div className="card-body">
                                {posts.body}
                                <p>Written By:- {posts.username}</p>
                                <div className="postactions">
                                    <div className="iconsofactions">
                                        <i className="far fa-thumbs-up" onClick={() => {
                                            handleLike(posts.id)
                                        }}></i>
                                        <div className="desc">
                                            {posts.likes > 0 && posts.likes}
                                            {posts.likes == 0 && "Like"}
                                        </div>
                                    </div >
                                    <div className="iconsofactions">
                                        <i className="far fa-thumbs-down" onClick={() => {
                                            handleDislike(posts.id)
                                        }}></i>
                                        <div className="desc">
                                            {posts.dislikes > 0 && posts.dislikes}
                                            {posts.dislikes == 0 && "Dislike"}
                                        </div>
                                    </div>
                                    <div className="iconsofactions">
                                        <i className="far fa-edit" onClick={() => {
                                            handleEdit(posts.id)
                                        }}></i>
                                        <div className="desc">Edit</div>
                                    </div>
                                    <div className="iconsofactions">
                                        <i className="fas fa-trash-alt" onClick={() => {
                                            handleDelete(posts.id)
                                        }}>
                                        </i>
                                        <div className="desc">Delete</div>
                                    </div>
                                </div>
                            </div>
                        </div >
                        <div className="card text-center editPost" id={"f" + posts.id}>
                            <div className="card-header text-white bg-primary">
                                Edit Post
                            </div>
                            <div className="card-body">
                                <form onSubmit={(e) => {
                                    handleSubmit(posts.id, e)
                                }}>
                                    <label>Post Title</label>
                                    <input
                                        type="text"
                                        required
                                        value={editedTitle}
                                        onChange={(e) => setEditedTitle(e.target.value)}
                                    />
                                    <label>Post content : </label>
                                    <textarea
                                        required
                                        value={editedPost}
                                        onChange={(e) => setEditedPost(e.target.value)}
                                    ></textarea>
                                    <input type="Submit" value="Save changes" readOnly />
                                </form>
                            </div>
                        </div>
                    </div>
                ))

            }
        </div >
    );
}

export default Postsdisplay;