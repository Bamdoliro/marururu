import type { AchievementLevelsGroup, Subject } from '@/types/form/client';

const getAchievementLevelsGroupList = (subjectList?: Subject[]) => {
  if (!subjectList) return [];
  return subjectList.reduce((acc: AchievementLevelsGroup[], record) => {
    const existingSubject = acc.find(
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
};

export default getAchievementLevelsGroupList;
