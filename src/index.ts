import { ResidentActivity } from "./types";

/**
 * Get resident activities based on a set of activities.
 * @param {Array} activities - An array of activities, each represented by an object.
 *   Each activity object should have the following properties:
 *   - id: unique identifier for the activity (number).
 *   - name: name of the activity (string).
 *   - startTime: start time of the activity (number).
 *   - endTime: end time of the activity (number).
 * @returns {Array} - An array of selected activities IDs for the resident in ascending order.
 */
export function getResidentActivities(
  activities: ResidentActivity[]
): number[] {
  // Implementation goes here
  return [];
}



// Bonus: Handling Large Datasets of Resident Activities

// Assume we are getting resident activities as input data that is too large to fit into memory all at once
// How will you change the implementation of your function to work with this large dataset?

// Considerations:
// 1. You may use external storage like disk or a db
// 2. Consider trade-offs with the size of each chunk
// 3. Think about how to effectively merge results across individual chunks
// 4. An activity might be split across chunks

// For example, let's suppose we have the next generator function named chunkedActivityGenerator
// The processing of the activitiesChunks array gets delegated to the processActivities function
// The processActivities function is expected to handle these chunks or elements in some way, so its
// logic and actions performed on these chunks determine the behavior and values produced by the generator

// function* chunkedActivityGenerator() {
//   const activitiesChunks = [
//     { id: 1, name: 'Movie Night' },
//     { id: 1, startTime: 3, endTime: 16 },
//     { id: 2, name: "Reading Club" },
//     { id: 3, name: "Gardening Session" },
//     { id: 2, startTime: 11, endTime: 21 },
//     { id: 3, startTime: 1, endTime: 11 },
//   ]
//   yield* processActivities(activitiesChunks);
// }

// Write some pseudocode with a possible approach and explain your solution
// You can write as many functions as you need for your solution
