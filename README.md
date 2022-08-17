# elmjs-inspect

## Build it

```sh
npm i
npm run build
npm link
```

## Run it

Size contribution of each function

```sh
$ elmjs-inspect elm.js
7.422%: $author$project$Main$update
2.105%: $author$project$Main$interactionEvents
1.514%: $author$project$Component$kindInfo
1.332%: _VirtualDom_diffKeyedKids
# [...]
0.008%: _Scheduler_guid
0.007%: _Basics_e
0.007%: _Debugger_document
0.007%: _Platform_preload
0.007%: _Debugger_element
Range sum: 231878 total: 240946, analyzed 96.237%
```

Size contribution by modules

```sh
$ elmjs-inspect --summary=module elm.js
33.004%: Kernel Code
17.082%: $author$project$Main
6.995%: $author$project$View
6.093%: $elm$core$Dict
# [...]
0.034%: $elm$browser$Browser$Dom
0.032%: $elm$core$Debug
0.021%: $elm$core$Platform
0.019%: $elm$core$Platform$Sub
0.017%: $elm$core$Process
Range sum: 231878 total: 240946, analyzed 96.237%

```

Size contribution by package

```sh
$ elmjs-inspect --summary=package elm.js
37.601%: author/project
33.004%: Kernel Code
12.632%: elm/core
5.022%: elm_community/typed_svg
2.360%: mpizenberg/elm_pointer_events
1.872%: elm/json
1.322%: elm/url
0.649%: elm/html
0.572%: elm_community/list_extra
0.557%: elm/virtual_dom
0.487%: avh4/elm_color
0.120%: elm/browser
0.039%: elm/svg
Range sum: 231878 total: 240946, analyzed 96.237%
```

Size contribution of only the project's modules

```sh
$ elmjs-inspect --summary=project elm.js
58.636%: Dependencies
17.082%: Main
6.995%: View
3.884%: Component
3.668%: Canvas
2.184%: Drag
1.404%: Event
1.105%: Pos
0.674%: Ports
0.326%: Actionbar
0.278%: Vec2
Range sum: 231878 total: 240946, analyzed 96.237%
```
