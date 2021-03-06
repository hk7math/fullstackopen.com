0.4: new note

![](https://www.websequencediagrams.com/files/render?link=M6zQDTTgt7uyRIUVgq40htBQoesCV0Q2AxhjI4coUvmHfpdzy5ta0R6gAyVLVYxC)

```UML
note over browser:
user inputs note and save
end note

browser->server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note
server-->browser: HTTP Status Code 302 Redirect to /note
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/notes
server-->browser: HTML-code
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
server-->browser: main.css
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.js
server-->browser: main.js

note over browser:
browser starts executing js-code
that requests JSON data from server 
end note

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json
server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

note over browser:
browser executes the event handler
that renders notes to display
end note
```

0.5: Single page app

![](https://www.websequencediagrams.com/files/render?link=CrXo9aD13BrpKgmwQYYMeyUT3VL9JGvR4nvKip0BNGnaskTnN0ggcCH7GPybY3AH)

```
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/spa
server-->browser: HTML-code
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.css
server-->browser: main.css
browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/main.js
server-->browser: spa.js

note over browser:
browser starts executing js-code
that requests JSON data from server 
end note

browser->server: HTTP GET https://fullstack-exampleapp.herokuapp.com/data.json
server-->browser: [{ content: "HTML is easy", date: "2019-05-23" }, ...]

note over browser:
browser executes the event handler
that renders notes to display
end note
```

0.6: New note

![](https://www.websequencediagrams.com/files/render?link=oBTHKqcAHmPHVbn7lLzZL7EnD9o1GAk84RF88f9imclMFJDj1SibFw8hDR2OPmt3)

```
note over browser:
user inputs a new note and click save
end note

note over browser:
browser starts executing js-code
that handles form submit
end note

note over browser:
a new note is created from input value and date
then pushed to the existing array of notes
end note

note over browser:
the list of notes is redrawn without reloading
end note

browser->server: HTTP POST https://fullstack-exampleapp.herokuapp.com/new_note_spa
server-->browser: HTTP Status Code 201 Created
```
