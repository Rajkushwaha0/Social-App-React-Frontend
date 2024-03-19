import { useEffect, useState } from "react";
import PostCard from "../PostCard";
import axios from "axios";

const config = {
  headers: {
    "app-id": import.meta.env.VITE_APP_ID,
  },
};

function PostCardList() {
  const [posts, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/v1/post", config)
      .then((response) => {
        setPost([...response.data.data]);
      })
      .catch((error) => {
        alert("API CALL FAILED");
      });
  }, []);
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
