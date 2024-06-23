import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import FirstRoundPassedMain from './FirstRoundPassedMain';
import FirstRoundPassedDetail from './FirstRoundPassedDetail';

const FirstRoundPassed = () => {
  return (
    <Layout>
      <FirstRoundPassedMain />
      <FirstRoundPassedDetail />
    </Layout>
  );
};

export default FirstRoundPassed;

const Layout = styled.div`
  ${flex({
    justifyContent: 'space-between',
    flexDirection: 'row',
  })}
  width: 100%;
  gap: 75px;
`;
