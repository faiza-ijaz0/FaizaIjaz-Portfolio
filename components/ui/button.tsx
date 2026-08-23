import Link from "next/link";
import { cn } from "@/lib/utils";

type BaseProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: React.ReactNode;
};

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
};

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

const base =
  "group relative inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-sans font-medium tracking-tight transition-all duration-300 ease-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-40";

const variants = {
  primary: "bg-foreground text-background hover:bg-accent hover:text-accent-foreground",
  secondary:
    "border border-border-strong text-foreground hover:border-accent hover:text-accent bg-transparent",
  ghost: "text-foreground-muted hover:text-foreground bg-transparent",
};

const sizes = {
  sm: "h-9 px-5 text-[13px]",
  md: "h-11 px-6 text-[13px]",
  lg: "h-14 px-8 text-sm",
};

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const { children, variant = "primary", size = "md", className, icon, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    const { href, external } = rest as ButtonAsLink;
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
          {icon}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
        {icon}
      </Link>
    );
  }

  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
      {icon}
    </button>
  );
}
