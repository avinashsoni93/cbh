const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  const getHash = (val) =>
    crypto.createHash("sha3-512").update(val).digest("hex");

  if (event) {
    if (event.partitionKey) candidate = event.partitionKey;
    else candidate = getHash(JSON.stringify(event));

    if (typeof candidate !== "string") candidate = JSON.stringify(candidate);

    return candidate.length > MAX_PARTITION_KEY_LENGTH
      ? getHash(candidate)
      : candidate;
  }

  return TRIVIAL_PARTITION_KEY;
};
