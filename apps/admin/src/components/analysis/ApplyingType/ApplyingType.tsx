import { flex } from '@maru/utils';
import ApplyingTypeTotal from './ApplyingTypeItem/ApplyingTypeTotal';
import ApplyingTypeDetail from './ApplyingTypeItem/ApplyingTypeDetail';
import ApplyingTypePercent from './ApplyingTypeItem/ApplyingTypePercent';
import styled from 'styled-components';

const GradeDistribution = () => {
  return (
    <Layout>
      <LeftBox>
        <ApplyingTypePercent />
        <ApplyingTypeTotal />
      </LeftBox>
      <ApplyingTypeDetail />
    </Layout>
  );
};

export default GradeDistribution;

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
