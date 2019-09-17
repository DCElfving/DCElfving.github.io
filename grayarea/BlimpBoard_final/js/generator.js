

let WarningBoard = {
  ID: "Warning",
Issue : ["Encampments", "Climate Crises", "Engaged Citizens", "Bay Area Ethnic Populations", "Leisurployment", "Seismic Hazards"],
Trend: ["are rising faster than the sea level", "have never been higher", "are falling like the redwoods", "are rapidly disappearing", "doubled in the last month"],
Source :["A message from your Neighbors", "A warning from California People's Union", "Public Service Announcement", "Paid for by the National Park Service", "Funded by Google.org", "Brought to you by The Action Brigade" ],
}

let AdBoard = {
  ID: "Ad",
Org: ["ChillCo", "StarMind", "DirtyDutyDepot","Slime.io" ,"RadCoin", "Fortitude, Inc." ],
Products: ["Psychatropic gummies", "Co-living Pop-up Studio", "Cosmic Infrastructure", "Automated Wellness Service", "Personal Widge-Bot Army", "Mac-n-Sneeze"],
Tagline: ["Keep your future intact", "Same day drone delivery available", "Coming soon!", "It powers everything", "for all your data needs"],
}

let Display = [AdBoard, WarningBoard]

let BoardText = document.querySelector (".BoardText");

function Randomer(array) {
  return array[Math.floor(Math.random() * array.length)];
}


function MakeText() {
  let Text = [];
  let choice = Randomer(Display);

  if(choice.ID === "Ad") {
    for (let key in choice) {
      if (key == "Org") {
        Text.push(`<div>${Randomer(choice[key])}</div>`);
      }
      if (key == "Products") {
        Text.push(`<div>${Randomer(choice[key])}</div>`);
      }
      if(key == "Tagline") {
        Text.push(`<div>${Randomer(choice[key])}</div>`);
      }
    }
  }

    if(choice.ID === "Warning") {
        for (let key in choice) {
          if (key == "Issue") {
            Text.push(`<div>${Randomer(choice[key])}</div>`);
          }
          if (key == "Trend") {
            Text.push(`<div>${Randomer(choice[key])}</div>`);
          }
          if (key == "Source") {
            Text.push(`<div>${Randomer(choice[key])}</div>`);
          }
        }
      }
    return Text.join(" \r\n")

  }

BoardText.innerHTML = MakeText();
