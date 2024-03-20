import { useEffect, useContext } from "react";
import postContext from "../../provider/PostProvider";
import PostCard from "../PostCard";
import axios from "axios";

const config = {
  headers: {
    "app-id": import.meta.env.VITE_APP_ID,
  },
};

function PostCardList() {
  // const [posts, setPost] = useState([]);
  const { posts, setPost } = useContext(postContext);
  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/v1/post", config)
      .then((response) => {
        setPost([...response.data.data]);
      })
      .catch((error) => {
        alert("API CALL FAILED");
      });
  }, [posts]);
  return posts.length == 0
    ? "Loading..."
    : posts.map((post) => (
        <PostCard
          subheader={post.publishDate}
          title={post.owner.firstName + " " + post.owner.lastName}
          text={post.text}
          imgURL={post.image}
        />
      ));
}

export default PostCardList;
