"use strict"

/**
My awesome module.
@param input Lorem ipsum.
@param postfix Lorem ipsum.
@example
```
const theModule = require("the-module");
theModule("unicorns");
//=> 'unicorns & rainbows'
```
*/
function theModule(input: string, { postfix = "rainbows" }: { postfix?: string } = {}): string {
	if (typeof input !== "string") {
		throw new TypeError(`Expected a string, got ${typeof input}`)
	}

	return `${input} & ${postfix}`
}

export default theModule

module.exports = theModule
module.exports.default = theModule // eslint-disable-line @typescript-eslint/no-unsafe-member-access
