import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import SecondRoundPassedScore from './SecondRoundPassedScore';
import SecondRoundPassedTable from './SecondRoundPassedTable';
import SecondRoundPassedDetail from './SecondRoundPassedDetail';

// FIX : 성적분포 퍼블리싱 (SecondRoundPassed,SecondRoundPassed)
const SecondRoundPassed = () => {
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

export default SecondRoundPassed;

const Layout = styled.div`
  ${flex({
    justifyContent: 'space-between',
    flexDirection: 'row',
  })}
  width: 100%;
  gap: 75px;
`;

const LeftBox = styled.div`
  ${flex({ justifyContent: 'space-between', flexDirection: 'column' })}
  width: 100%;
`;
