import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import SecondRoundPassedMain from './SecondRoundPassedMain';
import SecondRoundPassedDetail from './SecondRoundPassedDetail';

const FirstRoundPassed = () => {
  return (
    <Layout>
      <SecondRoundPassedMain />
      <SecondRoundPassedDetail />
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
