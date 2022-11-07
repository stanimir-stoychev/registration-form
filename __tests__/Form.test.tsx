import { render, screen } from '@testing-library/react';
import { Form } from '@/src/components';

describe('Form', () => {
    it('renders without crashing', () => {
        render(<Form />);
        expect(screen.getByRole('form')).toBeInTheDocument();
    });
});

describe('Form.Input', () => {
    it('renders without crashing', () => {
        render(<Form.Input />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('renders with expected props', () => {
        const onChangeHandler = () => {};
        render(<Form.Input type="text" value="test" onChange={onChangeHandler} />);
        const input = screen.getByRole('textbox');
        expect(input).toHaveProperty('type', 'text');
        expect(input).toHaveProperty('value', 'test');
    });

    it('renders with expected label', () => {
        render(<Form.Input id="test" label="test" />);
        const input = screen.getByRole('textbox');
        expect(input).toHaveProperty('id', 'test');
        expect(screen.getByLabelText('test')).toBeInTheDocument();
    });

    it('renders with expected helper text', () => {
        render(<Form.Input helperText="helper text test" />);
        expect(screen.getByText('helper text test')).toBeInTheDocument();
    });
});

describe('Form.Button', () => {
    it('renders without crashing', () => {
        render(<Form.Button />);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('renders with expected props', () => {
        render(<Form.Button type="button">Test button</Form.Button>);
        const btn = screen.getByRole('button');
        expect(btn).toHaveProperty('type', 'button');
        expect(screen.getByText('Test button')).toBeInTheDocument();
    });
});
