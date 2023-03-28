import React from "react";
import { InputLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function TenureSelect({ data, setData }) {
  const handleSelect = (e) => {
    setData({ ...data, loanTerm: e.target.value });
  };

  return (
    <FormControl fullWidth style={{ marginTop: "20px", marginBottom: "25px" }}>
      <InputLabel id="demo-simple-select-label">Tenure</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={data.loanTerm}
        label="Tenure"
        defaultValue={5}
        onChange={handleSelect}
      >
        <MenuItem value={5}>5 years</MenuItem>
        <MenuItem value={10}>10 years</MenuItem>
        <MenuItem value={15}>15 years</MenuItem>
        <MenuItem value={20}>20 years</MenuItem>
        <MenuItem value={25}>25 years</MenuItem>
      </Select>
    </FormControl>
  );
}
