const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const GreeterModule = buildModule("GreeterModule", (m) => {
  const greet = m.contract("Greeter", ["Hola Mundo"]);

  return { greet };
});

module.exports = GreeterModule;