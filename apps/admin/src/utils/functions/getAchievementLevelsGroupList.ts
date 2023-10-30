import { AchievementLevelsGroup, Subject } from '@/types/form/client';

/**
 * Subject[] 타입을 AchievementLevelsGroup[] 타입으로 변환시켜주는 함수입니다.
 * @param subjectList
 * @returns
 */
function getAchievementLevelsGroupList(subjectList?: Subject[]) {
  if (!subjectList) return [];
  return subjectList.reduce((acc: AchievementLevelsGroup[], record) => {
    let existingSubject = acc.find(
      (subject) => subject.subjectName === record.subjectName
    );

    if (existingSubject) {
      existingSubject.achievementLevels.push(record.achievementLevel);
    } else {
      acc.push({
        subjectName: record.subjectName,
        achievementLevels: [record.achievementLevel],
      });
    }

    return acc;
  }, []);
}

export default getAchievementLevelsGroupList;
