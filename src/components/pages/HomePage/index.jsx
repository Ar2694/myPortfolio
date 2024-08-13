
import GitHubIcon from '@mui/icons-material/GitHub';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import { Stack } from "@mui/material";
import CloudIcon from '@mui/icons-material/Cloud';
import PageContainer from "components/shared/PageContainer";
import HomeAccordion from "components/pages/HomePage/components/HomeAccordion";
import HomeButton from "components/pages/HomePage/components/HomeButton";
import HomeAvatar from 'components/pages/HomePage/components/HomeAvatar';
import { SkillCardContent } from './components/HomeCard/components/SkillCard';
import { ProjectCardContent } from './components/HomeCard/components/ProjectCard';
import { DiagramCardContent } from './components/HomeCard/components/DiagramCard';
import { RestCardContent } from './components/HomeCard/components/RestCard';
import HomeSocial from './components/HomeSocial';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import DescriptionIcon from '@mui/icons-material/Description';

export default function HomePage() {
  return (
    <PageContainer className="home-page">
      {/* Avatar Container */}
      <HomeAvatar />
      {/* Social Container */}
      <HomeSocial />
      <Stack className="content-container" spacing={4} >
        {/* Skill Accordian */}
        <HomeAccordion icon={<ManageAccountsIcon />} text="Skills">
          <SkillCardContent />
        </HomeAccordion>

        {/* Projects Accordian */}
        <HomeAccordion icon={<FolderSharedIcon />} text="Projects">
          <ProjectCardContent />
        </HomeAccordion>

        {/* Diagrams Accordian */}
        <HomeAccordion icon={<AccountTreeIcon />} text="Diagrams">
          <DiagramCardContent />
        </HomeAccordion>

        {/* Restful videos Accordian */}
        <HomeAccordion icon={<CloudIcon />} text="Restful Videos">
          <RestCardContent />
        </HomeAccordion>

        <HomeButton startIcon={<DescriptionIcon />} endIcon={<ArrowOutwardIcon />} text="My Resume" />
      </Stack>
    </PageContainer>
  )
}
