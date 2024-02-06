// TimelinePage.jsx
import '../styles/timeline.css'; // Import your component-specific styling file

const TimelinePage = () => {
  return (
    <section className="timeline-page section">
        <h2 className="section__title">
            Relationship Timeline
        </h2>
        <span className='section__subtitle'>
            Our Journey Together
        </span>

        <div className="timeline-container">
            <div className="timeline-item">
                <div className="timeline-content">
                    <h2>Year 1</h2>
                    <p>Our First Date</p>
                </div>
                <span className="timeline-dot"></span>
            </div>
            <div className="timeline-item">
                <div className="timeline-content">
                    <h2>Year 2</h2>
                    <p>Moved in Together</p>
                </div>
                <span className="timeline-dot"></span>
            </div>
            <div className="timeline-item">
                <div className="timeline-content">
                    <h2>Year 3</h2>
                    <p>Engagement</p>
                </div>
                <span className="timeline-dot"></span>
            </div>
            <div className="timeline-item">
                <div className="timeline-content">
                    <h2>Year 4</h2>
                    <p>Big Milestone</p>
                </div>
                <span className="timeline-dot"></span>
            </div>
            <div className="timeline-item">
                <div className="timeline-content">
                    <h2>Year 5</h2>
                    <p>Celebrating Together</p>
                </div>
                <span className="timeline-dot"></span>
            </div>
        </div>
    </section>
  );
};

export default TimelinePage;
