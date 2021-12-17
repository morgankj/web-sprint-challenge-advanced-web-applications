import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';

import { render, screen } from '@testing-library/react';

const testData = {
    id: "12345",
    headline: "This is a headline",
    createdOn: "2021-12-13T14:20:13-06:00",
    author: "Laura Martin",
    image: 134,
    summary: "Here is a summary for the article",
    body: "This is a very short article body - I will be fired from my agency got lack of gusto."   
}

const testData2 = {
    id: "67890",
    headline: "This is a headline2",
    createdOn: "2021-12-13T14:20:13-06:00",
    author: "",
    image: 134,
    summary: "Here is a summary for the article 2",
    body: "This is a very short article body - I will be fired from my agency got lack of gusto 22222222222."   
}

test('renders component without errors', () => {
    render(<Article article={testData} />);
});

test('renders headline, author from the article when passed in through props', () => {
    render(<Article article={testData} />);

    const headline = screen.queryByText(/this is a headline/i);
    const author = screen.queryByText(/laura martin/i);
    const summary = screen.queryByText(/here is a summary for the article/i);
    const body = screen.queryByText(/this is a very short article body - I will be fired from my agency got lack of gusto./i);

    expect(headline).toBeInTheDocument();
    expect(author).toBeInTheDocument();
    expect(summary).toBeInTheDocument();
    expect(body).toBeInTheDocument();
});

test('renders "Associated Press" when no author is given', () => {
    render(<Article article={testData2} />);

    const author = screen.queryByText(/associated press/i);

    expect(author).toBeInTheDocument();
});

test('executes handleDelete when the delete button is pressed', () => {
    const mockHandleDelete = jest.fn();

    render(<Article article={testData} handleDelete={mockHandleDelete} />);

    const button = screen.getByTestId("deleteButton");
    userEvent.click(button);

    expect(mockHandleDelete).toBeCalled();
});

//Task List: 
//1. Complete all above tests. Create test article data when needed.