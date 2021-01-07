---
title: Consensus
---

## BHP Consensus Engine

(a) BHP uses BPoS consensus mechanism, featuring low transaction cost, low transaction latency, high transaction concurrency, and supports up to 21 verifier nodes.

BPoS is a combination of PoA and Pos. To become a verifier, you need to submit a proposal first and wait for other active verifiers to vote, and after more than half of them pass, you are eligible to become a verifier. Any address can pledge an address that is eligible to become a verifier, and after the verifier's pledge volume ranks in the top 21, it will become an active verifier in the next epoch.

All active verifiers are ranked according to predetermined rules and take turns to be out of the block. If a verifier does not get out of the block in time in its own block-out round, active verifiers who have not participated in block-out operations in the past n/2 (n is the number of active verifiers) blocks are randomly blocked out. At least n/2+1 active verifiers work properly to ensure the proper operation of the blockchain.

### System Contract

- Code: [bhp-system-contracts](https://github.com/bhpnet/bhp-system-contracts)
- Operation: [https://bhpnet.github.io/bhp-system-contracts/#/](https://bhpnet.github.io/bhp-system-contracts/#/)

The management of the current verifier is done by the system contract. The current system contracts are

- Proposal is responsible for managing access to validators and managing validator proposals and votes.
- Validators are responsible for ranking management of validators, pledge and unpledge operations, and distribution of block rewards.
- Punish, which is responsible for punishing active validators who are not working properly.

Blockchain invocation of system contracts.

- At the end of each block, the `Validators` contract is invoked to distribute the fees for all transactions in the block to active validators;
- the `Punish` contract is invoked to penalize the validator when it is found that the validator is not working properly.
- at the end of each epoch, the `Validators` contract is invoked to update the active validator, based on the ranking.

### Pledge

Any account can pledge any number of HTs to a validator. The minimum pledge amount for each validator is 32 BHP. If you want to get back the pledged HTs, you need to do the following.

1. send a call to the `Validators` contract and send an unpledge (`unstake`) declaration transaction for a particular validator;
2. wait for `17280` blocks and then invoke the `Validators` contract to send an extract pledge (`withdrawStaking`) transaction to retrieve all pledges in this validator.

### Penalties

Whenever a validator is found not to have made a block out as predefined, the Punish contract is automatically invoked at the end of this block to count the validator. When the count reaches 24, forfeit all of the verifier's revenue. When the count reaches 48, the verifier is removed from the list of active verifiers, and the verifier is disqualified.
