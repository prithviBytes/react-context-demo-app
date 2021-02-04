import { useState } from "react";

export default (initalVal) => {
  const [value, setValue] = useState(initalVal);

  const toggle = () => {
    setValue(!value);
  };

  return [value, toggle];
};
