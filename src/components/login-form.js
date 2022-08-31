import styled from "styled-components";
import ComponentWrapperStyled from "../common/component-wrapper";
import background from "../assets/assets-mobile/mobile-background.png";
import backgroundImage from "../assets/assets-mobile/mobile-image.png";

const LoginForm = () => {
  return (
    <ComponentWrapperStyled>
      <LoginFormStyled className="login-form">
        <BackgroundImage className="login-form-picture"></BackgroundImage>
        <form className="login-form-control"></form>
      </LoginFormStyled>
    </ComponentWrapperStyled>
  );
};

export default LoginForm;

const LoginFormStyled = styled.section`
  @media screen and (max-width: 1919px) {
    background: transparent url(${background}) 0% 0% no-repeat padding-box;
    top: 0px;
    left: 0px;
    width: 375px;
    height: 812px;
    opacity: 1;
  }
`;

const BackgroundImage = styled.article`
  @media screen and (max-width: 1919px) {
    background: transparent url(${backgroundImage}) 0% 0% no-repeat padding-box;
    top: 0px;
    left: -1px;
    width: 376px;
    height: 440px;
    opacity: 1;
  }
`;
