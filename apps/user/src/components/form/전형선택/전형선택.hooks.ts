import { ChangeEventHandler, useState } from 'react';
import { styled } from 'styled-components';

const useHandleAdmissionsChange = () => {
    const [selectedAdmissions, setSelectedAdmissions] = useState({
        입학전형선택: '',
        특별전형선택: '',
        기회균등전형선택: '',
        사회다양성전형선택: '',
    });

    const handleAdmissionsChange: ChangeEventHandler<HTMLInputElement> = ({
        target: { name, value },
    }) => {
        console.log(name);
        switch (name) {
            case '특별전형선택':
                setSelectedAdmissions({
                    ...selectedAdmissions,
                    특별전형선택: value,
                    기회균등전형선택: '',
                    사회다양성전형선택: '',
                });
                break;
            case '입학전형선택':
                console.log(name);
                setSelectedAdmissions({
                    입학전형선택: value,
                    특별전형선택: '',
                    기회균등전형선택: '',
                    사회다양성전형선택: '',
                });
                break;
            default:
                setSelectedAdmissions({
                    ...selectedAdmissions,
                    [name]: value,
                });
        }
    };

    return { selectedAdmissions, handleAdmissionsChange };
};

export default useHandleAdmissionsChange;
