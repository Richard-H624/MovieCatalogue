const express = require('express');
const mongoose = require('mongoose');
const OneOff = require('./OneOffs');
const app = express();

mongoose.connect('mongodb://localhost:27017/moviesdb');

const OneOffArray = [
  {
    title: "Nightcrawler",
    poster: "https://upload.wikimedia.org/wikipedia/en/d/d4/Nightcrawlerfilm.jpg",
    summary: "Louis Bloom (Jake Gyllenhaal) is a desperate, ambitious drifter in Los Angeles who survives by stealing and hustling for odd jobs. One night, he discovers the world of freelance crime journalism, where “stringers” film violent events—car crashes, fires, shootings—for local TV news stations.  Fascinated, Lou buys a cheap camcorder and police scanner, then begins chasing crime scenes. Ruthless and lacking empathy, he quickly learns that the more graphic and sensational the footage, the more stations will pay. He hires a young, desperate assistant named Rick to help him navigate the city. Lou develops a manipulative relationship with Nina, a news director hungry for shocking footage to boost ratings. He feeds her increasingly gruesome material, and in return, she gives him money, status, and validation. <p> As his ambition grows, Lou begins crossing ethical and legal lines—withholding evidence from police, tampering with crime scenes, and even orchestrating dangerous situations to capture more dramatic footage. In one climactic moment, he withholds information about armed criminals, leading to a deadly shootout that he films in detail. When Rick objects, Lou coldly engineers his assistant’s death during a staged “exclusive” chase, capturing the aftermath on film. He then sells the footage for a massive payout.<p> The film ends with Lou hiring new interns and expanding his business, having fully embraced success built on exploitation, manipulation, and moral emptiness.",
    year: 2014,
    rating: 9.1,
    budget: "$8,000,000",
    earnings: "$50,300,000"
  },
  {
    title: "Captain America: Brave New World",
    poster: "https://upload.wikimedia.org/wikipedia/en/a/a4/Captain_America_Brave_New_World_poster.jpg",
    summary: "Sam Wilson, formerly Falcon and now Captain America, answers a presidential summon by Thaddeus Ross (Harrison Ford), recently elected President. What appears a routine meeting quickly becomes an international crisis. Sam uncovers a sinister global plot orchestrated by Samuel Sterns, whose scheme uses gamma ray poisoning to destabilize Ross’s political credibility, ultimately triggering his transformation into the Red Hulk. Leveraging his heroism and moral compass, Sam dismantles the conspiracy, contributes to Ross’s arrest, and secures the Avengers' revival. The film concludes with Sam paying a visit to Ross in prison, signaling his continued resolve to lead the team. A mid-credits scene teases further threats from a group ominously called 'The Others.'",
    year: 2025,
    rating: 6.7,
    budget: "Budget: $180,000,000",
    earnings: "$415,100,000"
  },
  {
    title: "The Boy and the Heron",
    poster: "https://upload.wikimedia.org/wikipedia/en/4/41/How_Do_You_Live_poster.jpg",
    summary: "During World War II, Mahito, a young boy, loses his mother in a hospital fire. Grieving and displaced, he moves to the countryside with his father, who has remarried Mahito’s aunt, Natsuko. <p> In his new home, Mahito encounters a mysterious grey heron that speaks to him, luring him toward an abandoned tower nearby. The heron insists that Mahito’s mother is still alive and urges him to follow. Though reluctant, Mahito is eventually pulled into a fantastical, dreamlike world inside the tower. <p> Within this realm, Mahito meets strange and magical beings: Parakeet warriors who are both comical and threatening. A younger version of his great-uncle, the architect of the magical world, and Spirits of the dead, awaiting rebirth. <p> The heron (Wilam DaFoe), both mischievous and guiding, helps Mahito navigate the bizarre landscapes of life, death, and memory. Mahito learns that his great-uncle built this world as a sanctuary, but now it is unstable and in need of a successor. Mahito is offered the chance to inherit the role, to create and rule over this alternate reality. <p> Instead, he chooses to return to the real world—embracing its pain, responsibility, and imperfections. By doing so, he accepts the loss of his mother and finds a path toward healing. <p> In the end, Mahito returns to his life with a stronger sense of self and newfound resilience, ready to face the future with his family. The heron, who has been both trickster and mentor, disappears, having guided Mahito through his emotional journey.",
    year: 2023,
    rating: 6.6,
    budget: "<b>Box Office: $294,200,000</b>"
  },
  {
    title: "The Menu",
    poster: "https://upload.wikimedia.org/wikipedia/en/d/db/The_Menu_%282022_film%29.jpg",
    summary: "A young couple, Margot (Anya Taylor-Joy) and Tyler (Nicholas Hoult), travel to a remote island to dine at Hawthorne, an exclusive restaurant run by celebrity chef Julian Slowik (Ralph Fiennes). The guest list includes wealthy elites, critics, and celebrities, each representing privilege, greed, or hypocrisy. <p> As the meticulously curated dinner progresses, the courses grow increasingly disturbing. Chef Slowik reveals the evening is more than just a meal—it’s a carefully staged event where every guest is part of his grand design. He exposes each diner’s moral failings: fraud, exploitation, infidelity, arrogance, and blind obsession with status. <p> Tension escalates when it becomes clear that the menu ends with everyone’s death. Tyler, revealed to have known the outcome in advance, kills himself after being humiliated by Slowik. Margot, however, is different: she isn’t part of the elite world. Sensing her lack of pretension, Slowik allows her to make a choice. <p> Margot cleverly appeals to Slowik’s forgotten humanity by criticizing the pretentiousness of his food and instead asking for a simple cheeseburger. Delighted by her authenticity, Slowik grants her permission to leave while the other diners accept their fates. <p> In the final course, Slowik transforms his restaurant into a grotesque human s’more, immolating himself and his guests in a fiery climax. Margot escapes by boat, eating her cheeseburger as the restaurant burns behind her.",
    year: 2022,
    rating: 8.8,
    budget: "$30,000,000",
    earnings: "$79,600,000"
  },
  {
    title: "No Country for Old Men",
    poster: "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
    summary: "In rural Texas, Llewelyn Moss, a welder and Vietnam veteran, stumbles upon the aftermath of a drug deal gone wrong—bodies scattered, trucks abandoned, and a suitcase containing $2 million in cash. He takes the money, setting off a violent chain of pursuit. <p> Enter Anton Chigurh, a cold, ruthless hitman hired to recover the money. Chigurh is a near-mythic figure: he kills with a captive bolt pistol and makes life-or-death decisions by flipping a coin. His remorseless pursuit of Moss becomes the film’s central tension. <p> Meanwhile, aging sheriff Ed Tom Bell investigates the escalating violence. He is deeply unsettled by the sheer brutality and amorality of the crimes, feeling increasingly out of place in a changing world. Moss tries to protect his wife, Carla Jean, and stay ahead of Chigurh, but he is ultimately killed offscreen by Mexican drug dealers. Later, Chigurh finds Carla Jean and gives her the same coin-flip choice he offers his other victims. When she refuses, saying “the coin has no say,” he kills her anyway—proving his philosophy of fate and inevitability. <p> Chigurh escapes after a random car accident, injured but still alive, disappearing into the world like an unstoppable force. <p> The film ends not with Moss or Chigurh, but with Sheriff Bell retiring, haunted by dreams of his father and resigned to the truth: the violence of the modern world is beyond his comprehension or control.",
    year: 2007,
    rating: 9.8,
    budget: "$25,000,000",
    earnings: "$171,600,000"
  },
  {
    title: "Treasure Planet",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7e/Treasure_Planet_poster.jpg/250px-Treasure_Planet_poster.jpg",
    summary: "Teenager Jim Hawkins dreams of adventure but feels misunderstood by his mother and alienated from the world. His life changes when a dying pirate gives him a mysterious sphere that turns out to be a map to Treasure Planet, a legendary world said to hold the loot of a thousand worlds. <p> Jim joins a space expedition led by the noble Captain Amelia and her stern second-in-command, Mr. Arrow. They hire a crew that secretly includes pirates disguised as sailors, among them the charming but dangerous cyborg John Silver. Silver becomes a father figure to Jim, teaching him life lessons while hiding his true role as the leader of the mutinous pirates. <p> When the crew inevitably mutinies, Jim is torn between loyalty to Silver, who genuinely cares for him, and his duty to protect the treasure. They eventually reach Treasure Planet, which is revealed to be an artificial world designed as a colossal vault. A trap set by its creator causes the planet to collapse. <p> In the climax, Jim and Silver work together to escape, and Jim nearly sacrifices the treasure to save everyone. Silver, recognizing Jim’s potential and growth, chooses to flee with only a small portion of treasure, encouraging Jim to pursue his dreams. Back home, Jim finds new confidence, reconciles with his mother, and sets his sights on a brighter future.",
    year: 2002,
    rating: 8.0,
    budget: "$140,000,000",
    earnings: "$109,600,000"
  },
  {
    title: "Emperor",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Emperor_%28Film%29.jpg/250px-Emperor_%28Film%29.jpg",
    summary: "Set in the aftermath of World War II, the film follows General Bonner Fellers (Matthew Fox), an American officer tasked with a monumental decision: determining whether Emperor Hirohito of Japan should be tried and executed for war crimes, or spared to help stabilize the country. <p> Fellers works under General Douglas MacArthur (Tommy Lee Jones), who leads the U.S. occupation of Japan. While conducting his investigation, Fellers also searches for Aya, a Japanese exchange student he fell in love with before the war. His personal quest runs parallel to his official duties, forcing him to confront both his emotions and his sense of justice. <p> As he interviews Japanese officials, generals, and cultural leaders, Fellers comes to understand the Emperor’s symbolic role in Japan and the delicate balance between punishment and reconciliation. Evidence suggests that Hirohito allowed militarists to drive the nation into war but also played a crucial role in Japan’s surrender, saving countless lives. <p> In the end, Fellers recommends sparing Hirohito, believing executing him would destabilize Japan and hinder peace. MacArthur accepts this advice, meeting Hirohito personally in a historic moment that helps redefine Japan’s future as a peaceful nation. <p> The film closes with Fellers never finding Aya, learning she had died in the bombings—a personal loss paralleling the nation’s tragedy.",
    year: 2012,
    rating: 6.2,
    budget: "$14,900,000"
  },
  {
    title: "Click",
    year: 2006,
    rating: 6.4,
    poster: "https://upload.wikimedia.org/wikipedia/en/b/bd/Click_film.jpg",
    summary: "Michael Newman (Adam Sandler) is a workaholic architect struggling to balance his demanding job with his family life. Frustrated by constant stress, he meets a mysterious inventor named Morty (Christopher Walken), who gives him a universal remote control that can literally control reality, by letting him pause, rewind, fast-forward, and mute life itself. <p> At first, Michael enjoys small perks: skipping arguments, avoiding illness, and fast-forwarding through boring situations. But the remote begins to learn his habits, automatically skipping anything unpleasant like family dinners, illnesses, even years of his life. <p> Michael realizes too late that he’s fast-forwarded through most of his adult life: he misses his children growing up, his marriage falls apart, and his health declines. Though wealthy and professionally successful, he finds himself lonely and estranged from his loved ones. <p> In the climax, Michael, now old and sick, collapses in the rain while chasing his family to beg them not to repeat his mistakes. Morty then reveals himself as the Angel of Death, but also gives Michael one last chance. Michael wakes up in a store at the very moment he first received the remote, realizing the entire ordeal was a vision. <p> Grateful for a second chance, Michael runs home to cherish his wife and kids, determined to prioritize family over work.",
    budget: "$85,000,000",
    earnings: "$268,700,000"
  },
  {
    title: "8 Mile",
    poster: "https://upload.wikimedia.org/wikipedia/en/8/8b/Eight_mile_ver2.jpg",
    summary: "Set in Detroit in 1995, the film follows Jimmy Smith Jr., nicknamed “B-Rabbit” (Eminem), a struggling young white rapper from a poor background. He works at an auto plant while living in a trailer with his mother, and dreams of escaping his bleak circumstances through music. <p> Jimmy is talented but insecure, haunted by self-doubt. After choking in his first freestyle battle at the local club The Shelter, he loses confidence. Still, his friends—especially Future (Mekhi Phifer), who hosts the rap battles—push him to keep trying. <p> Throughout the story, Jimmy struggles with poverty, family tensions, betrayal from friends, and an on-again/off-again relationship with Alex (Brittany Murphy). These challenges fuel his music but also test his resilience. The climax comes when Jimmy finally returns to The Shelter to face off against the rival crew, the Leaders of the Free World. In a powerful final rap battle, he flips the script—preemptively exposing his own flaws and hardships so his opponent has nothing left to attack. His raw honesty and lyrical skill earn the crowd’s respect and secure his victory. <p> In the end, Jimmy turns down help from his friends to celebrate, choosing instead to return to work at the auto plant. The film closes with him walking away alone, suggesting his fight is far from over—but he’s found confidence in his own voice.",
    year: 2002,
    rating: 8.4,
    budget: "$41,000,000",
    earnings: "$242,900,000"
  },
  {
    title: "Thunderbolts",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Thunderbolts%2A_poster.jpg/250px-Thunderbolts%2A_poster.jpg",
    summary: "Set in 2027, after the events of Captain America: Brave New World, Thunderbolts introduces a ragtag team of antiheroes assembled under false pretenses. CIA director Valentina Allegra de Fontaine (Julia Louis-Dreyfus) sends Yelena Belova, Bucky Barnes, Red Guardian, Ghost, Taskmaster, and U.S. Agent into a trap at an O.X.E. facility meant to incinerate them and eliminate evidence of her involvement with a superhuman program. <p> However, instead of dying, they escape and rescue Bob Reynolds, thought dead but revealed as the super-powered Sentry. He is weakened but possesses incredible power. De Fontaine attempts to control him, intending to rebrand him as a new Marvel icon. <p> Things escalate when Sentry transforms into his darker persona, the Void, a manifestation of his trauma. The Void unleashes chaos across New York by trapping people in reality-bending pockets of their worst memories. The Thunderbolts team enters Bob’s mind, confronting his past including his abusive father, his addiction, and his fractured psyche. United, they help Bob reclaim control and dispel the Void. In the aftermath, with de Fontaine exposed, she attempts to reshape public perception by rebranding the team as the New Avengers. Yelena boldly warns Valentina against further betrayal. In a mid-credits scene set 14 months later, the newly minted New Avengers receive a distress signal from an interdimensional spacecraft emblazoned with a “4”, teasing the arrival of the Fantastic Four into Earth-616.",
    year: 2025,
    rating: 6.8,
    budget: "$180,000,000",
    earnings: "$382,400,000"
  },
  {
    title: "Taxi Driver",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/3/33/Taxi_Driver_%281976_film_poster%29.jpg/250px-Taxi_Driver_%281976_film_poster%29.jpg",
    summary: "Travis Bickle (Robert De Niro) is a lonely, mentally unstable Vietnam War veteran living in New York City. He works as a night-shift taxi driver, navigating the city’s dark, crime-ridden streets. Struggling with insomnia, isolation, and a growing sense of moral decay around him, Travis becomes increasingly alienated from society. <p> Travis becomes infatuated with Betsy (Cybill Shepherd), a campaign worker for a presidential candidate, but his awkward attempts at connection fail disastrously, leaving him humiliated and further enraged. Disgusted by what he sees as the city’s corruption and immorality, he spirals into violent fantasies, envisioning himself as a savior who will cleanse the streets. <p> He also becomes fixated on Iris (Jodie Foster), a 12-year-old prostitute under the control of a pimp, Sport (Harvey Keitel). Seeing her as a symbol of innocence corrupted, Travis decides to rescue her through violent means. <p> In a climactic and brutal confrontation, Travis arms himself with guns and attacks Sport and his associates. He kills several people in a bloody shootout but ultimately saves Iris. Severely wounded but alive, Travis survives and returns to his taxi route, with the city appearing to resume its routine around him. The film ends ambiguously, leaving it unclear whether Travis has truly changed or whether the cycle of isolation and obsession will continue.",
    year: 1976,
    rating: 8.2,
    budget: "$1,900,000",
    earnings: "$28,600,000"
  },
  {
    title: "Primer",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Primer_%282004_film_poster%29.jpg/250px-Primer_%282004_film_poster%29.jpg",
    summary: "Primer is a complex, low-budget sci-fi film centered on two engineers, Aaron and Abel, who work for a tech company on side projects in their garage. While tinkering with various inventions, they accidentally create a time machine <p> At first, they experiment cautiously, sending small objects into the past. They quickly realize the device can transport humans, and they begin rewinding time to gain financial advantage, using stock market trades to amass wealth. Initially, everything seems under control, but tensions arise as ethical dilemmas, mistrust, and paranoia take hold. <p> As they manipulate timelines, multiple overlapping versions of themselves emerge, creating confusion and unintended consequences. Attempts to control events only exacerbate chaos. Aaron becomes more cautious, while Abel grows increasingly reckless and secretive. Their friendship deteriorates as they struggle with the moral and practical ramifications of their invention. <p> The film ends ambiguously, with Aaron preparing to continue experimenting with time travel on his own, while Abel’s intentions remain unclear. The timeline has become fractured, leaving the characters, and the audience, unsure of what is real and what is a result of their temporal manipulations.",
    year: 2004,
    rating: 9.2,
    budget: "$7,000",
    earnings: "$841,926"
  },
  {
    title: "Grave Encounters",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Grave-Encounters-Poster-2011.jpg/250px-Grave-Encounters-Poster-2011.jpg",
    summary: "Grave Encounters is a found-footage horror film that follows a team of paranormal investigators from a ghost-hunting reality TV show of the same name. The crew, led by Lance Preston, enters the abandoned Collingwood Psychiatric Hospital, infamous for patient mistreatment and rumored hauntings, to film an episode. <p> Initially, the team treats the investigation as a performance for the cameras, but strange occurrences escalate into real terror. Doors lock on their own, hallways shift unpredictably, and they witness horrifying apparitions of former patients and staff. The hospital seems to bend reality, making it impossible to escape. <p> As the night progresses, the team becomes trapped in an increasingly surreal and hostile environment. One by one, the crew members are possessed, dismembered, or otherwise vanish. Lance discovers footage suggesting that the hospital feeds on the souls of those who enter, and attempts to survive by documenting everything. <p> In the climax, Lance finds himself alone, realizing the hospital has become a temporal and spatial trap. The film ends ambiguously, leaving it unclear whether any of the investigators truly escaped or if the footage found later is evidence of the hospital’s supernatural power.",
    year: 2011,
    rating: 6.4,
    budget: "$129,000",
    earnings: "$5,400,000"
  },
  {
    title: "Final Destination: Bloodlines",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Final_Destination_Bloodlines_%282025%29_poster.jpg/250px-Final_Destination_Bloodlines_%282025%29_poster.jpg",
    summary: "In 1968, Iris Campbell (portrayed by Brec Bassinger as young and Gabrielle Rose as older) experiences a premonition of a catastrophic collapse at the Sky View Restaurant Tower. She prevents the disaster, saving many lives, including that of a young boy named William Bludworth (later portrayed by Tony Todd). However, this act disrupts Death's design, setting off a chain of fatal events targeting the survivors and their descendants. <p> Decades later, in 2024, Stefani Reyes (played by Kaitlyn Santa Juana), Iris's granddaughter, is plagued by recurring nightmares mirroring her grandmother's premonition. Seeking answers, Stefani returns home to find her family and uncovers Iris's notebook detailing Death's plan. Tragically, Iris dies, and Death begins claiming the lives of her descendants in the order they were meant to perish. <p> Stefani and her family attempt to evade Death's design, but their efforts are in vain. In a final twist, Stefani seemingly survives a drowning incident, only to be killed along with her brother Charlie (Teo Briones) in a freak accident involving a derailing train and falling logs. The film concludes with the grim reminder that Death's plan is inescapable.",
    year: 2025,
    rating: 6.1,
    budget: "$50,000,000",
    earnings: "$307,400,000"
  },
  {
    title:"The Happening",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a6/Happening_poster.jpg/250px-Happening_poster.jpg",
    summary: "The Happening is a thriller centered on a mysterious ecological disaster that causes mass suicides across the northeastern United States. People everywhere begin taking their own lives suddenly and violently, seemingly without reason. <p> Elliot Moore (Mark Wahlberg), a high school science teacher, his wife Alma (Zooey Deschanel), and his friend Julian (John Leguizamo) attempt to flee the affected areas. Along the way, they encounter terrified survivors and witness the inexplicable spread of the phenomenon. <p> As panic spreads, Elliot theorizes that the cause is plants releasing a neurotoxin in response to environmental damage by humans—a form of nature’s revenge. They learn that proximity to green spaces can trigger suicidal behavior, forcing them to stay indoors, avoid foliage, and flee urban and rural areas alike. <p> The group faces moral and practical dilemmas: some attempt to escape the phenomenon, others succumb to fear or despair. The story follows their desperate attempts to survive as the catastrophe unfolds across cities and towns. <p> The film ends ambiguously, with the attacks mysteriously ceasing. Humanity survives, but the event remains largely unexplained, leaving lingering questions about humanity’s relationship with nature.",
    year: 2008,
    rating: 4.7,
    budget: "$48,000,000",
    earnings: "$163,400,000"
  },
  {
    title: "Snow White",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Snow_White_%282025_film%29_final_poster.jpg/250px-Snow_White_%282025_film%29_final_poster.jpg",
    summary: "In a kingdom ruled by a benevolent queen, a daughter named Snow White is born during a snowstorm. After the queen's sudden death, the king hastily remarries before embarking on a military campaign. When he disappears, the new queen usurps the throne, revealing herself as an enchantress whose vanity surpasses her beauty. <p> Under the Evil Queen's rule, subjects are either left destitute or conscripted into the royal guard. Fearing that Snow White's beauty will outshine her own, the Queen confines Snow White to the palace, forces her to work as a scullery maid, and consults a Magic Mirror daily who is 'the fairest one of all.' The Mirror always responds in her favor. <p> One day, Snow White sees Jonathan, the leader of a band of bandits, raiding the pantry. When he is sentenced to be tied to the gates, she frees him. That same day, the Magic Mirror deems Snow White as the fairest. The Queen orders the Royal Huntsman to take Snow White into the forest, kill her, and bring her heart back in a jeweled box. Claiming to be an ally of Jonathan's, the Queen tricks Snow White into eating the apple; she then reveals to her stepdaughter that she killed her father. Snow White falls into a death-like sleep, and the Queen retreats to her castle. <p> The miners find her sleeping body upon returning. Having escaped alongside the Huntsman, Jonathan arrives to discover her dead and mournfully kisses her. Snow White awakens and rallies the miners and Jonathan's bandits to overthrow the Evil Queen. <p> Snow White confronts her stepmother, who forcefully goads her to take the throne, placing a diamond dagger into her hand. Snow White refuses to hurt her, reminding the people what the kingdom used to be like under her parents' rule. Moved, the guards turn on the Queen and join the miners, the bandits, the Huntsman, and the civilians. The Queen tries to attack Snow White, but the miners and bandits defend her. The Magic Mirror tells the Queen that Snow White will always be fairer than her due to her kindness and justness. Snow White arrives to see the Queen angrily destroying the Mirror, the source of her powers. As a result, she turns into glass herself and disappears into a vortex while the Magic Mirror repairs itself. With Snow White named the new queen at a grand party, everyone in the kingdom arrives to celebrate.",
    year: 2025,
    rating: 2.2,
    budget: "$240,000,000",
    earnings: "$205,700,000"
  },
  {
    title: "Minecraft",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/A_Minecraft_Movie_poster.jpg/250px-A_Minecraft_Movie_poster.jpg",
    summary: "The story begins with Steve (Jack Black), a doorknob salesman who, as a child, dreamed of exploring a mine. As an adult, he fulfills this dream and discovers the Orb of Dominance and the Earth Crystal, which, when combined, create a portal to the Overworld, a vast, cubic realm where creativity is key to survival. Steve builds a paradise there but soon stumbles upon a portal to the Nether, a hellish world ruled by the gold-obsessed piglin queen Malgosha (voiced by Rachel House). Malgosha imprisons Steve, aiming to use the Orb to control the Overworld. Steve's dog, Dennis, escapes with the Orb and Crystal, hiding them under Steve's bed in the real world. <p> Years later, Garrett 'The Garbage Man' Garrison (Jason Momoa), a former video game champion now running a failing store, acquires Steve's belongings at a storage auction. Among the items, he finds the Orb and Crystal, inadvertently opening a portal to the Overworld. Garrett, along with his niece Natalie (Emma Myers), her younger brother Henry (Sebastian Hansen), and their friend Dawn (Danielle Brooks), are transported into the Overworld. They meet Steve, who becomes their guide as they navigate this new world and seek a way back home.",
    year: 2025,
    rating: 5.8,
    budget: "$150,000,000",
    earnings: "$957,800,000"
  },
  {
    title: "The Waterboy",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Waterboy-poster-0.jpg/250px-Waterboy-poster-0.jpg",
    summary: "Bobby Boucher (Adam Sandler) is a socially awkward, overprotected man who lives with his domineering mother, Helen (Kathy Bates). She has instilled in him a deep fear of germs and the outside world. Bobby works as a waterboy for the South Central Louisiana State University Mud Dogs football team, a low-performing college team. <p>When the team faces tough competition, Bobby’s frustration at their poor performance causes him to unleash surprising strength and aggression on the field during practice. His raw talent is noticed by Coach Klein (Henry Winkler), who realizes Bobby could be the team’s star linebacker. <p> Bobby joins the team as a player, helping turn the Mud Dogs into a formidable force. Along the way, he develops a romantic relationship with Vicki Vallencourt (Fairuza Balk), a cheerleader, and learns to overcome his mother’s strict control. <p> In the climactic football game, Bobby leads the Mud Dogs to victory, confronting both the rival team and his personal insecurities. By the end, he gains independence from his mother, embraces his confidence, and finds love with Vicki.",
    year: 1998,
    rating: 8.3,
    budget: "$23,000,000",
    earnings: "$190,200,000"
  },
  {
    title: "The Martian",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/cd/The_Martian_film_poster.jpg",
    summary: "During a manned mission to Mars, an unexpected dust storm forces the crew of the Ares III mission to evacuate the planet. Astronaut Mark Watney (Matt Damon) is struck by debris and presumed dead. Left behind, he must survive alone on a hostile planet with limited supplies. <p>Using his expertise as a botanist and engineer, Watney begins growing potatoes using Martian soil, human waste, and water he synthesizes from chemical reactions. He also repairs and improvises equipment to maintain communication and sustain life. <p> Back on Earth, NASA discovers that Watney is alive after analyzing satellite images. A rescue plan is devised, involving both the NASA team and his fellow astronauts, who risk their lives to return to Mars. Watney engineers a daring escape by launching himself in a modified spacecraft to rendezvous with the crew in orbit. <p>Through ingenuity, determination, and humor, Watney survives, highlighting human resilience and the power of collaboration. The film ends with him safely returning to Earth and giving a humorous speech about his experiences.",
    year: 2015,
    rating: 7.9,
    budget: "$108,000,000",
    earnings: "$630,600,000"
  },
  {
    title: "Warhorse",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/d/da/War-horse-poster.jpg/250px-War-horse-poster.jpg",
    summary: "Set during World War I, War Horse follows the journey of a horse named Joey, from his idyllic upbringing on a rural English farm to the battlefields of Europe. <p> Albert Narracott (Jeremy Irvine), a young boy, forms a deep bond with Joey, training and caring for him. When Joey is sold to the cavalry, Albert is heartbroken but promises to find him again. <p> Joey experiences the brutality of war, serving in the cavalry, with British soldiers, and later captured by German forces. Despite the horrors he witnesses, he forms bonds with various humans along the way, including soldiers who treat him with kindness. <p> Albert, determined to reunite with Joey, enlists in the army and eventually finds him amidst the chaos of war. Their reunion is poignant, emphasizing loyalty, love, and resilience. The film concludes with Joey returning to the Narracott farm, symbolizing hope and the enduring power of friendship.",
    year: 2011,
    rating: 3.8,
    budget: "$66,000,000",
    earnings: "$177,600,000"
  },
  {
    title: "Movie 43",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Movie_43_poster.jpg/250px-Movie_43_poster.jpg",
    summary: "Movie 43 is an anthology comedy composed of a series of interconnected vignettes, each telling a bizarre, gross-out, or darkly humorous story. The segments are tied together by a framing narrative in which a frazzled young man (Gregg Turkington) pitches outrageous movie ideas to a Hollywood producer. <p> The film features over 20 segments, each aiming for shock value, raunchy humor, or absurdity rather than traditional narrative cohesion. The cast includes well-known actors like Hugh Jackman, Kate Winslet, Emma Stone, Gerard Butler, Anna Faris, Richard Gere, and Halle Berry, among many others, often playing exaggerated or grotesque versions of themselves.",
    year: 2013,
    rating: 1.0,
    budget: "$6,000,000",
    earnings: "$32,400,000"
  },
  {
    title: "Dragonball Evolution",
    poster: "https://upload.wikimedia.org/wikipedia/en/b/bf/Dragonball_Evolution_%282009_film%29.jpg",
    summary: "Dragonball Evolution is a live-action adaptation loosely based on the Dragon Ball manga and anime series. The story follows Goku (Justin Chatwin), a young martial artist living a seemingly ordinary life, who discovers he is the descendant of a legendary warrior. <p> Goku meets Bulma (Emmy Rossum), a scientist searching for the Dragon Balls, mystical orbs that, when gathered, can summon the dragon Shenron to grant any wish. Goku learns that the evil Lord Piccolo (James Marsters) seeks the Dragon Balls to take over the world and must stop him. <p> Trained by Master Roshi (Chow Yun-fat), Goku learns to harness his strength and martial arts skills. With Bulma and allies like Yun (Jamie Chung), he embarks on a quest to retrieve the Dragon Balls before Piccolo, culminating in a battle to prevent Piccolo from achieving ultimate power. <p> Ultimately, Goku defeats Piccolo, restores balance, and embraces his destiny as a hero, though the film’s plot condenses and alters many elements from the original manga.",
    year: 2009,
    rating: 2.3,
    budget: "$30,000,000", 
    earnings: "$56,500,000"
  },
  {
    title: "Brokeback Mountain",
    poster: "https://upload.wikimedia.org/wikipedia/en/a/a1/Brokeback_mountain.jpg",
    summary: "Brokeback Mountain is a romantic drama that follows the complex relationship between Ennis Del Mar (Heath Ledger) and Jack Twist (Jake Gyllenhaal), two young men who meet while working as shepherds on Brokeback Mountain in Wyoming during the 1960s. <p> Over the course of the summer, they develop a deep romantic and sexual bond. After the season ends, they part ways, returning to their separate lives—Ennis marries Alma (Michelle Williams) and has children, while Jack marries Lureen (Anne Hathaway) and also starts a family. <p> Despite their marriages, Ennis and Jack continue a secret, decades-long affair, meeting occasionally in isolated locations. Their relationship is strained by societal prejudice, personal fear, and the impossibility of living openly as a couple. <p> Tragedy strikes when Jack dies under mysterious circumstances, leaving Ennis to reflect on their love, the life they could never openly share, and the lingering sense of loss. The story closes on a poignant note of memory, regret, and the enduring power of love constrained by societal norms.",
    year: 2005,
    rating: 9.8,
    budget: "$14,000,000",
    earnings: "$179,100,000"
  },
  {
    title: "Collateral",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Collateral_%28Movie%29.jpg/250px-Collateral_%28Movie%29.jpg",
    summary: "Collateral is a thriller set over the course of one night in Los Angeles. Max Durocher (Jamie Foxx) is a mild-mannered, aspiring cab driver who dreams of opening his own limousine business. One night, he picks up Vincent (Tom Cruise), a charismatic and professional hitman, who hires him to drive around the city while he completes a series of assassinations. <p> As the night progresses, Max realizes that Vincent’s passengers are all targets. Trapped in his cab, Max struggles to protect the innocent and find a way to stop Vincent. The tension escalates as Max becomes increasingly desperate, and Vincent exhibits ruthless precision and calm menace in carrying out his contracts. <p> The climax occurs when Max manages to confront Vincent in a high-stakes confrontation, culminating in a rooftop shootout. Max survives and escapes, having learned courage, quick thinking, and the value of taking control of his life.",
    year: 2004,
    rating: 9.0,
    budget: "$65,000,000",
    earnings: "$220,200,000"
  },
  {
    title: "Super Mario Bros.",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/94/SMB_Movie_Poster.jpg/250px-SMB_Movie_Poster.jpg",
    summary: "Super Mario Bros. is a live-action sci-fi adventure loosely based on the Nintendo video game series. The story follows brothers Mario (Bob Hoskins) and Luigi (John Leguizel) from Brooklyn, New York, who are plumbers by trade. <p> The brothers become embroiled in a parallel universe known as Dinohattan, a dystopian city where humans evolved from dinosaurs. The evil dictator King Koopa (Dennis Hopper) rules this world and seeks to merge it with the human world using a magical meteorite fragment. <p> Mario and Luigi rescue Princess Daisy (Samantha Mathis), a young woman who holds the key to Koopa’s plan. Together, they navigate the dangerous city, evade Koopa’s henchmen, and attempt to stop him from using the fragment to take over both worlds. <p> After numerous confrontations and a climactic showdown in Koopa’s palace, Mario defeats Koopa, saves Daisy, and prevents the worlds from merging. The film ends with the heroes returning to Brooklyn, having preserved the safety of both universes.",
    year: 1993,
    rating: 1.7,
    budget: "$42,000,000",
    earnings: "$38,900,000"
  },
  {
    title: "War of the Worlds",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/War_of_the_Worlds_2025_official_poster.jpg/250px-War_of_the_Worlds_2025_official_poster.jpg",
    summary: "Will Radford (Ice Cube), a government surveillance analyst, discovers that alien invaders are harvesting Earth's data by targeting global data centers. As the invasion progresses, Radford learns that his son, Dave, is the hacker known as 'Disruptor,' who has uncovered a secret government program called 'Goliath.' The program, intended to protect humanity, inadvertently aids the aliens. With the help of his family and a NASA scientist, Radford develops a virus to disable the alien machines. In a final confrontation, they successfully shut down the alien systems, saving Earth.",
    year: 2025,
    rating: 2.3,
    budget: ""
  },
  {
    title: "Jiu Jitsu",
    poster: "https://upload.wikimedia.org/wikipedia/en/3/36/Jiu_Jitsu_film_poster.png",
    summary: "Jiu Jitsu (2020) is a sci-fi martial arts film directed by Dimitri Logothetis, starring Alain Moussi, Nicolas Cage, Tony Jaa, and Frank Grillo. The story centers on an ancient order of jiu-jitsu fighters who battle a malevolent alien invader every six years. When their leader, Jake Barnes (Moussi), is defeated and suffers amnesia, the fate of Earth hangs in the balance. With the help of fellow warriors and mentor Wylie (Cage), Jake must regain his skills to confront the alien threat.",
    year: 2020,
    rating: 1.7,
    budget: "$25,000,000",
    earnings: "$99,924"
  },
  {
    title:"V for Vendetta",
    poster: "https://upload.wikimedia.org/wikipedia/en/9/9f/Vforvendettamov.jpg",
    summary: "Set in a dystopian future Britain, the country is under the oppressive control of a fascist government led by High Chancellor Adam Sutler (John Hurt). Civil liberties are severely restricted, and dissent is violently suppressed. <p> The story follows Evey Hammond (Natalie Portman), a young woman who is saved from government agents by V (Hugo Weaving), a mysterious masked vigilante. V, wearing a Guy Fawkes mask, is a highly skilled fighter and tactician who seeks to topple the totalitarian regime. <p> V embarks on a campaign of symbolic attacks against the government, targeting officials and institutions that uphold the regime. He encourages the population to resist oppression and reclaim their freedom. Over time, Evey becomes V’s ally and learns the true depth of his ideals, ultimately embracing his mission. <p> The climax occurs on November 5th, when V orchestrates a mass uprising and symbolic destruction of Parliament, fulfilling his vision of inspiring societal change. V sacrifices himself, but his legacy endures through Evey and the people he has inspired.",
    year: 2005,
    rating: 9.0,
    budget: "$50,000,000",
    earnings: "$134,700,000"
  },
  {
    title: "Scarface",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Scarface_-_1983_film.jpg/250px-Scarface_-_1983_film.jpg",
    summary: "The film follows the rise and fall of Tony Montana (Al Pacino), a Cuban refugee who arrives in Miami during the 1980 Mariel boatlift. Ambitious and ruthless, Tony quickly climbs from small-time criminal jobs to becoming a major drug lord in the cocaine trade. <p>Working alongside his best friend Manny Ribera (Steven Bauer), Tony eliminates rivals and seizes opportunities, eventually overthrowing his boss Frank Lopez. He builds a vast cocaine empire, marries Lopez’s girlfriend Elvira Hancock (Michelle Pfeiffer), and enjoys immense wealth and power. <p>However, Tony’s paranoia, violent impulses, and drug addiction begin to erode his empire. His obsession with controlling his younger sister Gina drives a wedge between him and Manny, ending in tragedy when Tony kills Manny in a jealous rage. <p>Tony’s downfall comes when he refuses to carry out an assassination for powerful Bolivian drug lord Alejandro Sosa, leading Sosa to retaliate. In the climactic finale, Tony makes a last stand in his mansion, taking on dozens of armed attackers in a bloody shootout. Despite his ferocity, Tony is ultimately overwhelmed and killed, falling into a fountain beneath a statue reading 'The World Is Yours.'",
    year: 1983,
    rating: 9.6,
    budget: "$23,500,000",
    earnings: "$66,400,000"
  },
  {
    title: "Event Horizon",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Event_horizon_ver1.jpg/250px-Event_horizon_ver1.jpg",
    summary: "In 2047, a rescue crew aboard the spaceship Lewis and Clark is sent to investigate the Event Horizon, a vessel that vanished years earlier near Neptune. The Event Horizon had been equipped with an experimental gravity drive designed to create artificial black holes for faster-than-light travel. <p> When the ship reappears, the crew, led by Captain Miller (Laurence Fishburne) and accompanied by the drive’s creator, Dr. William Weir (Sam Neill), finds it derelict, with signs of extreme violence and horror aboard. <p> As they explore, the crew experiences terrifying visions that prey on their deepest fears and guilt. It’s revealed that the Event Horizon’s gravity drive opened a portal not to another star system, but to a hellish dimension of pure chaos and suffering, and the ship itself has become a malevolent, sentient force. <p> Dr. Weir, corrupted by the ship, descends into madness and tries to force the crew to join him in embracing the “other dimension.” The survivors fight to destroy the ship, but many perish. In the end, only a few crew members escape as the Lewis and Clark is destroyed, while the Event Horizon remains a lingering cosmic horror.",
    year: 1997,
    rating: 7.6,
    budget: "$60,000,000",
    earnings: "$42,000,000"
  },
  {
    title: "Fear and Loathing in Las Vegas",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/FandlinLV.jpg/250px-FandlinLV.jpg",
    summary: "The film follows journalist Raoul Duke (Johnny Depp) and his lawyer, Dr. Gonzo (Benicio del Toro), on a drug-fueled trip to Las Vegas in the early 1970s. Initially, Duke is assigned to cover a desert motorcycle race, but the assignment quickly spirals into a chaotic odyssey of excess, paranoia, and surreal experiences. <p>Armed with a car trunk full of every drug imaginable, Duke and Gonzo drift from one bizarre encounter to another, hallucinating wildly in casinos, hotels, and bars. They clash with law enforcement, tourists, and locals while indulging in escalating amounts of alcohol and narcotics. <p>Beneath the psychedelic madness lies a deeper reflection on the death of the 1960s counterculture and the false promises of the American Dream. Duke’s narration critiques a society that traded hope and freedom for greed and consumerism, using Las Vegas as a metaphor for cultural decay. <p>By the end, Duke leaves Las Vegas disillusioned, still chasing the fleeting 'wave' of the 1960s, knowing it has already receded.",
    year: 1998,
    rating: 7.7,
    budget: "$18,500,000",
    earnings: "$13,700,000"
  },
  {
    title: "Borderlands",
    poster: "https://upload.wikimedia.org/wikipedia/en/7/7c/Borderlands_Teaser_Poster.jpg",
    summary: "On the lawless planet Pandora, infamous outlaw Lilith returns to find Atlas’s missing daughter, joining forces with a team of misfits: Roland, Tiny Tina, Krieg, Tannis, and the wisecracking robot Claptrap. Together, they battle ruthless bandits and corporate armies to stop Atlas from unlocking an ancient alien vault capable of destroying the world. Amid chaos and betrayal, Lilith must confront her past and unleash her hidden powers to save Pandora from annihilation.",
    year: 2024,
    rating: 1.2,
    budget: "$120,000,000",
    earnings: "$33,000,000"
  },
  {
    title: "Cats",
    poster: "https://upload.wikimedia.org/wikipedia/en/c/cf/Cats_2019_poster.jpg",
    summary: "lmao",
    year: 2019,
    rating: 0,
    budget: "$95,000,000",
    earnings: "$75,500,000"
  },
  {
    title: "Ice Road",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/8/8f/TheIceRoad.jpeg/250px-TheIceRoad.jpeg",
    summary: "The Ice Road is a high-stakes action thriller starring Liam Neeson as Mike McCann, a tough ice-road truck driver. After a remote diamond mine in northern Canada suffers a tunnel collapse, trapping dozens of miners with dwindling oxygen, a risky rescue mission is launched. Mike, his brother Gurty (a veteran with PTSD and speech issues), veteran trucker Jim Goldenrod, driver Tantoo (whose brother is among the trapped miners), and an insurance actuary named Varnay are recruited to haul vital equipment.  Which includes a massive, heavy well-head; over fragile, thinning ice roads to reach the mine before it’s too late. Along the way, they battle harsh weather, cracking ice, vehicle failures, and betrayal from within, as they also uncover that the mining company may be concealing negligence. Despite the odds, Mike and his companions push forward to save the miners and expose the truth",
    year: 2021,
    rating: 2.8,
    budget: null,
    earnings: "$7,500,000"
  },
  {
    title: "Superman - James Gunn Version",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Superman_%282025_film%29_poster.jpg/250px-Superman_%282025_film%29_poster.jpg",
    summary: "Superman (2025) reboots the Man of Steel’s story under director James Gunn. It follows a young Clark Kent (David Corenswet) balancing life as a reporter in Metropolis and his role as Superman. When Lex Luthor (Nicholas Hoult) manipulates the world into distrusting Superman by framing him in an international conflict, Clark must confront both human fear and his alien heritage. With help from Lois Lane, Krypto, and other heroes, Superman restores hope and reaffirms his place as Earth’s greatest protector.",
    year: 2025,
    rating: 2.9,
    budget: "$225,000,000",
    earnings: "$615,800,000"
  }
]

mongoose.connection.once('open', () => {
  // Seed the database ONCE, then comment out or remove after first run
  OneOff.deleteMany({}).then(() => {
    OneOff.insertMany(OneOffArray)
      .then(() => console.log("One-off movies seeded!"))
      .catch(err => console.error(err));
  });

  // API endpoint for one-off movies
  app.get('/api/oneoffs', async (req, res) => {
    const movies = await OneOff.find();
    res.json(movies);
  });

  app.listen(3000, () => console.log('Server running on port 3000'));
});