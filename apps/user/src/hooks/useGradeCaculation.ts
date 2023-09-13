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
import { useFormValueStore, useNewSubjectListValueStore, useSubjectListValueStore } from '@/store';
import { Attendance } from '@/types/form/client';
import { getAchivementLevel } from '@/utils';

enum AchievementScore {
    'A' = 5,
    'B' = 4,
    'C' = 3,
    'D' = 2,
    'E' = 1,
}

type AchievementLevelKey = 'achievementLevel21' | 'achievementLevel22' | 'achievementLevel31';

const useGradeCalculation = () => {
    const form = useFormValueStore();
    const subjectList = useSubjectListValueStore();
    const newSubjectList = useNewSubjectListValueStore();
    const studentSubjectList = subjectList.concat(newSubjectList);

    const getScoreOf = (achievementLevelKey: AchievementLevelKey) => {
        return (
            studentSubjectList.reduce((acc, subject) => {
                const score = subject[achievementLevelKey];

                const subjectName = subject.subjectName;
                if (subjectName === '수학' && score !== null) {
                    return acc + AchievementScore[score] * 2;
                } else {
                    return acc + (score ? AchievementScore[score] : 0);
                }
            }, 0) /
            (studentSubjectList.filter((subject) => subject[achievementLevelKey] !== null).length +
                1)
        );
    };

    const useRegularScore = () => {
        if (form.education.graduationType === 'QUALIFICATION_EXAMINATION') {
            const score =
                SPECIAL_TYPE_DEFAULT_SCORE +
                12 * 2 +
                subjectList.reduce((acc, subject) => {
                    const achievementLevel = subject.score && getAchivementLevel(subject.score);
                    if (achievementLevel) {
                        if (subject.subjectName === '수학') {
                            return acc + AchievementScore[achievementLevel] * 2;
                        }
                        return acc + AchievementScore[achievementLevel];
                    }
                    return acc;
                }, 0) /
                    7;

            return Number(score.toFixed(3));
        }

        const score =
            REGULAR_TYPE_DEFAULT_SCORE +
            4.8 * (getScoreOf('achievementLevel21') + getScoreOf('achievementLevel22')) +
            7.2 * 2 * getScoreOf('achievementLevel31');

        return Number(score.toFixed(3));
    };

    const useSpecialScore = () => {
        if (form.education.graduationType === 'QUALIFICATION_EXAMINATION') {
            const specialScore =
                SPECIAL_TYPE_DEFAULT_SCORE +
                7.2 *
                    2 *
                    (getScoreOf('achievementLevel21') +
                        getScoreOf('achievementLevel22') +
                        getScoreOf('achievementLevel31'));

            return Number(specialScore.toFixed(3));
        }

        const score =
            SPECIAL_TYPE_DEFAULT_SCORE +
            2.88 * (getScoreOf('achievementLevel21') + getScoreOf('achievementLevel22')) +
            4.32 * 2 * getScoreOf('achievementLevel31');

        return Number(score.toFixed(3));
    };

    const useAttendanceScore = () => {
        if (form.education.graduationType === 'QUALIFICATION_EXAMINATION') {
            return DEFAULT_ATTENDANCE_SCORE;
        }

        const getAttendanceCount = (type: keyof Attendance) => {
            return (
                form.grade.attendance1[type] +
                form.grade.attendance2[type] +
                form.grade.attendance3[type]
            );
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

    const useVolunteerScore = () => {
        if (form.education.graduationType === 'QUALIFICATION_EXAMINATION') {
            return DEFAULT_VOLUNTEER_SCORE;
        }

        const totalVolunteerTime =
            form.grade.volunteerTime1 + form.grade.volunteerTime2 + form.grade.volunteerTime3;
        if (totalVolunteerTime < MIN_VOLUNTEER_TIME) return MIN_VOLUNTEER_SCORE;
        else if (totalVolunteerTime > MAX_VOLUNTEER_TIME) return MAX_VOLUNTEER_SCORE;

        return Math.round(MAX_VOLUNTEER_SCORE - (MAX_VOLUNTEER_TIME - totalVolunteerTime) * 0.5);
    };

    const useCertificateScore = () => {
        let certificateScore = 0;
        if (form.grade.certificateList !== null) {
            if (
                form.grade.certificateList.includes('CRAFTSMAN_INFORMATION_PROCESSING') ||
                form.grade.certificateList.includes('CRAFTSMAN_INFORMATION_EQUIPMENT_OPERATION') ||
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

    const regularScore = useRegularScore();
    const specialScore = form.type === 'SPECIAL_ADMISSION' ? useRegularScore() : useSpecialScore();
    const attendanceScore = useAttendanceScore();
    const volunteerScore = useVolunteerScore();
    const certificateScore = useCertificateScore();

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
