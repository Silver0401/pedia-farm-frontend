import React from "react";
import { Button } from "@chakra-ui/button";
import { useHistory } from "react-router";

const ReturnButton: React.FC = () => {
  const History = useHistory();

  return (
    <Button onClick={() => History.push("/MotoMed")} size="lg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M19.885 5.515c-4.617-4.618-12.056-4.676-16.756-.195l-2.129-2.258v7.938h7.484l-2.066-2.191c2.82-2.706 7.297-2.676 10.074.1 2.992 2.993 2.664 7.684-.188 10.319l3.314 3.5c4.716-4.226 5.257-12.223.267-17.213z" />
      </svg>
    </Button>
  );
};

export default ReturnButton;
