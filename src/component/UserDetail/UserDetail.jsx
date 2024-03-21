import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import useUserProfile from "../../hooks/useUserProfile";

function UserDetail() {
  //custom hook
  const [user, loading] = useUserProfile();
  // console.log(user);
  return loading ? (
    <div>"Loading..."</div>
  ) : (
    <>
      <Card
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Name:{user.firstName + " " + user.lastName}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Email:{user.email}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Gender:{user.gender}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Joined on:{user.registerDate}
            </Typography>
          </CardContent>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={user.picture}
          alt="Live from space album cover"
        />
      </Card>
    </>
  );
}

export default UserDetail;
