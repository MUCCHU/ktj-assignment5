import { useState } from "react";
import Newpost from "./Newpost"
import Postsdisplay from "./Posts"

const Dashboard = (props) => {
    // const [Posts, setPosts] = useState([
    //     { title: "Template post #1", body: "This is body of Template Post #1", username: "User 1", likes: 0, dislikes: 0, id: 1 },
    //     { title: "Template post #2", body: "This is body of Template Post #2", username: "User 2", likes: 0, dislikes: 0, id: 2 },
    //     { title: "Template post #3", body: "This is body of Template Post #3", username: "User 3", likes: 0, dislikes: 0, id: 3 }
    // ]);
    const Posts = props.Posts;
    const setPosts = props.setPosts;
    const [updateCounter, setUpdateCounter] = new useState(0);
    const forcetorerender = () => {
        // console.log("Request received to rerender")
        setUpdateCounter(updateCounter + 1)
    }
    return (
        <div className="dashboard">
            <Newpost posts={Posts} editpost={setPosts} rr={forcetorerender} />
            <hr />
            <Postsdisplay posts={Posts} editpost={setPosts} />
        </div>
    );
}

export default Dashboard;