import { boot } from '/boot.js'

load.setup(1, 0, 1, 1)

export const je = new Naghoom("dashboard")

boot()

// load.side_bar_id .. fast access
export const _side_bar_id_ = load.side_bar_id




import { _reset_side_bar_ } from '/dashboard/app.js'

_reset_side_bar_ ()