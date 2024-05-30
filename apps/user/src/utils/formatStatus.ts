const statusMap: { [key: string]: string } = {
  APPLICATION_ENDED: '신청 종료됨',
  CLOSED: '종료됨',
  APPLICATION_IN_PROGRESS: '신청 진행 중',
  APPLICATION_NOT_STARTED: '신청 시작 전',
  APPLICATION_EARLY_CLOSED: '신청 조기 종료됨',
};

export const formatStatus = (status: string) => {
  return statusMap[status] || status;
};
