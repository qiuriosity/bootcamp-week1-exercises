/* In this task, make a madlibs templates story
using JS string template literals. In the story
variable, write out the template of your madlibs
using string variables in the place of certain
nouns, adjectives, and verbs */

/* Variables, i.e.
const noun1 = ______
const verb1 = ______

Change thses values to generate a different story
*/

const firstName = 'Emily'
const hometown = 'Boston'
const favoriteFood = 'rice'

const story = `
Once upon a time, there was a person named ${firstName} who came from ${hometown}.
${firstName} really liked to eat ${favoriteFood}.
One day, ${firstName} ordered enough dishes of ${favoriteFood} from Amazon to last them a whole year.
`

console.log(story)
