
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:4000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('If draw displays choices', async () => {
    const draw = await driver.findElement(By.id('draw')).click();
    const choices = await driver.findElement(By.id('choices'));
    const choicesDisplayed = await choices.isDisplayed()
    expect(choicesDisplayed).toBe(true)
})

test('If add to duo button displays player duo',async () => {
    const draw = await driver.findElement(By.id('draw')).click();
    const choices = await driver.findElement(By.id('choices'));
    const add = await driver.findElement(By.className('bot-btn')).click();
    const added = await driver.findElement(By.id('player-duo'));
    const playerDuo = await added.isDisplayed()
    expect(playerDuo).toBe(true)
    
})