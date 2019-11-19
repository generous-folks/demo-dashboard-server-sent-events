const evtSource = new EventSource('sse.php');
const eventList = document.querySelector('ul');

evtSource.onmessage = function(e) {
  const newElement = document.createElement("li");

  newElement.textContent = "message: " + e.data;
  eventList.appendChild(newElement);
}
