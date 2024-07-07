import { SwitchCase } from '@toss/react';
import 교과성적 from './교과성적';
import 출결상황 from './출결상황';
import { use성적입력StepStore } from '@/store';
import 봉사시간 from './봉사시간';
import 자격증 from './자격증';

const 성적입력 = () => {
  const [성적입력Step] = use성적입력StepStore();

  return (
    <SwitchCase
      value={성적입력Step}
      caseBy={{
        교과성적: <교과성적 />,
        출결상황: <출결상황 />,
        봉사시간: <봉사시간 />,
        자격증: <자격증 />,
      }}
      defaultComponent={<교과성적 />}
    />
  );
};

export default 성적입력;
