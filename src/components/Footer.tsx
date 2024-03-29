import React from "react";
import "css/footer.css";
import styled from "styled-components";
import { MobileView, isBrowser, isIPad13 } from "react-device-detect";

function Footer() {
  return (
    <div style={{ overflowX: "hidden" }}>
      {isIPad13 || isBrowser ? (
        /*
        <div className='footerContainer'>
          {isIPad13
            ? <div className='ipadCopyRight'>Copyright(c)2022 삼시세끼 All rights reserved.</div>
            : <div className='copyright'>Copyright(c)2022 삼시세끼 All rights reserved.</div>
          }
            <div className='proposalBtn'><MicIcon src='img/Mic.png'/><a target="_blank" href="https://www.instagram.com/samshisaekki/">제안하기</a></div>
        </div>
        : null
        */
        <FooterContainer>
          <FooterContents>
            <FooterLogoImg src="img/gray_logo.png" />
            <FooterTitle>대설교메</FooterTitle>

            <FollowUs>
              <span style={{ fontSize: "24px", fontWeight: "700" }}>
                Follow Us
              </span>

              <Links>
                <a
                  target="_blank"
                  href="https://www.instagram.com/samshisaekki/"
                >
                  <img
                    src="img/instagram_logo.png"
                    style={{ width: "25px", height: "25px", float: "left" }}
                  />
                  <span
                    style={{
                      marginLeft: "15px",
                      fontSize: "24px",
                      fontWeight: "400",
                      float: "left",
                    }}
                  >
                    Instagram
                  </span>
                </a>

                <a target="_blank" href="https://github.com/samshiSekki">
                  <img
                    src="img/github_logo.png"
                    style={{
                      width: "25px",
                      height: "25px",
                      float: "left",
                      marginLeft: "45px",
                    }}
                  />
                  <span
                    style={{
                      marginLeft: "15px",
                      fontSize: "24px",
                      fontWeight: "400",
                    }}
                  >
                    Github
                  </span>
                </a>
              </Links>
              <Copyright>
                Copyright(c)2022 삼시세끼 All rights reserved.
              </Copyright>
              <div>
                <MembersPoistion>Plan</MembersPoistion>
                <MembersName>이지영</MembersName>

                <MembersPoistion style={{ marginLeft: "67px" }}>
                  Design
                </MembersPoistion>
                <MembersName>구지현</MembersName>

                <MembersPoistion style={{ marginLeft: "67px" }}>
                  Front-end
                </MembersPoistion>
                <MembersName>송재민 황남주</MembersName>

                <MembersPoistion style={{ marginLeft: "67px" }}>
                  Back-end
                </MembersPoistion>
                <MembersName>송은주 오유정</MembersName>
              </div>
            </FollowUs>
          </FooterContents>
        </FooterContainer>
      ) : null}

      {!isIPad13 && !isBrowser ? (
        <MobileView>
          <MobileFooterContainer>
            <MobileFooterContents>
              <MobileFooterLogoImg src="img/white_logo.png" />
              <MobileFooterTitle>대설교메</MobileFooterTitle>
              <MobileFollowUs>
                <span style={{ fontSize: "10px", fontWeight: "700" }}>
                  Follow Us
                </span>
                <a
                  target="_blank"
                  href="https://www.instagram.com/samshisaekki/"
                >
                  <MobileFollowLink>
                    <img
                      src="img/instagram_logo.png"
                      style={{ width: "10px", height: "10px", float: "left" }}
                    />
                    <span style={{ marginLeft: "4px" }}>Instagram</span>
                  </MobileFollowLink>
                </a>
                <a target="_blank" href="https://github.com/samshiSekki">
                  <MobileFollowLink>
                    <img
                      src="img/github_logo.png"
                      style={{ width: "10px", height: "10px", float: "left" }}
                    />
                    <span style={{ marginLeft: "4px" }}>Github</span>
                  </MobileFollowLink>
                </a>
                <CopyrightMobile>
                  Copyright(c)2022 삼시세끼 All rights reserved.
                </CopyrightMobile>
                <div>
                  <MobileMemberPosition>Plan</MobileMemberPosition>
                  <MobileMemberName>이지영</MobileMemberName>

                  <MobileMemberPosition style={{ marginLeft: "12px" }}>
                    Design
                  </MobileMemberPosition>
                  <MobileMemberName>구지현</MobileMemberName>
                  <br />
                  <MobileMemberPosition style={{}}>
                    Front-end
                  </MobileMemberPosition>
                  <MobileMemberName>송재민</MobileMemberName>
                  <MobileMemberName>황남주</MobileMemberName>

                  <MobileMemberPosition style={{ marginLeft: "12px" }}>
                    Back-end
                  </MobileMemberPosition>
                  <MobileMemberName>송은주</MobileMemberName>
                  <MobileMemberName>오유정</MobileMemberName>
                </div>
              </MobileFollowUs>
            </MobileFooterContents>
          </MobileFooterContainer>
        </MobileView>
      ) : null}
    </div>
  );
}

export default Footer;

let MobileFooterContainer: any = styled.div`
  width: 100%;
  height: 255px;
  background: #241e19;
  display: flex;
  justify-content: center;
`;

let MobileFooterContents: any = styled.div`
  width: 335px;
  height: 98px;
  margin-top: 37px;
  justify-content: center;
  text-align: left;
`;
let MobileFooterLogoImg: any = styled.img`
  float: left;
  width: 15px;
  height: 15px;
`;
let MobileFooterTitle: any = styled.div`
  float: left;
  margin-left: 5.12px;
  font-weight: 800;
  font-size: 15px;
  line-height: 16px;
  text-align: center;

  color: #ffffff;

  opacity: 0.8;
`;

let MobileFollowUs: any = styled.div`
  margin-top: 35px;
  color: white;
`;
let MobileFollowLink: any = styled.div`
  margin-top: 7px;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  color: #ffffff;
`;

let CopyrightMobile: any = styled.div`
  font-weight: 400;
  font-size: 8px;
  line-height: 10px;
  color: #c2c2c2;
  margin-top: 17px;
  margin-bottom: 4px;
`;

let MobileMemberPosition: any = styled.span`
  font-weight: 700;
  font-size: 8px;
  line-height: 6px;
  color: #ffffff;
`;
let MobileMemberName: any = styled.span`
  font-weight: 400;
  font-size: 8px;
  line-height: 6px;
  color: #ffffff;
  margin-left: 4px;
`;

let FooterContainer: any = styled.div`
  width: 100vw;
  height: 484px;
  background: #241e19;
  margin-top: 117px;
  display: flex;
`;

let FooterContents: any = styled.div`
  padding-left: 12.5vw;
  padding-top: 92px;
`;

let FooterLogoImg: any = styled.img`
  float: left;
  width: 35.21px;
  height: 34px;
`;

let FooterTitle: any = styled.div`
  float: left;

  height: 34px;
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 34px;
  color: #ffffff;
  opacity: 0.8;
  margin-left: 14.55px;
`;

let FollowUs: any = styled.div`
  margin-top: 74px;
  color: #ffffff;
  text-align: left;
`;

let Links: any = styled.div`
  margin-top: 20px;
`;

let Copyright: any = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 27px;

  color: #c2c2c2;
  margin-top: 58px;
  margin-bottom: 20px;
`;

let MembersPoistion: any = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
  float: left;
`;

let MembersName: any = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
  float: left;
  margin-left: 10px;
`;
