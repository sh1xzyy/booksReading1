import { createSelector } from '@reduxjs/toolkit'

const selectGoingToReadBooks = state => state.book.goingToRead
const selectCurrentlyReadingBooks = state => state.book.currentlyReading
const selectFinishedReadingBooks = state => state.book.finishedReading

const reversedBooks = books => [...books].reverse()
const sortedSelector = selector => createSelector(selector, reversedBooks)

export const selectGoingToReadBooksSorted = sortedSelector(
	selectGoingToReadBooks
)
export const selectCurrentlyReadingBooksSorted = sortedSelector(
	selectCurrentlyReadingBooks
)
export const selectFinishedReadingBooksSorted = sortedSelector(
	selectFinishedReadingBooks
)
export const selectIsLoading = state => state.book.isLoading
