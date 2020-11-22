import styled from 'styled-components';

const HeroContaier = styled.div`
  width: 100%;
  position: relative;
`;

const HeroImage = styled.img`
  width: 100%;
  max-height: 280px;
  object-fit: cover;
`;

const HeroLayer = styled.div`
  background-color: rgba(57, 62, 70, 0.8);
  height: 280px;
  width: 100%;
  position: absolute;
`;

const HeroTitle = styled.h2`
  position: absolute;
  color: #fafafa;
  margin-left: 14px;
  bottom: 14px;
  font-size: 28px;
`;

const Content = styled.div`
  margin: 42px;
`;

const CardContent = styled.div`
  margin: 14px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const CardTitle = styled.h4`
  font-size: 18px;
  text-align: center;
`;

export {
  HeroContaier,
  HeroImage,
  HeroTitle,
  HeroLayer,
  Content,
  CardTitle,
  CardContent,
};
