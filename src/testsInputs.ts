import { ResidentActivity } from "../src/types";

export interface TestInput {
  activities: ResidentActivity[];
  output: number[];
}

export const testsInputs: TestInput[] = [
  {
    activities: [
      { id: 1, name: "Movie Night", startTime: 3, endTime: 16 },
      { id: 2, name: "Reading Club", startTime: 11, endTime: 21 },
      { id: 3, name: "Gardening Session", startTime: 1, endTime: 11 },
    ],
    output: [2, 3],
  },
  {
    activities: [
      { id: 1, name: "Movie Night", startTime: 1, endTime: 2 },
      { id: 2, name: "Reading Club", startTime: 3, endTime: 4 },
      { id: 3, name: "Gardening Session", startTime: 0, endTime: 6 },
      { id: 4, name: "Social Hour", startTime: 5, endTime: 7 },
      { id: 5, name: "Music Performance", startTime: 8, endTime: 9 },
    ],
    output: [1, 2, 4, 5],
  },
  {
    activities: [
      { id: 1, name: "Gardening Session", startTime: 1, endTime: 3 },
      { id: 2, name: "Tech Workshop", startTime: 2, endTime: 5 },
      { id: 3, name: "Movie Night", startTime: 5, endTime: 8 },
      { id: 4, name: "Social Hour", startTime: 4, endTime: 6 },
    ],
    output: [1, 4],
  },
  {
    activities: [
      { id: 1, name: "Pet Therapy", startTime: 5, endTime: 8 },
      { id: 2, name: "Board Games", startTime: 2, endTime: 5 },
      { id: 3, name: "Tech Support Session", startTime: 1, endTime: 3 },
      { id: 4, name: "Art Exhibition", startTime: 4, endTime: 6 },
      { id: 5, name: "Outdoor Walk", startTime: 7, endTime: 9 },
    ],
    output: [3, 4, 5],
  },
  {
    activities: [
      { id: 1, name: "Reading Club", startTime: 1, endTime: 2 },
      { id: 2, name: "Tech Workshop", startTime: 3, endTime: 4 },
      { id: 3, name: "Art Session", startTime: 1, endTime: 5 },
      { id: 4, name: "Dance Workshop", startTime: 5, endTime: 6 },
      { id: 5, name: "Cooking Demo", startTime: 7, endTime: 9 },
      { id: 6, name: "Trivia Night", startTime: 5, endTime: 9 },
    ],
    output: [1, 2, 4, 5],
  },
  {
    activities: [
      { id: 1, name: "Movie Night", startTime: 4, endTime: 5 },
      { id: 2, name: "Reading Club", startTime: 2, endTime: 6 },
      { id: 3, name: "Gardening Session", startTime: 1, endTime: 3 },
      { id: 4, name: "Social Hour", startTime: 4, endTime: 7 },
      { id: 5, name: "Music Performance", startTime: 5, endTime: 9 },
      { id: 6, name: "Cooking Class", startTime: 3, endTime: 5 },
    ],
    output: [1, 3, 5],
  },
];
