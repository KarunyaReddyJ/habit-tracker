import React, { useEffect, useRef } from 'react';
import { Chart, BarController, BarElement, CategoryScale, LinearScale } from 'chart.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale);

const ProgressChart = ({ habit }) => {
  const chartRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Destroy existing chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Create new chart instance
    chartRef.current = new Chart(canvasRef.current, {
      type: 'bar',
      data: {
        labels: ['Completed', 'Remaining'],
        datasets: [
          {
            label: habit.name,
            data: [habit.progress, 21 - habit.progress],
            backgroundColor: ['#4caf50', '#e0e0e0'],
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    // Cleanup on unmount
    return () => chartRef.current.destroy();
  }, [habit]); // Recreate the chart if the habit changes

  return <canvas ref={canvasRef} />;
};

export default ProgressChart;
