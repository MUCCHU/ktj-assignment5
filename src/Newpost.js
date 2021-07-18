import { useState } from "react";
const Newpost = (props) => {
    const posts = props.posts;
    const editposts = props.editpost;
    const rr = props.rr;
    const [editedTitle, setEditedTitle] = useState("");
    const [editedPost, setEditedPost] = useState("");
    const [editedUsername, setEditedUsername] = useState("");
    const handleCreate = () => {
        document.getElementsByClassName("creatPostForm")[0].style.display = "block";
        setEditedTitle("");
        setEditedPost("");
        setEditedUsername("");
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let newPost = { title: editedTitle, body: editedPost, username: editedUsername, likes: 0, dislikes: 0, id: posts.length + 1 }
        // console.log(newPost)
        let editedpostlist = posts;
        editedpostlist.push(newPost);
        editposts(editedpostlist);
        console.log(posts)
        document.getElementsByClassName("creatPostForm")[0].style.display = "none";
        rr();
        // console.log(rr);
    }
    return (
        <div className="addpost">
            <div className="card text-center">
                <div className="card-header text-white bg-info fw-bold hoverp" onClick={handleCreate}>
                    Create a new Post
                </div>
                <div className="card-body creatPostForm">
                    <form onSubmit={handleSubmit}>
                        <label>Username</label>
                        <input
                            type="text"
                            required
                            value={editedUsername}
                            onChange={
                                (e) => {
                                    setEditedUsername(e.target.value)
                                }}
                        />
                        <label>Post Title</label>
                        <input
                            type="text"
                            required
                            value={editedTitle}
                            onChange={
                                (e) => {
                                    setEditedTitle(e.target.value)
                                }}
                        />
                        <label>Post content : </label>
                        <textarea
                            required
                            value={editedPost}
                            onChange={
                                (e) => {
                                    setEditedPost(e.target.value)
                                }}
                        ></textarea>
                        <input type="Submit" value="Share" className="bg-primary text-white" readOnly />
                        <div className="bg-danger text-white hoverp" onClick={() => {
                            document.getElementsByClassName("creatPostForm")[0].style.display = "none";
                        }}>Cancel</div>
                    </form>
                </div>
            </div>
        </div>);
}

export default Newpost;