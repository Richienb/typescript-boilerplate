import test from "ava"
import theModule from "./source"

test("main", t => {
	t.is(theModule("unicorns"), "unicorns & rainbows")
})
