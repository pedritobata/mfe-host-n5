import { FC } from "react";
import { StyledButton, StyledLink } from "./styles";

interface ButtonBaseProps {
  title?: string;
  onClick?: () => void;
  as?: "link";
  primary?: boolean;
}

type ButtonProps = ButtonBaseProps & {
  children?: React.ReactNode;
};

const Button: FC<ButtonProps> = ({
  children,
  title,
  onClick,
  as,
  primary = false,
}) => {
  if (as === "link") {
    return (
      <StyledLink onClick={onClick} $primary={primary}>
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledButton onClick={onClick} $primary={primary}>
      {title || children}
    </StyledButton>
  );
};

export default Button;
