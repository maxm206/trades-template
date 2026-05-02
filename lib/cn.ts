/**
 * Tiny class-name joiner. Filters out falsy values.
 */
export function cn(...args: Array<string | undefined | null | false>): string {
  return args.filter(Boolean).join(" ")
}
