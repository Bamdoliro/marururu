import { ChangeEventHandler, useState } from 'react';
import { styled } from 'styled-components';

const useHandleAdmissionsChange = () => {
    const [admissions, setAdmissions] = useState({
        입학전형선택: '',
        특별전형선택: '',
        기회균등전형선택: '',
        사회다양성전형선택: '',
    });

    const handleAdmissions: ChangeEventHandler<HTMLInputElement> = ({
        target: { name, value },
    }) => {
        console.log(name);
        switch (name) {
            case '특별전형선택':
                setAdmissions({
                    ...admissions,
                    특별전형선택: value,
                    기회균등전형선택: '',
                    사회다양성전형선택: '',
                });
                break;
            case '입학전형선택':
                console.log(name);
                setAdmissions({
                    입학전형선택: value,
                    특별전형선택: '',
                    기회균등전형선택: '',
                    사회다양성전형선택: '',
                });
                break;
            default:
                setAdmissions({
                    ...admissions,
                    [name]: value,
                });
        }
    };

    return { admissions, handleAdmissions };
};

export default useHandleAdmissionsChange;
