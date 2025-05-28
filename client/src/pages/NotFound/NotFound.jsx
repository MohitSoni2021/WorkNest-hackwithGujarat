import { useNavigate } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notFound">
      <div className="notFound__header">
        <h1>404</h1>
        <p className="notFound__subtitle">Oops! Page Not Found</p>
      </div>
      <div className="notFound__container">
        <div className="notFound__message">
          <span className="notFound__icon">😕</span>
          <h2>Sorry, we couldn’t find the page you’re looking for.</h2>
          <p>Let’s get you back on track. Explore our site or return to the homepage.</p>
          <button
            className="notFound__button"
            onClick={() => navigate('/')}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};


export default NotFound;