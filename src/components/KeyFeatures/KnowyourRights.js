import { useEffect, useState } from "react";

const KnowYourRights = () => {
  const [backendData, setBackendData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/rights")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBackendData(data.legal_rights_in_india); // Ensure data is an array
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1>Rights As A Citizen of India</h1>

      {loading ? (
        <p>Loading...</p>
      ) : (
        backendData.map((item, index) => (
          <details key={index}>
            <summary>{item.question}</summary>
            <div className="faq__content" style={{ textAlign: "left" }}>
              {Array.isArray(item.answer) ? (
                item.answer.map((point, pointIndex) => (
                  <p key={pointIndex}>{point}</p>
                ))
              ) : (
                <p>{item.answer}</p>
              )}
            </div>
          </details>
        ))
      )}
    </>
  );
};

export default KnowYourRights;
