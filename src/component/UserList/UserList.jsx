import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useState, useEffect } from "react";
import axios from "axios";

const config = {
  headers: {
    "app-id": import.meta.env.VITE_APP_ID,
  },
};

export default function UserList() {
  const [users, setUser] = useState([]);
  useEffect(() => {
    axios
      .get("https://dummyapi.io/data/v1/user", config)
      .then((response) => {
        setUser([...response.data.data]);
      })
      .catch((error) => {
        alert("API CALL FAILED");
      });
  }, []);

  return (
    <List
      dense
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      {users.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value.id}`;
        return (
          <ListItem key={value.id} disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar alt={value.id} src={value.picture} />
              </ListItemAvatar>
              <ListItemText
                id={labelId}
                primary={value.firstName + " " + value.lastName}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
