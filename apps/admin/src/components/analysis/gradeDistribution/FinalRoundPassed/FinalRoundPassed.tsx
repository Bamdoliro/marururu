import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import FinalRoundPassedScore from './FinalRoundPassedScore';
import FinalRoundPassedTable from './FinalRoundPassedTable';
import FinalRoundPassedDetail from './FinalRoundPassedDetail';

// FIX : 성적분포 퍼블리싱 (FirstRoundPassed,SecondRoundPassed)
const FinalRoundPassed = () => {
  return (
    <Layout>
      <LeftBox>
        <FinalRoundPassedScore />
        <FinalRoundPassedTable />
      </LeftBox>
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

const LeftBox = styled.div`
  ${flex({ justifyContent: 'space-between', flexDirection: 'column' })}
  width: 100%;
`;
