"use client";

import { redirectAbsolute, redirectRelative } from "../server-action";

const Page1 = () => {
  return (
    <>
      <h1>Page 1</h1>
      <h3>Next v14.2.17</h3>

      <p>
        Server action:{" "}
        <strong>
          <code>redirect(&quot;/en/page2&quot;)</code>
        </strong>
      </p>

      <button onClick={() => redirectAbsolute()}>Absolute redirect</button>

      <p>
        Server action:{" "}
        <strong>
          <code>redirect(&quot;page2&quot;)</code>
        </strong>
      </p>

      <p>
        Works as excpected in next 14, but throws{" "}
        <code style={{ color: "red" }}>TypeError: Invalid URL</code> in next 15
      </p>

      <button onClick={() => redirectRelative()}>Relative redirect</button>
    </>
  );
};

export default Page1;
