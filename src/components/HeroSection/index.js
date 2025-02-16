import React from 'react'
import styled from "styled-components";
import {Bio} from "../../data/constants";
import Typewriter from "typewriter-effect";
import {Title, TextLoop, Span, SubTitle} from './Index1.styles';
import {HeroBg, ResumeButton} from './Index1.styles';
import HeroImg from "../../images/myimg.jpg";
import HeroBgAnimation from "../HeroBgAnimation";

const HeroContainer = styled.div`
  background: ${({ theme }) => theme.card_light};
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media screen and (max-width: 960px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 640px) {
    order: 2;
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const HeroRightContainer = styled.div`
  width: 100%;
  display: flex;
  order: 2;
  justify-content: end;
  gap: 12px;
  @media screen and (max-width: 960px) {
    order: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Image = styled.img`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    max-width: 400px;
    max-height: 400px;
  }

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

// Styled Button for Startup Journey
const StartupButton = styled.a`
  display: inline-block;
  background: linear-gradient(225deg, #742dd2 0%, #a832d1 100%);
  padding: 14px 22px;
  margin-top: 12px;
  border-radius: 12px;
  text-decoration: none;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    background: linear-gradient(225deg, #a832d1 0%, #742dd2 100%);
    opacity: 0.9;
  }
`;

const Hero = () => {
  return (
    <div id="about">
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hi, I am <br />
              {Bio.name}
            </Title>
            <TextLoop>
              With extensive
              <Span>
                <Typewriter
                  options={{
                    
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>

            {/* Startup Journey Button */}
            <StartupButton href="http://innovimagine.com/" target="_blank">
              My Startup Journey
            </StartupButton>

          </HeroLeftContainer>
          <HeroRightContainer>
            <Image src={HeroImg} alt="Hero" />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  )
}

export default Hero;
