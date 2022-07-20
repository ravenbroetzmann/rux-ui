interface ValidationResult {
  valid: boolean;
  message?: string;
}

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validate = (
  value: string,
  type: "text" | "email" | "password"
): ValidationResult => {
  if (type === "email") {
    if (!value.match(EMAIL_REGEX))
      return { valid: false, message: "please enter an Email Adress" };
  }
  //Safe Password regex
  if (type === "password") {
  }

  return {
    valid: true,
  };
};
