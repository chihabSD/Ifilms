import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import { Container, ButtonLink, Logo, Background } from "./styles/header";
// export default Header = ({ bg = true, children, ...restProps }) => {
//   return bg ? <Background {...Response}>{children}</Background> : children;
// };
export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}
Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};
Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};
