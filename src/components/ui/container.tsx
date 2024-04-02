import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const Container = forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(function Container({ className, children, ...props }, ref) {
  return (
    <div
      ref={ref}
      className={cn(
        "mx-auto w-full max-w-7xl px-4 md:px-8 lg:px-14",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});

export default Container;
