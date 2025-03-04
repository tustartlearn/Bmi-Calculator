import React, { useState } from "react";
import { Container, TextField, Button, Typography, Paper, Box } from "@mui/material";
import './App.css'
function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");

  function calculateBMI() {
    if (!weight || !height) {
      setBmi("Enter valid weight & height!");
      return;
    }

    let heightInMeters = height / 100; 
    let bmiValue = weight / (heightInMeters * heightInMeters);
    let result = `Your BMI: ${bmiValue.toFixed(2)} - `;

    if (bmiValue < 18.5) result += "Underweight";
    else if (bmiValue < 24.9) result += "Normal weight";
    else if (bmiValue < 29.9) result += "Overweight";
    else result += "Obese";

    setBmi(result);
  }

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          textAlign: "center",
          marginTop: "110px",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h4" gutterBottom>
          BMI Calculator
        </Typography>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="Weight (kg)"
            type="text"
            variant="outlined"
            fullWidth
            value={weight}
            onChange={(e) => setWeight(e.target.value)} 

          />

          <TextField
            label="Height (cm)"
            type="text"
            variant="outlined"
            fullWidth
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />

          <Button
            variant="contained"
            color="primary"
            onClick={calculateBMI}
          >
            Calculate
          </Button>

          {bmi && (
            <Typography variant="h6" color="#443627">
              {bmi}
            </Typography>
          )}
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
