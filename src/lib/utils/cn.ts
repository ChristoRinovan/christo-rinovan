type ClassValue = string | false | null | undefined;

/*
 * cn() joins class names and ignores empty values.
 * Example: cn("p-4", isActive && "bg-black")
 */
export function cn(...classes: ClassValue[]) {
  return classes.filter(Boolean).join(" ");
}
