import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AuthorImage from "../../../assets/images/Banner-0.jpg";

export default function BlogCards() {


  return (
    <Card sx={{ maxWidth: 345 }} className="blogCards">
      <CardMedia
        component="img"
        height="194"
        image={AuthorImage}
        alt="Paella dish"
      />
      <CardContent>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="Author">
              A
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Anjaan Aadmi"
          subheader="13 july 2023"
        />
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  );
}
