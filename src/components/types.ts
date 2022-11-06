import { ClassValue } from 'clsx';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type WithClassValue<T> = Omit<T, 'className'> & {
    className?: ClassValue;
};

export type BaseHTMLComponent<T = HTMLElement> = DetailedHTMLProps<HTMLAttributes<T>, T>;
export type BaseComponent<T = HTMLElement> = WithClassValue<BaseHTMLComponent<T>>;
