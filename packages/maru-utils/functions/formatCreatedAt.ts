const formatCreatedAt = (createdAt: string) => {
    const date = createdAt.split('T')[0].split('-');

    return `${date[0]}년 ${date[1]}월 ${date[2]}일`;
};

export default formatCreatedAt;
