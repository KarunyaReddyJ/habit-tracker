
import './HeatMap.css'; // Add your styling here

const Heatmap = ({ completedDays }) => {
    return (
      <div className="heatmap">
        {completedDays.map((completed, index) => (
          <div
            key={index}
            className={`heatmap-cell ${completed ? 'completed' : ''}`}
          >
            {/* Optional: Display the date or a checkmark */}
          </div>
        ))}
      </div>
    );
  };
  

export default Heatmap;
