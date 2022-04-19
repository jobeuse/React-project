import React from "react";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery } from "@material-ui/core";
// import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlinedIcon";
import Rating from "@material-ui/lab";
import useStyles from "./Styles";

const MapView = () => {
  const classes = useStyles();
  const coordinates = { lat: 0, lng: 0 };
  const isMobiled = useMediaQuery("min-width:600px");
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBeEHOzib3KHAxq2Nv91k4Bupq32wEKaPs" }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={""}
        onChildClick={""}
      ></GoogleMapReact>
    </div>
  );
};

export default MapView;
