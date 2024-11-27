import { useState } from "react";
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function Statistics() {
    const average = (good - bad) / (good + neutral + bad);
    const positive = (good / (good + neutral + bad)) * 100;
    const all = good + neutral + bad;

    if (all < 1) {
      return <p>No Feedbac</p>;
    }
    return (
      <table>
        <tbody>
          <StatisticLine text={`Good`} value={good} />
          <StatisticLine text={`Neutral`} value={neutral} />
          <StatisticLine text={`Bad`} value={bad} />
          <StatisticLine text={`All`} value={all} />
          <StatisticLine text={`Average`} value={average} />
          <StatisticLine text={`Positive`} value={positive} />
        </tbody>
      </table>
    );
  }

  function StatisticLine({ text, value }) {
    return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    );
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
      <Statistics />
    </>
  );
};

export default App;
