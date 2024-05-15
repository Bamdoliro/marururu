import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import FinalRoundPassedScore from './FinalRoundPassedScore';
import FinalRoundPassedTable from './FinalRoundPassedTable';

// FIX : 성적분포 퍼블리싱 (FirstRoundPassed,SecondRoundPassed)
const FinalRoundPassed = () => {
  return (
    <Layout>
      <LeftBox>
        <FinalRoundPassedScore />
      </LeftBox>
      <FinalRoundPassedTable />
    </Layout>
  );
};

export default FinalRoundPassed;

const Layout = styled.div`
  ${flex({ flexDirection: 'row' })}
  width: 100%;
  height: 100vh;
`;

const LeftBox = styled.div`
  ${flex({ justifyContent: 'space-between', flexDirection: 'column' })}
  width: 100%;
  height: 100vh;
`;
