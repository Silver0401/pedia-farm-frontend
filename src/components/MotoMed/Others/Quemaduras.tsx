import React from "react";
import ReturnButton from "./ReturnButton";
import Carousel from "./Carousel";

// Image Imports
import burnImg1 from "./../../../assets/burn1.1.png";
import burnImg2 from "./../../../assets/burn1.2.png";
import burnImg3 from "./../../../assets/burn2.1.png";
import burnImg4 from "./../../../assets/burn2.2.png";
import burnImg5 from "./../../../assets/burn2.3.png";
import burnImg6 from "./../../../assets/burn3.1.png";

const Quemaduras: React.FC = () => {
  const imageList = [
    {
      original: burnImg1,
      thumbnail: "Primer Grado",
    },
    {
      original: burnImg2,
      thumbnail: "Primer Grado",
    },
    {
      original: burnImg3,
      thumbnail: "Segundo Grado",
    },
    {
      original: burnImg4,
      thumbnail: "Tercer Grado",
    },
    {
      original: burnImg5,
      thumbnail: "Tercer Grado",
    },
    {
      original: burnImg6,
      thumbnail: "Tercer Grado",
    },
  ];

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

        <h2>Tipos</h2>
        <p>
          <strong>Escaldaduras (quemaduras con líquido caliente):</strong>{" "}
          Cuando un alumno sufre una quemadura con algún líquido caliente, es
          importante actuar rápidamente. En primer lugar, se debe enfriar
          inmediatamente la zona afectada con agua fresca durante 10 o 20
          minutos. No se debe usar hielo. Retirar la ropa que esté sobre la
          quemadura, a menos de que ésta esté ya pegada a la quemadura. Hay que
          evaluar la herida: si es superficial y pequeña, es decir, solo se
          alcanza a ver la piel un poco roja, entonces se debe aplicar una crema
          hidratante y estar al pendiente de cualquier cambio. También se puede
          dar algo para el dolor como ibuprofeno o paracetamol. Si la herida es
          más profunda y de ella está saliendo líquido, hay que cubrirla con una
          gasa estéril sin apretar mucho y consultar al médico inmediatamente.
          Importante no aplicar hielo u otros remedios caseros como mantequilla
          o leche, no retirar las ampollas o piel muerta, no despegar la ropa de
          la piel. (AEP, 2016)
        </p>
        <p>
          <strong>Quemaduras por fricción:</strong> Un ejemplo de estas
          quemaduras es cuando los niños se barren jugando fútbol y llegan a
          quemarse por la fricción que su piel genera con el suelo o el pasto.
          ¿Cuáles son las acciones a tomar cuando están muy contaminadas? Es
          necesario valorar el estado de la persona, después revisar qué tan
          extendida está la quemadura y su profundidad. Una vez hecho lo
          anterior, limpiamos la piel con irrigación, con agua de la llave, agua
          hervida, agua destilada o suero salino (todo a temperatura ambiente),
          se puede usar clorhexidina (sin alcohol) como antiséptico de elección.
          Es importante secar la piel sin frotar la zona y no usar antibióticos.
          (SMS, s.f.)
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
        <h2>Tratamiento</h2>
        <h3>Primer Grado</h3>

        <li>No es necesario llamar al médico</li>
        <li>
          Mojar la zona dañada con agua fresca o fría o aplicar compresas
          pasadas por agua fría por 10-15 minutos
        </li>
        <li>
          Secar la zona con una tela limpia, cubrir con gasa estéril o vendaje
          no adhesivo
        </li>
        <li>
          No aplicar mantequilla u otros remedios caseros para evitar
          infecciones
        </li>
        <li>Dar algún medicamento para el dolor</li>

        <h3>Segundo Grado</h3>
        <li>Llamar al médico y a los padres de familia</li>
        <li>
          Mojar la zona dañada con agua fresca o fría o aplicar compresas
          pasadas por agua fría por 10-15 minutos
        </li>
        <li>
          Secar la zona con una tela limpia, cubrir con gasa estéril o vendaje
          no adhesivo
        </li>
        <li>
          No aplicar mantequilla u otros remedios caseros para evitar
          infecciones
        </li>
        <li>Dar algún medicamento para el dolor</li>
        <li>No romper las ampollas</li>

        <h3>Tercer Grado</h3>
        <li>Llame inmediatamente al servicio de emergencia más cercano</li>
        <li>
          Algunos de los cuidados incluyen transfusión sanguínea para mantener
          el volumen sanguíneo o injertos de piel
        </li>
      </div>
      <div className="infographyContainer">
        <Carousel imageList={imageList} />
      </div>
    </div>
  );
};

export default Quemaduras;
