import { Fragment } from "react";
const App = () => {
  const courseinfo = {
    name: `Half Stack application development`,
    parts: [
      {
        name: `Fundamentals of React`,
        exercises: 10,
      },
      {
        name: `Using props to pass data`,
        exercises: 7,
      },
      {
        name: `State of a component`,
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={courseinfo} />
      <Content parts={courseinfo.parts} />
      <Total parts={courseinfo.parts} />
    </div>
  );
};

export default App;

function Header({ course }) {
  return <h1>{course.name}</h1>;
}
function Content({ parts }) {
  const part1 = parts[0].name;
  const part2 = parts[1].name;
  const part3 = parts[2].name;

  const exercises1 = parts[0].exercises;
  const exercises2 = parts[1].exercises;
  const exercises3 = parts[2].exercises;

  return (
    <Fragment>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
    </Fragment>
  );
}
function Total({ parts }) {
  const exercises1 = parts[0].exercises;
  const exercises2 = parts[1].exercises;
  const exercises3 = parts[2].exercises;

  const sum = exercises1 + exercises2 + exercises3;

  return <p>Number of exercises {sum}</p>;
}
