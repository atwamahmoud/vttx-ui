import {Variant} from "../@types/common";

export function getClassName(variant: Variant, commonClassName: string, styles: Record<string, string>): string {
  if (variant === "primary") {
    return `${commonClassName} ${styles.primary}`;
  }
  return `${commonClassName} ${styles.secondary}`;
}
