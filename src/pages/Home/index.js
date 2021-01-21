import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

import ProjectSection from "../../parts/Project";
import DetailSection from "../../parts/Detail";

import "./Home.scss";

const StyledHomepage = styled.div`
  background-color: rgb(20, 22, 46);
  height: 100vh;
  width: 100%;
`;

const LoadingHomepage = styled.div`
  background-color: rgb(33, 40, 43);
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WrapContent = styled.div`
  padding-left: 100px;
  height: 100%;

  @media (max-width: 768px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;

export default function Home() {
  const [dataProject, setDataProject] = useState([]);
  const [dataTodolist, setTodolist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        await axios
          .get("http://demo0129790.mockable.io/getProject")
          .then((res) => {
            setDataProject(res.data);
          });
        await axios
          .get("http://demo0129790.mockable.io/getTodolist")
          .then((res) => {
            setTodolist(res.data);
          });
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return isLoading ? (
    <LoadingHomepage>
      <p className="text-white">Loading</p>
    </LoadingHomepage>
  ) : (
    <StyledHomepage>
      <WrapContent>
        <div className="homepage row justify-content-center align-items-center">
          <div className="col-md-6 d-flex justify-content-start align-items-start h-100">
            <ProjectSection data={dataProject} />
          </div>
          <div className="detail-section col-md-6 h-100">
            <DetailSection data={dataTodolist} />
          </div>
        </div>
      </WrapContent>
    </StyledHomepage>
  );
}
