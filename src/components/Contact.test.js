import Contact from './Contact';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('Testing Contact Form', () => {
    test('should render the basic fields', () => {
        render(<Contact/>)

        expect(screen.getByText(/Get in touch/i)).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: /name/i })).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: 'email'})).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: 'subject'})).toBeInTheDocument();
        expect(screen.getByRole('textbox', { name: 'message'})).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Submit/i})).toBeInTheDocument();
    })

    test('should not display error message with correct name value', async () => {
        render(<Contact/>)

        userEvent.type(screen.getByRole('textbox', { name: /name/i}), 'ABCDEF');

        await act(async() => {
            userEvent.click(screen.getByRole('button'));
        })

        expect(screen.queryByTestId('error-name')).not.toBeTruthy();
    });

    test('should display error message with wrong name value', async () => {
        render(<Contact/>)

        await act(async() => {
            userEvent.click(screen.getByRole('button'));
        })

        expect(screen.queryByTestId('error-name')).toBeTruthy();
    });

    test('should not display error message with correct email value', async () => {
        render(<Contact/>)

        userEvent.type(screen.getByRole('textbox', { name: 'email'}), 'aaa@e.fr');

        await act(async() => {
            userEvent.click(screen.getByRole('button'));
        })

        expect(screen.queryByTestId('error-email')).not.toBeTruthy();
    });

    test('should display error message with wrong email value', async () => {
        render(<Contact/>)

        await act(async() => {
            userEvent.click(screen.getByRole('button'));
        })

        expect(screen.queryByTestId('error-email')).toBeTruthy();
    });

    test('should not display error message with correct subject value', async () => {
        render(<Contact/>)

        userEvent.type(screen.getByRole('textbox', { name: 'subject'}), 'entered subject');

        await act(async() => {
            userEvent.click(screen.getByRole('button'));
        })

        expect(screen.queryByTestId('error-subject')).not.toBeTruthy();
    });

    test('should display error message with wrong subject value', async () => {
        render(<Contact/>)

        await act(async() => {
            userEvent.click(screen.getByRole('button'));
        })

        expect(screen.queryByTestId('error-subject')).toBeTruthy();
    });

    test('should not display error message with correct message text', async () => {
        render(<Contact/>)

        userEvent.type(screen.getByRole('textbox', { name: 'message'}), 'entered message');

        await act(async() => {
            userEvent.click(screen.getByRole('button'));
        })

        expect(screen.queryByTestId('error-message')).not.toBeTruthy();
    });

    test('should display error message with wrong or empty message text', async () => {
        render(<Contact/>)

        await act(async() => {
            userEvent.click(screen.getByRole('button'));
        })

        expect(screen.queryByTestId('error-message')).toBeTruthy();
    })
})