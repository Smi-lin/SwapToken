import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SwapTokenModule = buildModule("SwapTokenModule", (t) => {
  const celoToken = t.contract("Celo", ["0xac9535B43e7f652344A158FaB8e44472A1070299"]);

  const baseToken = t.contract("Base", ["0xac9535B43e7f652344A158FaB8e44472A1070299"]);

  const swapToken = t.contract("SwapToken", [celoToken, baseToken, 100, 200]);

  return { swapToken };
});

export default SwapTokenModule;



// BASE SEPOLIA CONTRACT DEPLOYMENT

// SwapTokenModule#Base - 0x5C5c458776a2746465d3b9db5FaD354A160d930e
//SwapTokenModule#Celo - 0xE253b5d040CA3d640e1e33Ea09D56bD09eB3bd8b
//SwapTokenModule#SwapToken - 0xcD5b790fe9C648714D436e8c30D409C6784cc9cf

//erifying contract "contracts/Base.sol:Base" for network baseSepolia...
//Successfully verified contract "contracts/Base.sol:Base" for network baseSepolia:
//- https://sepolia.basescan.org/address/0x5C5c458776a2746465d3b9db5FaD354A160d930e#code

//Verifying contract "contracts/Celo.sol:Celo" for network baseSepolia...
//Successfully verified contract "contracts/Celo.sol:Celo" for network baseSepolia:
//- https://sepolia.basescan.org/address/0xE253b5d040CA3d640e1e33Ea09D56bD09eB3bd8b#code

//Verifying contract "contracts/SwapToken.sol:SwapToken" for network baseSepolia...
//Successfully verified contract "contracts/SwapToken.sol:SwapToken" for network baseSepolia:
//- https://sepolia.basescan.org/address/0xcD5b790fe9C648714D436e8c30D409C6784cc9cf#code



// LOCALHOST CONTRACT


// SwapTokenModule#Base - 0x5FbDB2315678afecb367f032d93F642f64180aa3
// SwapTokenModule#Celo - 0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512
// SwapTokenModule#SwapToken - 0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0