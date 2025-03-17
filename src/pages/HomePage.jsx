import CategoryList from '../components/CategoryList';
import "./HomePage.css";

export default function HomePage() {
  return (
    <div>
      <h1>Gutenberg Project</h1>
      <h3>A social cataloging website that allows you to freely search its database of books, annotations and reviews.</h3>
      <CategoryList />
    </div>
  );
}
