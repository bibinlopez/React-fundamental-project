import { useEffect, useState } from 'react';
import Loading from './Loading';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const resp = await fetch(url);
      const tours = await resp.json();
      setTours(tours);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main className='title'>
        <h2> no tours left</h2>
        <button
          type='button'
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={fetchTours}
        >
          refresh
        </button>
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} setTours={setTours} />
    </main>
  );
};
export default App;
