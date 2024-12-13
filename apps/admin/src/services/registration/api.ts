import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import type { GetRegistrationListRes } from '@/types/registration/remote';
import type { GetFormListRes } from '@/types/form/remote';

export const getRegistrationList = async () => {
  const { data } = await maru.get<GetFormListRes>(
    '/form?status=ENTERED',
    authorization()
  );

  const idList = data.dataList.map((item) => item.id).join(',');

  const { data: resultData } = await maru.get<GetRegistrationListRes>(
    `/form/admission-and-pledge-url?id-list=${encodeURIComponent(idList)}`,
    authorization()
  );

  return resultData;
};
