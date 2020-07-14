import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  EditButton,
  LocationIcon,
  CakeIcon,
  Followage
} from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Willian Silva</h1>
        <h2>@WillSilva</h2>

        <p>
          Developer at <a href="https://ugupa.com.br/">@ugupaNetwork</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, SP
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 17 de janeiro de 1997
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;
