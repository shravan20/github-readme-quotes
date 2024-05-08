import React, { useState, useEffect } from "react";
import {
  Paper,
  TextField,
  Grid,
  Button,
  Snackbar,
  Slide,
  CircularProgress,
} from "@material-ui/core";
import getTemplate from "../../../util/template/getTemplate";
import Template from "../../../util/template/Template";
import mainLayouts from "../../../util/layouts";
import mainAnimations from "../../../util/animation";
import mainThemes from "../../../util/themes";
import mainFonts from "../../../util/fonts";
import { serverUrl } from "../../Constants/urlConfig";
const TemplateCard = (props) => {
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [isImageLoaded, setImageLoaded] = useState(false);
  const originUrl = serverUrl; // Note: PORT 3004 since in server is served via that port. Frontend independently served on port 3000

  const template = new Template();
  const data = {
    quote: "This is going to be the Github quote for your README",
    author: "Open Source",
  };

  const theme = mainThemes[props.theme];
  if (props.fontColor) {
    theme.quote_color = props.fontColor;
  }
  if (props.bgColor) {
    theme.bg_color = props.bgColor;
  }

  template.setTheme(theme);
  template.setData(data);
  template.setFont(mainFonts[props.font]);
  template.setAnimation(mainAnimations[props.animation]);
  template.setLayout(mainLayouts[props.layout]);
  const file = new Blob([getTemplate(template)], { type: "image/svg+xml" });
  const url = URL.createObjectURL(file);

  const copyToClipboard = async () => {
    try {
      if (!navigator.clipboard) {
        throw new Error("Clipboard API not available");
      }

      await navigator.clipboard.writeText("![Quote](" + quoteUrl + ")");
      setSnackbarMessage("Copied to Clipboard!");
      setShowSnackbar(true);
    } catch (error) {
      console.error("Error copying to clipboard:", error);
      setSnackbarMessage("Unable to copy");
      setShowSnackbar(true);
    }
  };


  const handleSnackbarClose = () => {
    setShowSnackbar(false);
  };

  const quoteUrl = `${originUrl}/quote?theme=${props.theme}&animation=${props.animation}&layout=${props.layout}&font=${props.font}&fontColor=${props.fontColor}&bgColor=${props.bgColor}`;

  function SlideTransition(prop) {
    return <Slide {...prop} direction="up" />;
  }

  useEffect(() => {
    setImageLoaded(false);
  }, [quoteUrl]);

  return (
    <Paper style={{ padding: "10px", width: "100%", height: "100%" }}>
      <div style={{ textAlign: "center" }}>
        <img
          src={url}
          alt="Dynamic Quote for Github Readme"
          onLoad={() => setImageLoaded(true)}
          style={{ width: "100%", display: isImageLoaded ? "" : "none" }}
        />
        <CircularProgress
          color="secondary"
          style={{ display: isImageLoaded ? "none" : "" }}
        />
      </div>
      <Grid container alignContent="center" style={{ margin: "20px" }}>
        <Grid item sm={8} xs={12}>
          <TextField fullWidth value={"![Quote](" + quoteUrl + ")"}></TextField>
        </Grid>
        <Grid item sm={4} xs={12} style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            onClick={() => {
              copyToClipboard();
            }}
          >
            Copy Text
          </Button>
        </Grid>
      </Grid>

      <Snackbar
        open={showSnackbar}
        TransitionComponent={SlideTransition}
        message={snackbarMessage}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        key={"up"}
      />
    </Paper>
  );
};

export default TemplateCard;
