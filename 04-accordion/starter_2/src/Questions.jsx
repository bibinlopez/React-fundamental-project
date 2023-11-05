import { useState } from 'react';
import Question from './Question';

const Questions = ({ data }) => {
  const [activeId, setAcitveId] = useState(null);

  const toggleQuestion = (id) => {
    const newId = activeId === id ? null : id;
    setAcitveId(newId);
  };

  return (
    <section className='container'>
      <h1>Questions</h1>
      {data.map((question) => {
        return (
          <Question
            key={question.id}
            {...question}
            activeId={activeId}
            toggleQuestion={toggleQuestion}
          />
        );
      })}
    </section>
  );
};
export default Questions;
