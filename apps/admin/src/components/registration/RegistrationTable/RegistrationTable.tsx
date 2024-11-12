import { useNoticeListQuery } from '@/services/registration/queries';
import { Column } from '@maru/ui';
import RegistrationTableHeader from './RegistrationTableHeader/RegistrationTableHeader';
import RegistrationTableItem from './RegistrationTableItem/RegistrationTableItem';

const RegistrationTable = () => {
  const { data: RegistrationList } = useNoticeListQuery();

  return (
    <Column gap={12}>
      <RegistrationTableHeader />
      {RegistrationList
        ? RegistrationList.sort((a, b) => a.id - b.id).map(
            ({ id, title, fileUrl, fileName }) => (
              <RegistrationTableItem
                id={id}
                title={title}
                fileUrl={fileUrl}
                fileName={fileName}
              />
            )
          )
        : null}
    </Column>
  );
};

export default RegistrationTable;
