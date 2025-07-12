import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import bulbImg from "../../assets/bulbImg.png";
import X from "../../assets/X.png";

export default function FeedBackDialogBox({
  // openFeedbackBox,
  // setOpenFeedbackBox,
  openFeedbackBoxIndex,
  setOpenFeedbackBoxIndex,
  feedbackOpinion,
  setFeedbackOpinion,
  // selectedIndex,
}) {
  

  const handleClose = () => {
    setOpenFeedbackBoxIndex(null);
  };

  let handleSubmit = () => {
    setOpenFeedbackBoxIndex(null);
  };
  
   let handleChange = (e) => {
    let text = e.target.value;
    setFeedbackOpinion((prev) => ({
      ...prev,
      [openFeedbackBoxIndex]: text,
    }));
  };

  return (
    <div>
      {openFeedbackBoxIndex && (
        <div>
         
          <Dialog
            open={openFeedbackBoxIndex}
            onClose={(event, reason) => {
              if (reason === "backdropClick" || reason === "escapeKeyDown") {
                // do nothing – prevent close
                return;
              }
              handleClose(); // only close on manual actions
            }}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            sx={{ width: "100vw", height: "100vh", borderRadius: "10px",
              '& .MuiDialog-paper': {
                height: '300px', width: '700px', overflow: 'hidden', maxHeight: 'unset', maxWidth: 'unset',
              }
             }}
          >
            <div
              style={{ width: "700px", height: "300px", overflow: "hidden" }}
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
                <img src={X} alt="close" onClick={handleClose} style={{cursor: 'pointer'}}/>
              </DialogTitle>
              <DialogContent
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <textarea
                  value={feedbackOpinion[openFeedbackBoxIndex] || ''}
                  onChange={handleChange}
                  placeholder="Type your feedback here..."
                  style={{
                    width: "95%",
                    height: "100px",
                    padding: "10px",
                    borderRadius: "8px",
                    border: "1px solid #ccc",
                    resize: "none",
                    fontSize: "16px",
                  }}
                />
              </DialogContent>
              <DialogActions>
                <Button
                  onClick={handleSubmit}
                  style={{
                    backgroundColor: "#D7C7F4",
                    width: "95px",
                    height: "40px",
                    color: "black",
                    marginRight: "25px",
                  }}
                >
                  Submit
                </Button>
              </DialogActions>
            </div>
          </Dialog>
        </div>
      )}
    </div>
  );
}
