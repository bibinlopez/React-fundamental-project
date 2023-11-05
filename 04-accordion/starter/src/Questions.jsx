import Question from './Question';

const Questions = ({ data }) => {
  return (
    <section className='container'>
      <h1>Questions</h1>
      {data.map((question) => {
        return <Question key={question.id} {...question} />;
      })}
    </section>
  );
};
export default Questions;
