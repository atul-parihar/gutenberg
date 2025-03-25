import { useEffect, useRef } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchBooks } from '../api/api';
import BookCard from './BookCard';
import './BookList.css';

export default function BookList({ topic, search }) {
    // create reference for infinite scroll
    const observer = useRef();

    const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['books', topic, search],
        queryFn: ({ pageParam = 1 }) => fetchBooks({ pageParam, topic, search }),
        getNextPageParam: (lastPage) =>
            lastPage.next ? parseInt(new URL(lastPage.next).searchParams.get('page')) : undefined,
    });

    const lastBookRef = (node) => {
        if (observer.current) observer.current.disconnect();
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && hasNextPage) {
                fetchNextPage();
            }
        });
        if (node) observer.current.observe(node);
    };

    return (
        <div className="book-list">
            {isLoading && <p className="loading">Loading books...</p>}
            {data?.pages.map((page) =>
                page.results.map((book, index) => (
                    <div key={book.id} ref={index === page.results.length - 1 ? lastBookRef : null}>
                        <BookCard book={book} />
                    </div>
                ))
            )}
            {isFetchingNextPage && <p className="loading">Loading more books...</p>}
            {!hasNextPage && !isLoading && <p className="no-more-books">No More Books</p>}
        </div>
    );
}
