import React, { useEffect } from "react";

const CheckId = ({ Id, setIdValidation }) => {
  useEffect(() => {
    if (!Id) {
      setIdValidation(null);
      return;
    }

    fetch("/check-accountId/" + Id)
      .then((resp) => resp.text())
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
