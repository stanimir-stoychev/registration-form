import { render, screen } from '@testing-library/react';
import { Checklist } from '@/src/components';

describe('Checklist', () => {
    it('renders without crashing', () => {
        render(<Checklist />);
        expect(screen.getByRole('list')).toBeInTheDocument();
    });

    it('renders with expected children', () => {
        render(
            <Checklist>
                <Checklist.Item>Test item</Checklist.Item>
            </Checklist>,
        );

        expect(screen.getByRole('list')).toBeInTheDocument();
        expect(screen.getByRole('listitem')).toBeInTheDocument();
    });
});

describe('Checklist.Item', () => {
    it('renders without crashing', () => {
        render(<Checklist.Item />);
        expect(screen.getByRole('listitem')).toBeInTheDocument();
    });

    it('renders with expected default "completed" indicator', () => {
        render(<Checklist.Item />);
        expect(screen.getByText('✘')).toBeInTheDocument();
    });

    it('renders with expected "completed" indicator', () => {
        render(<Checklist.Item completed />);
        expect(screen.getByText('✔︎')).toBeInTheDocument();

        render(<Checklist.Item completed={false} />);
        expect(screen.getByText('✘')).toBeInTheDocument();
    });
});
