import type { AchievementLevelsGroup, Subject } from '@/types/form/client';

const getAchievementLevelsGroupList = (subjectList?: Subject[]) => {
  if (!subjectList) return [];

  return subjectList.reduce((acc: AchievementLevelsGroup[], record) => {
    const existingSubject = acc.find(
      (subject) => subject.subjectName === record.subjectName
    );

    let index = 0;
    if (record.grade == 2 && record.semester == 1) index = 0;
    else if (record.grade == 2 && record.semester == 2) index = 1;
    else if (record.grade == 3 && record.semester == 1) index = 2;

    if (existingSubject) {
      existingSubject.achievementLevels[index] = record.achievementLevel;
      existingSubject.grades[index] = record.grade;
      existingSubject.semesters[index] = record.semester;
    } else {
      const newSubject: AchievementLevelsGroup = {
        subjectName: record.subjectName,
        achievementLevels: [],
        grades: [],
        semesters: [],
      };

      newSubject.achievementLevels[index] = record.achievementLevel;
      newSubject.grades[index] = record.grade;
      newSubject.semesters[index] = record.semester;

      acc.push(newSubject);
    }

    return acc;
  }, []);
};

export default getAchievementLevelsGroupList;
