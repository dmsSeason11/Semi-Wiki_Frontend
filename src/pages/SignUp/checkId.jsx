import React, { useEffect } from "react";

const CheckId = ({ Id, setIdValidation }) => {
  useEffect(() => {
    if (!Id) {
      setIdValidation(null);
      return;
    }

    fetch(`${process.env.REACT_APP_API_BASE_URL}/auth/checkaccountid/${Id}`)
      .then((resp) => resp.json())
      .then((result) => {
        setIdValidation(Number(result) === 0);
      })
      .catch((e) => {
        console.log(e);
        setIdValidation(false);
      });
  }, [Id]);

  return null;
};

export default CheckId;
