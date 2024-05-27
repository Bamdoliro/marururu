import { styled } from 'styled-components';
import { flex } from '@maru/utils';
import FirstRoundPassedScore from './FirstRoundPassedScore';
import FirstRoundPassedTable from './FirstRoundPassedTable';
import FirstRoundPassedDetail from './FirstRoundPassedDetail';

// FIX : 성적분포 퍼블리싱 (FirstRoundPassed,FirstRoundPassed)
const FirstRoundPassed = () => {
  return (
    <Layout>
      <LeftBox>
        <FirstRoundPassedScore />
        <FirstRoundPassedTable />
      </LeftBox>
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

const LeftBox = styled.div`
  ${flex({ flexDirection: 'column' })}
  width: 100%;
  gap: 100px;
`;
