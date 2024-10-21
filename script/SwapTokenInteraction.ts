import hre from "hardhat";

async function main() {
  const SWAPTOKEN_CONTRACT = "0xcD5b790fe9C648714D436e8c30D409C6784cc9cf";
  const SWAPTOKEN_BASE = "0x5C5c458776a2746465d3b9db5FaD354A160d930e";
  const SWAPTOKEN_CELO = "0xE253b5d040CA3d640e1e33Ea09D56bD09eB3bd8b";

  const swapTokenInstance = await hre.ethers.getContractAt(
    "SwapToken",
    SWAPTOKEN_CONTRACT
  );
  const swapTokenBaseInstance = await hre.ethers.getContractAt(
    "baseToken",
    SWAPTOKEN_BASE
  );
  const swapTokenCeloInstance = await hre.ethers.getContractAt(
    "celoToken",
    SWAPTOKEN_CELO
  );

  const swap = hre.ethers.parseUnits("20", "ethers");
  const celoToken = hre.ethers.parseUnits("200", "ethers");
  const baseToken = hre.ethers.parseUnits("100", "ethers");

  //Begining of script writing Swap Token

  console.log(
    "############################ Swapping token from Celo To Base ####################"
  );

  const swapTokenCeloToBase = await swapTokenInstance.swapTokenCeloToTokenBase(
    swap
  );

  swapTokenCeloToBase.wait();

  console.log({
    "Token Swapped deployed successfully to": swapTokenCeloToBase,
  });



  console.log(
    "############################ Swapping token from Base To Celo ####################"
  );

  const swapTokenBaseToCelo1 = await swapTokenInstance.swapTokenBaseToTokenCelo(
    swap
  );

  swapTokenBaseToCelo1.wait();

  console.log({
    "Token Swapped deployed successfully to": swapTokenBaseToCelo1,
  });
}
