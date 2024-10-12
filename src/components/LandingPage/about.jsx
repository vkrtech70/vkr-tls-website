import React from "react";
import { CssBaseline, Grid, Paper, Typography, createTheme, ThemeProvider } from "@mui/material";

export const About = (props) => {
  return (
    <div id="about" className="text-center">
      <div className="container">
        {/* <div className="section-title"> */}
        {/* <div className="col-xs-12 col-md-6">
            {" "}
            <img src="https://lpsonline.sas.upenn.edu/sites/default/files/2022-10/plpso-feratures-data-business.jpg" className="img-responsive" alt="" />{" "}
          </div> */}
        <div className="col-xs-12 col-md-12">
          <div className="about-text">
            <h2>Overview</h2>
            <br />
            <br />
            <br />
            <br />
            <h3>{props.data ? props.data.paragraph : "loading..."}</h3>
            <h3></h3>
            <div className="list-style">
              <div className="col-lg-6 col-sm-6 col-xs-12">
                {props.data
                  ? props.data.Why.map((d, i) => (
                    // <h3 key={`${d}-${i}`}>{d}</h3>
                    <>
                      <Typography style={{ fontSize: '2rem' }}>
                        <h3 key={`${d}-${i}`}>• {d}</h3>
                      </Typography>
                    </>
                  ))
                  : "loading"}
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12">
                {props.data
                  ? props.data.Why2.map((d, i) => (
                    // <h3 key={`${d}-${i}`}>{d}</h3>
                    <>
                      <Typography style={{ fontSize: '2rem' }}>
                        <h3 key={`${d}-${i}`}>• {d}</h3>
                      </Typography>
                    </>
                  ))
                  : "loading"}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </div >
  );
};
