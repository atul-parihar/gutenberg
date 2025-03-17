import './BookCard.css';

export default function BookCard({ book }) {
    console.log(book);
    const openBook = () => {
        const { formats } = book;
        if (formats['text/html']) {
            window.open(formats['text/html'], '_blank');
        } else if (formats['application/pdf']) {
            window.open(formats['application/pdf'], '_blank');
        } else if (formats['text/plain']) {
            window.open(formats['text/plain'], '_blank');
        } else {
            alert('No viewable version available');
        }
    };

    const formatAuthorName = (name) => {
        const parts = name.split(', ');
        return parts.length === 2 ? `${parts[1]} ${parts[0]}` : name;
    };

    return (
        <div className="book-card" onClick={openBook}>
            <div className="book-image-container">
                <img
                    src={book.formats['image/jpeg']}
                    alt={book.title}
                    className="book-image"
                />
            </div>
            <h2 className="book-title">{book.title}</h2>
            <p className="book-author">
                {book.authors.map((a) => formatAuthorName(a.name)).join(', ')}
            </p>
        </div>
    );
}
