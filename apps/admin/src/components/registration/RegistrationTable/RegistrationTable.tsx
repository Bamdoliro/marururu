import { useRegistrationListQuery } from '@/services/registration/queries';
import { Column } from '@maru/ui';
import RegistrationTableHeader from './RegistrationTableHeader/RegistrationTableHeader';
import RegistrationTableItem from './RegistrationTableItem/RegistrationTableItem';

const RegistrationTable = () => {
  const { data: RegistrationList } = useRegistrationListQuery();

  return (
    <Column gap={12}>
      <RegistrationTableHeader />
      {RegistrationList
        ? RegistrationList.sort((a, b) => a.examinationNumber - b.examinationNumber).map(
            ({ examinationNumber, name, admissionAndPledgeUrl }, index) => (
              <RegistrationTableItem
                examinationNumber={examinationNumber}
                id={index + 1}
                name={name}
                admissionAndPledgeUrl={admissionAndPledgeUrl}
              />
            )
          )
        : null}
    </Column>
  );
};

export default RegistrationTable;
