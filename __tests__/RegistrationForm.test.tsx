import { render, screen } from '@testing-library/react';
import { RegistrationForm, DEFAULT_PASSWORD_STRENGTH_CHECKERS } from '@/app/solution/RegistrationForm';

describe('Registration Form', () => {
    it('renders without crashing', () => {
        render(<RegistrationForm />);
        expect(screen.getByRole('form')).toBeInTheDocument();
    });

    it('renders expected inputs', () => {
        render(<RegistrationForm />);
        expect(screen.getByLabelText('Email')).toBeInTheDocument();
        expect(screen.getByLabelText('Password')).toBeInTheDocument();
    });

    it('renders expected password strength checks', () => {
        render(<RegistrationForm />);
        expect(screen.getAllByRole('listitem')).toHaveLength(DEFAULT_PASSWORD_STRENGTH_CHECKERS.length);
        [...DEFAULT_PASSWORD_STRENGTH_CHECKERS].forEach(({ label }) => {
            expect(screen.getByText(label)).toBeInTheDocument();
        });
    });
});
