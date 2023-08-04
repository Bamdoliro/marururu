import { atom, useRecoilState } from 'recoil';

const documentInfoAtomState = atom({
    key: 'document',
    default: {
        coverLetter: '',
        statementOfPurpose: '',
    },
});

const useDocumentInfoState = () => {
    const [documentInfo, setDocumentInfo] = useRecoilState(documentInfoAtomState);

    return { documentInfo, setDocumentInfo };
};

export default useDocumentInfoState;
