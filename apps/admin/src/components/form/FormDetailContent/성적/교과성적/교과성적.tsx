import { useFormDetailQuery } from '@/services/form/queries';
import getAchievementLevelsGroupList from '@/utils/functions/getAchievementLevelsGroupList';
import styled from 'styled-components';
import 교과성적Header from './교과성적Header/교과성적Header';
import 교과성적Item from './교과성적Item/교과성적Item';

interface Props {
    id: number;
}

const 교과성적 = ({ id }: Props) => {
    const { data: formDetailData } = useFormDetailQuery(id);

    const achievementLevelsGroupList = getAchievementLevelsGroupList(
        formDetailData?.grade.subjectList,
    );

    console.log(achievementLevelsGroupList);

    return (
        <Styled교과성적>
            <교과성적Header />
            {achievementLevelsGroupList.map((group) => (
                <교과성적Item
                    subjectName={group.subjectName}
                    achievementLevel21={group.achievementLevels[0]}
                    achievementLevel22={group.achievementLevels[1]}
                    achievementLevel31={group.achievementLevels[2]}
                />
            ))}
        </Styled교과성적>
    );
};

export default 교과성적;

const Styled교과성적 = styled.div``;
