import { ChangeEventHandler, useEffect, useState } from 'react';

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

const useInput = () => {
    const [educationInfo, setEducationInfo] = useState<EducationInfo>({
        graduationType: '',
        graduationYear: '',
        schoolName: '',
        schoolLocation: '',
        schoolCode: '',
        teacherName: '',
        teacherPhoneNumber: '',
        teacherMobilePhoneNumber: '',
    });

    const handleEducationInfoDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { name, value } = e.target;
        setEducationInfo((prev) => ({ ...prev, [name]: value }));
    };

    useEffect(() => console.log(educationInfo), [educationInfo]);

    return { educationInfo, setEducationInfo, handleEducationInfoDataChange };
};

export default useInput;
