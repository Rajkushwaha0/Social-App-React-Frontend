import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import { useContext, useState } from "react";
import axios from "axios";

import postContext from "../../provider/PostProvider";

const config = {
  headers: {
    "app-id": import.meta.env.VITE_APP_ID,
  },
};
function Input() {
  const [postText, setPostText] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [loading, setLoading] = useState(false);
  const { posts, setPost } = useContext(postContext);

  async function createPost() {
    setLoading(true);
    axios
      .post(
        "https://dummyapi.io/data/v1/post/create",
        {
          owner: "60d0fe4f5311236168a109ca",
          text: postText,
          image: imgURL,
          likes: 0,
          publishDate: new Date(),
        },
        config
      )
      .then((response) => {
        console.log(response);
        setPost([...posts, response.data]);
        setLoading(false);
        setImgURL("");
        setPostText("");
      })
      .catch((error) => {
        setLoading(false);
        alert(error);
      });
  }

  return (
    <Box sx={{ mt: "1rem" }}>
      <TextField
        fullWidth
        id="standard-basic"
        label="Your next post"
        variant="standard"
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
      />
      <TextField
        sx={{ mt: "1rem", mb: "1rem" }}
        fullWidth
        id="standard-basic"
        label="Input your image"
        variant="standard"
        value={imgURL}
        onChange={(e) => setImgURL(e.target.value)}
      />
      {!loading ? (
        <Button onClick={createPost} variant="contained">
          Post your tweet
        </Button>
      ) : (
        <LoadingButton loading variant="outlined">
          Submit
        </LoadingButton>
      )}
    </Box>
  );
}
export default Input;
