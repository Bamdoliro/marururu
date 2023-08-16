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
} from '@/constants/service/form';
import {
    useAttendanceInfoState,
    useCertificateListInfoState,
    useStudentSubjectListState,
    useVolunteerInfoState,
} from '@/store/form/성적입력.state';
import { useFormTypeState } from '@/store/form/전형선택.state';
import { useEducationInfoState } from '@/store/form/출신학교및학력.state';
import { Attendance, StudentSubject } from '@/types/form/client';

const ACHIEVEMENT_SCORE = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,
    E: 1,
} as const;

export const useGradeScore = () => {
    const { subjectList, newSubjectList } = useStudentSubjectListState();

    const allSubjectList = subjectList.concat(newSubjectList);

    const getScoreOf = (achievementLevel: keyof Omit<StudentSubject, 'subjectName'>) => {
        return (
            allSubjectList.reduce((acc, subject) => {
                const score = subject[achievementLevel];
                return acc + (score ? ACHIEVEMENT_SCORE[score] : 0);
            }, 0) / allSubjectList.filter((subject) => subject[achievementLevel] !== null).length
        );
    };

    const {
        educationInfo: { graduationType },
    } = useEducationInfoState();

    const calculateRegularScore = () => {
        if (graduationType === 'QUALIFICATION_EXAMINATION') {
            const score =
                REGULAR_TYPE_DEFAULT_SCORE +
                24 *
                    (getScoreOf('achievementLevel21') +
                        getScoreOf('achievementLevel22') +
                        getScoreOf('achievementLevel31'));

            return Number(score.toFixed(3));
        }

        const score =
            REGULAR_TYPE_DEFAULT_SCORE +
            4.8 * (getScoreOf('achievementLevel21') + getScoreOf('achievementLevel22')) +
            14.4 * getScoreOf('achievementLevel31');

        return Number(score.toFixed(3));
    };

    const calculateSpecialScore = () => {
        if (graduationType === 'QUALIFICATION_EXAMINATION') {
            const score =
                SPECIAL_TYPE_DEFAULT_SCORE +
                7.2 *
                    2 *
                    (getScoreOf('achievementLevel21') +
                        getScoreOf('achievementLevel22') +
                        getScoreOf('achievementLevel31'));

            return Number(score.toFixed(3));
        }

        const score =
            SPECIAL_TYPE_DEFAULT_SCORE +
            2.88 * (getScoreOf('achievementLevel21') + getScoreOf('achievementLevel22')) +
            4.32 * 2 * getScoreOf('achievementLevel31');

        return Number(score.toFixed(3));
    };

    const { formType } = useFormTypeState();

    const regularScore = calculateRegularScore();
    const specialScore =
        formType === 'SPECIAL_ADMISSION' ? calculateRegularScore() : calculateSpecialScore();

    return {
        regularScore,
        specialScore,
    };
};

export const useAttendanceScore = () => {
    const { attendanceInfo } = useAttendanceInfoState();

    const {
        educationInfo: { graduationType },
    } = useEducationInfoState();

    if (graduationType === 'QUALIFICATION_EXAMINATION') {
        return { attendanceScore: DEFAULT_ATTENDANCE_SCORE };
    }

    const getAttendanceCount = (type: keyof Attendance) => {
        return (
            attendanceInfo.attendance1[type] +
            attendanceInfo.attendance2[type] +
            attendanceInfo.attendance3[type]
        );
    };

    const absenceCount =
        getAttendanceCount('absenceCount') +
        (getAttendanceCount('latenessCount') +
            getAttendanceCount('earlyLeaveCount') +
            getAttendanceCount('classAbsenceCount')) /
            3;

    const score =
        absenceCount > MAX_ABSENCE_COUNT
            ? MIN_ATTENDANCE_SCORE
            : MAX_ATTENDANCE_SCORE - absenceCount;

    return { attendanceScore: Math.round(score) };
};

export const useVolunteerScore = () => {
    const {
        volunteerInfo: { volunteerTime1, volunteerTime2, volunteerTime3 },
    } = useVolunteerInfoState();

    const {
        educationInfo: { graduationType },
    } = useEducationInfoState();

    if (graduationType === 'QUALIFICATION_EXAMINATION') {
        return { volunteerScore: DEFAULT_VOLUNTEER_SCORE };
    }

    const totalVolunteerTime = volunteerTime1 + volunteerTime2 + volunteerTime3;

    if (totalVolunteerTime < MIN_VOLUNTEER_TIME) {
        return { volunteerScore: MIN_VOLUNTEER_SCORE };
    }

    if (totalVolunteerTime > MAX_VOLUNTEER_TIME) {
        return { volunteerScore: MAX_VOLUNTEER_SCORE };
    }

    return {
        volunteerScore: Math.round(
            MAX_VOLUNTEER_SCORE - (MAX_VOLUNTEER_TIME - totalVolunteerTime) * 0.5,
        ),
    };
};

export const useCertificateScore = () => {
    const { certificateListInfo } = useCertificateListInfoState();
    let certificateScore = 0;

    if (certificateListInfo.includes('정보처리기능사, 정보기기운용기능사, 전자계산기기능사'))
        certificateScore += 4;
    if (certificateListInfo.includes('컴퓨터활용능력 1급')) certificateScore += 3;
    if (certificateListInfo.includes('컴퓨터활용능력 2급')) certificateScore += 2;
    if (certificateListInfo.includes('컴퓨터활용능력 3급')) certificateScore += 1;

    return { certificateScore };
};
