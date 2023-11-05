const Categories = ({ categories, handleFilter }) => {
  const Button = ({ cat }) => {
    return (
      <button type='button' className='btn' onClick={() => handleFilter(cat)}>
        {cat}
      </button>
    );
  };

  return (
    <div className='btn-container'>
      {categories.map((cat, index) => {
        // console.log(cat);
        return <Button key={index} cat={cat} />;
      })}
    </div>
  );
};
export default Categories;
