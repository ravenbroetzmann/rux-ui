export type color = "primary" | "neutral" | "default";
export type size = "big" | "normal" | "small";
export type warning = "red" | "yellow" | "green";

export interface ColorAndSize {
  color?: color;
  size?: size;
}
