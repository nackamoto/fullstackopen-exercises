import { useState } from "react";
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

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
    </>
  );
};

export default App;

function Statistics({ name, count }) {
  return (
    <>
      <p>
        {name} {count}
      </p>
    </>
  );
}
