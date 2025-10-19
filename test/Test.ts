import assert from "assert";
import { 
  TestHelpers,
  MonPad_AccountDeployed
} from "generated";
const { MockDb, MonPad } = TestHelpers;

describe("MonPad contract AccountDeployed event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for MonPad contract AccountDeployed event
  const event = MonPad.AccountDeployed.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("MonPad_AccountDeployed is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await MonPad.AccountDeployed.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualMonPadAccountDeployed = mockDbUpdated.entities.MonPad_AccountDeployed.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedMonPadAccountDeployed: MonPad_AccountDeployed = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      user: event.params.user,
      smartAccount: event.params.smartAccount,
      timestamp: event.params.timestamp,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualMonPadAccountDeployed, expectedMonPadAccountDeployed, "Actual MonPadAccountDeployed should be the same as the expectedMonPadAccountDeployed");
  });
});
