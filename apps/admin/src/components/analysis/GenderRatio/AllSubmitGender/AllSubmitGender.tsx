import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import AllSubmitGenderMain from './AllSubmitGenderMain';
import AllSubmitGenderDetail from './AllSubmitGenderDetail';

const AllSubmitGender = () => {
  return (
    <Layout>
      <AllSubmitGenderMain />
      <AllSubmitGenderDetail />
    </Layout>
  );
};

export default AllSubmitGender;

const Layout = styled.div`
  ${flex({
    justifyContent: 'space-between',
    flexDirection: 'row',
  })}
  width: 100%;
  gap: 75px;
`;
