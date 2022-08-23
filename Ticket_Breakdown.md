# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Considerations: Task estimation includes unit test cases too.

- Add custom id column in agents db table, for custom id to internal id mapping
 Acceptance criteria: Agent table should have a new column with the title as 'CID'
 Estimate: 1

Guess: Either we can update the existing api of report generation or create a new api for the same
- Create an api to generate the report with custom agent id
 Acceptance criteria: 
 Estimate: 3
=
- Add custom id field on agent onboarding screen and edit agent pages
 Acceptance criteria: Add an input field on the below screens: 
 1. Agent onboarding screen 
 2. Edit agent details screen
 Estimate:1

Guess: if any agent onboarding api is present, then the below task should be create
- Update saveAgentDetail api to add custom id field in the payload
 Acceptance criteria: saveAgentDetails should accept a custom ID field in the payload
 Estimate: 1
