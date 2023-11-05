const SingleItem = ({
  id,
  name,
  index,
  completed,
  handleCompleted,
  handleRemove,
}) => {
  return (
    <div>
      <input
        type='checkbox'
        checked={completed}
        onChange={() => handleCompleted(id, index)}
      />
      <p>{name}</p>
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
