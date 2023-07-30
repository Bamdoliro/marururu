import { ChangeEventHandler, useState } from 'react';

const useInput = () => {
    const [certificatesInfo, setCertificatesInfo] = useState<string[]>([]);

    const handleCertificatesInfoDataChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const { checked, value } = e.target;
        if (checked) {
            setCertificatesInfo([...certificatesInfo, value]);
        } else {
            setCertificatesInfo(certificatesInfo.filter((certificate) => certificate !== value));
        }
    };

    return { handleCertificatesInfoDataChange };
};

export default useInput;
