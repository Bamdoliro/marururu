import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import FinalRoundPassedMain from './FinalRoundPassedMain';
import FinalRoundPassedDetail from './FinalRoundPassedDetail';

const FinalRoundPassed = () => {
  return (
    <Layout>
      <FinalRoundPassedMain />
      <FinalRoundPassedDetail />
    </Layout>
  );
};

export default FinalRoundPassed;

const Layout = styled.div`
  ${flex({
    justifyContent: 'space-between',
    flexDirection: 'row',
  })}
  width: 100%;
  gap: 75px;
`;
