import { useState, useCallback, useMemo, ChangeEventHandler } from 'react';
import debounce from 'lodash/debounce';

interface PropsType {
    initialValue?: string;
    debounceTimeout?: number;
}

const useDebounceInput = ({ initialValue = '', debounceTimeout = 150 }: PropsType) => {
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
            handleSetDebounceValue(value);
        },
        [handleSetDebounceValue],
    );

    const onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = useCallback(
        (e) => {
            handleSetValue(e.target.value);
        },
        [handleSetValue],
    );

    return { value, setValue, onChange, debouncedValue };
};

export default useDebounceInput;
