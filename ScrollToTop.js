import React from "react";
import styled from "styled-components";
import { BsArrowUp } from "react-icons/bs";

function ScrollToTop() {
  //Get the button
  var mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = () => scrollFunction();

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  return (
    <>
      <Button onClick={topFunction} id="myBtn" title="Go to top">
        <BsArrowUp size={30} />
      </Button>
    </>
  );
}

export default ScrollToTop;

const Button = styled.button`
  display: none;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  font-size: 0px;
  border: none;
  outline: none;
  background-color: #ff7100;
  color: #fff;
  cursor: pointer;
  padding: 3px 3px;
  border-radius: 4px;
  :hover {
    background-color: #ff8b3e;
  }
`;
