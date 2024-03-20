import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";

function PostCard({ title, subheader, imgURL, text }) {
  const [isLiked, setIsLiked] = useState(false);
  return (
    <Card sx={{ maxWidth: 345, marginBottom: "3rem" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {title.substring(0, 1).toUpperCase()}
          </Avatar>
        }
        title={title}
        subheader={subheader}
      />
      {imgURL.length > 0 ? (
        <CardMedia component="img" height="194" image={imgURL} alt="Dogo" />
      ) : null}

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          onClick={() => setIsLiked(!isLiked)}
        >
          {isLiked ? (
            <FavoriteIcon sx={{ color: red[500] }} />
          ) : (
            <FavoriteBorderIcon />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default React.memo(PostCard);
