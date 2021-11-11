import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@material-ui/lab/Rating";
import useStyles from "./styles";
const PlaceDetails = ({ place }) => {
    console.log("places ne",place);
  const classes = useStyles();
  return (
    <Card elevation={6}>
      <CardMedia
      component="img"
        styles={{ height: 350 }}
        title={place.name}
        image={place.photo ? place.photo?.images.large.url:'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
        />
      <CardContent>
          <Typography gutterBottom variant="h5">{place.name}</Typography>
      </CardContent>
    </Card>
  );
};

export default PlaceDetails;
