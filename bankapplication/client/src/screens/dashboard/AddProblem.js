import React from "react";

import {
  FormRow,
  FormRowSelect,
  Alert,
  FormRowTextArea,
} from "../../components";
// import { useAppContext } from "../../context/appContext";

import styled from "styled-components";
import useForm from "../../customHooks/useForm";
import { showAlertAtom } from "../../Atoms/showAlert";
import { useRecoilState, useRecoilValue } from "recoil";
import { isLoadingAtom } from "../../Atoms/isLoading";

const difficultyList = ["Easy", "Medium", "Hard"];

const problemTypeList = [
  "Arrays & Hashing",
  "Two Pointers",
  "Sliding Window",
  "Stack",
  "Binary Search",
  "LinkedList",
  "Trees",
  "Tries",
  "BackTracking",
  "heaps / ProrityQueue",
  "Graphs",
  "Advanced Graphs",
  "Greedy",
  "Intervals",
  "math & Geometry",
  "Bit Manipulation",
  "1-D Dynamic Programming",
  "2-D Dynamic Programming",
];

function AddProblem() {
  const [formData, setFormData] = useForm({
    status: false,
    problemName: "",
    difficulty: "",
    videoSolutionLink: "",
    code: "",
    problemlink: "",
    problemType: "",
  });
  const [showAlert, setAlert] = useRecoilState(showAlertAtom);
  const isLoading = useRecoilValue(isLoadingAtom);
  //   const {
  //     isLoading,
  //     isEditing,
  //     showAlert,
  //     displayAlert,

  //   } = useAppContext();
  const handleSubmit = (e) => {
    e.preventDefault();

    //   if (!position || !company || !jobLocation) {
    //     displayAlert();
    //     return;
    //   }
    //   if (isEditing) {
    //     editJob();
    //     return;
    //   }
    //   createJob();
    // };
    // const handleJobInput = (e) => {
    //   const name = e.target.name;
    //   const value = e.target.value;
    //   handleChange({ name, value });
  };

  const clearValues = () => {
    setFormData({
      status: false,
      problemName: "",
      difficulty: "",
      videoSolutionLink: "",
      code: "",
      problemlink: "",
      problemType: "",
    });
  };
  return (
    <Wrapper>
      <form className="form">
        {/* <h3>{isEditing ? "edit job" : "add job"}</h3> */}
        <h3> add problem</h3>
        {showAlert && <Alert />}
        <div className="form-center">
          <FormRowSelect
            name="problemType"
            value={formData.problemType}
            handleChange={setFormData}
            list={problemTypeList}
          />
          {/* problemName */}
          <FormRow
            type="text"
            name="problemName"
            value={formData.problemName}
            handleChange={setFormData}
          />
          {/* problemlink */}
          <FormRow
            type="text"
            name="problemlink"
            value={formData.problemlink}
            handleChange={setFormData}
          />
          {/* difficulty */}
          <FormRowSelect
            name="difficulty"
            value={formData.difficulty}
            handleChange={setFormData}
            list={difficultyList}
          />
          <FormRow
            type="text"
            labelText="videoLink"
            name="videoSolutionLink"
            value={formData.videoSolutionLink}
            handleChange={setFormData}
          />
          {/* code */}
          <FormRowTextArea
            type="textarea"
            labelText="code"
            name="code"
            value={formData.code}
            handleChange={setFormData}
          />

          {/* btn container */}
          <div className="btn-container">
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
            <button
              className="btn btn-block clear-btn"
              onClick={(e) => {
                e.preventDefault();
                clearValues();
              }}
            >
              clear
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
}
export default AddProblem;

const Wrapper = styled.section`
  border-radius: var(--borderRadius);
  width: 100%;
  background: var(--white);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  h3 {
    margin-top: 0;
  }
  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
    // .btn-container {
    //   margin-top: 0;
    // }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`;
