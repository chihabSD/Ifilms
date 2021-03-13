import React from "react";
import Header from "../components/header";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Frame>
        <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
        <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
      </Header.Frame>
      {children}
    </Header>
  );
}
// import React from "react";

//
//
// import logo from "../logo.svg";
// const HeaderContainer = ({ children }) => {
//   return (
//     <Header>
//       <Header.Frame />
//       <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
//       <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign in</Header.ButtonLink>
//       {children}
//     </Header>
//   );
// };

export default HeaderContainer;
