// Props: score, bestScore
function Scoreboard({ score, bestScore }) {
  return (
    <div className="scoreboard">
      <div className="score-item">
        <h2>Score: {score}</h2>
      </div>
      <div className="score-item">
        <h2>Best Score: {bestScore}</h2>
      </div>
    </div>
  );
}
export default Scoreboard;
