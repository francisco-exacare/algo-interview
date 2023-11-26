import { describe, expect, test } from "@jest/globals";
import { getResidentActivities } from "../src";
import { testsInputs } from "../src/utils/testHelpers";

describe("Resident Activities: Should return list of activities IDs", () => {
  it.each(testsInputs)(
    "Can return maximum list of activities",
    ({ activities, output }) => {
      const result = getResidentActivities(activities);
      expect(result).toStrictEqual(output);
    }
  );
});
