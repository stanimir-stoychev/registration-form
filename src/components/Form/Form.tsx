import { forwardRef, InputHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

import { BaseComponent } from '@/src/components/types';
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

function FormRow({ className, ...rest }: BaseComponent<HTMLDivElement>) {
    return <div className={clsx(className, styles['form-row'])} {...rest} />;
}

export function Form({ className, ...rest }: BaseComponent<HTMLFormElement>) {
    return <form className={clsx(className)} {...rest} />;
}

Form.Input = FormInput;
Form.Row = FormRow;
