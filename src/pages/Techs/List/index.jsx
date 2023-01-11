import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../../../components/Card';
import { techs } from '../../../fakeDB';

import Navbar from './Navbar';
import {
  PreTitle,
  Title,
  Description,
  TechsContainer,
  Loading,
} from './styles';

const List = () => {
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  const getTechs = () => {
    setTimeout(() => {
      setData(techs);
    }, 300);
  };

  useEffect(() => {
    getTechs();
  }, []);

  const handleTechDetail = (id) => {
    navigate(`/technology/${id}`);
  };

  const renderCards = () =>
    data.map((tech) => (
      <Card key={tech.id} onClick={handleTechDetail} {...tech} />
    ));

  const isLoading = !data;

  return (
    <>
      <Navbar />
      <section>
        <PreTitle>W A Z A N A</PreTitle>
        <Title>Technologies</Title>
        <Description>
          Some of the technologies used in this training.
        </Description>
        <TechsContainer>
          {isLoading ? (
            <Loading>Loading the best techs for u...</Loading>
          ) : (
            renderCards()
          )}
        </TechsContainer>
      </section>
    </>
  );
};

export default List;
