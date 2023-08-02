import { EducationInfo } from '@/types/form/client';
import { atom, useRecoilState } from 'recoil';

const educationInfoAtomState = atom<EducationInfo>({
    key: 'education-info',
    default: {
        graduationType: '',
        graduationYear: '',
        schoolName: '',
        schoolLocation: '',
        schoolCode: '',
        teacherName: '',
        teacherPhoneNumber: '',
        teacherMobilePhoneNumber: '',
    },
});

export const useEducationInfoState = () => {
    const [educationInfo, setEducationInfo] = useRecoilState(educationInfoAtomState);

    return { educationInfo, setEducationInfo };
};
