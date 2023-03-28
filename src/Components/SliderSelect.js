import React from "react";
import SliderComponent from "./Common/SliderComponent";

export default function SliderSelect({ data, setData }) {
  const bankLimit = 10000;

  return (
    <div>
      <SliderComponent
        handleSlider={(e, value) => {
          setData({
            ...data,
            homeValue: value,
            downPayment: (value * 0.2).toFixed(0),
            loanAmount: (value * 0.8).toFixed(0),
          });
        }}
        defaultValue={data.homeValue}
        min={1000}
        max={bankLimit}
        unit="$"
        steps={100}
        amount={data.homeValue}
        value={data.homeValue}
        label="Home Value"
      />

      <SliderComponent
        label="Down Payment"
        unit="$"
        amount={data.downPayment}
        handleSlider={(e, value) => {
          setData({
            ...data,
            downPayment: value.toFixed(0),
            loanAmount: (data.homeValue - value).toFixed(0),
          });
        }}
        defaultValue={data.downPayment}
        min={0}
        max={data.homeValue}
        steps={100}
        value={data.downPayment}
      />

      <SliderComponent
        label="Loan Amount"
        unit="$"
        amount={data.loanAmount}
        handleSlider={(e, value) => {
          setData({
            ...data,
            loanAmount: value.toFixed(0),
            downPayment: (data.homeValue - value).toFixed(0),
          });
        }}
        defaultValue={data.loanAmount}
        min={0}
        max={data.homeValue}
        steps={100}
        value={data.loanAmount}
      />

      <SliderComponent
        label="Interest Rate"
        unit="%"
        amount={data.interestRate}
        handleSlider={(e, value) => {
          setData({
            ...data,
            interestRate: value.toFixed(0),
          });
        }}
        defaultValue={data.interestRate}
        min={2}
        max={18}
        steps={0.5}
        value={data.interestRate}
      />
    </div>
  );
}
