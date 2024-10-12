import React, { useState, useEffect } from "react";
import { CssBaseline, Grid, Paper, Typography, createTheme, ThemeProvider } from "@mui/material";
import { Navigation } from "../components/LandingPage/navigation";
import { Header } from "../components/LandingPage/header";

import JsonData from "../customizeThalassa/investigation-of-solar-energy-generation.json";


const theme = createTheme();

const InvestigationOfSolarEnergyGeneration = () => {

  const [caseStudiesData, setCaseStudies] = useState([]);

  useEffect(() => {
    setCaseStudies(JsonData.CaseStudies);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="website-page">
        <Navigation />
        <br></br>
        <br></br>
        <br></br>

        <Grid container spacing={4} style={{ padding: 24 }}>
          {caseStudiesData.map((caseStudy, index) => (
            <Grid item xs={12} key={index}>
              <Paper style={{ padding: 16 }}>
                <Grid item xs={12} md={12}>
                  <img
                    src={caseStudy.largeImage}
                    alt={caseStudy.title}
                    style={{
                      width: '50%',
                      height: 'auto',
                      maxHeight: '800px', // Set a maximum height for the banner
                      objectFit: 'cover', // Ensure the image covers the entire width without distortion
                      objectPosition: 'center', // Center the image within the container
                    }}
                  />
                </Grid>
                <Grid container spacing={2}>
                  {/* <Grid item xs={12} md={4}>
                    <img src={caseStudy.largeImage} alt={caseStudy.title} style={{ width: '100%' }} />
                  </Grid> */}
                  <Grid item xs={12} md={8}>
                    <Typography variant="h2" gutterBottom>{caseStudy.title}</Typography>
                    <Typography variant="body1">
                      {caseStudy.paragraph}
                    </Typography>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>

      </div>
      <CssBaseline />

    </ThemeProvider>
  );
};

export default InvestigationOfSolarEnergyGeneration;
