const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the partition key string when partition key is numeric value", () => {
    const event = {
      partitionKey:12345
    }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("12345");
  });
  
  it("Returns the partition key string of length of 128 when given partition key is string", () => {
    const event = {
      partitionKey:'5445566tfvtvfgv'
    }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe('5445566tfvtvfgv');
  });

  it("Returns the partition key string of length of 128 when given partition key is null", () => {
    const event = {
      partitionKey:null
    }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey.length).toBe(128);
  });

  it("Returns the partition key string of length of 128 when given partition key is zero", () => {
    const event = {
      partitionKey:0
    }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey.length).toBe(128);
  });

  it("Returns the partition key string of length of 128 when given partition key is an empty string", () => {
  const event = {
    partitionKey:''
  }
  const trivialKey = deterministicPartitionKey(event);
  expect(trivialKey.length).toBe(128);
  });
  
  it("Returns the partition key string of length of 128 when given objet is without the partitionKey property", () => {
    const event = {
    }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey.length).toBe(128);
  });

  it("Returns the partition key string of length of 128 when given partionKey length is more than 256", () => {
    const event = {
      partitionKey:'c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a86212'
    }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey.length).toBe(128);
  });

    it("Returns the partition key length should be same when given partionKey length is less than or equals to 256", () => {
    const event = {
      partitionKey:'b7478342a465088fc33d43a64cd370737e5a3bf6749ca62c1d6db341beb987326b4df3a9f54f67a2f0ee915d4216af2f382fda14dd58dc67794f745e92d7a7f6b7478342a465088fc33d43a64cd370737e5a3bf6749ca62c1d6db341beb987326b4df3a9f54f67a2f0ee915d4216af2f382fda14dd58dc67794f745e92d7a7f6'
    }
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey.length).toBe(256);
  });
});
