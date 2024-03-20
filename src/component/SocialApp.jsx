import MainContainer from "./MainContainer/MainContainer";
import Input from "./Input/Input";
import postContext from "../provider/PostProvider";
import { useState } from "react";

function SocialApp() {
  const [posts, setPost] = useState([]);
  return (
    <div>
      <postContext.Provider value={{ posts, setPost }}>
        <Input />
        <MainContainer />
      </postContext.Provider>
    </div>
  );
}

export default SocialApp;
