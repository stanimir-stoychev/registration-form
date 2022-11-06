import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

import { BaseComponent, WithClassValue } from '@/src/components/types';
import styles from './Form.module.css';

type FormInputProps = BaseComponent<HTMLInputElement> &
    InputHTMLAttributes<HTMLInputElement> &
    (
        | {
              id: string;
              label: ReactNode;
              labelProps?: Omit<BaseComponent<HTMLLabelElement>, 'children'>;
          }
        | {
              id?: string;
              label?: undefined;
              labelProps?: undefined;
          }
    );

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(({ className, label, labelProps, ...rest }, ref) => (
    <div className={styles['form-input']}>
        {label && (
            <label htmlFor={rest.id} {...labelProps} className={clsx(labelProps?.className)}>
                {label}
            </label>
        )}

        <input ref={ref} className={clsx(className)} type="text" {...rest} />
    </div>
));

FormInput.displayName = 'FormInput';

type FormButtonProps = WithClassValue<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>>;

function FormButton({ className, ...rest }: FormButtonProps) {
    return <button className={clsx(className, styles['form-button'])} {...rest} />;
}

function FormRow({ className, ...rest }: BaseComponent<HTMLDivElement>) {
    return <div className={clsx(className, styles['form-row'])} {...rest} />;
}

function FormActions({ className, ...rest }: BaseComponent<HTMLDivElement>) {
    return <div className={clsx(className, styles['form-actions'])} {...rest} />;
}

export function Form({ className, ...rest }: BaseComponent<HTMLFormElement>) {
    return <form className={clsx(className, styles.form)} {...rest} />;
}

Form.Actions = FormActions;
Form.Button = FormButton;
Form.Input = FormInput;
Form.Row = FormRow;
