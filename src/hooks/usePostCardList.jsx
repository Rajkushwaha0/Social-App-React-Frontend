import axios from "axios";
import { useEffect, useContext } from "react";
import postContext from "../provider/PostProvider";
const config = {
  headers: {
    "app-id": import.meta.env.VITE_APP_ID,
  },
};
export default function usePostCardList() {
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

  return [posts];
}
