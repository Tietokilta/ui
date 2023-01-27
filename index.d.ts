import { type VariantProps } from "class-variance-authority";
declare const button: (props?: ({
    action?: "primary" | "secondary" | "tertiary" | null | undefined;
    destructive?: boolean | null | undefined;
} & import("class-variance-authority/dist/types").ClassProp) | undefined) => string;
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof button> {
}
declare const Button: ({ action, destructive, className, ...props }: ButtonProps) => JSX.Element;
export default Button;
