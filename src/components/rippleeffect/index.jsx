import React, { useEffect, useRef } from "react";
import Ripples from "react-ripples";

const LandingPage = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      new Ripples(imageRef.current, {
        resolution: 256,
        perturbance: 0.01,
      });
    }
  }, []);

  //     return () => {
  //       ripplesInstance.destroy();
  //     };
  //   }
  // }, []);

  return (
    <div className="full-landing-image">
      <Ripples>
        <div
          ref={imageRef}
          style={{
            width: "100%",
            height: "100vh",
          }}
        />
      </Ripples>
    </div>
  );
};

export default LandingPage;
