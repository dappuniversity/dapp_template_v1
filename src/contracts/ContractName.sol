// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;

contract ContractName {

	constructor() public {

	}

  // Fallback: reverts if Ether is sent to this smart contract by mistake
  fallback() external payable {
  }
}