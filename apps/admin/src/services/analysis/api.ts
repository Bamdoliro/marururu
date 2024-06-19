import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import type {
  GetSchoolOriginRes,
  GetNumberOfApplicantsRes,
  SchoolStatusReq,
} from '@/types/analysis/remote';

export const getNumberOfApplicantsList = async () => {
  const { data } = await maru.get<GetNumberOfApplicantsRes>(
    '/analysis/number-of-applicants',
    authorization()
  );
  return data;
};

export const getSchoolOrigin = async ({ statusList, isBusan, gu }: SchoolStatusReq) => {
  const { data } = await maru.get<GetSchoolOriginRes>(
    `/analysis/school-status?statusList=${statusList.join(
      '&statusList='
    )}&isBusan=${isBusan}&gu=${gu}`,
    authorization()
  );
  return data;
};
