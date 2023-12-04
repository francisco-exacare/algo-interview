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

// In scenarios where resident activity data is too large to fit into memory at once, changes in 
// the implementation are required to effectively handle this large dataset.
// How will you change the implementation of your function to work with this large dataset?

// Considerations:
// 1. You may use external storage like disk or a database to store and process data
// 2. Ensure effective merging of results across individual chunks to maintain data integrity and continuity
// 3. Develop strategies to manage activities that might span across multiple chunks to avoid data fragmentation
// 4. You may want to talk about an optimal size for each chunk considering trade-offs between processing efficiency and resource usage
// 5. You can assume that an activity has been received completely when the chunk with the key endTime is received for this activity

// Possible approach:
// Consider a scenario where a generator function chunkedActivityGenerator
// processes resident activities. The function delegates the processing of chunks 
// to a function named processActivities, where the logic and actions performed 
// on these chunks determine the generator's behavior.

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
// You can write as many functions as you need for your implementation
