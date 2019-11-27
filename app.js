const evtSource = new EventSource('http://localhost:5000');

evtSource.onmessage = function(e) {
    console.log("Event --> ", e)
}
