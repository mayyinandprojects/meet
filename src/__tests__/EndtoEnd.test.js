import puppeteer from "puppeteer";

describe("show/hide event details", () => {
  let browser;
  let page;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: false,
      slowMo: 250, // slow down by 250ms,
      timeout: 0, // removes any puppeteer/browser timeout limitations (this isn't the same as the timeout of jest)
    });
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  afterAll(() => {
    browser.close();
  });
  //Feature 2: Show/Hide Event Details
  test("An event element is collapsed by default", async () => {
    const eventDetails = await page.$(".event .event-details");
    expect(eventDetails).toBeNull();
  });
  //Feature 2: Show/Hide Event Details
  test("User can expand an event to see details", async () => {
    await page.click(".event .details-button");
    const eventDetails = await page.$(".event .event-details");
    expect(eventDetails).toBeDefined();
  });
  //Feature 2: Show/Hide Event Details
  test("User can collapse an event to hide details", async () => {
    await page.click(".event .details-button");
    const eventDetails = await page.$(".event .event-details");
    expect(eventDetails).toBeNull();
  });
  //feature 1 Filter Events By City
  test("Show 32 events by default when no number is specified", async () => {
    // Select the list of event items
    const eventElements = await page.$$(".event");

    // Assert the number of events is 32
    expect(eventElements.length).toBe(32);
  });
  //feature 1 Filter Events By City
  test("User can change the number of events displayed", async () => {
    // Open the settings to change the number of events
    const numberOfEventsInput = await page.$("#number-of-events-input");

    // Focus on the input field and clear its value
    await numberOfEventsInput.click({ clickCount: 3 }); // Select all text
    await page.keyboard.press('Backspace'); // Clear the selected text

    // Set the number of events to 10
    await numberOfEventsInput.type("10", { delay: 100 });

    // Wait for the event list to update
    await page.waitForSelector(".event");

    // Get the updated list of events
    const eventElements = await page.$$(".event");

    // Assert the number of events is updated to 10
    expect(eventElements.length).toBe(10);
  });
  //feature 1 Filter Events By City
  test("Expand and collapse event details", async () => {
    // Ensure that there is at least one event to interact with
    const eventElements = await page.$$(".event");
    expect(eventElements.length).toBeGreaterThan(0);

    // Click the "Show details" button for the first event
    const showDetailsButton = await eventElements[0].$("button.details-button");
    await showDetailsButton.click();

    // Wait for the details to be visible
    await page.waitForSelector(".event-details");

    // Verify that the event details are visible
    const eventDetails = await eventElements[0].$(".event-details");
    expect(eventDetails).not.toBeNull();

    // Click the button again to collapse the event details
    await showDetailsButton.click();

    // Verify that the event details are hidden
    await page.waitForSelector(".event-details", { hidden: true });
  });
});

