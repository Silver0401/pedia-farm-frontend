import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { DebounceInput } from "react-debounce-input";

interface ListObject {
  [key: string]: string[];
}

interface MedDataStructure {
  MedName: string;
  TherapeuticUse: string;
  AdverseEffects: Object;
  RelativeMeds: Object;
}

const Pusher: React.FC = () => {
  const [adverseEffectsList, setAdverseEffectsList] = useState<Object>({
    "Efecto Adverso": ["Descripción", "Gravedad"],
    "Efecto Adverso2": ["Descripción", "Gravedad"],
  });

  const MedNameRef = useRef<HTMLInputElement>();
  const TherapeuticUseRef = useRef<HTMLInputElement>();

  const [medData, setMedData] = useState<MedDataStructure>({
    MedName: MedNameRef?.current?.value || "missing param",
    TherapeuticUse: TherapeuticUseRef?.current?.value || "missing param",
    AdverseEffects: {
      "awaiting...": [],
    },
    RelativeMeds: {
      "awaiting...": [],
    },
  });

  useEffect(() => {
    setMedData({ ...medData, AdverseEffects: adverseEffectsList });
  }, [adverseEffectsList]);

  useEffect(() => {
    console.log(adverseEffectsList);
  }, []);

  const MotionTransitionVariants = {
    initPosition: {
      opacity: 0,
    },
    DesiredPosition: {
      opacity: 1,
    },
    ExitPosition: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="PusherPage"
      variants={MotionTransitionVariants}
      initial={"initPosition"}
      animate={"DesiredPosition"}
      exit={"ExitPosition"}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div>
          <label>Nombre del Medicamento</label>
          <input type="text" />
        </div>
        <div>
          <label>Uso Terapéutico</label>
          <input type="text" />
        </div>
        <div className="listInputs">
          <label>Efectos Adversos</label>
          {Object.entries(adverseEffectsList).map((entry) => {
            const [key, value] = entry;
            return (
              <span key={Math.floor(Math.random() * 2139847 + 1)}>
                {/* <DebounceInput
                  value={key}
                  debounceTimeout={500}
                  onChange={(e) => {
                    Object.defineProperty(
                      adverseEffectsList,
                      e.target.value,
                      // @ts-ignore
                      Object.getOwnPropertyDescriptor(adverseEffectsList, key)
                    );
                    // @ts-ignore
                    delete adverseEffectsList[key];
                    setAdverseEffectsList({
                      ...adverseEffectsList,
                    });
                  }}
                /> */}

                <input
                  onChange={(e) => {
                    Object.defineProperty(
                      adverseEffectsList,
                      e.target.value,
                      // @ts-ignore
                      Object.getOwnPropertyDescriptor(adverseEffectsList, key)
                    );
                    // @ts-ignore
                    delete adverseEffectsList[key];
                    setAdverseEffectsList({ ...adverseEffectsList });
                  }}
                  value={key}
                  type="text"
                />
                <input
                  onChange={(e) => {
                    // @ts-ignore
                    adverseEffectsList[key][0] = e.target.value;
                    setAdverseEffectsList({ ...adverseEffectsList });
                  }}
                  value={value[0]}
                  type="text"
                />
                <select
                  onChange={(e) => {
                    // @ts-ignore
                    adverseEffectsList[key][1] = e.target.value;
                    setAdverseEffectsList({ ...adverseEffectsList });
                  }}
                  value={value[1]}
                  name="risk"
                >
                  <option value="bajo">bajo</option>
                  <option value="medio">medio</option>
                  <option value="alto">alto</option>
                </select>
                <button
                  className="removeButton"
                  onClick={() => {
                    // @ts-ignore
                    delete adverseEffectsList[key];
                    setAdverseEffectsList({ ...adverseEffectsList });
                  }}
                >
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  >
                    <path d="M7 5h17v16h-17l-7-7.972 7-8.028zm7 6.586l-2.586-2.586-1.414 1.414 2.586 2.586-2.586 2.586 1.414 1.414 2.586-2.586 2.586 2.586 1.414-1.414-2.586-2.586 2.586-2.586-1.414-1.414-2.586 2.586z" />
                  </svg>
                </button>
              </span>
            );
          })}
          <button
            onClick={() => {
              setAdverseEffectsList({
                ...adverseEffectsList,
                "Nuevo Efecto Adverso": ["Descripción", "Gravedad"],
              });
            }}
            className="addButton"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
            </svg>
          </button>
        </div>
        <div className="listInputs">
          <label>Interacciones con otros fármacos</label>
          <button className="addButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
            </svg>
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default Pusher;
