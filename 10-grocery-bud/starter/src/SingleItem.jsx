const SingleItem = ({
  id,
  name,
  index,
  completed,
  handleCompleted,
  handleRemove,
}) => {
  return (
    <div className='single-item'>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => handleCompleted(id, index)}
      />
      <p
        style={{
          textTransform: 'capitalize',
          textDecoration: completed && 'line-through',
        }}
      >
        {name}
      </p>
      <button
        type='button'
        className='btn remove-btn'
        onClick={() => handleRemove(id)}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
