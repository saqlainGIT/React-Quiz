function NextQuestion({ dispatch, index, numquestions }) {
  return (
    <>
      {/* {index > 0 && (
        <div>
          <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "prevQuestion" })}
          >
            Previous
          </button>
        </div>
      )} */}

      {index === numquestions - 1 ? (
        <div>
          <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "finished" })}
          >
            Finish
          </button>
        </div>
      ) : (
        <div>
          <button
            className="btn btn-ui"
            onClick={() => dispatch({ type: "nextQuestion" })}
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}

export default NextQuestion;
