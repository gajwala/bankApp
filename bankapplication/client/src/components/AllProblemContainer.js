import React, { useState } from "react";
import styled from "styled-components";

import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function AllProblemContainer({
  title = "bala",
  info = "dhbvjxnbvjhabhjsdba;JSbc hsdjvds",
}) {
  const [expanded, setExpanded] = useState(false);
  return (
    <Wrapper>
      {" "}
      <article className="question">
        <header>
          <h4 onClick={() => setExpanded(!expanded)} className="question-title">
            {title}
          </h4>
          <button className="btn" onClick={() => setExpanded(!expanded)}>
            {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {expanded && <p>{info}</p>}
      </article>
    </Wrapper>
  );
}

export default AllProblemContainer;

const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
  }
  .question {
    padding: 1rem 1.5rem;
    border: 2px solid #eae6eb;
    margin-bottom: 1rem;
    border-radius: 0.25rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    background: #eae6eb;
  }

  h4 {
    text-transform: none;
    line-height: 1.5;
  }
  .question-title {
    cursor: pointer;
  }
  p {
    margin-bottom: 0;
    margin-top: 0.5rem;
    color: hsl(209, 34%, 30%);
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  header h4 {
    margin-bottom: 0;
  }
  .btn {
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    margin-left: 1rem;
    align-self: center;
    min-width: 2rem;
  }
  @media (min-width: 992px) {
    .jobs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`;
