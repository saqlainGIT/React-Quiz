function Options({ questions, dispatch, answer }) {
  const hasanwsered = answer !== null;
  return (
    <div className="options">
      {questions.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : " "} 
          ${
            hasanwsered
              ? index === questions.correctOption
                ? "correct"
                : "wrong"
              : ""
          }
          `}
          key={option}
          disabled={hasanwsered}
          onClick={() => {
            console.log("clicked", index);
            dispatch({ type: "newAnswer", payload: index });
          }}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
