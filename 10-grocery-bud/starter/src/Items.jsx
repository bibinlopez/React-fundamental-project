import SingleItem from './SingleItem';

const Items = ({ items, handleCompleted, handleRemove }) => {
  return (
    <div className='items'>
      {items.map((item, index) => {
        return (
          <SingleItem
            key={item.id}
            handleCompleted={handleCompleted}
            handleRemove={handleRemove}
            {...item}
            index={index}
          />
        );
      })}
    </div>
  );
};
export default Items;
