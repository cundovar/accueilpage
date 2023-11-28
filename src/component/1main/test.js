import * as React from "react";
import { useMediaQuery } from "@uidotdev/usehooks";


export default function TEST() {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );
  const isLargeDevice = useMediaQuery(
    "only screen and (min-width : 993px) and (max-width : 1200px)"
  );
  const isExtraLargeDevice = useMediaQuery(
    "only screen and (min-width : 1201px)"
  );

  return (
    <section>
      <h1>useMediaQuery</h1>
      Resize your browser windows to see changes.
      <article className="">
        <figure className={isSmallDevice ? "jj" : ""}>
         ph0ne
          <figcaption>Small</figcaption>
        </figure>
        <figure className={isMediumDevice ? "active" : ""}>
          tablete
          <figcaption>Medium</figcaption>
        </figure>
        <figure className={isLargeDevice ? "jj" : ""}>
          lag
          <figcaption>Large</figcaption>
        </figure>
        <figure className={isExtraLargeDevice ? "jj" : ""}>
         biureau
          <figcaption>Extra Large</figcaption>
        </figure>
      </article>
    </section>
  );
}