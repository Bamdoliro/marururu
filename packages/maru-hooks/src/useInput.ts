import { useState, useCallback, ChangeEvent, useMemo } from 'react';
import debounce from 'lodash/debounce';

interface PropsType {
    initialValue?: string;
    useDebounce?: boolean;
    debounceTimeout?: number;
}

const useInput = ({ initialValue = '', useDebounce = false, debounceTimeout = 150 }: PropsType) => {
    const [value, setValue] = useState(initialValue);
    const [debouncedValue, setDebouncedValue] = useState(initialValue);

    const handleSetDebounceValue = useMemo(
        () =>
            debounce((value: string) => {
                setDebouncedValue(value);
            }, debounceTimeout),
        [debounceTimeout],
    );

    const handleSetValue = useCallback(
        (value: string) => {
            setValue(value);
            if (useDebounce) {
                handleSetDebounceValue(value);
            }
        },
        [handleSetDebounceValue, useDebounce],
    );

    const onChange = useCallback(
        (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            handleSetValue(event.target.value);
        },
        [handleSetValue],
    );

    return { value, setValue, onChange, debouncedValue };
};

export default useInput;
