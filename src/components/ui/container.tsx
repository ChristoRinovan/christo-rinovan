import { Container as MantineContainer } from "@mantine/core";

import { cn } from "@/lib/utils/cn";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <MantineContainer
      className={cn("px-4 md:px-6 lg:px-8", className)}
      size="72rem"
    >
      {children}
    </MantineContainer>
  );
}
