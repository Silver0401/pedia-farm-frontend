import axios from "axios";
import React, { SetStateAction, useEffect, useState } from "react";
import { Button } from "@chakra-ui/button";
import { buttonProps } from "../../data/types";
import { fetchedMedsProps } from "../../data/types";

const FetchedMedsDisplay: React.FC<fetchedMedsProps> = ({ input }) => {
  const [FetchedData, setFetchedData] = useState<any>();
  let medList: Array<string> = [];
  const [buttonState, setButtonState] = useState<buttonProps>({
    state: false,
    MedName: "awaiting",
  });

  // const Debounce = (fn: (args: input) => void, wait: number) => {
  //   let timeout: ReturnType<typeof setTimeout>;
  //   const callback = (message: input) => {
  //     clearTimeout(timeout);
  //     timeout = setTimeout(() => {
  //       fn(message);
  //     }, wait);
  //   };

  //   return callback;
  // };

  // const ActivateDebounce = Debounce((args) => console.log(args), 500);

  // useEffect(() => {
  //   ActivateDebounce(input);
  // }, [input]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_NOT_DATABASE_URL}/DataCenter/Meds`)
      .then((value: SetStateAction<any>) => {
        setFetchedData(value.data);
        value.data.forEach((med: any) => {
          medList.push(med.MedName);
        });
        console.log(medList);
      });
  }, []);

  return (
    <div className="FetchedMedsDisplay">
      {FetchedData ? (
        FetchedData!.map((med: any) => {
          med.MedName = med.MedName.toLowerCase();

          if (!input || input === med.MedName || med.MedName.includes(input)) {
            return (
              <div className="MedContainer" key={med._id}>
                <Button
                  onClick={() => {
                    setButtonState({
                      state: buttonState.state ? false : true,
                      MedName: med.MedName,
                    });
                  }}
                  size="lg"
                  colorScheme="facebook"
                >
                  {med.MedName.charAt(0).toUpperCase() + med.MedName.slice(1)}{" "}
                  💊
                </Button>

                <div
                  style={{
                    transform:
                      buttonState.MedName === med.MedName &&
                      buttonState.state === true
                        ? "rotate(0deg)"
                        : "rotate(180deg)",
                  }}
                  className="arrow"
                />

                <div
                  style={{
                    height:
                      buttonState.MedName === med.MedName &&
                      buttonState.state === true
                        ? "500px"
                        : "0px",
                    transition: "height 500ms",
                  }}
                  className="MedInfo"
                >
                  <br />
                  <h3>{med.TherapeuticUse}</h3>
                  <br />

                  <h2>Efectos Adversos</h2>
                  <br />
                  <ul className="AdverseEffectsList">
                    {Object.keys(med.AdverseEffects).map((key) => {
                      return (
                        <li
                          key={key}
                          style={{
                            border:
                              med.AdverseEffects[key][1] === "alto"
                                ? "2px solid #e42c2ca7"
                                : med.AdverseEffects[key][1] === "medio"
                                ? "2px solid #fa8a12a7"
                                : med.AdverseEffects[key][1] === "bajo"
                                ? "2px solid #0efa2290"
                                : "2px solid white",
                          }}
                        >
                          <p id="key">{key}</p>
                          {med.AdverseEffects[key][0] ? (
                            <p id="value">{med.AdverseEffects[key][0]}</p>
                          ) : null}
                        </li>
                      );
                    })}
                  </ul>
                  <br />
                  <h2>Intreacción con otros Medicamentos</h2>
                  <br />
                  <ul className="RelativeMedsList">
                    {Object.keys(med.RelativeMeds).map((key) => {
                      return (
                        <li key={key}>
                          <h4>{key}</h4>
                          <div className="RelativeMedsBox">
                            {med.RelativeMeds[key].map(
                              (relativeMed: string) => {
                                return (
                                  <div
                                    onClick={() =>
                                      console.log(
                                        `${relativeMed} | ${medList.find(
                                          (medName) => medName === relativeMed
                                        )}`
                                      )
                                    }
                                    key={relativeMed}
                                  >
                                    {relativeMed}
                                  </div>
                                );
                              }
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          } else return null;
        })
      ) : (
        <div className="loaderContainer">
          <h4>Loading...</h4>
          <div className="spinner" />
        </div>
      )}
    </div>
  );
};

export default FetchedMedsDisplay;
