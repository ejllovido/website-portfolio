import React from "react";
import PullBox from "./PullBox";
import Footer from "./Footer";

const ExerciseBody = () => {
  return (
    <div className="container">
      <div className="formatted-content -intro">
        <h6 className="heading">Exercise</h6>
        <p className="body">I challenge my self by building code exercise</p>
      </div>
      <section>
        <div className="exercise-item">
          <div className="exercise-container -alternate">
            <div className="exercise-img">
              <a href="https://github.com/ejllovido/accordion" target="_blank">
                <img
                  src="accordion.jpg"
                  alt="accordion"
                  className="exercise-img"
                />
              </a>
            </div>
            <div className="exercise-desc">Accordion from scratch</div>
          </div>
          <div className="exercise-container">
            <div className="exercise-img">
              <a
                href="https://github.com/ejllovido/dropdown-fscratch"
                target="_blank"
              >
                <img
                  src="dropdown.jpg"
                  alt="dropdown"
                  className="exercise-img"
                />
              </a>
            </div>
            <div className="exercise-desc">Dropdown from scratch</div>
          </div>
        </div>
        <div className="exercise-item">
          <div className="exercise-container -alternate">
            <div className="exercise-img">
              <a href="https://github.com/ejllovido/router-app" target="_blank">
                <img src="tabs.jpg" alt="tabs" className="exercise-img" />
              </a>
            </div>
            <div className="exercise-desc">Tabs from scratch</div>
          </div>
          <div className="exercise-container">
            <div className="exercise-img">
              <a
                href="https://github.com/ejllovido/tooltip-fscratch"
                target="_blank"
              >
                <img src="tooltip.jpg" alt="tooltip" className="exercise-img" />
              </a>
            </div>
            <div className="exercise-desc">Tooltip from scratch</div>
          </div>
        </div>
        <div className="exercise-item">
          <div className="exercise-container -alternate">
            <div className="exercise-img">
              <a
                href="https://github.com/ejllovido/counter-app"
                target="_blank"
              >
                <img src="counter.jpg" alt="counter" className="exercise-img" />
              </a>
            </div>
            <div className="exercise-desc">Counter App</div>
          </div>
          <div className="exercise-container">
            <div className="exercise-img">
              <a href="https://github.com/ejllovido/http-app" target="_blank">
                <img src="http.jpg" alt="http" className="exercise-img" />
              </a>
            </div>
            <div className="exercise-desc">Http App</div>
          </div>
        </div>
        <div className="exercise-item">
          <div className="exercise-container -alternate">
            <div className="exercise-img">
              <a
                href="https://github.com/ejllovido/input-update"
                target="_blank"
              >
                <img src="input.jpg" alt="input" className="exercise-img" />
              </a>
            </div>
            <div className="exercise-desc">Input update</div>
          </div>
          <div className="exercise-container">
            <div className="exercise-img">
              <a
                href="https://github.com/ejllovido/question-generator"
                target="_blank"
              >
                <img
                  src="question.jpg"
                  alt="question"
                  className="exercise-img"
                />
              </a>
            </div>
            <div className="exercise-desc">Question Generator</div>
          </div>
        </div>
        <div className="exercise-item">
          <div className="exercise-container -alternate">
            <div className="exercise-img">
              <a
                href="https://github.com/ejllovido/searchable-list"
                target="_blank"
              >
                <img
                  src="searchable.jpg"
                  alt="searchable"
                  className="exercise-img"
                />
              </a>
            </div>
            <div className="exercise-desc">Searchable List</div>
          </div>
          <div className="exercise-container">
            <div className="exercise-img">
              <a
                href="https://github.com/ejllovido/color-randomizer"
                target="_blank"
              >
                <img src="color.jpg" alt="color" className="exercise-img" />
              </a>
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
