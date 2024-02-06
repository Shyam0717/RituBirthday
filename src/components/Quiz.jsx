import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import '../styles/quiz.css';

const Quiz = () => {
  const navigate = useNavigate(); // Initialize the useNavigate hook

  useEffect(() => {
    // Load Typeform embed script
    const script = document.createElement('script');
    script.src = 'https://embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Clean up
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleNextPage = () => {
    // Use navigate to go to the /final page
    navigate('/final');
  };

  return (
    <div className="quiz-container">
        <h1>Quiz</h1>
      {/* Typeform embed container */}
      <div data-tf-live="01HNZG486MC5PJCYY9K04QBAD3"></div>

      {/* Button to navigate to "/final" page */}
      <button className="next-button" onClick={handleNextPage}>
        Next Page
      </button>
    </div>
  );
};

export default Quiz;
