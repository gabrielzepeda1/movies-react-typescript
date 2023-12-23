import React from "react";
import { ErrorAlertProps } from "../customTypes";
export default function ErrorAlert({ alertErrorMessage }: ErrorAlertProps) {
  return (
    <div
      className="alert alert-danger alert-dismissible fade show"
      role="alert"
    >
      <strong>Holy guacamole!</strong> {alertErrorMessage}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}