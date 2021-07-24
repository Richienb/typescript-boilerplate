import test from "ava"
import theModule from "./source/index.js"

test("main", t => {
	t.is(theModule("unicorns"), "unicorns & rainbows")
})
