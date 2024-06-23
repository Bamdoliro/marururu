import { useEffect, useState } from 'react';
import { useGenderRatioListQuery } from '@/services/analysis/queries';
import type {
  FormTypeMainCategory,
  GenderRatioCategory,
  GenderRatio,
  AnalysisApplicantType,
} from '@/types/analysis/client';

const useAdmissionData = (
  statusList: AnalysisApplicantType[],
  mainCategory: FormTypeMainCategory
) => {
  const { data: dataList } = useGenderRatioListQuery({
    statusList,
    mainCategory,
  });

  const [data, setData] = useState<{
    overallMale: number;
    overallFemale: number;
    categories: {
      [key in GenderRatioCategory]?: {
        busanMale: number;
        busanFemale: number;
        otherLocationMale: number;
        otherLocationFemale: number;
      };
    };
  }>({
    overallMale: 0,
    overallFemale: 0,
    categories: {},
  });

  useEffect(() => {
    if (!dataList) {
      return;
    }
    const newData = dataList.reduce(
      (acc, item: GenderRatio) => {
        const category = item.category as GenderRatioCategory;
        if (!acc.categories[category]) {
          acc.categories[category] = {
            busanMale: 0,
            busanFemale: 0,
            otherLocationMale: 0,
            otherLocationFemale: 0,
          };
        }
        acc.categories[category]!.busanMale += item.busanMale ?? 0;
        acc.categories[category]!.busanFemale += item.busanFemale ?? 0;
        acc.categories[category]!.otherLocationMale += item.otherLocationMale ?? 0;
        acc.categories[category]!.otherLocationFemale += item.otherLocationFemale ?? 0;

        return acc;
      },
      {
        overallMale: 0,
        overallFemale: 0,
        categories: {} as {
          [key in GenderRatioCategory]?: {
            busanMale: number;
            busanFemale: number;
            otherLocationMale: number;
            otherLocationFemale: number;
          };
        },
      }
    );

    newData.overallMale = Object.values(newData.categories).reduce(
      (acc, category) => acc + category!.busanMale + category!.otherLocationMale,
      0
    );
    newData.overallFemale = Object.values(newData.categories).reduce(
      (acc, category) => acc + category!.busanFemale + category!.otherLocationFemale,
      0
    );

    setData(newData);
  }, [dataList]);

  return { data };
};

export default useAdmissionData;
