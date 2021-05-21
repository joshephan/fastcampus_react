import React from "react";
import "./../style/Button.scss";
import styled from "styled-components";

const MySection = styled.section`
  font-size: 24px;
  background: red;
`;

const MyDiv = styled.div`
  width: 100%;
  height: 20vh;
  
`;

export default function Button() {
  return (
    <div>
      <MyDiv className="container">
        <MySection></MySection>
        <MySection></MySection>
        <MySection></MySection>
        <MySection></MySection>
      </MyDiv>
    </div>
  );
}
