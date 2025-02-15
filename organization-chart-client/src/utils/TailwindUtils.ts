import clsx from 'clsx';
import { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import defaultTheme from 'tailwindcss/defaultTheme';

export class TailwindUtils {
  static cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
  }

  static get theme() {
    return defaultTheme;
  }

  static get themeColors() {
    return defaultTheme.colors;
  }
}
