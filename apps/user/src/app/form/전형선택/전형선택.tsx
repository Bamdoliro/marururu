import { FormController } from '@/components/form';
import { FormLayout } from '@/layouts';
import { useFormStore } from '@/store';
import { Column, Radio, Row, Td, Th } from '@maru/ui';
import { flex } from '@maru/utils';
import { useEffect } from 'react';
import { styled } from 'styled-components';
import { useCTAButton, useInput } from './전형선택.hooks';

const 전형선택 = () => {
  const [form, setForm] = useFormStore();
  const { handleFormTypeChange } = useInput();
  const { handleMoveNextStep, handleMovePreviousStep } = useCTAButton();

  const isQualificationExamination =
    form.education.graduationType === 'QUALIFICATION_EXAMINATION';

  useEffect(() => {
    if (form.education.graduationType === 'QUALIFICATION_EXAMINATION') {
      // 검정고시를 선택하였는데 특별전형으로 지원하였을때 필터링
      if (form.type !== 'REGULAR') {
        alert(
          '서류상으로 검정고시 합격자는 특별전형 지원이 불가능해요. 일반전형으로 지원해주세요!'
        );
        setForm((prev) => ({ ...prev, type: 'REGULAR' }));
      }
    }
  }, [form.education.graduationType, form.type, setForm]);

  return (
    <FormLayout title="전형 선택">
      <Table>
        <Row>
          <Th width="calc(736px/3)" height={56} borderTopLeftRadius={12}>
            전형
          </Th>
          <Th width="calc(736px/3)" height={56}>
            유형
          </Th>
          <Th width="calc(736px/3)" height={56}>
            구분
          </Th>
          <Th width={80} height={56} borderTopRightRadius={12}>
            선택
          </Th>
        </Row>
        <Row>
          <Td width="calc(736px/3)" height={56} isBottom={true} isLeft={true}>
            일반 전형
          </Td>
          <Td width="calc(736px/3)" height={56} isBottom={true}>
            {null}
          </Td>
          <Td width="calc(736px/3)" height={56} isBottom={true}>
            {null}
          </Td>
          <Td width={80} height={56} isBottom={true} isRight={true}>
            <Radio
              name="type"
              value="REGULAR"
              onChange={handleFormTypeChange}
              checked={form.type === 'REGULAR'}
            />
          </Td>
        </Row>
        <Row>
          <Td
            width="calc(736px/3)"
            height={560}
            isTop={true}
            isLeft={true}
            isBottom={true}
          >
            특별 전형
          </Td>
          <Column>
            <Row>
              <Td width="calc(736px/3)" height={56} isBottom={true} isTop={true}>
                마이스터인재 전형
              </Td>
              <Td width="calc(736px/3)" height={56} isBottom={true} isTop={true}>
                {null}
              </Td>
              <Td width={80} height={56} isBottom={true} isRight={true} isTop={true}>
                <Radio
                  name="type"
                  value="MEISTER_TALENT"
                  onChange={handleFormTypeChange}
                  checked={form.type === 'MEISTER_TALENT'}
                  disabled={isQualificationExamination}
                />
              </Td>
            </Row>
            <Row>
              <Td width="calc(736px/3)" height={224} isBottom={true} isTop={true}>
                기회균등 전형
              </Td>
              <Column>
                <Row>
                  <Td width="calc(736px/3)" height={56} isTop={true}>
                    국민기초생활수급자
                  </Td>
                  <Td width={80} height={56} isTop={true} isRight={true}>
                    <Radio
                      name="type"
                      value="NATIONAL_BASIC_LIVING"
                      onChange={handleFormTypeChange}
                      checked={form.type === 'NATIONAL_BASIC_LIVING'}
                      disabled={isQualificationExamination}
                    />
                  </Td>
                </Row>
                <Row>
                  <Td width="calc(736px/3)" height={56}>
                    차상위계층
                  </Td>
                  <Td width={80} height={56} isRight={true}>
                    <Radio
                      name="type"
                      value="NEAR_POVERTY"
                      onChange={handleFormTypeChange}
                      checked={form.type === 'NEAR_POVERTY'}
                      disabled={isQualificationExamination}
                    />
                  </Td>
                </Row>
                <Row>
                  <Td width="calc(736px/3)" height={56}>
                    국가보훈대상자 (국가유공자)
                  </Td>
                  <Td width={80} height={56} isRight={true}>
                    <Radio
                      name="type"
                      value="NATIONAL_VETERANS"
                      onChange={handleFormTypeChange}
                      checked={form.type === 'NATIONAL_VETERANS'}
                      disabled={isQualificationExamination}
                    />
                  </Td>
                </Row>
                <Row>
                  <Td width="calc(736px/3)" height={56} isBottom={true}>
                    한부모가정
                  </Td>
                  <Td width={80} height={56} isRight={true} isBottom={true}>
                    <Radio
                      name="type"
                      value="ONE_PARENT"
                      onChange={handleFormTypeChange}
                      checked={form.type === 'ONE_PARENT'}
                      disabled={isQualificationExamination}
                    />
                  </Td>
                </Row>
              </Column>
            </Row>
            <Row>
              <Td width="calc(736px/3)" height={280} isTop={true} isBottom={true}>
                사회다양성 전형
              </Td>
              <Column>
                <Row>
                  <Td width="calc(736px/3)" height={56} isTop={true}>
                    북한이탈청소년
                  </Td>
                  <Td width={80} height={56} isTop={true} isRight={true}>
                    <Radio
                      name="type"
                      value="FROM_NORTH_KOREA"
                      onChange={handleFormTypeChange}
                      checked={form.type === 'FROM_NORTH_KOREA'}
                      disabled={isQualificationExamination}
                    />
                  </Td>
                </Row>
                <Row>
                  <Td width="calc(736px/3)" height={56}>
                    다문화가족 자녀
                  </Td>
                  <Td width={80} height={56} isRight={true}>
                    <Radio
                      name="type"
                      value="MULTICULTURAL"
                      onChange={handleFormTypeChange}
                      checked={form.type === 'MULTICULTURAL'}
                      disabled={isQualificationExamination}
                    />
                  </Td>
                </Row>
                <Row>
                  <Td width="calc(736px/3)" height={56}>
                    소년 ∙ 소녀가장
                  </Td>
                  <Td width={80} height={56} isRight={true}>
                    <Radio
                      name="type"
                      value="TEEN_HOUSEHOLDER"
                      onChange={handleFormTypeChange}
                      checked={form.type === 'TEEN_HOUSEHOLDER'}
                      disabled={isQualificationExamination}
                    />
                  </Td>
                </Row>
                <Row>
                  <Td width="calc(736px/3)" height={56}>
                    다자녀 가정 자녀
                  </Td>
                  <Td width={80} height={56} isRight={true}>
                    <Radio
                      name="type"
                      value="MULTI_CHILDREN"
                      onChange={handleFormTypeChange}
                      checked={form.type === 'MULTI_CHILDREN'}
                      disabled={isQualificationExamination}
                    />
                  </Td>
                </Row>
                <Row>
                  <Td width="calc(736px/3)" height={56} isBottom={true}>
                    농어촌지역출신자
                  </Td>
                  <Td width={80} height={56} isBottom={true} isRight={true}>
                    <Radio
                      name="type"
                      value="FARMING_AND_FISHING"
                      onChange={handleFormTypeChange}
                      checked={form.type === 'FARMING_AND_FISHING'}
                      disabled={isQualificationExamination}
                    />
                  </Td>
                </Row>
              </Column>
            </Row>
          </Column>
        </Row>
        <Row>
          <Td
            width="calc(736px/3)"
            height={112}
            borderBottomLeftRadius={12}
            isBottomBold={true}
            isTop={true}
            isLeft={true}
          >
            전형 외 전형
          </Td>
          <Column>
            <Td width="calc(736px/3)" height={56} isTop={true}>
              {null}
            </Td>
            <Td width="calc(736px/3)" height={56} isBottomBold={true}>
              {null}
            </Td>
          </Column>
          <Column>
            <Td width="calc(736px/3)" height={56} isTop={true}>
              국가보훈대상자 중 교육지원대상자
            </Td>
            <Td width="calc(736px/3)" height={56} isBottomBold={true}>
              특례 입학 대상자
            </Td>
          </Column>
          <Column>
            <Td width={80} height={56} isTop={true} isRight={true}>
              <Radio
                name="type"
                value="NATIONAL_VETERANS_EDUCATION"
                onChange={handleFormTypeChange}
                checked={form.type === 'NATIONAL_VETERANS_EDUCATION'}
                disabled={isQualificationExamination}
              />
            </Td>
            <Td
              width={80}
              height={56}
              borderBottomRightRadius={12}
              isBottomBold={true}
              isRight={true}
            >
              <Radio
                name="type"
                value="SPECIAL_ADMISSION"
                onChange={handleFormTypeChange}
                checked={form.type === 'SPECIAL_ADMISSION'}
                disabled={isQualificationExamination}
              />
            </Td>
          </Column>
        </Row>
      </Table>
      <FormController
        onPrevious={handleMovePreviousStep}
        onNext={handleMoveNextStep}
        step="전형선택"
      />
    </FormLayout>
  );
};

export default 전형선택;

const Table = styled.table`
  ${flex({ flexDirection: 'column' })}
  width: 816px;
`;
