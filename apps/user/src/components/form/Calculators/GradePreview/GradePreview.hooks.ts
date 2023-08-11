import { useStudentSubjectListState } from '@/app/form/성적입력/성적입력.state';
import { useFormTypeState } from '@/app/form/전형선택/전형선택.state';
import { useEducationInfoState } from '@/app/form/출신학교및학력/출신학교및학력.state';
import { REGULAR_TYPE_DEFAULT_SCORE, SPECIAL_TYPE_DEFAULT_SCORE } from '@/constants/form';
import { StudentSubject } from '@/types/form/client';

const achievementScore = {
    A: 5,
    B: 4,
    C: 3,
    D: 2,
    E: 1,
} as const;

export const useGradeScoreData = () => {
    const { subjectList, newSubjectList } = useStudentSubjectListState();

    const allSubjectList = subjectList.concat(newSubjectList);

    const getScoreOf = (achievementLevel: keyof Omit<StudentSubject, 'subjectName'>) => {
        return (
            allSubjectList.reduce((acc, subject) => {
                const score = subject[achievementLevel];
                return acc + (score ? achievementScore[score] : 0);
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
