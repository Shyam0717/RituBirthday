import '../styles/wishespage.css';
import { useNavigate } from 'react-router-dom';

const WishesPage = () => {
    const navigate = useNavigate(); // Initialize the useNavigate hook

    const handleNextPage = () => {
        // Use navigate to go to the /gallery page
        navigate('/gallery');
    };

  return (
    <div className="wishes-page">
      <span className="heart-float">
      💕
      </span>
      <div className="animated-elements paras">
        {/* Add animated elements or cute backgrounds here */}
        <p className='p1'>
            Happy Birthday to the most incredible person in my life! 🎉🎂 <br /> Today is all about celebrating the wonderful soul that you are, and I feel so blessed to be a part of your journey.
        </p>

        <p className='p2'>
            On this special day, I want you to know how much you mean to me. Your presence brings so much joy, warmth, and love into my life. Your smile is like sunshine, brightening even the darkest days. Your laughter is a melody that makes my heart sing.

            As you embark on another year of adventures and experiences, I want to be by your side, supporting you every step of the way. May this year be filled with laughter, love, and all the incredible moments you deserve.
        </p>

        <p className='p3'>
            Thank you for being the amazing person that you are. Your kindness, intelligence, and beauty inspire me daily. I am grateful for the memories we have created and excited about the ones we will make together in the future.

            Wishing you a day filled with love, surprises, and everything that brings you joy. May this year be your best one yet!
        </p>

        {/* Heart emojis with animation */}
        <span className="heart-emoji">❤️</span>
        <span className="heart-emoji">❤️</span>
        <span className="heart-emoji">❤️</span>
      </div>
      {/* Floating hearts */}
      <span className="heart-float1">💕</span>
            <span className="heart-float2">💕</span>
            <span className="heart-float3">💕</span>
            <span className="heart-float4">💕</span>

            {/* Next page button */}
            <button className="next-button" onClick={handleNextPage}>
                Next Page
            </button>
    </div>
  );
};

export default WishesPage;
