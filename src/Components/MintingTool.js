import React from "react";
const BN = require("bn.js");

const MintingTool = (props) => {
  console.log(props);
  const mintNFT = async () => {
    await window.contract.nft_mint(
      {
        token_id: `Goblin-${Number(props.totalSupply) + 1}`,
        metadata: {
          title: `Dungeon Goblin - #${Number(props.totalSupply) + 1}`,
          description: "Dungeon Goblin’s Minted on NEARVangelist",
          media: `https://gateway.pinata.cloud/ipfs/QmQZmehrhpAW4g2zhN7gT5Ue6vVkMjx8eUPb4PEWzNGSWC/${
            Number(props.totalSupply) + 1
          }.png`,
        },
        receiver_id: window.accountId,
      },
      300000000000000, // attached GAS (optional)
      new BN("11000000000000000000000000")
    );
  };

  return (
    <>
      <button
        disabled={props.userNFTStatus || window.accountId === ""}
        onClick={mintNFT}
        style={{ padding: "20px", width: "150px" }}
      >
        Mint NFT
      </button>
      {console.log(props.userNFTStatus)}
      {props.userNFTStatus ? (
        <p style={{ textAlign: "center" }}>
          bruh/sis.... You have an NFT already. You can see it{" "}
          <a href={"https://wallet.testnet.near.org/?tab=collectibles"}>
            here!
          </a>
          :)
        </p>
      ) : null}
    </>
  );
};

MintingTool.propTypes = {};

export default MintingTool;
