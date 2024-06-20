import React, { forwardRef } from "react";

const Input = forwardRef(({ type }, ref) => {
  return <input ref={ref} type={type} />;
});

export default Input;
