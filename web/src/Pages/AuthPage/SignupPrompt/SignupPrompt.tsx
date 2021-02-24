import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/dumbComponents/UI/Button/Button";
import DotMorePage from "../../../components/dumbComponents/UI/DotMorePage/DotMorePage";
import Heading from "../../../components/dumbComponents/UI/Heading/Heading";
import ArrowLeft from "../../../components/dumbComponents/UI/Icons/ArrowLeft/ArrowLeft";
import InputField from "../../../components/dumbComponents/UI/InputField/InputField";
import Subtitle from "../../../components/dumbComponents/UI/Subtitle/Subtitle";
import classes from "../AuthPage.module.css";

interface Props {
  backButtonClickedHandler: () => void;
}

const SignupPrompt: React.FC<Props> = (props) => {
  return (
    <>
      <Heading value="Welcome" data-test="auth-page-signup-header" />
      <Subtitle
        value="Let's find your right team in Chula"
        data-test="auth-page-signup-subtitle"
      />
      <div className={classes.InputFieldDiv}>
        <InputField
          data-test="auth-page-signup-input-fields"
          value="Username"
        />
      </div>
      <div className={classes.InputFieldDiv}>
        <InputField
          data-test="auth-page-signup-input-fields"
          value="Student email"
        />
      </div>
      <div className={classes.InputFieldDiv}>
        <InputField
          data-test="auth-page-signup-input-fields"
          value="Password for Chula SSO"
          type="password"
        />
      </div>
      <div className={classes.Button}>
        <Link to="/selectInterests">
          <Button data-test="auth-page-signup-next-button" value="Next" />
        </Link>
      </div>
      <div className={classes.footerNavigation}>
        <DotMorePage data-test="dot-icon" amount={1} />
        <div
          onClick={props.backButtonClickedHandler}
          className={classes.backNavigation}
          data-test="back-navigation"
        >
          <ArrowLeft />
          <div className={classes.divFooterHeading}>
            <Heading value="Back" size="small" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPrompt;
