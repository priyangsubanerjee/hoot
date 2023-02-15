const eventsParent = document.getElementById("eventsConatiner");

const events = [
  {
    image: "../images/musicEvent.svg",
    name: "Music event",
    date: "12/10/2023",
  },
  {
    image: "../images/chessEvent.svg",
    name: "NY Chess Championship",
    date: "12/10/2023",
  },
  {
    image: "../images/chessKnockout.svg",
    name: "Chess Knockout Games",
    date: "12/10/2023",
  },
];

function appendEvent(event) {
  const elem = `
  <a href="#linkToEvent">
    <div class="event">
        <img src=${event.image} alt="" />
        <div class="eventDescription">
        <h3>${event.name}</h3>
        <p>${event.date}</p>
        </div>
        <iconify-icon icon="material-symbols:arrow-forward-ios-rounded"></iconify-icon>
    </div>
    </a>`;

  eventsParent.insertAdjacentHTML("beforeend", elem);
}

events.forEach((event) => {
  appendEvent(event);
});
