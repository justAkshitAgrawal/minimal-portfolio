import React from "react";
import { FadeIn } from "react-slide-fade-in";
import FifthRow from "./components/FifthRow";
import FirstRow from "./components/FirstRow";
import FourthRow from "./components/FourthRow";
import SecondRow from "./components/SecondRow";
import SeventhRow from "./components/SeventhRow";
import SixthRow from "./components/SixthRow";
import ThirdRow from "./components/ThirdRow";
import EightRow from "./components/EightRow";
import RowOne from "./components/desktop/RowOne";
import RowName from "./components/desktop/RowName";
import RowNOne from "./components/desktop/RowNOne";
import RowNTwo from "./components/desktop/RowNTwo";
import RowContact from "./components/desktop/RowContact";
import RowExp from "./components/desktop/RowExp";
import RowSkillS from "./components/desktop/RowSkillS";
import RowSkillK from "./components/desktop/RowSkillK";
import RowSKillL from "./components/desktop/RowSKillL";
import RowThree from "./components/desktop/RowThree";
import RowGit from "./components/desktop/RowGit";
import RowFour from "./components/desktop/RowFour";
import RowSeven from "./components/desktop/RowSeven";
import RowEightN from "./components/desktop/RowEightN";
import RowNine from "./components/desktop/RowNine";

function App() {
  return (
    <div className=" h-screen bg-[#0F0F0F] font-baron uppercase flex flex-col items-center justify-center">
      <div className=" lg:hidden md:max-w-[60vw] md:text-xl">
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
      <FadeIn from="left" durationInMilliseconds={2500}>
        <div className="hidden text-xl text-[#757575]/30 gap-x-12 lg:grid grid-cols-16 place-items-center gap-y-4">
          <RowNTwo />
          <RowNOne />
          <RowThree />
          <RowFour />
          <RowSkillS />
          <RowSkillK />
          <RowSeven />
          <RowName />
          <RowSKillL />
          <RowEightN />
          <RowNine />
          <RowGit />
          <RowOne />
          <RowExp />
          <RowOne />
          <RowContact />
        </div>
      </FadeIn>
    </div>
  );
}

export default App;
