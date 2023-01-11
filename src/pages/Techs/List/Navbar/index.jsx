import { SiLinkedin, SiInstagram, SiYoutube, SiDiscord } from "react-icons/si";

import { Header, Title, MediaContainer, Link } from "./styles";

const media = [
  {
    id: 1,
    link: "https://www.linkedin.com/company/wazana-dev/",
    icon: SiLinkedin,
  },
  {
    id: 2,
    link: "https://www.instagram.com/wazana.dev/",
    icon: SiInstagram,
  },
  {
    id: 3,
    link: "https://www.youtube.com/channel/UCVE9-HO_GzLtDK4IGKVSYXA",
    icon: SiYoutube,
  },
  {
    id: 4,
    link: "https://discord.com/invite/MF6F4t8eQw",
    icon: SiDiscord,
  },
];

const Navbar = () => {
  const renderLinks = () =>
    media.map(({ id, link, icon: Icon }) => (
      <Link key={id} href={link} target="_blank" rel="noopener noreferrer">
        <Icon size={20} color="#FFFFFF" />
      </Link>
    ));

  return (
    <Header>
      <Title>The Next Dev</Title>
      <MediaContainer>{renderLinks()}</MediaContainer>
    </Header>
  );
};

export default Navbar;
