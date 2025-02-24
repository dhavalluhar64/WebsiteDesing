import React, { useEffect, useState } from "react";

function AccordionData({ titling, contentData }) {
  const [isAccordion, setAccordina] = useState(false);

  const handleAccordina = () => {
    setAccordina((pervAccord) => !pervAccord);
  };

  return (
    <>
      <div className={`contenBx ${isAccordion && "active"}`}>
        <div className="lable" onClick={handleAccordina}>
          {titling}
        </div>
        <div className="content">{isAccordion && <p>{contentData}</p>}</div>
      </div>
    </>
  );
}

export default AccordionData;
