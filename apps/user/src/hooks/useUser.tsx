import { ROUTES } from '@/constants/common/constant';
import { FORM } from '@/constants/form/initial';
import { useSaveFormQuery } from '@/services/form/queries';
import { useUserQuery } from '@/services/user/queries';
import {
    useFormValueStore,
    useIsSaveFormLoadedStore,
    useSetFormStore,
    useSetNewSubjectStore,
    useSetSubjectStore,
    useUserStore,
} from '@/store';
import { color } from '@maru/theme';
import { Column, Confirm, Text } from '@maru/ui';
import { useOverlay } from '@toss/use-overlay';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const useUser = () => {
    const router = useRouter();
    const pathName = usePathname();
    const overlay = useOverlay();
    const [user, setUser] = useUserStore();
    const form = useFormValueStore();
    const setForm = useSetFormStore();
    const setSubjectList = useSetSubjectStore();
    const setNewtSubjectList = useSetNewSubjectStore();
    const { data: userData } = useUserQuery();
    const { data: saveFormData } = useSaveFormQuery();
    const [isSaveFormLoaded, setIsSaveFormLoaded] = useIsSaveFormLoadedStore();

    useEffect(() => {
        if (userData) setUser(userData);
    }, [setUser, userData]);

    // 원서 저장 불러오기
    useEffect(() => {
        if (saveFormData && !isSaveFormLoaded) {
            console.log('save data: ');
            console.log(saveFormData);
            setIsSaveFormLoaded(true);
            setForm({
                applicant: saveFormData.applicant || FORM.applicant,
                parent: saveFormData.parent || FORM.document,
                education: saveFormData.education || FORM.education,
                grade: saveFormData.grade || FORM.grade,
                document: saveFormData.document || FORM.document,
                type: saveFormData.type || FORM.type,
            });
            if (saveFormData.grade.subjectList) {
                setSubjectList(
                    saveFormData.grade.subjectList.slice(0, 12).map((subject, index) => ({
                        ...subject,
                        id: index,
                    })),
                );
                setNewtSubjectList(
                    saveFormData.grade.subjectList.slice(12).map((subject, index) => ({
                        ...subject,
                        id: index,
                    })),
                );
            }
        }
    }, [saveFormData]);

    // useEffect(() => {
    //     console.log(form);
    // }, [form]);

    return { user, isLogined: !!userData };
};

export default useUser;
