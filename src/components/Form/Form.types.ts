import { FormEventHandler, ReactNode } from "react";

export interface FormProps {
  onSubmit?: FormEventHandler<HTMLFormElement>;
  children?: ReactNode | undefined;
}
