import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import SecondRoundPassedScore from './SecondRoundPassedScore';
import SecondRoundPassedTable from './SecondRoundPassedTable';
import SecondRoundPassedDetail from './SecondRoundPassedDetail';

const FirstRoundPassed = () => {
  return (
    <Layout>
      <LeftBox>
        <SecondRoundPassedScore />
        <SecondRoundPassedTable />
      </LeftBox>
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

const LeftBox = styled.div`
  ${flex({ flexDirection: 'column' })}
  width: 100%;
  gap: 100px;
`;
