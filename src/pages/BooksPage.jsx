import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import BackIcon from '../assets/icons/Back.svg';
import CancelIcon from '../assets/icons/Cancel.svg';
import SearchIcon from '../assets/icons/Search.svg';
import BookList from '../components/BookList';
import './BooksPage.css';
import useDebounce from '../hooks/useDebounce';

export default function BooksPage() {
    const [searchParams] = useSearchParams();
    const topic = searchParams.get('topic') || '';
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const handleClear = () => setSearch('');

    const debouncedSearchInput = useDebounce(search, 1000);

    const debouncedSearch = ()=>{
        let timer;

        return (value) => {
            clearTimeout(timer);
            timer = setTimeout(() => setSearch(value), 500);
        }
    }

    const handleBack = () => {
        navigate("/");
    }

    return (
        <div className='container'>
            <div className="books">
                <button className='back-button' onClick={handleBack}>
                    <img src={BackIcon} alt="Go Back" />
                </button>
                <p className='title'>{topic.toUpperCase()}</p>
            </div>
            <div className="input-wrapper">
                <img style={{padding:"10px"}} className="search-btn" src={SearchIcon} alt="Search" />
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search"
                />
                {search && (
                    <button className="clear-btn" onClick={handleClear}>
                        <img src={CancelIcon} alt="Remove Input" />
                    </button>
                )}
            </div>
            <BookList topic={topic} search={debouncedSearchInput} />
        </div>
    );
}
