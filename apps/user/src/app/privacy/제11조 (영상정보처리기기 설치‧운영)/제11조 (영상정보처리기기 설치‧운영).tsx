/* eslint-disable no-irregular-whitespace */
import { Text, Row, Column } from '@maru/ui';
import { color } from '@maru/design-token';
import { IconTerms } from '@maru/icon';
import {
  CameraLocation,
  CameraResponsibilityTeacher,
  CameraTime,
} from '@/components/privacy';

const 제11조 = () => {
  return (
    <>
      <Column gap={6}>
        <Row gap={3} alignItems="center">
          <IconTerms />
          <Text fontType="H4" color={color.gray900}>
            제11조 (영상정보처리기기 설치‧운영)
          </Text>
        </Row>
        <Text fontType="p3" color={color.gray900}>
          ① 우리학교는 초·중등교육법 제30조의8 제2항 및 개인정보 보호법 제25조제1항에 따라
          다음과 같은 목적으로 영상정보처리기기를 설치·운영합니다.
          <br />
          &nbsp; • 학교폭력 예방, 범죄 예방(초·중등교육법 제30조제8항)
          <br />
          &nbsp; • 시설 안전 및 화재 예방, 차량도난 및 파손방지(주차장에 설치하는 경우)
          <br />② 설치 대수, 설치 위치, 촬영 범위는 다음과 같습니다.
        </Text>
        <CameraLocation />
        <Text fontType="p3" color={color.gray900}>
          ③ 정보주체의 영상정보를 보호하고 개인영상정보와 관련한 불만을 처리하기 위하여
          아래와 같이 관리책임자와 접근권한자를 두고 있습니다.
        </Text>
        <CameraResponsibilityTeacher />
        <Text fontType="p3" color={color.gray900}>
          ④ 영상정보 촬영시간, 보관기간, 보관장소는 다음과 같습니다.
        </Text>
        <CameraTime />
        <Text fontType="p3" color={color.gray900}>
          ⑤ 개인영상정보의 목적 외 이용, 제3자 제공, 파기, 열람 등 요구에 관한 사항을
          기록·관리하고 보관기간 만료 시 복원이 불가능한 방법으로 영구 삭제(출력물의 경우
          파<br /> &nbsp;&nbsp;&nbsp;&nbsp;쇄 또는 소각)합니다.
          <br />
          ⑥ 
          <Text fontType="p3" color={color.maruDefault}>
            (업체와 위탁계약을 수립한 경우에만)
          </Text>
        </Text>
        <Text fontType="p3" color={color.gray900}>
           우리학교는 영상정보처리기기 설치 및 관리 등을 위탁하고 있으며, 관계 법령에 따라
          위탁계약 시 개인정보가 안전하게 관리될
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;수 있도록 필요한 사항을 규정하고 있습니다. 수탁업체는
          처리방침 제3조에서 확인하실 수 있습니다.
          <br />⑦ 개인영상정보의 확인 방법 및 장소는 다음과 같습니다.
          <br />
          &nbsp;&nbsp;1. 확인 방법 : 개인영상정보 보호담당자에게 개인영상정보 열람존재확인
          청구서를 제출하시면 내부 심의 후 공개로 결정될 시 확인하실 수 있습니다.
          <br />
          &nbsp;&nbsp;2. 확인 장소 :{' '}
          <Text fontType="p3" color={color.maruDefault}>
            경비실, 전산실
          </Text>
          <br />⑧ 개인영상정보의 열람 또는 존재 확인 및 삭제를 원할 경우, 개인영상정보
          담당자에게 요구할 수 있습니다. 단, 정보주체 자신이 촬영된 개인영상정보이거나
          명백히 정<br />
          &nbsp;&nbsp;&nbsp;&nbsp;보주체의 급박한 생명, 신체, 재산의 이익을 위해 필요한
          경우에 한정됩니다. 개인영상정보의 열람 또는 존재확인·삭제 요구 시, 지체없이
          필요한 조치를 하겠습니다.
          <br />⑨ 처리되는 영상정보는 암호화 조치 등을 통하여 안전하게 관리되고 있으며,
          관리적 대책으로 접근 권한 차등부여, 위·변조 방지를 위한 개인영상정보의 생성
          일시, 열람
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;시 열람 목적·열람자·열람 일시 등을 기록·관리하고
          있습니다. 이 외에도 개인영상정보의 안전한 물리적 보관을 위해 잠금장치를
          설치·운영하고 있습니다.
        </Text>
      </Column>
    </>
  );
};

export default 제11조;
