export interface ValidationResponse {
  isValid: boolean;
  message: string | null;
  value: string;
}

export interface ValidationConfig {
  maxChars: number;
  minChars: number;
  required: boolean;
  type: "text" | "email" | "password";
}
