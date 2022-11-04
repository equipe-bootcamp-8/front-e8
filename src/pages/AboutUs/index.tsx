import * as styled from "./styles";
import teamIcon from "assets/imgs/team-icon.png";
import "aos/dist/aos.css";
import {
  GitHubIcon,
  LinkedInIcon,
  NestIcon,
  PostgresIcon,
  PrismaIcon,
  ReactIcon,
  TypeScriptIcon,
} from "assets/icons";
import { members } from "types/mocks";

function AboutUs() {
  return (
    <styled.AboutUs>
      <styled.Header>
        <div>
          <h1>About us</h1>
          <h1>A simple, comprehensive and fast platform</h1>
        </div>
        <img src={teamIcon} alt="team-icon" />
      </styled.Header>
      <styled.TextBox>
        <div>
          <h1>The Project</h1>
          <p>
            The scope of the project consists
            of managing products and one of the main objectives of the team when
            developing it was to create a simple and easy-to-use tool. Counting
            on a listing section of all products from other users and the
            administrator himself, through filtering tools, each product with a
            page with details and information about it. The settings section was
            designed in order to maintain the company's identity, as well as to
            convey an aspect of a table of products and categories. part of the
            user, which also has an account settings section.
          </p>
        </div>
      </styled.TextBox>
      <styled.TextBox>
        <div>
          <h1>Technologies</h1>
          <p>
            In order to meet the mandatory technologies for development, the
            Back-end used NestTS, PRISMA and PostgresSql, the team used Swagger
            for documentation and route management. Still, ReactTS was operated
            on the Front-end and, in order to facilitate the organization and
            styling of the project, Styled-components was applied, in order to
            optimize the development. The technologies were applied aiming at
            what is most current in the market and mainly, the reuse of code by
            the company.
          </p>
        </div>
      </styled.TextBox>
      <styled.TechIcons>
        <NestIcon />
        <ReactIcon />
        <PostgresIcon />
        <TypeScriptIcon />
        <PrismaIcon />
      </styled.TechIcons>
      <styled.TeamCards>
        <h1>Our team</h1>
        {members.map((member) => (
          <styled.MemberCard>
            <styled.MemberPhoto>
              <img src={member.image} alt="dev-photo" />
            </styled.MemberPhoto>
            <styled.MemberDetails>
              <h2>{member.name}</h2>
              <h2>{member.role}</h2>
              <h3>{member.stack}</h3>
              <p>{member.bio}</p>

              <section>
                <a target="_blank" href={member.linkedin}>
                  <LinkedInIcon />
                </a>
                <a target="_blank" href={member.github}>
                  <GitHubIcon />
                </a>
              </section>
            </styled.MemberDetails>
          </styled.MemberCard>
        ))}
      </styled.TeamCards>
    </styled.AboutUs>
  );
}

export default AboutUs;
