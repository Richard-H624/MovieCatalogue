const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/moviesdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Define MovieSeries schema
const movieSeriesSchema = new mongoose.Schema({
  name: String,
  episodes: [{
    title: String,
    poster: String,
    summary: String,
    rating: Number,
    budget: String,
    earnings: String
  }]
});

const MovieSeries = mongoose.model('MovieSeries', movieSeriesSchema);

const movieSeriesArray = [ 
{
    name: "Taken",
    episodes: [
        {title: "Taken" , poster: "https://media1.tenor.com/m/UGqUmUX9b8MAAAAd/taken-fence.gif", summary: "The Taken trilogy stars Liam Neeson as Bryan Mills, a retired CIA operative with a particular set of skills which includes surveillance, combat, and interrogation, which he uses to protect his family when they are targeted by criminals. The series is known for its high-intensity action, revenge-driven plots, and Neeson’s iconic line: “I will find you, and I will kill you.”", rating: 6.3, budget: "Budget: $118,000,000", earnings: "Earnings: $929,451,150"},
        {title: "Taken 1 (2008)", poster: "https://upload.wikimedia.org/wikipedia/en/e/ed/Taken_film_poster.jpg", summary: "The first film introduces Bryan Mills (Liam Neeson), a retired CIA operative with a 'particular set of skills.' When his daughter Kim is kidnapped in Paris by an Albanian human trafficking ring, Mills embarks on a relentless mission to rescue her. Using his expertise in combat, surveillance, and interrogation, he tracks down the kidnappers, dismantles the trafficking network, and saves Kim.", rating: 7.5, budget: "Budget: $25,000,000", earnings: "Earnings: $145,000,000"},
        {title: "Taken 2 (2012)", poster: "https://lumiere-a.akamaihd.net/v1/images/taken2_584x800_f_0f4ec2ba.jpeg?region=0%2C0%2C584%2C800", summary: "Set in Istanbul, the sequel follows Bryan, Kim, and his ex-wife Lenore. The family members of the criminals Mills killed in the first film seek revenge. Bryan and Lenore are kidnapped, but Kim escapes. Bryan uses his resourcefulness to guide Kim in helping him escape captivity, turning the tables on the captors. Once free, he must rescue Lenore and stop the Albanians’ vendetta.", rating: 6.1, budget: "Budget: $45,000,000", earnings: "Earnings: $139,000,000"},
        {title: "Taken 3 (2014)", poster: "https://lumiere-a.akamaihd.net/v1/images/taken3_584x800_9d825922.jpeg?region=0%2C0%2C584%2C800", summary: "The third installment shifts away from kidnappings. Instead, Bryan is framed for the brutal murder of his ex-wife, Lenore. On the run from the authorities, including Inspector Franck Dotzler, Bryan must use his intelligence and combat skills to uncover the real killers, protect his daughter, and clear his name.", rating: 5.3, budget: "Budget: $48,000,000", earnings: "Earnings: $89,260,000"}
    ]
    },
    {
    name: "Friday the 13th",
    episodes: [
        {title: "Friday the 13th", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxGrMeuixSmHsrjVFhcU8evw9uGrjqASA-g&s", summary: "The Friday the 13th franchise follows the bloody legacy of Jason Voorhees, a boy who drowned at Camp Crystal Lake due to negligent counselors. After his mother’s vengeful murder spree and death, Jason emerges as a relentless killer, avenging her by slaughtering anyone who trespasses on his territory. Over the decades, Jason evolves from a reclusive woodsman into an undead, supernatural force by stalking victims at camps, cabins, city streets, and even outer space. Across twelve films, the series becomes a mix of slasher horror, dark humor, and unstoppable carnage, cementing Jason as one of cinema’s most iconic and enduring horror villains.", rating: 6.3, budget: "Budget: $80,900,000", earnings: "Earnings: $468,240,000"},
        {title: "Friday the 13th (1980)", poster: "https://upload.wikimedia.org/wikipedia/en/2/2c/Friday_the_13th_%281980%29_theatrical_poster.jpg", summary: "A group of counselors preparing to reopen Camp Crystal Lake are stalked and murdered. The killer is revealed to be Pamela Voorhees, avenging her son Jason, who drowned years earlier. Alice, the final girl, decapitates her.", rating: 7.7, budget: "Budget: $550,000", earnings: "Earnings: $39,760,000"},
        {title: "Friday the 13th Part 2 (1981)", poster:"https://upload.wikimedia.org/wikipedia/en/b/bc/Friday_the_13th_part2.jpg", summary: "Five years later, new counselors arrive at a nearby training camp. The killer is Jason Voorhees, alive and grown, seeking revenge for his mother’s death. Wearing a sack mask, Jason kills most of the group before being defeated by Ginny, who impersonates his mother to trick him.", rating: 8.2, budget: "Budget: $1,250,000", earnings: "Earnings: $21,750,000"},
        {title: "Friday the 13th Part III (1982)", poster:"https://upload.wikimedia.org/wikipedia/en/7/7a/Friday_the_13th_Part_III_%281982%29_theatrical_poster.jpg", summary: "Jason continues his rampage near Crystal Lake. He finds his iconic hockey mask, cementing his signature look. After killing the group at a lakeside cabin, Jason is left with an axe wound to the head from survivor Chris.", rating: 6.4, budget: "Budget: $2,200,000", earnings: "Earnings: $36,700,000"},
        {title: "Friday the 13th Part IV: The Final Chapter (1984)", poster:"https://upload.wikimedia.org/wikipedia/en/1/18/Friday_the_13th_The_Final_Chapter_poster.jpg", summary: "Jason survives his injuries and returns, slaughtering more teens at a cabin. Young Tommy Jarvis ultimately kills him, hacking him with a machete, seemingly ending Jason’s reign.", rating: 6.6,budget:"Budget: $2,255,555", earnings: "Earnings: $21,750,000"},
        {title: "Friday the 13th Part V:A New Beginning(1985)" ,poster:"https://upload.wikimedia.org/wikipedia/en/d/da/Friday_the_13th_A_New_Beginning.jpg" ,summary:"A traumatized Tommy Jarvis struggles with visions of Jason while staying at a halfway house.Murders occur,but the killer is revealed to be Roy Burns ,an imposter using Jason’s persona.Jason himself does not appear ,though his presence looms." ,rating :4.4,budget :"Budget: $4,444,444", earnings: "Earnings: $21,750,000"}
    ]
    },
    {
    name: "The Thing", 
    episodes: [
        {title: "The Thing", poster: "https://images.squarespace-cdn.com/content/v1/5b18735a3917ee20d18a2117/1575921311494-MQRHFGYL96EBSZ9M89PY/giphy.gif", summary: "Together, the two films form one chilling narrative about humanity’s fragility, paranoia, and the terror of the unknown. From its discovery to its near-eradication, The Thing portrays a relentless alien that thrives not through brute force, but through deception and mistrust, leaving audiences uncertain whether the nightmare ever truly ended.", rating: 7.4, budget: "Budget: $53,000,000", earnings: "Earnings: $51,100,000"},
        {title: "The Thing (1982)", poster: "https://upload.wikimedia.org/wikipedia/en/e/e3/The_Thing_%281982_film%29.png", summary: "Directed by John Carpenter, this sci-fi horror classic follows a group of researchers at an Antarctic outpost who encounter a shape-shifting alien parasite unearthed from the ice. The creature can perfectly mimic any living being it assimilates, creating paranoia and mistrust among the team as they try to determine who is still human. Tensions erupt into violence, and most of the crew is killed. In the chilling ending, only MacReady (Kurt Russell) and Childs (Keith David) remain alive, uncertain if either is still human, as they resign themselves to the cold while the station burns.", rating: 9.2, budget: "Budget: $15,000,000", earnings: "Earnings: $19,600,000"},
        {title: "The Thing (2011)", poster: "https://upload.wikimedia.org/wikipedia/en/6/65/Thingprequelfairuse.jpg", summary: "A prequel to the 1982 film, this story follows the Norwegian research team that first discovers the alien buried in the ice. Paleontologist Kate Lloyd joins them as they excavate and accidentally release the creature. As the alien begins assimilating the crew, paranoia sets in, and Kate develops a method of testing who is human. The survivors battle the creature until only Kate remains, chasing it into the alien spaceship before ultimately destroying it. The film ends with a direct lead-in to the 1982 story, showing the Norwegians’ dog escaping the base — the same dog that arrives at MacReady’s outpost at the start of Carpenter’s film.", rating: 5.5, budget: "Budget: $38,000,000", earnings: "Earnings: $31,500,000"}
    ]
    },
    {
    name: "Bourne - 4.9", 
    episodes: [
        {title: "Bourne", poster: "https://comicvine.gamespot.com/a/uploads/original/11123/111235159/6317921-4422159019-63163.gif", summary: "Across five films, The Bourne franchise evolves from a personal story of amnesia and identity into a broader critique of government overreach, surveillance, and moral corruption. Jason Bourne transforms from a weapon of the state into a man determined to uncover the truth and reclaim his agency, embodying the ultimate rogue spy, one who remembers everything, but trusts no one.", rating: 4.9, budget: "Budget: $520,000,000", earnings: "Earnings: $1,637,000,000"},
        {title: "The Bourne Identity (2002)", poster: "https://upload.wikimedia.org/wikipedia/en/a/ae/BourneIdentityfilm.jpg", summary: "A man is found adrift in the Mediterranean with gunshot wounds and no memory of who he is. Discovering he has extraordinary combat and survival skills, he takes the name Jason Bourne and searches for his identity while evading CIA assassins from a covert program called Treadstone. He learns he was a government-trained killer but rejects the program, fleeing with ally Marie.", rating: 6.0, budget: "Budget: $60,000,000", earnings: "Earnings: $214,000,000"},
        {title: "The Bourne Supremacy (2004)", poster: "https://upload.wikimedia.org/wikipedia/en/3/30/Bourne_supremacy_ver2.jpg", summary: "Bourne is living a quiet life with Marie when they are targeted by assassins. Framed for a CIA operation gone wrong, Bourne must clear his name while uncovering more about his past. He confronts his former handler, Conklin, and learns about the darker aspects of Treadstone. The film ends with Bourne and Marie escaping to safety.", rating: 6.3, budget: "Budget: $75,000,000", earnings: "Earnings: $290,600,000"},
        {title: "The Bourne Ultimatum (2007)", poster: "https://upload.wikimedia.org/wikipedia/en/f/fe/The_Bourne_Ultimatum_%282007_film_poster%29.jpg", summary: "Bourne continues seeking the truth about his past while dodging relentless CIA pursuit. He pieces together the origins of Treadstone and its successor program, Blackbriar. Eventually, he learns his real name — David Webb — and that he volunteered for the program. After a climactic showdown in New York, he escapes, leaving his fate uncertain as he disappears once more.", rating: 6.1, budget: "Budget: $110,000,000", earnings: "Earnings: $444,155,555"},
        {title: "The Bourne Legacy (2112)", poster: "https://upload.wikimedia.org/wikipedia/en/4/4c/The_Bourne_Legacy_Poster.jpg", summary: "A spinoff running parallel to Ultimatum. The story follows Aaron Cross, another operative in a similar program called Outcome, which enhances agents with drugs. When the CIA tries to shut down and eliminate Outcome, Cross escapes with scientist Dr. Marta Shearing. Together, they fight to survive while hinting at deeper layers of government conspiracies connected to Bourne’s actions.", rating: 1.9 , budget:"Budget: $125,555,555" , earnings:"Earnings: $276,111,111"},
        {title:"Jason Bourne (216)" ,poster:"https://upload.wikimedia.org/wikipedia/en/b/b2/Jason_Bourne_%28film%29.jpg" ,summary:"Bourne resurfaces after years in hiding when new information about his father’s role in Treadstone comes to light. The CIA , led by director Robert Dewey and cyber-ops specialist Heather Lee , hunts him down . Bourne uncovers the truth about his recruitment and foils a plot to use a tech company for mass surveillance . The film ends with Bourne once again walking away from the CIA , choosing freedom over manipulation.",rating :4.1, budget: "Budget: $123,333,000" ,earnings :"Earnings: $415,555"}
    ]
    },
    {
    name: "Lord of the Rings",
    episodes: [
        {title: "Lord of the Rings", poster: "https://cdn-dkepej.nitrocdn.com/xHPizjaXJNONuYnLnfsGSUCsMnIlzOEq/assets/images/optimized/rev-ef469ea/blog.frame.io/wp-content/uploads/2021/12/lotr-forced-perspective-cart-bilbo-gandalf.jpg", summary:"The Lord of the Rings trilogy is a sweeping tale of friendship, sacrifice, and the struggle between good and evil. It follows ordinary heroes who bear extraordinary burdens, showing that even the smallest person can change the course of the future. With its stunning world-building, moral depth, and emotional power, it remains one of cinema’s greatest fantasy epics.", rating: 9.0, budget: "Budget: $281,000,000", earnings: "Earnings: $2,964,000,000"},
        {title: "The Fellowship of the Ring (2001)", poster: "https://upload.wikimedia.org/wikipedia/en/f/fb/Lord_Rings_Fellowship_Ring.jpg", summary: "In the land of Middle-earth, a young hobbit, Frodo Baggins, inherits the One Ring, a powerful artifact created by the dark lord Sauron. To prevent Sauron’s return, Frodo sets out to destroy it in the fires of Mount Doom. He is joined by the Fellowship of the Ring — Aragorn, Gandalf, Legolas, Gimli, Boromir, Sam, Merry, and Pippin. Their journey is fraught with danger, and the Fellowship eventually breaks apart, but Frodo and his loyal friend Sam continue toward Mordor.", rating: 9.1, budget: "Budget: $93,000,000", earnings: "Earnings: $871,500,000"},
        {title: "The Two Towers (2002)", poster: "https://upload.wikimedia.org/wikipedia/en/a/a1/Lord_Rings_Two_Towers.jpg", summary: "The broken Fellowship pursues different paths. Aragorn, Legolas, and Gimli ally with the kingdom of Rohan against Sauron’s armies. Merry and Pippin escape captivity and rally the ancient tree-like Ents to fight against Saruman, Sauron’s ally. Frodo and Sam, guided by the treacherous creature Gollum, continue their perilous trek to Mordor. The film culminates in the epic Battle of Helm’s Deep, where the free peoples of Rohan withstand a massive orc army.", rating: 8.2, budget: "Budget: $94,000,000", earnings: "Earnings: $937,900,000"},
        {title: "The Return of the King (2003)", poster: "https://upload.wikimedia.org/wikipedia/en/4/48/Lord_Rings_Return_King.jpg", summary: "The final chapter sees Sauron launching his all-out war on Gondor and Middle-earth. Aragorn embraces his destiny as king, leading armies to distract Sauron while Frodo and Sam, still guided and betrayed by Gollum, push into Mordor. After immense struggle, Frodo reaches Mount Doom, where Gollum seizes the Ring and falls into the fire, finally destroying it. Sauron is defeated, Aragorn is crowned king, and the age of men begins. Frodo, scarred by his journey, eventually sails to the Undying Lands with Gandalf and the elves, leaving Sam and the Shire behind.", rating: 9.7, budget: "Budget: $94,000,000", earnings: "Earnings: $1,138,000,000"}
    ]    
    },
    {
    name: "Fantastic Four",
    episodes: [
        {title: "Fantastic Four", poster: "https://preview.redd.it/serious-question-can-someone-explain-this-meme-v0-uarjibkaz4ef1.jpeg?width=640&crop=smart&auto=webp&s=cafe2829ed3a2a2b30810400e8379aa4c9b4df8e", summary: "Across its incarnations, the Fantastic Four franchise tells the story of scientists turned superheroes who face both cosmic threats and personal struggles. Whether comedic, tragic, or epic, every version explores the same core theme — family, discovery, and responsibility in the face of impossible odds.", rating: 5.6, budget: "Budget: $616,465,180", earnings: "Earnings: $585,000,000"},
        {title: "Fantastic Four (2005)", poster: "https://upload.wikimedia.org/wikipedia/en/4/4a/Fantastic_Four_poster.jpg", summary: "Reed Richards, Susan Storm, Johnny Storm, and Ben Grimm are exposed to cosmic energy during a space station experiment, gaining respective powers: stretching, invisibility/force fields, flame generation, and rocky strength. They become public heroes and battle Victor von Doom, who transforms into a metallic villain and attacks with a heat-seeking missile, culminating in a team showdown in the streets.", rating: 7.1, budget: "Budget: $100,000,000", earnings: "Earnings: $333,500,000"},
        {title: "Fantastic Four: Rise of the Silver Surfer (2007)", poster: "https://upload.wikimedia.org/wikipedia/en/e/e6/Fantastic_Four_2_Poster.jpg", summary: "The team faces a cosmic threat when the enigmatic Silver Surfer arrives, heralding the planet-devouring Galactus. They must unite once again to save Earth from annihilation. The film features strong visuals and tone but delivers a somewhat rushed storyline.", rating: 5.6, budget: "Budget: $130,000,000", earnings: "Earnings: $301,900,000"},
        {title: "FANT4STIC  (2015)", poster: "https://upload.wikimedia.org/wikipedia/en/f/f4/Fantastic_Four_2015_poster.jpg", summary: "A darker, grittier reboot where four young outsiders are transformed after teleporting to another dimension. The film struggled with inconsistent tone and character development. Despite a $120 million production budget (estimated $200 million including marketing), it grossed only $167.9 million worldwide, making it the least successful theatrical Fantastic Four film to date. Fans and critics widely panned it as a misfire.", rating: 2.5, budget: "Budget: $120,000,000", earnings: "Earnings: $167,900,000"},
        {title: "Fantastic Four: First Steps (2025)", poster: "https://upload.wikimedia.org/wikipedia/en/1/13/The_Fantastic_Four_First_Steps_poster.jpg", summary: "Set in a stylish 1960s–inspired alternate reality, the film introduces Reed Richards, Sue Storm, Johnny Storm, and Ben Grimm as an already-established hero team combating the cosmic threat of Galactus with the help of the Silver Surfer. Directed by Matt Shakman and produced by Kevin Feige, it features a standout ensemble (Pedro Pascal, Vanessa Kirby, Joseph Quinn, Ebon Moss-Bachrach) and a retro-futuristic visual style. The film has been lauded as the most successful and faithful adaptation to date.", rating: 7.0, budget: "Budget: $258,888,889", earnings: "Earnings: $521,800,000"}
    ]
    },
    {
    name: "Harry Potter - In-Progress",
    episodes: [
        {title: "Harry Potter", poster: "", summary: "", rating: 1.0, budget: "Budget: $1,200,000,000", earnings: "Earnings: $7,700,000,000"},
        {title: "Harry Potter and the Sorcerer's Stone (2001)", poster: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg/250px-Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg", summary: "Harry Potter, an orphan mistreated by the Dursleys, learns on his 11th birthday that he’s a wizard. At Hogwarts, he befriends Ron and Hermione, is sorted into Gryffindor, and learns of his past: Voldemort, a dark wizard, killed his parents but failed to kill him as a baby. <p>The trio discovers the Sorcerer’s Stone, a magical object granting immortality, is hidden at Hogwarts. After overcoming magical challenges, Harry confronts Professor Quirrell, possessed by Voldemort, and prevents him from stealing the Stone.", rating: 8.3, budget: "Budget: $125,000,000", earnings: "Earnings: $1,026,000,000"},
        {title: "Harry Potter and the Chamber of Secrets (2002)", poster: "https://upload.wikimedia.org/wikipedia/en/c/c0/Harry_Potter_and_the_Chamber_of_Secrets_movie.jpg", summary: "In his second year at Hogwarts, Harry faces new challenges. The school is plagued by attacks from a mysterious creature, petrifying students. Harry discovers he can speak Parseltongue, raising suspicion. With Ron and Hermione, he uncovers the entrance to the Chamber of Secrets and learns that Tom Riddle (a young Voldemort) has been manipulating events through a diary. Harry defeats the basilisk inside the chamber and saves Ginny Weasley, Ron’s sister.", rating: 8.1, budget: "Budget: $100,000,000", earnings: "Earnings: $882,900,000"},
        {title: "Harry Potter and the Prisoner of Azkaban (2004)", poster: "https://upload.wikimedia.org/wikipedia/en/1/18/Harry_Potter_and_the_Prisoner_of_Azkaban_film_poster.jpg", summary: "Sirius Black escapes from Azkaban, believed to be after Harry. Dementors, soul-sucking prison guards, patrol Hogwarts. Harry learns how to conjure a Patronus to protect himself. The truth is revealed: Sirius is Harry’s godfather and innocent—Peter Pettigrew betrayed the Potters. With Hermione’s Time-Turner, Harry and Hermione save Sirius and Buckbeak, but Pettigrew escapes, leaving Voldemort’s return possible.", rating: 9.3, budget: "Budget: $130,000,000", earnings: "Earnings: $808,500,000"},
        {title: "Harry Potter and the Goblet of Fire (2005)", poster: "https://upload.wikimedia.org/wikipedia/en/c/c9/Harry_Potter_and_the_Goblet_of_Fire_Poster.jpg", summary: "Hogwarts hosts the Triwizard Tournament. Despite being underage, Harry is mysteriously entered. He faces deadly tasks: dragons, mermaids, and a dangerous maze. Cedric Diggory and Harry both claim the Triwizard Cup but it’s a Portkey. They are transported to a graveyard where Wormtail resurrects Voldemort. Cedric is killed, and Voldemort regains full power. Harry duels him briefly and escapes, warning the wizarding world of his return.", rating: 9.7, budget: "Budget: $150,000,000", earnings: "Earnings: $897,500,000"},
        {title: "Harry Potter and the Order of the Phoenix (2007)", poster: "https://www.imdb.com/title/tt0373889/mediaviewer/rm3414694144/?ref_=tt_ov_i", summary: "The Ministry of Magic refuses to believe Voldemort is back. Harry and his friends form Dumbledore’s Army to fight back and learn defensive magic. At the Ministry, Harry faces Death Eaters and witnesses Sirius Black’s death at the hands of Bellatrix Lestrange. Voldemort and Dumbledore duel publicly, exposing the truth of Voldemort’s return to the world.", rating: 9.7, budget: "Budget: $150,000,000", earnings: "Earnings: $942,900,000"},
        {title: "Harry Potter and the Half-Blood Prince (2009)", poster: "https://www.imdb.com/title/tt0417741/mediaviewer/rm282560512/?ref_=tt_ov_i", summary: "Dumbledore shows Harry memories revealing Voldemort’s secret to immortality, a powerful ancient artifact called a Horcrux, objects containing pieces of his soul. Harry also discovers an old potion book marked “The Half-Blood Prince,” later revealed to be first owned by Severus Snape. The film ends with tragedy as Snape kills Dumbledore atop the Astronomy Tower, fulfilling a mysterious pact.", rating: 10.0, budget: "Budget: $250,000,000", earnings: "Earnings: $941,100,000"}
    ]
    }

]


// Seed the database
mongoose.connection.once('open', () => {
  MovieSeries.deleteMany({}).then(() => {
    MovieSeries.insertMany(movieSeriesArray)
      .then(() => console.log("Movie series seeded!"))
      .catch(err => console.error(err));
  });

  app.get('/api/movieseries', async (req, res) => {
    const movies = await MovieSeries.find().lean();
    res.json(movies);
  });

  app.get('/movies', (req, res) => {
    res.sendFile(path.join(__dirname, 'MovieSeriesReviews.html'));
  });

  app.get('/moviesgrid', (req, res) => {
    res.sendFile(path.join(__dirname, 'MovieSeriesGrid.html'));
  });

  app.listen(3000, () => console.log('Server running on port 3000'));
});

// Serve static files
app.use(express.static(__dirname));