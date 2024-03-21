import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const config = {
  headers: {
    "app-id": import.meta.env.VITE_APP_ID,
  },
};

export default function useUserProfile() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  useEffect(() => {
    axios.get(`https://dummyapi.io/data/v1/user/${id}`, config).then((res) => {
      setUser({ ...res.data });
      setLoading(false);
    });
  }, []);

  return [user, loading];
}
