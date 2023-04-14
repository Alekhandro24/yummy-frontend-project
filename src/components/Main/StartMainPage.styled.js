import styled from 'styled-components';
import plateImgMob from 'images/mainPage/mainpage1x_mob.png';
import plateImgMob2 from 'images/mainPage/mainpage2x_mob.png';
import plateImgTab from 'images/mainPage/mainpage1x_tab.png';
import plateImgTab2 from 'images/mainPage/mainpage2x_tab.png';
import plateImgDesk from 'images/mainPage/mainpage1x_desk.png';
import plateImgDesk2 from 'images/mainPage/mainpage2x_desk.png';

export const ContainerHero = styled.div`
  padding: 0 16px; // прописано в SharedLayout, але чомусь не спрацьовує для ContainerHero
  width: 100%;
  position: absolute;
  left: 0;
  z-index: -1; // нужен ли
  background-image: url(${plateImgMob});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-color: ${p => p.theme.colors.whiteColor};
  display: flex;
  height: ${p => p.theme.spacing(388.5)};
  margin-bottom: ${p => p.theme.spacing(30)};

  @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${plateImgMob2});
    }

  @media (${p => p.theme.media.medium}) {
    padding: 0 32px; // прописано в SharedLayout, -||-

    background-image: url(${plateImgTab});
    height: ${p => p.theme.spacing(320)};
    margin-bottom: ${p => p.theme.spacing(36)};
   
    @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${plateImgTab2});
    }
  }

  @media (${p => p.theme.media.large}) {
    padding: 0 100px; // прописано в SharedLayout, -||-

    background-image: url(${plateImgDesk});
    height: ${p => p.theme.spacing(400)};
    margin-bottom: ${p => p.theme.spacing(50)};
    
    @media screen and (min-device-pixel-ratio: 2),
    screen and (min-resolution: 192dpi),
    (-webkit-min-device-pixel-ratio: 2),
    screen and (min-resolution: 2dppx) {
    background-image: url(${plateImgDesk2});
    }
  }`

  export const ContainerPreviewCategories = styled.div`
  // padding: 0px 16px; // прописано в SharedLayout, але не спрацьовує для WrapPreviewCategories
  padding-top: ${p => p.theme.spacing(419)};
  width: 100%;
  @media screen and (${p => p.theme.media.medium}) {
  // padding: 0 32px; // прописано в SharedLayout, але не спрацьовує для WrapPreviewCategories
  }
  
  @media screen and (${p => p.theme.media.large}) {
    // padding: 0 100px; // прописано в SharedLayout, але не спрацьовує для WrapPreviewCategories
  }`;

export const MainBox = styled.div`
  @media (${p => p.theme.media.medium}) {
    display: flex; 
    margin-right: ${p => p.theme.spacing(184)};
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  @media (min-width: 1153px){
    margin-right: ${p => p.theme.spacing(350)};
  }
  

  @media (${p => p.theme.media.large}) {
    margin-right: ${p => p.theme.spacing(415)};
  }`

export const TextMain = styled.h1`
  margin: 132px 12px 0px 12px;
  color: ${p => p.theme.colors.titleTextColor};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.spacing(30)};
  line-height: ${p => p.theme.spacing(30)};
  display: flex;
  text-align: center;
  letter-spacing: -0.005em;

  @media (${p => p.theme.media.medium}) {
    margin: 204px 0 0px ;
    font-size: ${p => p.theme.spacing(36)};
    line-height: ${p => p.theme.spacing(36)};
    text-align: left;
  }

  @media (${p => p.theme.media.large}) {
    font-size: ${p => p.theme.spacing(50)};
    line-height: ${p => p.theme.spacing(50)};
  }`

export const Selected = styled.span`
  color: ${p => p.theme.colors.greenTextColor};
  font-weight: ${p => p.theme.fontWeights.regular};;
  font-size: ${p => p.theme.spacing(30)};
  line-height: ${p => p.theme.spacing(30)};
  text-align: center;
  letter-spacing: -0.005em;
  @media (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.spacing(36)};
    line-height: ${p => p.theme.spacing(36)};
  }

  @media (${p => p.theme.media.large}) {
    font-size: ${p => p.theme.spacing(50)};
    line-height: ${p => p.theme.spacing(50)};
  }`

export const TextSub = styled.p`
  margin: 14px 40px 157px 40px;
  color: ${p => p.theme.colors.secondaryDark};
  font-weight: ${p => p.theme.fontWeights.regular};;
  font-size: ${p => p.theme.spacing(7)};
  line-height: ${p => p.theme.spacing(9)};
  text-align: center;
  letter-spacing: ;
  & br {
    display: none;
  }

  @media (${p => p.theme.media.medium}) {
    margin: 24px 0 32px;
    font-size: ${p => p.theme.spacing(7)};
    line-height: ${p => p.theme.spacing(9)};
    text-align: left;
    & br {
    display: flex;
    }
  }

  @media (${p => p.theme.media.large}) {
    margin: 14px 0 50px;
    font-size: ${p => p.theme.spacing(9)};
    line-height: ${p => p.theme.spacing(12)}; 
  }`
