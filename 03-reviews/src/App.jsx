import { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const App = () => {
  const [index, setIndex] = useState(0);
  const { img, name, id, job, image, text } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const handlePrev = () => {
    const newIndex = index - 1;
    setIndex(checkNumber(newIndex));
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(checkNumber(newIndex));
  };

  const randomReview = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    console.log(randomNumber);
    if (randomNumber === index) {
      randomNumber = randomNumber + 1;
    }
    console.log(randomNumber);
    setIndex(checkNumber(randomNumber));
  };

  return (
    <main>
      <article className='review'>
        <div className='img-container'>
          <img src={image} alt={name} className='person-img' />
          <span className='quote-icon'>
            <FaQuoteRight />
          </span>
        </div>
        <h4 className='author'> {name}</h4>
        <p className='job'> {job}</p>
        <p className='text'> {text}</p>
        <button
          className='btn btn-hipster'
          style={{ marginBottom: '1rem' }}
          onClick={randomReview}
        >
          {' '}
          Susprise Me
        </button>
        <div className='btn-container'>
          <button type='button' className='prev-btn' onClick={handlePrev}>
            <FaChevronLeft />
          </button>
          <button type='button' className='next-btn' onClick={handleNext}>
            <FaChevronRight />
          </button>
        </div>
      </article>
    </main>
  );
};
export default App;
