import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function FeedbackRating() {
  const [value, setValue] = React.useState(0); 


  return (
    <Box sx={{ "& > legend": { mt: 0 } }}>
      {/* <Typography component="legend">Controlled</Typography> */}
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </Box>
  );
}
