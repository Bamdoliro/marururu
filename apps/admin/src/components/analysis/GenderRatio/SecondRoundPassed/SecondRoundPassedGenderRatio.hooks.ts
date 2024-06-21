import { useGenderRatioListQuery } from '@/services/analysis/queries';
import type { FormTypeMainCategory } from '@/types/analysis/client';

const useGenderRatioData = (mainCategories: FormTypeMainCategory[]) => {
  const totals = {
    overallMale: 0,
    overallFemale: 0,
    categories: {} as { [key in FormTypeMainCategory]: { male: number; female: number } },
  };

  mainCategories.forEach((category: FormTypeMainCategory) => {
    const { data: dataList } = useGenderRatioListQuery({
      statusList: ['FAILED', 'PASSED'],
      mainCategory: category,
    });

    const categoryTotals = {
      male: 0,
      female: 0,
    };

    dataList?.forEach((item) => {
      categoryTotals.male += item.busanMale ?? 0;
      categoryTotals.female += item.busanFemale ?? 0;
      categoryTotals.male += item.otherLocationMale ?? 0;
      categoryTotals.female += item.otherLocationFemale ?? 0;
    });

    totals.categories[category] = categoryTotals;
    totals.overallMale += categoryTotals.male;
    totals.overallFemale += categoryTotals.female;
  });

  return totals;
};

export default useGenderRatioData;
