import { ClassValue } from 'clsx';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type BaseHTMLComponent<T = HTMLElement> = DetailedHTMLProps<HTMLAttributes<T>, T>;
export type BaseComponent<T = HTMLElement> = Omit<BaseHTMLComponent<T>, 'className'> & { className?: ClassValue };
