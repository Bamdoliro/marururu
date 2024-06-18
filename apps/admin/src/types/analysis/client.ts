export interface Analysis {
  id: number;
  title: string;
  school: string;
  schoolOrigin: string;
  schoolLocation: string;
}

export type AreaCategory =
  | 'BUSAN'
  | 'OHTER_AREA'
  | 'JUNG_GU'
  | 'SEO_GU'
  | 'SAHA_GU'
  | 'HAEUNDAE_GU'
  | 'DONG_GU'
  | 'YOUNGDO_GU'
  | 'GANGSEO_GU'
  | 'BUSAN_JING_GU'
  | 'YEONJA_GU'
  | 'DONGNAE_GU'
  | 'SUYOUND_GU'
  | 'NANM_GU'
  | 'SASANG_GU'
  | 'BUG_GU'
  | 'GIJANG_GU'
  | 'BUSAN_ALL'
  | 'SEOUL'
  | 'GYEONGGI_DO'
  | 'GANGWON_DO'
  | 'DAEGU'
  | 'CHUNCHEONGBUK_DO'
  | 'INCHEON'
  | 'CHUNCHEONGNAM_DO'
  | 'DAEJEON'
  | 'JUNLABUK_DO'
  | 'CHUNJU'
  | 'JUNLANAM_DO'
  | 'ULSAN'
  | 'SEJONG'
  | 'GYEONGSANGNAM_DO'
  | 'JEJU';

export type FormType =
  | 'REGULAR'
  | 'MEISTER_TALENT'
  | 'NATIONAL_BASIC_LIVING'
  | 'NEAR_POVERTY'
  | 'NATIONAL_VETERANS'
  | 'ONE_PARENT'
  | 'FROM_NORTH_KOREA'
  | 'MULTICULTURAL'
  | 'TEEN_HOUSEHOLDER'
  | 'MULTI_CHILDREN'
  | 'FARMING_AND_FISHING'
  | 'SPECIAL_ADMISSION'
  | 'NATIONAL_VETERANS_EDUCATION';

export interface NumberOfApplicants {
  type: FormType;
  count: number;
}
