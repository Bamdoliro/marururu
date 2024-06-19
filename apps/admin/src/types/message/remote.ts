export interface PostMessageReq {
  title: string;
  text: string;
  status: string;
}

export interface PostMeisterMessageReq {
  title: string;
  text: string;
  formType: string;
  isChangeToRegular: boolean;
}
