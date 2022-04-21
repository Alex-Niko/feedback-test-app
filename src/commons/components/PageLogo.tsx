import * as styled from "./PageLogo.styled";
import { PageLogoIcon } from "../../assets";
import pageLogoImage from "../../assets/images/page-logo.png";

export const PageLogo = () => {
  return (
    <styled.PageLogoWrapper>
      <PageLogoIcon />
      <img src={pageLogoImage} alt="page logo" />
    </styled.PageLogoWrapper>
  );
};
