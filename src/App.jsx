//Importaciones para el correcto funcionamiento de la aplicación.
import React from 'react'; 
import Tortuga from './Tortuga';

function App() {

//Con esto lo que hacemos es poner los datos de cada tortuga, digamos que es como la parte gráfica de la aplicación.
  const tortuga = [
    {
      id: 0, 
      imgSrc: "src/assets/Rusa.jpg", 
      nombre: "Tortuga Rusa", 
      especie: "Testudo horsfieldii", 
      descripcion: "La tortuga rusa (Testudo horsfieldii) es una especie de tortuga terrestre de la familia Testudinidae, ampliamente distribuida por Eurasia. Se distribuye por las estepas del sur de Rusia, Afganistán, China, Pakistán y diversas repúblicas centroasiáticas de la extinta URSS como Kazajistán, Turkmenistán y Uzbekistán.",
      alt: "Tortuga Rusa" 
    },

    {
      id: 1, 
      imgSrc: "src/assets/Galapagos.jpg",
      nombre: "Tortuga de Galápagos", 
      especie: "Chelonoidis spp",
      descripcion: "La tortuga de Galápagos (Chelonoidis spp.) es una especie emblemática que se encuentra en las islas Galápagos, en el océano Pacífico. Estas tortugas gigantes son famosas por su longevidad y su tamaño impresionante, llegando a pesar hasta 400 kilogramos y vivir más de 100 años. Han sido objeto de estudio debido a su evolución única en diferentes islas, lo que ha dado lugar a subespecies distintas. Son principalmente herbívoras y se alimentan de una variedad de plantas y vegetación que encuentran en su hábitat insular.", 
      alt: "Tortuga de Galápagos" 
    },

    {
      id: 2, 
      imgSrc: "src/assets/Leopardo.jpg", 
      nombre: "Tortuga leopardo", 
      especie: "Stigmochelys pardalis", 
      descripcion: "La tortuga leopardo (Stigmochelys pardalis) es una especie de tortuga terrestre que se encuentra en el sur y este de África. Su caparazón tiene un patrón distintivo similar al de un leopardo, de ahí su nombre. Estas tortugas son herbívoras y se alimentan principalmente de plantas, pastos y frutas. Son conocidas por su tamaño grande y su longevidad.", 
      alt: "Tortuga leopardo" 
    },

    {
      id: 3, 
      imgSrc: "src/assets/Boba.jpg",
      nombre: "Tortuga boba", 
      especie: "Caretta caretta", 
      descripcion: "La tortuga boba (Caretta caretta) es otra especie de tortuga marina ampliamente distribuida. Tienen un caparazón de forma ovalada y una cabeza grande. Estas tortugas migran a largas distancias y se alimentan principalmente de invertebrados marinos, como cangrejos y moluscos. Sus áreas de anidación incluyen playas en diferentes partes del mundo.", 
      alt: "Tortuga boba" 
    },

  ];

  return (
    <>
      <Tortuga tortuga={tortuga} />
    </>
  );
}

export default App; 
