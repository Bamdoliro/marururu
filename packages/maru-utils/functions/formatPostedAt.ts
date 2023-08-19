const formatPostedAt = (postedAt: string) => {
    const date = new Date(postedAt);

    return `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}`;
};

export default formatPostedAt;
