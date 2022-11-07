'use client';

import { ReactNode, useMemo } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Form, Checklist } from '@/src/components';

type Inputs = {
    email: string;
    password: string;
};

type PasswordChecklistItem = {
    label: ReactNode;
    isCompleted(password: string): boolean;
};

export const DEFAULT_PASSWORD_STRENGTH_CHECKERS: PasswordChecklistItem[] = [
    { label: '8 or more characters', isCompleted: (password) => password.length >= 8 },
    { label: '1 or more lowercase letters', isCompleted: (password) => /[a-z]/g.test(password) },
    { label: '1 or more uppercase letters', isCompleted: (password) => /[A-Z]/g.test(password) },
    { label: '1 or more decimal characters', isCompleted: (password) => /\d/g.test(password) },
    { label: '1 or more special characters', isCompleted: (password) => /[^A-Za-z0-9]/g.test(password) },
];

export function RegistrationForm({
    passwordChecklist = DEFAULT_PASSWORD_STRENGTH_CHECKERS,
}: {
    passwordChecklist?: PasswordChecklistItem[];
}) {
    const {
        register,
        handleSubmit,
        watch,
        formState: { isValid },
    } = useForm<Inputs>();

    const password = watch('password') ?? '';
    const isStrongPassword = useMemo(
        () => passwordChecklist.reduce((acc, { isCompleted }) => acc && isCompleted(password), true),
        [password, passwordChecklist],
    );

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        alert(JSON.stringify(data, null, 4));
    };

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Row>
                <Form.Input label="Email" id="email" type="email" {...register('email', { required: true })} />
                <Form.Input
                    label="Password"
                    id="password"
                    type="password"
                    helperText={
                        <Checklist>
                            {passwordChecklist.map(({ label, isCompleted }, index) => (
                                <Checklist.Item key={index} completed={isCompleted(password)}>
                                    {label}
                                </Checklist.Item>
                            ))}
                        </Checklist>
                    }
                    {...register('password', { required: true })}
                />
            </Form.Row>
            <Form.Actions>
                <Form.Button disabled={!isValid || !isStrongPassword} type="submit">
                    Submit
                </Form.Button>
            </Form.Actions>
        </Form>
    );
}
