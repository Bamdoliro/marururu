import { Column } from '@maru/ui';

import { useFormListQuery } from '@/services/form/queries';
import FormTableHeader from './FormTableHeader/FormTableHeader';
import FormTableItem from './FormTableItem/FormTableItem';

const FormTable = () => {
  const { data: formList } = useFormListQuery();

  return (
    <Column gap={12}>
      <FormTableHeader />
      {formList &&
        formList.map((item) => (
          <FormTableItem
            id={item.id}
            examinationNumber={item.examinationNumber}
            name={item.name}
            birthday={item.birthday}
            graduationType={item.graduationType}
            school={item.school}
            status={item.status}
            type={item.type}
            totalScore={item.totalScore}
            hasDocument={item.hasDocument}
            firstRoundPassed={item.firstRoundPassed}
            secondRoundPassed={item.secondRoundPassed}
          />
        ))}
    </Column>
  );
};

export default FormTable;
