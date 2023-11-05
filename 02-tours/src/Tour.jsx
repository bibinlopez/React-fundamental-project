import { useState } from 'react';

const Tour = ({ id, name, image, info, price, handleRemoveTour }) => {
  const [read, setRead] = useState(false);

  return (
    <article className='single-tour'>
      <img src={image} alt={name} className='img' />
      <span className='tour-price'> ${price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>
          {read ? info : `${info.substring(0, 200)} ...`}
          <button
            type='button'
            className='info-btn'
            onClick={() => setRead(!read)}
          >
            {read ? 'showless' : 'readmore'}
          </button>
        </p>
      </div>
      <button
        type='button'
        className='btn btn-block delete-btn'
        onClick={() => handleRemoveTour(id)}
      >
        not interested
      </button>
    </article>
  );
};
export default Tour;
