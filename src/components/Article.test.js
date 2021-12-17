import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';
import MutationObserver from 'mutationobserver-shim';

import Article from './Article';
import { render } from 'express/lib/response';

const testData = {
    id: "12345",
    headline: "This is a headline",
    createdOn: "October 49th, 2098",
    author:"Laura Martin",
    image: 134,
    summary: "Here is a summary for the article",
    body: "This is a very short article body - I will be fired from my agency got lack of gusto."   
}

test('renders component without errors', () => {
    // render(<Article article={testData} />);
});

test('renders headline, author from the article when passed in through props', () => {
});

test('renders "Associated Press" when no author is given', () => {
});

test('executes handleDelete when the delete button is pressed', () => {
});

//Task List: 
//1. Complete all above tests. Create test article data when needed.