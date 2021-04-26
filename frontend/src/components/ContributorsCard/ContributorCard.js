import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
  root: {
    // minWidth: 275,
    maxWidth: 400,
    padding: 10,
    margin: 10,
    border:'10px'
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const ContributorsCard = () => {
  const [listOfContributors,setListOfContributors] = useState([]);
  useEffect(()=>{
      fetch("https://api.github.com/repos/shravan20/github-readme-quotes/contributors?")
      .then((res)=>res.json())
      .then((data)=>{
        setListOfContributors(data);
      })
  },[]);

  

  const classes = useStyles();
  return (
    <div
      style={{
        display: "flex",
        margin:"10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card raised className={classes.root}>
        <CardContent>
          A Special Thanks To All The Contributors!
          <Typography variant="h5" component="h2">
            We are grateful{" "}
            <span role="img" aria-label="sheep">
              ❤️
            </span>
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            To our {listOfContributors.length} contributors for helping in
            <br />
            bringing this project to life            
          </Typography>

          <div style={{display:'flex',alignItems:'center'}}>

          {
              listOfContributors.slice(0,Math.min(listOfContributors.length,7)).map((contributor)=>{
                  return(
                      <Avatar  style={{marginRight:'5px',MarginLeft:'5px'}} alt={contributor.login} src={contributor.avatar_url} />

                  )
              })
          }
          </div>
        </CardContent>
        <CardActions>
          <a style={{textDecoration:"none"}}  href="https://github.com/shravan20/github-readme-quotes/graphs/contributors">
          <Button variant="contained" color="primary" size="small">More Details Here</Button>
          </a>
        </CardActions>
      </Card>
    </div>
  );
};

export default ContributorsCard;
