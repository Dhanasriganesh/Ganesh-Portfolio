import React, { useState } from 'react';
import ProjectCard from '../Cards/ProjectCards';
import styled from 'styled-components';
import _default from '../../themes/default';

export const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 10px 0px 100px 0;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

export const Title = styled.div`
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 32px;
    }
`;

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
`;

export const projects = [
  {
    id: 1,
    title: "MBooks",
    description: "MBooks is a digital library web application.",
    image: "https://dhanushraghava2004.github.io/MBOOKS/image/m1ru22.ico",
    tags: ["HTML", "CSS", "STYLED COMPONENTS", "React Js", "SQL", "Node Js", "Express Js"],
    category: "web app",
    link: "https://dhanushraghava2004.github.io/MBOOKS/"
  },
  {
    id: 2,
    title: "INNOVTUITIONS",
    description: "Developed a comprehensive website for Home Tuitions.",
    image: "https://tuitions-two.vercel.app/static/media/imagee1.3b27310d83071a0be3be.png",
    tags: ["HTML", "CSS", "STYLED COMPONENTS", "React Js", "SQL", "Node Js", "Express Js"],
    category: "web app",
    link: "https://tuitions-two.vercel.app/"
  },
  {
    id: 3,
    title: "SSR CHEM",
    description: "Developed a website for a Chemical Industry.",
    image: "https://ssrchem.vercel.app/static/media/logo.d21094c497be2866076e.png",
    tags: ["React Js", "TailwindCSS", "JSX", "SQL", "Node Js", "Express Js"],
    category: "web app",
    link: "https://ssrchem.vercel.app"
  },
  {
    id: 4,
    title: "GARUDA MOTORS",
    description: "Developed a website for a bike showroom.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkqgi_YDRvWM-21vR3ewjuoZ3MN13achFhDQ&s",
    tags: ["React Js", "TailwindCSS", "JSX", "SQL", "Node Js", "Express Js"],
    category: "web app",
    link: "https://garudamotors.vercel.app"
  },
  {
    id: 5,
    title: "MATCH-YOUR-FIT (In Progress)",
    description: "Developing a fashion shopping platform.",
    image: "https://match-your-fit-fashionn.vercel.app/_next/image?url=%2FImages%2Ffashion1.png&w=384&q=75",
    tags: ["Next Js", "JSX", "TailwindCSS", "Node Js", "Express Js", "SQL"],
    category: "web app",
    link: "https://match-your-fit-fashionn.vercel.app/main"
  }
];

const Projects = () => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.
        </Desc>
        <CardContainer>
          {projects.map((project) => (
            <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer">
              <ProjectCard project={project} />
            </a>
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
