import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItems }) => {
  const [showText, setShowText] = useState('');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!showText) {
          toast.error('please provide value');
          return;
        }
        setShowText('');
        addItems(showText);
      }}
    >
      <h4>task bud</h4>
      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          value={showText}
          onChange={(e) => setShowText(e.target.value)}
        />
        <button className='btn ' type='submit'>
          add item
        </button>
      </div>
    </form>
  );
};
export default Form;
