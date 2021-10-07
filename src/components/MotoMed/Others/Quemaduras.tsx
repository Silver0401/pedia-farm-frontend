import React from "react";
import ReturnButton from "./ReturnButton";

const Quemaduras: React.FC = () => {
  return (
    <div className="QuemadurasPage">
      <ReturnButton />

      <div className="informationContainer">
        <h1>Quemaduras</h1>
        <hr />
        <h2>Definición</h2>
        <p>
          Las quemaduras son lesiones en los tejidos del cuerpo que tienen
          distintas causas: calor, sustancias químicas, electricidad, sol o
          radiación. (MedlinePlus, 2020) Las escaldaduras se producen por el
          contacto con líquido o agua caliente con la piel o las mucosas. Son
          las quemaduras más frecuentes en los niños, sobre todo en los menores
          de 2 años. Por lo general se dan en manos, brazos y cuello. (AEP,
          2016).
        </p>
        <h2>Grados</h2>
        <p>
          strong Las quemaduras se clasifican en varios grados dependiendo de su
          profundidad o extensión. A mayor grado, mayor gravedad o mayor riesgo.
          Las quemaduras más profundas tardan más en sanar, son más difíciles de
          tratar y son más propensas a complicaciones. Los grados en los que se
          evalúan son los siguientes: (NIH, 2016)
        </p>
        <p>
          <strong>Quemaduras de primer grado:</strong> son las más
          superficiales. Se dañan las capas más externas de la piel, conocidas
          como epidermis. Suelen sanar en una semana aproximadamente. Un ejemplo
          podría ser las quemaduras de sol. (NIH, 2016)
        </p>
        <p>
          <strong>Quemadura de segundo grado:</strong> además de dañar la
          epidermis, dañan también la siguiente capa interna de la piel, que
          sería la dermis. Es posible que este tipo de quemaduras necesiten
          injertos de piel para ayudar a sanar y que dejen cicatrices. (NIH,
          2016)
        </p>
        <p>
          <strong>Quemaduras de tercer grado:</strong> dañan o destruyen por
          completo ambas capas de la piel (epidermis y dermis). Incluso pueden
          dañar los folículos pilosos y las glándulas que producen sudor
          (sudoríparas). También pueden dañar los tejidos cercanos. Su atención
          requiere injertos de piel. (NIH, 2016)
        </p>
        <p>
          <strong>Quemaduras de cuarto grado:</strong> Se extienden hasta las
          capas más profundas de la piel hasta llegar a la grasa que está por
          debajo de ésta. (NIH, 2020)
        </p>
      </div>
      <div className="infographyContainer"></div>
    </div>
  );
};

export default Quemaduras;
