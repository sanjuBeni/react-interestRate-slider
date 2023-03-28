import React from "react";
import { Slider } from "@mui/material";
import { Typography } from "@mui/material";
import { Stack } from "@mui/material";

export default function SliderComponent({
  label,
  min,
  max,
  defaultValue,
  unit,
  value,
  steps,
  amount,
  handleSlider,
}) {
  return (
    <>
      <Stack gap={1}>
        <Typography variant="subtitle2">{label}</Typography>
        <Typography variant="h5">
          {unit} {amount}
        </Typography>
        <Slider
          aria-label="Temperature"
          defaultValue={Number(defaultValue)}
          value={Number(value)}
          valueLabelDisplay="auto"
          step={steps}
          marks
          min={min}
          max={max}
          onChange={handleSlider}
        />
      </Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="caption" color="text.secondary">
          {unit} {min}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {unit} {max}
        </Typography>
      </Stack>
    </>
  );
}
