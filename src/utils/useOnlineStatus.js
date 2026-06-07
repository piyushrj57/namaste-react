import { useEffect, useState } from "react";
const useOnlineStatus = () => {
    const [useOnlineStatus, setUseOnlineStatus] = useState(true);
    useEffect(() => {
        window.addEventListener("online", () => {
            setUseOnlineStatus(true);
        });
        window.addEventListener("offline", () => {
            setUseOnlineStatus(false);
        });
    }, [])

    return useOnlineStatus;
}
export default useOnlineStatus;