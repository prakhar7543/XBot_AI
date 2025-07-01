import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import bulbImg from "../../assets/bulbImg.png";
import X from "../../assets/X.png";

export default function AlertDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let handleSubmit = () => {};

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ width: "755px", height: "335px", borderRadius: "10px" }}
      >
        <DialogTitle
          id="alert-dialog-title"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <img src={bulbImg} alt="idea" />
          Provide Additional Feedback
          <img src={X} alt="close" />
        </DialogTitle>
        <DialogContent
          sx={{
            overflowX: "hidden",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80%",
            padding: "unset",
            width: "90%",
            margin: "auto",
          }}
        >
          <DialogContentText
            id="alert-dialog-description"
            sx={{
              //   width: "715px",
              //   height: "80%",
              border: "1px solid #00000073",
              borderRadius: "10px",
              width: "100%",
              padding: "10px",
            }}
          >
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSubmit}
            style={{
              backgroundColor: "#D7C7F4",
              width: "95px",
              height: "40px",
              color: "black",
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
