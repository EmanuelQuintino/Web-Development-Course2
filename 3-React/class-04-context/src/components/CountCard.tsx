import { useContext } from "react";
import { ValueContext } from "../contexts/valueContext";

export function CountCard() {
  const value = useContext(ValueContext);

  return (
    <>
      <p>Count: {value}</p>
    </>
  );
}
