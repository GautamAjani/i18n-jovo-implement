'use strict';

const { App } = require('jovo-framework');
const { Alexa } = require('jovo-platform-alexa');
const { GoogleAssistant } = require('jovo-platform-googleassistant');
const { JovoDebugger } = require('jovo-plugin-debugger');
const { FileDb } = require('jovo-db-filedb');

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const app = new App();

app.use(
  new Alexa(),
  new GoogleAssistant(),
  new JovoDebugger(),
  new FileDb()
);

// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
  LAUNCH() {

    return this.toIntent('HelloWorldIntent');
  },

  HelloWorldIntent() {
    let speech = this.t('HelloWorldIntent.welcome')
    let reprompt = this.t('HelloWorldIntent.reprompt')
    this.ask(speech, reprompt);
  },

  MyNameIsIntent() {
    let speech = this.t('MyNameIsIntent.speech')
    this.tell(speech);
  },
});

module.exports = { app };
