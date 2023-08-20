const formatCreatedAt = (createdAt: string) => {
    const date = new Date(createdAt);

    return `${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일`;
};

export default formatCreatedAt;
