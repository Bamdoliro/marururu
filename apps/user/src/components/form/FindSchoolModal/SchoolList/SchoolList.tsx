import { School } from '@/types/form/client';
import { IconCheck } from '@maru/icon';
import { color, font } from '@maru/theme';
import { Dispatch, SetStateAction } from 'react';
import styled, { css } from 'styled-components';

interface PropsType {
    schoolListData: School[];
    selectedSchool: School;
    setSelectedSchool: Dispatch<SetStateAction<School>>;
}

const SchoolList = ({ schoolListData, selectedSchool, setSelectedSchool }: PropsType) => {
    return (
        <StyledSchoolList>
            {schoolListData.map(({ name, location, code }: School) => (
                <SchoolItem
                    key={code}
                    selected={selectedSchool.code === code}
                    onClick={() => setSelectedSchool({ name, location, code })}>
                    <SchoolName>
                        {selectedSchool.code === code && (
                            <IconCheck color={color.maruDefault} width={24} height={24} />
                        )}
                        {name}
                    </SchoolName>
                    <SchoolRegion>{location}</SchoolRegion>
                </SchoolItem>
            ))}
        </StyledSchoolList>
    );
};

export default SchoolList;

const StyledSchoolList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    height: 225px;
    overflow: auto;
`;

const SchoolItem = styled.div<{ selected: boolean }>`
    display: flex;
    height: 56px;
    padding: 15px 16px;
    border-radius: 6px;
    background: ${color.gray50};
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    ${({ selected }) =>
        selected &&
        css`
            padding: 15px 15px;
            border: 1px solid ${color.maruDefault};
        `}
`;

const SchoolName = styled.p`
    ${font.p2}
    color: ${color.gray900};
    display: flex;
    align-items: center;
    gap: 4px;
`;

const SchoolRegion = styled.p`
    ${font.caption}
    color: ${color.gray600};
`;
