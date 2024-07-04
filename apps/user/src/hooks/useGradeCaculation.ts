import {
  DEFAULT_ATTENDANCE_SCORE,
  DEFAULT_VOLUNTEER_SCORE,
  MAX_ABSENCE_COUNT,
  MAX_ATTENDANCE_SCORE,
  MAX_VOLUNTEER_SCORE,
  MAX_VOLUNTEER_TIME,
  MIN_ATTENDANCE_SCORE,
  MIN_VOLUNTEER_SCORE,
  MIN_VOLUNTEER_TIME,
  REGULAR_TYPE_DEFAULT_SCORE,
  SPECIAL_TYPE_DEFAULT_SCORE,
} from '@/constants/form/constant';
import { useFormValueStore } from '@/store';
import { getAchivementLevel } from '@/utils';

enum AchievementScore {
  'A' = 5,
  'B' = 4,
  'C' = 3,
  'D' = 2,
  'E' = 1,
}

type AchievementLevelKey =
  | 'achievementLevel21'
  | 'achievementLevel22'
  | 'achievementLevel31';
type AttenedanceKey =
  | 'absenceCount'
  | 'latenessCount'
  | 'earlyLeaveCount'
  | 'classAbsenceCount';

const useGradeCalculation = () => {
  const form = useFormValueStore();

  const getScoreOf = (achievementLevelKey: AchievementLevelKey) => {
    const scoreTotal = form.grade.subjectList?.reduce((acc, subject) => {
      const achievementLevel = subject[achievementLevelKey];
      const subjectName = subject.subjectName;
      if (subjectName === '수학' && achievementLevel !== null) {
        return acc + AchievementScore[achievementLevel] * 2;
      } else {
        return acc + (achievementLevel ? AchievementScore[achievementLevel] : 0);
      }
    }, 0);
    const scoreLength =
      form.grade.subjectList?.filter((subject) => subject[achievementLevelKey] !== null)
        .length + 1;

    return scoreTotal / scoreLength;
  };

  const calculateRegularScore = () => {
    if (form.education.graduationType === 'QUALIFICATION_EXAMINATION') {
      const regularTotal = form.grade.subjectList.reduce((acc, subject) => {
        const achievementLevel = subject.score && getAchivementLevel(subject.score);

        if (achievementLevel) {
          if (subject.subjectName === '수학') {
            return acc + AchievementScore[achievementLevel] * 2;
          }
          return acc + AchievementScore[achievementLevel];
        }
        return acc;
      }, 0);
      const regularLength = form.grade.subjectList.length + 1;
      const regularScore =
        REGULAR_TYPE_DEFAULT_SCORE + (12 * 2 * regularTotal) / regularLength;

      return Number(regularScore.toFixed(3));
    }

    const regularScore =
      REGULAR_TYPE_DEFAULT_SCORE +
      4.8 * (getScoreOf('achievementLevel21') + getScoreOf('achievementLevel22')) +
      7.2 * 2 * getScoreOf('achievementLevel31');

    return Number(regularScore.toFixed(3));
  };

  const calculateSpecialScore = () => {
    if (form.education.graduationType === 'QUALIFICATION_EXAMINATION') {
      return 0;
    }

    const specialScore =
      SPECIAL_TYPE_DEFAULT_SCORE +
      2.88 * (getScoreOf('achievementLevel21') + getScoreOf('achievementLevel22')) +
      4.32 * 2 * getScoreOf('achievementLevel31');

    return Number(specialScore.toFixed(3));
  };

  const calculateAttendanceScore = () => {
    if (form.education.graduationType === 'QUALIFICATION_EXAMINATION') {
      return DEFAULT_ATTENDANCE_SCORE;
    }

    const getAttendanceCount = (type: AttenedanceKey) => {
      const attendanceCount =
        form.grade.attendance1[type] +
        form.grade.attendance2[type] +
        form.grade.attendance3[type];

      return attendanceCount;
    };

    const absenceCount =
      getAttendanceCount('absenceCount') +
      (getAttendanceCount('latenessCount') +
        getAttendanceCount('earlyLeaveCount') +
        getAttendanceCount('classAbsenceCount')) /
        3;

    const attendanceScore =
      absenceCount > MAX_ABSENCE_COUNT
        ? MIN_ATTENDANCE_SCORE
        : MAX_ATTENDANCE_SCORE - absenceCount;

    return Math.round(attendanceScore);
  };

  const calculateVolunteerScore = () => {
    if (form.education.graduationType === 'QUALIFICATION_EXAMINATION') {
      return DEFAULT_VOLUNTEER_SCORE;
    }

    const totalVolunteerTime =
      form.grade.volunteerTime1 + form.grade.volunteerTime2 + form.grade.volunteerTime3;
    if (totalVolunteerTime < MIN_VOLUNTEER_TIME) return MIN_VOLUNTEER_SCORE;
    if (totalVolunteerTime > MAX_VOLUNTEER_TIME) return MAX_VOLUNTEER_SCORE;

    const volunteerTime =
      MAX_VOLUNTEER_SCORE - (MAX_VOLUNTEER_TIME - totalVolunteerTime) * 0.5;

    return Math.round(volunteerTime);
  };

  const calculateCertificateScore = () => {
    let certificateScore = 0;
    if (form.grade.certificateList !== null) {
      if (
        form.grade.certificateList.includes('CRAFTSMAN_INFORMATION_PROCESSING') ||
        form.grade.certificateList.includes(
          'CRAFTSMAN_INFORMATION_EQUIPMENT_OPERATION'
        ) ||
        form.grade.certificateList.includes('CRAFTSMAN_COMPUTER')
      )
        certificateScore += 4;

      if (form.grade.certificateList.includes('COMPUTER_SPECIALIST_LEVEL_1'))
        certificateScore += 3;
      else if (form.grade.certificateList.includes('COMPUTER_SPECIALIST_LEVEL_2'))
        certificateScore += 2;
      else if (form.grade.certificateList.includes('COMPUTER_SPECIALIST_LEVEL_3'))
        certificateScore += 1;
    }

    return Math.min(certificateScore, 4);
  };

  const regularScore = calculateRegularScore();
  const specialScore =
    form.type === 'SPECIAL_ADMISSION' ? calculateRegularScore() : calculateSpecialScore();
  const attendanceScore = calculateAttendanceScore();
  const volunteerScore = calculateVolunteerScore();
  const certificateScore = calculateCertificateScore();

  const regularTotalScore = (
    regularScore +
    attendanceScore +
    volunteerScore +
    certificateScore
  ).toFixed(3);
  const specialTotalScore = (
    specialScore +
    attendanceScore +
    volunteerScore +
    certificateScore
  ).toFixed(3);

  return {
    regularScore,
    specialScore,
    attendanceScore,
    volunteerScore,
    certificateScore,
    regularTotalScore,
    specialTotalScore,
  };
};

export default useGradeCalculation;
