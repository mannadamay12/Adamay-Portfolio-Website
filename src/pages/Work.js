import React, { useRef, useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import {
  Wrapper,
  NumberList,
  Current,
  SliderContainer,
  SlideWrapper,
  LinkWrap,
  Overlay,
  ContentWrap,
  CaseTitle,
  Button,
  SlickSwitch,
  Section,
  Spanner,
  Subtitle,
  HomeLink,
  TextLink
} from "../styles/Work.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Work = ({ history }) => {
  const [carouselSet, setCarousel] = useState(false);
  const [currentSlide, setSlide] = useState(1);
  const [animateHome, setAnimeHome] = useState(false);
  const [toCase, setCase] = useState("");
  const [coord, setCoords] = useState();
  const carousel = useRef(null);

  useEffect(() => {
    animateHome &&
      setTimeout(() => {
        history.push("/");
      }, 400);
  }, [animateHome, history]);

  useEffect(() => {
    toCase &&
      setTimeout(() => {
        history.push(toCase);
      }, 1000);
  }, [toCase, history]);

  if (!carouselSet) {
    setCarousel(true);
  }

  const settings = {
    accessibility: true,
    arrows: false,
    dots: false,
    draggable: true,
    swipe: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (old, next) => setSlide(next + 1)
  };

  const PreviousIcon = require("../assets/icons/left-arrow.png");
  const NextIcon = require("../assets/icons/right-arrow.png");

  const CaseOne = require("../assets/cases/notefy-hero.png");
  const CaseTwo = require("../assets/cases/financify-hero.png");

  const handleCaseSwap = (e, uri) =>
    e.x < coord + 15 && e.x > coord - 15 && setCase(uri);

  return (
    <>
      <Wrapper>
        <HomeLink onClick={() => setAnimeHome(true)} animating={animateHome}>
          <TextLink>Home</TextLink>
        </HomeLink>
        <Section>
          <SliderContainer {...settings} ref={carousel} toCase={!!toCase}>
            <div>
              <SlideWrapper>
                <LinkWrap coverImage={CaseOne} active={toCase === "/"}>
                  <Overlay
                    active={!!toCase}
                    onMouseDown={e => setCoords(e.nativeEvent.x)}
                    onMouseUp={e => handleCaseSwap(e.nativeEvent, "/")}
                  >
                    <ContentWrap>
                      <CaseTitle>
                        Notefy
                        <Spanner />
                      </CaseTitle>
                      <Subtitle>Frontend</Subtitle>
                      <Subtitle>Servatom</Subtitle>
                    </ContentWrap>
                  </Overlay>
                </LinkWrap>
              </SlideWrapper>
            </div>
            <div>
              <SlideWrapper>
                <LinkWrap coverImage={CaseTwo}>
                  <Overlay>
                    <ContentWrap>
                      <CaseTitle>
                        Financify
                        <Spanner />
                      </CaseTitle>
                      <Subtitle>Frontend . Back-End</Subtitle>
                      <Subtitle>Zeta Hacks</Subtitle>
                    </ContentWrap>
                  </Overlay>
                </LinkWrap>
              </SlideWrapper>
            </div>
          </SliderContainer>
          <NumberList navigating={!!toCase}>
            <SlickSwitch onClick={() => carousel.current.slickPrev()}>
              <Button src={PreviousIcon} alt="Previous case" />
            </SlickSwitch>
            <Current>
              <p>0{currentSlide} / 02</p>
            </Current>
            <SlickSwitch onClick={() => carousel.current.slickNext()}>
              <Button src={NextIcon} alt="Next case" />
            </SlickSwitch>
          </NumberList>
        </Section>
      </Wrapper>
    </>
  );
};

export default withRouter(Work);
