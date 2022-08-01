import { MESSAGES } from "../types/messages.enums";
import {
  ValidationConfig,
  ValidationResponse,
} from "../types/validation.types";

function validateString(string: string): boolean {
  if (typeof string === "string") return true;
  else return false;
}

function validateRequiered(string: string): boolean {
  if (string === "" || string === undefined || string === null) return false;
  else return true;
}

function validateMaxAndMin(string: string, max: number, min: number): boolean {
  if (string.split("").length >= min && string.split("").length <= max)
    return true;
  else return false;
}

function validateEmail(string: string): boolean {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (string.match(regex)) return true;
  else return false;
}

function validatePassword(string: string): boolean {
  if (string.split("").length >= 6) return true;
  else return false;
}

export function validate(
  value: string,
  {
    maxChars = 255,
    minChars = 3,
    type = "text",
    required = false,
  }: ValidationConfig
): ValidationResponse {
  try {
    if (!validateString(value)) throw MESSAGES.unknownError;
    if (required && !validateRequiered(value)) throw MESSAGES.required;
    if (!validateMaxAndMin(value, maxChars, minChars))
      throw MESSAGES.tooLongOrTooShort;
    if (type === "email" && !validateEmail(value)) throw MESSAGES.notValidEmail;
    if (type === "password" && !validatePassword(value))
      throw MESSAGES.notValidPassword;
    else {
      return {
        isValid: true,
        message: null,
        value,
      };
    }
  } catch (message) {
    if (typeof message !== "string")
      return { isValid: false, message: MESSAGES.unknownError, value };
    return { isValid: false, message, value };
  }
}
