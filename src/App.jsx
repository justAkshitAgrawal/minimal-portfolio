import React from "react";
import { FadeIn } from "react-slide-fade-in";
import FifthRow from "./components/FifthRow";
import FirstRow from "./components/FirstRow";
import FourthRow from "./components/FourthRow";
import SecondRow from "./components/SecondRow";
import SeventhRow from "./components/SeventhRow";
import SixthRow from "./components/SixthRow";
import ThirdRow from "./components/ThirdRow";
import EightRow from "./EightRow";

function App() {
  return (
    <div className=" h-screen bg-[#0F0F0F] font-montserrat flex flex-col items-center justify-center">
      <div>
        <FadeIn from="left" durationInMilliseconds={2000}>
          <FirstRow />
        </FadeIn>
        <FadeIn
          from="left"
          durationInMilliseconds={2000}
          delayInMilliseconds={200}
        >
          <SecondRow />
        </FadeIn>
        <FadeIn
          from="left"
          durationInMilliseconds={2000}
          delayInMilliseconds={400}
        >
          <ThirdRow />
        </FadeIn>
        <FadeIn
          from="left"
          durationInMilliseconds={2000}
          delayInMilliseconds={600}
        >
          <FourthRow />
        </FadeIn>
        <FadeIn
          from="left"
          durationInMilliseconds={2000}
          delayInMilliseconds={800}
        >
          <FifthRow />
        </FadeIn>
        <FadeIn
          from="left"
          durationInMilliseconds={2000}
          delayInMilliseconds={1000}
        >
          <SixthRow />
        </FadeIn>
        <FadeIn
          from="left"
          durationInMilliseconds={2000}
          delayInMilliseconds={1200}
        >
          <SeventhRow />
        </FadeIn>
        <FadeIn
          from="left"
          durationInMilliseconds={2000}
          delayInMilliseconds={1400}
        >
          <EightRow />
        </FadeIn>
      </div>
    </div>
  );
}

export default App;
