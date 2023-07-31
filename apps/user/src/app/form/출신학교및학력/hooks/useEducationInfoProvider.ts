import { atom, useRecoilState } from 'recoil';

export interface EducationInfo {
    graduationType: 'EXPECTED' | 'GRADUATED' | 'QUALIFICATION_EXAMINATION' | '';
    graduationYear: string;
    schoolName: string;
    schoolLocation: string;
    schoolCode: string;
    teacherName: string;
    teacherPhoneNumber: string;
    teacherMobilePhoneNumber: string;
}

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

export const useEducationInfoProvider = () => {
    const [educationInfo, setEducationInfo] = useRecoilState(educationInfoAtomState);

    return { educationInfo, setEducationInfo };
};
