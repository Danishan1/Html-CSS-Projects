import React, { lazy, Suspense, useEffect, useState } from "react";
import SecondaryLoading from "./SecondaryLoading";

const CubesLoader = lazy(() =>
  import("./LoadingStyle").then((module) => ({ default: module.CubesLoader }))
);
const FoldingLoader = lazy(() =>
  import("./LoadingStyle").then((module) => ({ default: module.FoldingLoader }))
);
const BounceLoader = lazy(() =>
  import("./LoadingStyle").then((module) => ({ default: module.BounceLoader }))
);
const PulseLoader = lazy(() =>
  import("./LoadingStyle").then((module) => ({ default: module.PulseLoader }))
);
const LoadingChat = lazy(() => import("./LoadingChat"));

/**
 * type can be [CubesLoader || FoldingLoader || BounceLoader || PulseLoader || LoadingChat]
 * @param type Allow to change based on this
 * @param windowHeight Loading page Height
 * @param windowWidth Loading page Width
 * @returns jsx
 */
const Loading = ({
  type = "CubesLoader",
  windowHeight = "100vh",
  windowWidth = "100vw",
}) => {
  const [loadingText, setLoadingText] = useState("Loading");

  useEffect(() => {
    const dots = ["", ".", "..", "..."];
    let index = 0;

    const intervalId = setInterval(() => {
      setLoadingText(`Loading${dots[index]}`);
      index = (index + 1) % dots.length;
    }, 500);

    return () => clearInterval(intervalId);
  }, []);

  let LoaderComponent;

  switch (type) {
    case "CubesLoader":
      LoaderComponent = CubesLoader;
      break;
    case "FoldingLoader":
      LoaderComponent = FoldingLoader;
      break;
    case "BounceLoader":
      LoaderComponent = BounceLoader;
      break;
    case "PulseLoader":
      LoaderComponent = PulseLoader;
      break;
    case "LoadingChat":
      LoaderComponent = LoadingChat;
      break;
    default:
      LoaderComponent = CubesLoader;
  }

  return (
    <div
      style={{
        height: windowHeight,
        width: windowWidth,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <Suspense fallback={<SecondaryLoading />}>
        <LoaderComponent />
        <p
          style={{
            fontWeight: "var(--boldL3)",
            color: "var(--colorCyan",
            width: "80px",
          }}
        >
          {loadingText}
        </p>
      </Suspense>
    </div>
  );
};

export default Loading;
