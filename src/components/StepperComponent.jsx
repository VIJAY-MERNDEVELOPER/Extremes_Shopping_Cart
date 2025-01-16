import { Box, Step, StepLabel, Stepper } from "@mui/material";

const steps = ["Order Confirmed", "Shipped", "Out For Delivery", "Shipped"];

export default function StepperComponent() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={4} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
