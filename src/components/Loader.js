import React from "react";
import Loader from "react-loader-spinner";
export const LoadingIndicator = () => {
  return (
    <>
      <Loader
        type="Oval"
        color="#ee2046"
        height={40}
        width={40}
        timeout={3000} //3 secs
      />
    </>
  );
};
