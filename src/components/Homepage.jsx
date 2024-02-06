// Homepage.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/homepage.css';

// eslint-disable-next-line react/prop-types
const Homepage = ({ birthdayDate, birthdayTime }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const navigate = useNavigate();

  useEffect(() => {
    const calculateTimeLeft = () => {
      const currentDate = new Date();
      const options = { timeZone: 'Asia/Kolkata' };
      const currentIST = new Date(currentDate.toLocaleString('en-US', options));
      const targetDate = new Date(`${birthdayDate}T${birthdayTime}`);
      
      const differenceInTime = targetDate - currentIST;
    
      if (differenceInTime <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
    
        navigate('/wishes');
      } else {
        const days = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((differenceInTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((differenceInTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((differenceInTime % (1000 * 60)) / 1000);
    
        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [birthdayDate, birthdayTime, navigate]);

  return (
    <div className="homepage">
      <div className='header'>Happy Birthdayy Jaan 😘</div>
      <div className="countdown">
        <p>Countdown to Birthday:</p>
        {timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0 ? (
          <button className="wishes-button" onClick={() => navigate('/wishes')}>Go to WishesPage</button>
        ) : (
          <p>
            {timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes, {timeLeft.seconds} seconds
          </p>
        )}
      </div>
    </div>
  );
};

export default Homepage;
