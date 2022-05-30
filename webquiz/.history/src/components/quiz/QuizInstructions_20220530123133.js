import React, { Components, Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const QuizInstructions = () => (
  <Fragment>
    <Helmet>
      <title>Wevdev-Quiz</title>
    </Helmet>
    <div className="instructions-container">
      <h1>Wie geht das Spiel?</h1>
      <ul className="browser-default" id="main-list">
        <li>Das Spiel geht 2 Minuten und endet wen die Zeit vorbei ist.</li>
        <li>Das Spiel hat 15 Fragen</li>
        <li>Jede Frage hat 3 Antworten wobei nur eine richig ist.</li>
        <li>Drücke auf dem Button damit es weiter geht.</li>
      </ul>
      <div className="confirm-button">
        <span className="left">
          <Link to="/" className="confirm-buttons" id="back">
            Zurück
          </Link>
        </span>
        <br></br>
        <span className="right">
          <Link to="/play/quiz" className="confirm-buttons" id="proceed">
            Los gehts
          </Link>
        </span>
      </div>
    </div>
  </Fragment>
);

export default QuizInstructions;
