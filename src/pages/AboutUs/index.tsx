import * as styled from "./styles";
import teamIcon from "assets/imgs/team-icon.png";
import {
  GitHubIcon,
  LinkedInIcon,
  NestIcon,
  PostgresIcon,
  ReactIcon,
  TypeScriptIcon,
} from "assets/icons";
import { members } from "types/mocks";
import "aos/dist/aos.css";

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant
            ultrices tellus hac nec lacus dolor convallis pretium. Quis eu eget
            eu ornare varius aliquam congue mi a.
          </p>
        </div>
      </styled.TextBox>
      <styled.TextBox>
        <div>
          <h1>Technologies</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitant
            ultrices tellus hac nec lacus dolor convallis pretium. Quis eu eget
            eu ornare varius aliquam congue mi a.
          </p>
        </div>
      </styled.TextBox>
      <styled.TechIcons>
      
          <NestIcon />
          <ReactIcon />
          <PostgresIcon />
          <TypeScriptIcon />

       
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
                <LinkedInIcon />
                <GitHubIcon />
              </section>
            </styled.MemberDetails>
          </styled.MemberCard>
        ))}
      </styled.TeamCards>
    </styled.AboutUs>
  );
}

export default AboutUs;
