export interface Options {
	/**
	Lorem ipsum.
	@default rainbows
	*/
	postfix?: string
}

/**
My awesome module.

@param input Lorem ipsum.
@param postfix Lorem ipsum.

@example
```
import theModule from "the-module"

theModule("unicorns")
//=> 'unicorns & rainbows'
```
*/
export default function theModule(input: string, { postfix = "rainbows" }: Options = {}): string {
	if (typeof input !== "string") {
		throw new TypeError(`Expected a string, got ${typeof input}`)
	}

	return `${input} & ${postfix}`
}
