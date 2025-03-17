import { useNavigate } from 'react-router-dom';
import Fiction from '../assets/icons/Fiction.svg';
import Philosophy from '../assets/icons/Philosophy.svg';
import Drama from '../assets/icons/Drama.svg';
import History from '../assets/icons/History.svg';
import Humour from '../assets/icons/Humour.svg';
import Adventure from '../assets/icons/Adventure.svg';
import Politics from '../assets/icons/Politics.svg';
import Next from '../assets/icons/Next.svg';
import './CategoryList.css';

const categories = [
  { name: 'Fiction', icon: Fiction },
  { name: 'Drama', icon: Philosophy },
  { name: 'Humor', icon: Drama },
  { name: 'Politics', icon: History },
  { name: 'Philosophy', icon: Humour },
  { name: 'History', icon: Adventure },
  { name: 'Adventure', icon: Politics },
];

export default function CategoryList() {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/books?topic=${category.toLowerCase()}`);
  };

  return (
    <div className="category-list">
      {categories.map(({ name, icon }) => (
        <button 
          key={name} 
          onClick={() => handleCategoryClick(name)} 
          className="category-button"
        >
          <span className="category-content">
            <img src={icon} alt={`${name} Icon`} className="category-icon" />
            {name.toUpperCase()}
          </span>
          <img src={Next} alt="Next Button" />
        </button>
      ))}
    </div>
  );
}
