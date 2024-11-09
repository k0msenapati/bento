import { RevealBento } from './components/Bento/RevealBento';
import { Helmet } from "react-helmet";
import profileData from './data/profile.json';
import { Profile } from './components/Bento/types';

const profile: Profile = profileData;

function App() {
  const { name, avatar, location, email, contact, header, about, socials } = profile;
  return (
    <>
      <Helmet>
        <title>bento</title>
      </Helmet>

      <RevealBento
        name={name}
        avatar={avatar}
        location={location}
        email={email}
        contact={contact}
        header={header}
        about={about}
        socials={socials}
      />
    </>
  )
}

export default App;
