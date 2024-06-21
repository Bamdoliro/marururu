import type { FormTypeMainCategory, GenderRatioCategory } from '@/types/analysis/client';
import { useGenderRatioListQuery } from '@/services/analysis/queries';

const useAdmissionData = (
  mainCategory: FormTypeMainCategory,
  dataCategories: GenderRatioCategory[]
) => {
  const { data: dataList } = useGenderRatioListQuery({
    statusList: ['FAILED', 'PASSED'],
    mainCategory,
  });

  type DataAccumulator = {
    [key in
      | `${GenderRatioCategory}BusanMale`
      | `${GenderRatioCategory}BusanFemale`
      | `${GenderRatioCategory}OtherLocationMale`
      | `${GenderRatioCategory}OtherLocationFemale`]: number;
  };

  const initialData: DataAccumulator = dataCategories.reduce(
    (acc, category) => ({
      ...acc,
      [`${category}BusanMale`]: 0,
      [`${category}BusanFemale`]: 0,
      [`${category}OtherLocationMale`]: 0,
      [`${category}OtherLocationFemale`]: 0,
    }),
    {} as DataAccumulator
  );

  const result = (dataList ?? []).reduce((acc, data) => {
    dataCategories.forEach((category) => {
      if (data.category === category) {
        acc[`${category}BusanMale`] = data.busanMale ?? 0;
        acc[`${category}BusanFemale`] = data.busanFemale ?? 0;
        acc[`${category}OtherLocationMale`] = data.otherLocationMale ?? 0;
        acc[`${category}OtherLocationFemale`] = data.otherLocationFemale ?? 0;
      }
    });
    return acc;
  }, initialData);

  return result;
};
export default useAdmissionData;
