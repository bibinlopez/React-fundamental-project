import { useState } from 'react';
import Tour from './Tour';

const Tours = ({ tours, setTours }) => {
  const handleRemoveTour = (id) => {
    const newTours = tours.filter((tr) => {
      return tr.id !== id;
    });
    setTours(newTours);
  };

  return (
    <section>
      <div className='title'>
        <h2>tours</h2>
        <div className='title-container'></div>
      </div>
      <div className='tours'>
        {tours.map((tour) => {
          return (
            <div key={tour.name}>
              <Tour
                {...tour}
                setTours={setTours}
                handleRemoveTour={handleRemoveTour}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default Tours;
