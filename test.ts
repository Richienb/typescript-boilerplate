import theModule from "./source"
import test from "ava"

test("main", t => {
	t.is(theModule("unicorns"), "unicorns & rainbows")
})
