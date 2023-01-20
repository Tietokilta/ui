import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  ["py-2", "px-3", "rounded-sm", "font-semibold", "tracking-wider", "whitespace-nowrap"],
  {
    variants: {
      action: {
        primary: ["text-white", "bg-orange-400"],
        secondary: ["text-orange-400", "outline", "outline-1", "outline-orange-400"],
        tertiary: ["text-orange-400"]
      },
      destructive: {
        true: ""
      }
    },
    compoundVariants: [
      {
        action: "primary",
        destructive: true,
        className: "bg-red-500"
      },
      {
        action: "secondary",
        destructive: true,
        className: "text-red-500 outline-none outline-transparent"
      },
      {
        action: "tertiary",
        destructive: true,
        className: "text-slate-500"
      }
    ],
    defaultVariants: {
      action: "primary",
      destructive: false
    }
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const Button = ({ action, destructive, className, ...props }: ButtonProps) => (
  <button className={button({ action, destructive, className })} {...props} />
);

export default Button;
