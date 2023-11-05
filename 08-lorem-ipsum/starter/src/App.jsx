import { useState } from 'react';
import data from './data';

const App = () => {
  const [count, setCount] = useState('1');
  const [showText, setShowText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const amount = parseInt(count);
    const newText = data.slice(0, amount);
    // console.log(newText);
    setShowText(newText);
  };

  return (
    <section className='section-center'>
      <h4>tired of lorem lispum</h4>
      <form onSubmit={handleSubmit} className='lorem-form'>
        <label htmlFor='amount'> paragraph:</label>
        <input
          type='number'
          max={8}
          min={1}
          step={1}
          // placeholder='1'
          onChange={(e) => {
            // console.log(e.target.value);
            return setCount(e.target.value);
          }}
          value={count}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <article className='lorem-text'>
        {showText.map((text, index) => {
          return <p key={index}>{text}</p>;
        })}
      </article>
    </section>
  );
};
export default App;
