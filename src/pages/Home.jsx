import React from "react";
import { FadeIn } from "react-slide-fade-in";
import FifthRow from "../components/FifthRow";
import FirstRow from "../components/FirstRow";
import FourthRow from "../components/FourthRow";
import SecondRow from "../components/SecondRow";
import SeventhRow from "../components/SeventhRow";
import SixthRow from "../components/SixthRow";
import ThirdRow from "../components/ThirdRow";
import EightRow from "../components/EightRow";
import RowOne from "../components/desktop/RowOne";
import RowName from "../components/desktop/RowName";
import RowNOne from "../components/desktop/RowNOne";
import RowNTwo from "../components/desktop/RowNTwo";
import RowContact from "../components/desktop/RowContact";
import RowExp from "../components/desktop/RowExp";
import RowSkillS from "../components/desktop/RowSkillS";
import RowSkillK from "../components/desktop/RowSkillK";
import RowSKillL from "../components/desktop/RowSKillL";
import RowThree from "../components/desktop/RowThree";
import RowGit from "../components/desktop/RowGit";
import RowFour from "../components/desktop/RowFour";
import RowSeven from "../components/desktop/RowSeven";
import RowEightN from "../components/desktop/RowEightN";
import RowNine from "../components/desktop/RowNine";

function Home() {
  return (
    <div className=" h-screen bg-[#0F0F0F] font-baron uppercase flex flex-col items-center justify-center">
      <FadeIn from="left" durationInMilliseconds={2500}>
        <div className=" lg:hidden md:max-w-[60vw] md:text-xl grid text-[#757575]/30 gap-x-5 grid-cols-8 place-items-center gap-y-4">
          <FirstRow />
          <SecondRow />
          <ThirdRow />
          <FourthRow />
          <FifthRow />
          <SixthRow />
          <SeventhRow />
          <EightRow />
        </div>
      </FadeIn>

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

export default Home;
