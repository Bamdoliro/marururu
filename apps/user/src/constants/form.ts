// 수정된 코드
export const subjectListInitialData = [
    '국어',
    '사회',
    '역사',
    '도덕',
    '수학',
    '과학',
    '기술가정',
    '영어',
    '체육',
    '음악',
    '미술',
    '정보',
].map((currentSubjectName, index) => ({
    id: index,
    subjectName: currentSubjectName,
    achievementLevel21: 'A',
    achievementLevel22: 'A',
    achievementLevel31: 'A',
}));
