import * as React from "react";
import {
  Card,
  CardContent,
  Typography,
  CardActionArea,
  CardMedia,
} from "@material-ui/core";

export default function ActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345}} style={{
        height: props.height,
        width: props.width,
    }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="150"
          image={props.image}
          alt={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" >
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
