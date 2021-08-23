import axios from "axios";
import React, { SetStateAction, useEffect, useState } from "react";

const FetchedMedsDisplay: React.FC = () => {
  const [FetchedData, setFetchedData] = useState<any>();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_NOT_DATABASE_URL}/DataCenter/Meds`)
      .then((value: SetStateAction<any>) => {
        setFetchedData(value.data);
      });
  }, []);

  return (
    <div className="FetchedMedsDisplay">
      {FetchedData ? (
        FetchedData!.map((med: any) => {
          return (
            <div className="MedContainer" key={med._id}>
              <h1>{med.MedName}</h1>
              <br />
              <p>{med.TherapeuticUse}</p>
              <br />
              <ul>
                <h2>Efectos Adversos</h2>
                <br />
                {med.AdverseEffects.map((adverseEffect: string) => {
                  return <li key={adverseEffect}>{adverseEffect}</li>;
                })}
              </ul>
              <ul>
                <br />
                <h2>Dosificaciones</h2>
                <br />
                {med.Dosification.map((dose: string) => {
                  return <li key={dose}>{dose}</li>;
                })}
              </ul>
            </div>
          );
        })
      ) : (
        <div>loading...</div>
      )}
    </div>
  );
};

export default FetchedMedsDisplay;
