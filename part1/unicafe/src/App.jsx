import { useState } from "react";
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const average = (good - bad) / (good + neutral + bad);
  const positive = (good / (good + neutral + bad)) * 100;

  function Statistics({ name, count }) {
    if (count < 1) {
      return null;
    }
    return (
      <>
        <p>
          {name} {count}
        </p>
      </>
    );
  }

  function NoFeedback() {
    if (good === 0 && neutral === 0 && bad === 0) {
      return <p>No feedback given</p>;
    }
    return null;
  }

  return (
    <>
      <h1>give feedback</h1>
      <button onClick={() => setGood((good) => good + 1)}>good</button>
      <button onClick={() => setNeutral((neutral) => neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad((bad) => bad + 1)}>bad</button>
      <h1>statistics</h1>
      <Statistics name="good" count={good} />
      <Statistics name="neutral" count={neutral} />
      <Statistics name="bad" count={bad} />
      <Statistics name="all" count={good + neutral + bad} />
      <Statistics name="average" count={average ? average : 0} />
      <Statistics name="positive" count={positive ? `${positive}%` : 0} />
      <NoFeedback />
    </>
  );
};

export default App;
