import React, { useEffect } from "react";

const CheckId = ({ accountId, setIdValidation, checkId, setCheckId }) => {
  useEffect(() => {
    if (!checkId) {
      return;
    }

    const checkIdValidation = async () => {
      setCheckId(false);

      if (!accountId) {
        setIdValidation(null);
        return;
      }

      try {
        const response = await fetch(
          `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/${accountId}`
        );

        if (!response.ok) {
          if (response.status === 404) {
            setIdValidation(true);
          } else {
            console.error("서버 오류 발생:", response.status);
            setIdValidation(false);
          }
          return;
        }

        const result = await response.json();
        setIdValidation(Number(result) === 0);
      } catch (error) {
        console.error("알 수 없는 오류:", error);
        setIdValidation(false);
      }
    };

    checkIdValidation();
  }, [accountId, setIdValidation, checkId, setCheckId]);

  return null;
};

export default CheckId;
