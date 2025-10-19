/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  MonPad,
  MonPad_AccountDeployed,
  MonPad_TokenDeployed,
  MonPad_TokenMinted,
  MonPad_TokenTransferred,
} from "generated";

MonPad.AccountDeployed.handler(async ({ event, context }) => {
  const entity: MonPad_AccountDeployed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    smartAccount: event.params.smartAccount,
    timestamp: event.params.timestamp,
  };

  context.MonPad_AccountDeployed.set(entity);
});

MonPad.TokenDeployed.handler(async ({ event, context }) => {
  const entity: MonPad_TokenDeployed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    deployer: event.params.deployer,
    tokenAddress: event.params.tokenAddress,
    name: event.params.name,
    symbol: event.params.symbol,
    supply: event.params.supply,
    timestamp: event.params.timestamp,
  };

  context.MonPad_TokenDeployed.set(entity);
});

MonPad.TokenMinted.handler(async ({ event, context }) => {
  const entity: MonPad_TokenMinted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    caller: event.params.caller,
    tokenAddress: event.params.tokenAddress,
    to: event.params.to,
    amount: event.params.amount,
    timestamp: event.params.timestamp,
  };

  context.MonPad_TokenMinted.set(entity);
});

MonPad.TokenTransferred.handler(async ({ event, context }) => {
  const entity: MonPad_TokenTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    caller: event.params.caller,
    tokenAddress: event.params.tokenAddress,
    to: event.params.to,
    amount: event.params.amount,
    timestamp: event.params.timestamp,
  };

  context.MonPad_TokenTransferred.set(entity);
});
