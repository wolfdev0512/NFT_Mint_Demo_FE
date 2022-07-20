import React, { useEffect, useState, useCallback } from "react";

// @Components
import MintingTool from "./Components/MintingTool";
import InfoBubble from "./Components/InfoBubble";

// @styled-component
import { Layout, MainLayout } from "./App.styled";

function App() {
  const [totalSupply, setTotalSupply] = useState(0);

  const getTotalSupply = useCallback(async () => {
    const num = await window.contract.nft_total_supply();
    setTotalSupply(num);
    getTotalSupply();
  }, []);

  useEffect(() => {
    getTotalSupply();
  }, [getTotalSupply]);

  return (
    <Layout>
      <MainLayout>
        <InfoBubble />
        <MintingTool totalSupply={totalSupply} />
      </MainLayout>
    </Layout>
  );
}

export default App;
