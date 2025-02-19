import styled from "styled-components";

export const Section = styled.section`
  padding: 80px 13% 70px;
  background-color: #ebedef;
`;

export const Footer = styled.footer`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, auto));


  .fune{
  margin-top: 15px
  }
   
  .footer-content h4 {
    color: #128c95;
    margin-bottom: 1.5rem;
    font-size: 20px;
  }

  .footer-content li {
    margin-bottom: 16px;
    list-style: none;
  }
  .footer-content li a {
    color:rgb(23, 162, 172);
    text-decoration: none;
  }
  .footer-content li a:hover {
    color: #128c95;
  }

  .footer-content2 h4 {
    color: #128c95;
    margin-bottom: 1.5rem;
    font-size: 20px;
  }
  .footer-content2 li {
    margin-bottom: 16px;
    list-style: none;
  }
  .footer-content2 li a {
    color: #128c95;
    text-decoration: none;
  }
  .footer-content p {
    color: #128c95;
    font-size: 16px;
    line-height: 30px;
    margin: 20px 0;
  }

  .icons a {
    display: inline-block;
    font-size: 40px;
    color: #128c95;
    margin-right: 17px;
  }
  .icons a:hover {
    display: inline-block;
    font-size: 40px;
    color:rgb(11, 69, 73);
    margin-right: 17px;
  }

  .footer-content3 h4 {
    color: #128c95;
    margin-bottom: 1.5rem;
    font-size: 20px;
  }
  .footer-content3 li {
    margin-bottom: 16px;
    list-style: none;
  }
  .footer-content3 li a {
    color: #128c95;
    text-decoration: none;
  }
`;
