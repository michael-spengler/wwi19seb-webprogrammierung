Feature('harvesting-demo-1');

Scenario('test something', async ({ I }) => {

    I.say('starting the harvesting season')
    // I.amOnPage('https://www.facebook.com/groups/196177820486972/events')
    I.amOnPage('https://www.facebook.com/Hafen49/events/?ref=page_internal')
    
    I.wait(5)
    
    
    let theMagicHTML = await I.grabHTMLFrom('#page');
    
    I.say(theMagicHTML)
    
    console.log(theMagicHTML)
    
    I.say('enjoy the fruits')
});
