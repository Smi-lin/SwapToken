import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const SwapTokenModule = buildModule("SwapTokenModule", (t) => {
  const swapToken = t.contract("SwapToken");

  return { swapToken };
});

export default SwapTokenModule;
