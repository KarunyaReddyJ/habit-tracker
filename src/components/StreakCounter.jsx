const StreakCounter = ({ streak }) => (
    <div style={{ textAlign: 'center' }}>
      <h2>Current Streak: {streak || streak.current} days</h2>
    </div>
  );
  
  export default StreakCounter;
  