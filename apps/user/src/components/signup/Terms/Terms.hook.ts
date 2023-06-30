import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const useTerms = (setCheckTermsAgree: Dispatch<SetStateAction<boolean>>) => {
    const [allCheck, setAllCheck] = useState(false);
    const [checkOne, setChecktOne] = useState(false);
    const [checkTwo, setChecktTwo] = useState(false);

    const allCheckEvent = () => {
        if (allCheck === false) {
            setChecktOne(true);
            setChecktTwo(true);
        } else {
            setChecktOne(false);
            setChecktTwo(false);
        }
    };

    const checkOneEvent = () => {
        if (checkOne === false) {
            setChecktOne(true);
        } else {
            setChecktOne(false);
        }
    };

    const checkTwoEvent = () => {
        if (checkTwo === false) {
            setChecktTwo(true);
        } else {
            setChecktTwo(false);
        }
    };

    useEffect(() => {
        if (checkOne === true && checkTwo === true) {
            setAllCheck(true);
            setCheckTermsAgree(true);
        } else {
            setAllCheck(false);
        }
    }, [checkOne, checkTwo]);

    return { allCheck, checkOne, checkTwo, allCheckEvent, checkOneEvent, checkTwoEvent };
};

export default useTerms;
