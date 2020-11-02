import React from "react";
import { useLocation } from "react-router-dom";
import { Form } from "../components/Form/Form";

export function Auth() {
  const location = useLocation();
  console.log("auth view", location);
  return (
    <div>
      <Form />
    </div>
  );
}
