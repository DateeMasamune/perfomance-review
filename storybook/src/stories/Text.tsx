import { HTMLAttributes } from "react";
import "./text.css";

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
  variant?: "small" | "medium" | "large";
  primary?: boolean;
}

export const Text = ({ text, variant, primary, ...rest }: TextProps) => {
  const mode = primary
    ? "storybook-text--primary"
    : "storybook-text--secondary";
  return (
    <p
      {...rest}
      className={["storybook-text", `storybook-text--${variant}`, mode].join(
        " "
      )}
    >
      {text}
    </p>
  );
};
