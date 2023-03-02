import React from "react";
import CenteredCard from "./components/CenteredCard";

function App() {
  return (
    <div className="divPrincipal">
      <CenteredCard>
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ut
          ultricies sapien, vitae dignissim arcu. Nunc hendrerit dignissim
          libero, nec luctus felis mollis sed. Aliquam eget nunc at tortor
          pulvinar efficitur. Vivamus non viverra massa. Aenean lobortis tellus
          sit amet massa auctor venenatis eu id justo. Maecenas tincidunt
          pulvinar tortor. Suspendisse ac vehicula quam. Morbi lacus justo,
          faucibus egestas ante pharetra, elementum ultricies est. Sed egestas
          in ex a congue. Curabitur eu tortor a justo commodo aliquet. Curabitur
          sit amet mattis neque. Nullam sed elit orci.
        </p>
      </CenteredCard>
      <CenteredCard>
        <h1>Condimentum Ultrices Velit</h1>
        <p>
          Etiam sem odio, faucibus a ligula lacinia, condimentum ultrices velit.
          Fusce condimentum tempor tristique. Aenean pellentesque lectus ipsum,
          in scelerisque ante feugiat dapibus. Vivamus interdum risus purus,
          quis feugiat eros cursus eget. Sed pulvinar diam sed leo maximus, vel
          mollis neque fringilla. Nam nulla nisl, cursus nec tempus sit amet,
          convallis sed ex. In in quam mauris. Pellentesque tincidunt posuere
          eros ac blandit. Morbi luctus, dolor vitae posuere vehicula, quam
          ligula suscipit mauris, at dignissim justo purus eget justo. Etiam
          pulvinar felis nec lorem mollis condimentum. Morbi commodo tempus
          velit, ut venenatis mi. Curabitur eu iaculis sapien.
        </p>
      </CenteredCard>
      <CenteredCard>
        <h1>Curabitur Eleifend</h1>
        <p>
          Praesent aliquam laoreet sagittis. Curabitur eleifend mollis sem, id
          sodales elit dictum quis. Aenean erat dui, aliquam non nisl vel,
          placerat tincidunt nibh. Suspendisse massa leo, laoreet ac feugiat at,
          venenatis quis purus. Quisque malesuada lacus sed arcu hendrerit,
          rutrum viverra massa commodo. Phasellus efficitur viverra tellus, sit
          amet vestibulum mauris commodo non. Nulla sagittis tellus risus. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet
          risus sed massa luctus efficitur non vel magna. Vestibulum varius
          velit pharetra cursus venenatis. Pellentesque tristique libero vel
          lectus fermentum, nec consequat dolor mattis. Nulla egestas risus et
          porta tincidunt. Suspendisse potenti.
        </p>
        <a href="https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal">
          Wikipédia
        </a>
      </CenteredCard>
    </div>
  );
}

export default App;