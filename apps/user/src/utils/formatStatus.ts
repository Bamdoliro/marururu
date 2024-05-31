const statusMap: { [key: string]: string } = {
  APPLICATION_ENDED: '신청 마감',
  CLOSED: '종료',
  APPLICATION_IN_PROGRESS: '진행 중',
  APPLICATION_NOT_STARTED: '준비 중',
  APPLICATION_EARLY_CLOSED: '조기 마감',
};

export const formatStatus = (status: string) => {
  return statusMap[status] || status;
};
