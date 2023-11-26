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
