import { boot, sleep } from '/boot.js'

load.setup(1, 0, 1, 1)

export const je = new Naghoom("dashboard")

boot()

// load.side_bar_id .. fast access
export const _side_bar_id_ = load.side_bar_id




import { app, _reset_side_bar_, fast_control } from '/dashboard/app.js'

_reset_side_bar_ ()

app.head()

app.welcome()

app.balance.view()

app.logs.view([{type: "done", status: false, date: "45:87 23.5.2022"}])

for (var i=0; i< 10; i++)
	app.logs.append({id: i+1, type: "withdraw", status: true, date: "15:04 03.03.2026"})