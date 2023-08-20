import React from "react";
import { FormProps } from "./Form.types";

export function Form({ onSubmit, children }: FormProps) {
  return <form onSubmit={onSubmit}>{children}</form>;
}
