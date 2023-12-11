
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Todo from '../Todos/Todo';

test('renders a todo correctly', () => {
    const todo = {
        _id: '1',
        text: 'Test Todo',
        done: false,
    };

    const deleteTodo = jest.fn();
    const completeTodo = jest.fn();

    render(<Todo todo={todo} deleteTodo={deleteTodo} completeTodo={completeTodo} />);

    // Check if the text of the todo is rendered
    expect(screen.getByText('Test Todo')).toBeInTheDocument();

    // Simulate clicking the "Delete" button
    fireEvent.click(screen.getByText('Delete'));
    expect(deleteTodo).toHaveBeenCalledWith(todo);

    // Simulate clicking the "Set as done" button
    fireEvent.click(screen.getByText('Set as done'));
    expect(completeTodo).toHaveBeenCalledWith(todo);
});
