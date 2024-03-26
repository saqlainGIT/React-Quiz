function Progress({ index, numquestions, answer, points, maxPoints }) {
  return (
    <header className="progress">
      <progress
        max={numquestions}
        value={index + Number(answer !== null)}
      ></progress>
      <p>
        <strong>{index + 1}</strong>/{numquestions} Questions
      </p>
      <p>
        {points}/{maxPoints}
      </p>
    </header>
  );
}

export default Progress;
