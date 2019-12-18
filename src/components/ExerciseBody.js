import React from "react";
import PullBox from "./PullBox";
import Footer from "./Footer";

const ExerciseBody = () => {
  return (
    <div className="container">
      <div className="formatted-content -intro">
        <h6 className="heading">Exercise</h6>
        <p className="body">I challenge my self on building an exercise</p>
      </div>
      <section>
        <div className="exercise-item">
          <div className="exercise-container -alternate">
            <div className="exercise-img">
              <img src="accordion.jpg" alt="accordion" className="img" />
            </div>
            <div className="exercise-desc">Accordion from scratch</div>
          </div>
          <div className="exercise-container">
            <div className="exercise-img">
              <img src="dropdown.jpg" alt="dropdown" className="img" />
            </div>
            <div className="exercise-desc">Dropdown from scratch</div>
          </div>
        </div>
        <div className="exercise-item">
          <div className="exercise-container -alternate">
            <div className="exercise-img">
              <img src="tabs.jpg" alt="tabs" className="img" />
            </div>
            <div className="exercise-desc">Tabs from scratch</div>
          </div>
          <div className="exercise-container">
            <div className="exercise-img">
              <img src="tooltip.jpg" alt="tooltip" className="img" />
            </div>
            <div className="exercise-desc">Tooltip from scratch</div>
          </div>
        </div>
        <div className="exercise-item">
          <div className="exercise-container -alternate">
            <div className="exercise-img">
              <img src="counter.jpg" alt="counter" className="img" />
            </div>
            <div className="exercise-desc">Counter App</div>
          </div>
          <div className="exercise-container">
            <div className="exercise-img">
              <img src="http.jpg" alt="http" className="img" />
            </div>
            <div className="exercise-desc">Http App</div>
          </div>
        </div>
        <div className="exercise-item">
          <div className="exercise-container -alternate">
            <div className="exercise-img">
              <img src="input.jpg" alt="input" className="img" />
            </div>
            <div className="exercise-desc">Input update</div>
          </div>
          <div className="exercise-container">
            <div className="exercise-img">
              <img src="question.jpg" alt="question" className="img" />
            </div>
            <div className="exercise-desc">Question Generator</div>
          </div>
        </div>
        <div className="exercise-item">
          <div className="exercise-container -alternate">
            <div className="exercise-img">
              <img src="searchable.jpg" alt="searchable" className="img" />
            </div>
            <div className="exercise-desc">Searchable List</div>
          </div>
          <div className="exercise-container">
            <div className="exercise-img">
              <img src="color.jpg" alt="color" className="img" />
            </div>
            <div className="exercise-desc">Color randomizer</div>
          </div>
        </div>
      </section>
      <PullBox />
      <Footer />
    </div>
  );
};

export default ExerciseBody;
