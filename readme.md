# Daily Activities Organization for Resident in a Living Home

## Problem Statement

You are working with the owner of a brand new assisted living community and he asks you to help him with the implementation of a new feature to assist residents in organizing their daily activities.

The objective is to determine the most efficient schedule by selecting the maximum number of activities that do not overlap.

## Objective

The goal is to implement a function, `getResidentActivities`. This one receives an array of activities and each activity is represented by an object with properties like `id`, `name`, `startTime`, and `endTime`.

## Input

The function takes an array of activities, where each activity is represented by an object with the following properties:

- id (number or string): Unique identifier for the activity.
- name (string): Name of the activity.
- startTime (integer): Start time of the activity.
- endTime (integer): End time of the activity.

## Output

The function should return an array of selected activities IDs for the resident in ascending order (smallest to largest).

## Constraints

- The input activities are non-empty.
- The input activities don't follow any order of time in particular.
- The start and end times of activities are non-negative integers.

## Examples

**Input**

| id  | name              | startTime | endTime |
| --- | ----------------- | --------- | ------- |
| 1   | Gardening Session | 1         | 3       |
| 2   | Tech Workshop     | 2         | 5       |
| 3   | Movie Night       | 5         | 8       |
| 4   | Social Hour       | 4         | 6       |

**Output**: [1, 4]

**Explanation**: A maximum of two activities can be performed. The activity with ID 1 is assigned and it starts at 1 and finishes at 3. The activity with ID 2 can't be assigned since it begins at 2, and during that time the resident is still in the activity with ID 1. At 3, the resident will be assigned to the activity that starts at the nearest time, which is the activity with ID 4 that starts at 4. The activity with ID 3 can't be assigned since it begins at 5, and during that time the resident is still in the activity with ID 4. At 6 the resident is out of the activity with ID 4 and there aren't more activities that start after that time.

**Input**

| id | name               | startTime | endTime |
|----|--------------------|-----------|---------|
| 1  | Movie Night        | 3         | 16      |
| 2  | Reading Club       | 11        | 21      |
| 3  | Gardening Session  | 1         | 11      |

**Output**: [2, 3]

**Explanation**: A maximum of two activities can be performed. The activity with ID 3 is assigned and it starts at 1 and finishes at 11. The activity with ID 1 can't be assigned since it begins at 3, and during that time the resident is still in the activity with ID 3. At 11, the resident will be assigned to the activity that starts at the nearest time, which is the activity with ID 2 that starts at 11. At 21 the resident is out of the activity with ID 2 and there aren't more activities that start after that time.
