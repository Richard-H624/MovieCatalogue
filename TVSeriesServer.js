const express = require('express');
const mongoose = require('mongoose');
const Series = require('./series');
const MovieSeries = require('./MovieSeries');
const OneOff = require('./OneOffs');
const path = require('path');
const app = express();
mongoose.connect('process.env.MONGODB_URI || "mongodb://localhost:27017/moviesdb');
app.use(express.static(__dirname));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/movies', (req, res) => {
  res.sendFile(path.join(__dirname, 'MovieSeriesReviews.html'));
});
app.get('/tv', (req, res) => {
  res.sendFile(path.join(__dirname, 'TelevisionSeriesReviews.html'));
});
app.get('/oneoffs', (req, res) => {
  res.sendFile(path.join(__dirname, 'OneOffMovies.html'));
});


const seriesArray = [
{
    name: "The Last of Us: Season 1 (2023)",
    episodes: [
        { title: "The Last of Us: Season 1", poster: "https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/The_Last_of_Us_season_1_Blu-ray.png/250px-The_Last_of_Us_season_1_Blu-ray.png", summary:"Twenty years after a deadly fungal pandemic collapses civilization, hardened survivor Joel Miller (Pedro Pascal) lives in a militarized quarantine zone, smuggling supplies and doing whatever it takes to survive. His life changes when he’s tasked with escorting a teenage girl, Ellie Williams (Bella Ramsey), across the country. Ellie is mysteriously immune to the fungal infection that turns people into monstrous, zombie-like creatures called Clickers. Joel and his partner Tess agree to deliver Ellie to the rebel group known as the Fireflies, who hope to use her immunity to develop a cure. After Tess sacrifices herself to buy them time, Joel reluctantly continues the journey with Ellie. Over the course of their cross-country trek, they face raiders, infected hordes, and the moral decay of what’s left of humanity. They meet Bill and Frank, an isolated couple who built a peaceful life together before tragedy struck; Henry and Sam, brothers hiding from violent revolutionaries in Kansas City; and Tommy, Joel’s estranged brother, who has started a new life in a peaceful Wyoming community. Each encounter deepens Joel and Ellie’s bond, transforming their relationship from reluctant partnership to father-daughter connection. When they finally reach the Fireflies in Salt Lake City, Joel learns the horrifying truth: Ellie must die for the cure to work. Unable to lose her like he lost his daughter Sarah, Joel massacres the Fireflies and rescues Ellie, lying to her afterward by saying the Fireflies had stopped searching for a cure.", rating: 8.1 },
        { title: "When You're Lost in the Darkness", poster: "https://m.media-amazon.com/images/M/MV5BZmQzM2M5ZTQtZmZiNi00NTU2LWFhNDUtOWQ5MmExZGYwYTExXkEyXkFqcGc@._V1_QL75_UX388_.jpg", summary: "In 2003, a fungal outbreak of Cordyceps causes a global collapse. Joel, a smuggler, tragically loses his daughter Sarah on outbreak day. Twenty years later, in a quarantine zone, Joel and partner Tess are hired to smuggle a teenage girl, Ellie, who may be immune to the infection, across the country for the rebel group Fireflies.", rating: 9.1 },
        { title: "Infected", poster: "https://m.media-amazon.com/images/M/MV5BNTE5OTA2OWUtMjgxYy00N2M2LTkxYzMtMzAyZDdhM2JhYTBmXkEyXkFqcGc@._V1_QL75_UX388_.jpg", summary: "Joel, Tess, and Ellie travel through ruined Boston. Ellie’s immunity is confirmed when she resists infection after a bite. Tess sacrifices herself to buy time when she is bitten, urging Joel to take Ellie west to the Fireflies.", rating: 9.2 },
        { title: "Long Long Time", poster: "https://m.media-amazon.com/images/M/MV5BMjI1NWRkYzAtN2RkNy00NTljLThjOWItYjE0MzRiYzhhMjFmXkEyXkFqcGc@._V1_QL75_UX388_.jpg", summary: "The story shifts to Bill and Frank, two survivors who form a decades-long relationship while building a secure life in the apocalypse. Joel later finds their home after their deaths, receiving supplies and a car to continue the journey with Ellie.", rating: 7.7 },
        { title: "Please Hold to My Hand", poster: "https://m.media-amazon.com/images/M/MV5BMmY0NDY3N2YtY2JkOS00NmNjLWE5ZDAtNjEyNzMwYzUyYTQ2XkEyXkFqcGc@._V1_QL75_UX328_.jpg", summary: "Joel and Ellie travel through Kansas City, where they are ambushed by hunters. They bond during downtime, with Ellie starting to break Joel’s hardened exterior. The episode ends with them being held at gunpoint by two young brothers, Henry and Sam.", rating: 7.0 },
        { title: "Endure and Survive", poster: "https://m.media-amazon.com/images/M/MV5BZGI4NzliZTUtMjhjNS00MWVjLTliMTItNmM2MDNlNjIxY2I5XkEyXkFqcGc@._V1_QL75_UX388_.jpg", summary: "Henry explains he and Sam are hunted by revolutionaries who overthrew FEDRA. Joel helps them escape, but tragedy strikes when Sam is bitten and turns. Henry, devastated, kills Sam and then himself. Joel and Ellie bury them before moving on.", rating: 8.5 },
        { title: "Kin", poster: "https://m.media-amazon.com/images/M/MV5BNzJkZWU3ZTctM2FiMC00NmJjLTkxZWQtMDRhNDAyMWEwOWJhXkEyXkFqcGc@._V1_QL75_UX328_.jpg", summary: "Joel and Ellie reunite with Joel’s brother Tommy in Wyoming, now living in a thriving settlement. Joel, wracked with doubt about his ability to protect Ellie, asks Tommy to take her to the Fireflies. Ellie confronts him about loss and abandonment, and Joel recommits to the mission.", rating: 9.7 },
        { title: "Left Behind", poster: "https://m.media-amazon.com/images/M/MV5BYmEyYWI2ODYtMWE4Yi00NzYzLTg2NzMtYzczOTkwYzE3OTU5XkEyXkFqcGc@._V1_QL75_UX328_.jpg", summary: "Through flashbacks, Ellie recalls her time in a Boston military school with her best friend (and love) Riley. Riley shows Ellie a mall where they share joy and a kiss, but both are bitten. Riley chooses to stay with Ellie until the end — though Ellie survives and Riley does not.", rating: 3.3 },
        { title: "When We Are in Need", poster: "https://m.media-amazon.com/images/M/MV5BOWQ1YWM3YzktOGRkNC00NjY5LThhYmYtYzgwYzJlZjcwNTI0XkEyXkFqcGc@._V1_QL75_UX328_.jpg", summary: "Joel, injured, relies on Ellie to find food and medicine. She encounters David, leader of a seemingly kind group that is revealed to be cannibalistic. After David tries to manipulate and assault her, Ellie brutally kills him. Traumatized, she is comforted by Joel, who calls her “baby girl” — echoing his lost daughter.", rating: 9.0 },
        { title: "Look for the Light", poster: "https://m.media-amazon.com/images/M/MV5BNWQyN2FkOTYtMDQ5MC00ZWZhLTgxN2QtYWZhNzlhMzJjNjI5XkEyXkFqcGc@._V1_QL75_UX328_.jpg", summary: "Joel and Ellie reach the Fireflies. Doctors prepare to operate on Ellie, intending to remove the Cordyceps in her brain to create a cure — but it will kill her. Unwilling to lose another “daughter,” Joel massacres the Fireflies, rescues Ellie, and kills Marlene, their leader. He lies to Ellie, telling her the Fireflies had stopped searching for a cure. The season ends with Ellie asking Joel if he’s telling the truth — and Joel insisting he is.", rating: 10.0 }
    ]
    },
    {
    name: "The Last of Us: Season 2 (2025)",
    episodes: [
        { title: "The Last of Us: Season 2", poster: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/The_Last_of_Us_season_2_Blu-ray.png/250px-The_Last_of_Us_season_2_Blu-ray.png", summary: "Ellie and Joel try to find stability, but their peace is disrupted when Abby, daughter of the Firefly surgeon Joel killed, reemerges seeking retribution. Ellie, with Dina and others, travels to Seattle, following clues about Abby’s whereabouts. This journey pushes Ellie into moral gray zones: she makes tough, painful choices and causes harm in pursuit of her quest. Abby’s story is also explored: her grief, her motivations, and her support network make her more than just a “villain.” The show builds empathy for her, showing what her life has become since Joel’s actions.", rating: 4.7 },
        { title: "Future Days", poster: "https://m.media-amazon.com/images/M/MV5BMGFhY2NmNTEtMmFkYS00MDViLThjMjUtNmRlYTBlMjcyZWUyXkEyXkFqcGc@._V1_QL75_UX328_.jpg", summary: "Five years after Season 1, Joel and Ellie have settled in Jackson, Wyoming, but their relationship is strained following Joel’s lie about saving her at the Firefly hospital.  Joel attends therapy, seeking redemption, while Ellie grows closer to Dina but remains emotionally distant.  Across the season opener, we’re introduced to Abby, who vows revenge on Joel for killing her father—a familiar face from the Fireflies.", rating: 6.0 },
        { title: "Infected", poster: "https://m.media-amazon.com/images/M/MV5BZjUyYzM3MjItNGY4Yi00NTk4LTliYTgtYjg3ODZkMDExNmExXkEyXkFqcGc@._V1_QL75_UX328_.jpg", summary: "Joel and Dina patrol Jackson when Abby’s group triggers an infected horde attack that overwhelms the settlement.  Amid the chaos, Joel is ambushed and brutally killed by Abby, setting off a chain reaction of grief and vengeance.", rating: 4.5 },
        { title: "The Path", poster: "https://m.media-amazon.com/images/M/MV5BNjdiNjhiNzAtYzQ4Yy00ZmYwLWIyMTctODY2OWEyNTUxOWI3XkEyXkFqcGc@._V1_QL75_UX328_.jpg", summary: "Ellie and Dina enter Seattle amid the WLF–Seraphite conflict.  Ellie reveals her immunity to Dina, a pivotal emotional moment, while the chaos of war surrounds them.", rating: 3.2 },
        { title: "Day One", poster: "https://m.media-amazon.com/images/M/MV5BZTBmNGJmMWQtZjY2OC00NmQxLTkwMGMtZTEzMGZjMzk5ODBhXkEyXkFqcGc@._V1_QL75_UX328_.jpg", summary: "Ellie and Dina enter Seattle amid the WLF–Seraphite conflict.  Ellie reveals her immunity to Dina, a pivotal emotional moment, while the chaos of war surrounds them.", rating: 2.2 },
        { title: "Feel Her Love", poster: "https://m.media-amazon.com/images/M/MV5BZWIzN2NjZTctYzcwZS00NTlmLWE0OWYtYWJmMGIxZTY0YTFmXkEyXkFqcGc@._V1_QL75_UX400_.jpg", summary: "Ellie and Dina search for Abby’s whereabouts, locating Nora to gather information.  The episode reinforces Ellie’s immunity (thwarting the spread through spores) and features intense horror elements with Ellie’s emotional instability becoming more pronounced,", rating: 6.1 },
        { title: "The Price", poster: "https://m.media-amazon.com/images/M/MV5BMDFhMDEzYzMtMDg2NS00OGVkLWI3YzgtN2E3NGYyOGQwMmYxXkEyXkFqcGc@._V1_QL75_UX388_.jpg",summary: "A flashback reveals the evolving dynamic between Joel and Ellie in Jackson over many years, marked by growing tension and Joel’s protective deception.  Their bond fractures when Joel’s lie—a result of him killing Eugene rather than letting him turn—comes to light. They confront the truth but the revelation fractures their connection.", rating: 9.1 },
        { title: "Convergence", poster: "https://m.media-amazon.com/images/M/MV5BMjY5ZWY2ZjYtZjQ3Zi00MjBmLWFmYjUtYWVjZTZiMzA1N2NmXkEyXkFqcGc@._V1_QL75_UX402_.jpg", summary: "On their third day in Seattle, Ellie (with Dina and Jesse) continues to hunt Abby amid a major WLF–Seraphite battle.  Ellie brutally kills Owen and Mel—only to realize Mel is pregnant, intensifying her trauma.  As Jessie and Tommy arrive, Abby ambushes them, killing Jesse and putting Tommy’s life on the line. Ellie pleads for mercy, offering herself instead—but Abby responds with, “I let you live. And you wasted it,” following which a gunshot rings out and the screen cuts to black.  In a final shift, we glimpse Abby waking up in a flashback titled “Seattle, Day One”, marking a narrative pivot to her perspective.", rating: 2.0 }
    ]
    },
    {
    name: "Righteous Gemstones: Season 1 (2019) - 7.6", 
    episodes: [
        { title: "Righteous Gemstones: Season 1", poster: "https://upload.wikimedia.org/wikipedia/en/1/17/Righteous_Gemstones_intertitle.jpeg", summary: "The Gemstones are a wealthy, scandal-ridden family of televangelists. Patriarch Eli Gemstone leads a massive megachurch, now trying to keep the empire intact after the death of his wife, Aimee-Leigh. His grown children, Jesse, Judy, and Kelvin all play roles in the church but struggle with their own flaws, rivalries, and ambitions.", rating: 7.6 },
        { title: "S01E01 - The Righteous Gemstones", poster: "https://m.media-amazon.com/images/M/MV5BNzZkMWY2ZTktZWI2OC00M2Q0LWE2N2YtZjg4OTg0YTYxYzM1XkEyXkFqcGc@._V1_QL75_UX328_.jpg", summary: "The Gemstones return from a mass baptism in China. Jesse’s wild lifestyle catches up with him when he’s blackmailed over a scandalous video. His son Gideon secretly plots against him with criminals. The family’s dysfunction is laid bare.", rating: 8.1 },
        { title: "S01E02 - Is This the Man Who Made the Earth Tremble", poster: "https://m.media-amazon.com/images/M/MV5BZDBlN2EzOTYtYTU1MS00ZjRhLWI1MTYtYTkxMWZlYmYyY2NiXkEyXkFqcGc@._V1_QL75_UX166_.jpg", summary: "Jesse, Kelvin, and Judy try to confront the blackmailers but botch the payoff attempt, escalating the threat. Eli reflects on the legacy of his late wife Aimee-Leigh. Gideon’s betrayal deepens.", rating: 7.5 },
        { title: "S01E03 - They Are Weak, But He Is Strong", poster: "https://m.media-amazon.com/images/M/MV5BN2FmZjE3NDgtODFiNy00NDI4LTk5ZGEtOWFmZDVkYjRlNzYzXkEyXkFqcGc@._V1_QL75_UX166_.jpg", summary: "Baby Billy Freeman, Aimee-Leigh’s brother, re-enters the family’s orbit, scheming to get a place in the church. Judy, desperate for recognition, is drawn to his manipulative promises. Meanwhile, the Gemstone kids struggle with unity.", rating: 7.4 },
        { title: "S01E04 - Wicked Lips", poster: "https://m.media-amazon.com/images/M/MV5BN2FhN2E0NGUtMmJlNi00ZjIwLTkxMmMtYzYxNTI0N2U3ZGM3XkEyXkFqcGc@._V1_QL75_UX328_.jpg", summary: "Kelvin’s youth ministry, “God Squad,” faces trouble when one of his disciples begins questioning him. Jesse tries to regain control of the blackmail situation. Judy’s frustrations with being overlooked boil over, pushing her closer to Baby Billy.", rating: 6.1 },
        { title: "S01E05 - Interlude", poster: "https://m.media-amazon.com/images/M/MV5BOTk1OWVkZmMtMTVjYy00NmU3LWFlYzItMDNkNmE1N2YxOGIyXkEyXkFqcGc@._V1_QL75_UX388_.jpg", summary: "Flashback episode: the Gemstone family in 1989. We see Aimee-Leigh alive, performing with Baby Billy as a Christian singing duo. Eli is hesitant about the show-business lifestyle, while Baby Billy resents Aimee-Leigh’s choice of family over fame. This episode gives depth to the family’s roots and traumas.", rating: 8.5 },
        { title: "S01E06 -  Now the Sons of Eli Were Worthless Men", poster: "https://resizing.flixster.com/ZLCiruD_rKx6Lw5L08pziSfyeYE=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p17161171_e_v9_aa.jpg", summary: "The blackmail plot spirals into violence. The Gemstones discover shocking betrayals within their inner circle. Jesse struggles with Gideon’s rebellion. Kelvin’s faith is tested as he loses influence over his disciples.", rating: 7.3 },
        { title: "S01E07 - And Yet One of You Is a Devil", poster: "https://m.media-amazon.com/images/M/MV5BMzBiMmI4NmQtNTdiMi00NzUwLWEzMWUtNTg3ZjUzM2Y5ZGY4XkEyXkFqcGc@._V1_QL75_UX291_.jpg", summary: "The truth about Gideon’s involvement with the blackmailers comes to light. Eli’s trust in his children crumbles. Baby Billy deepens his manipulation of Judy. The family is on the brink of collapse as enemies close in.", rating: 7.4 },
        { title: "S01E08 - But the Righteous Will See Their Fall", poster: "https://m.media-amazon.com/images/M/MV5BYjZkNGMyYmEtODU0Yi00ZDZjLThlOWItOTZkYzI1YjljODliXkEyXkFqcGc@._V1_QL75_UX291_.jpg", summary: "In a climactic showdown, the Gemstones confront their enemies and each other. Jesse fights to reclaim his family’s honor. Judy breaks free from Baby Billy’s influence. Eli must decide whether to forgive or sever ties with his children. The season ends with the family fractured but determined to rebuild.", rating: 8.7 },
        { title: "S01E09 - Better is the End of a Thing Than Its Beginning", poster: "https://m.media-amazon.com/images/M/MV5BZjA5ZWJiYTgtZDJkZC00ODg1LWI0YjktZGJiNDMwZjY0N2M0XkEyXkFqcGc@._V1_QL75_UX402_.jpg", summary: "The Gemstones attempt to heal their fractured relationships. Jesse and Gideon find a tentative path to reconciliation. Judy asserts her independence from Baby Billy. Eli reflects on the cost of their lifestyle and the hope for redemption.", rating: 8.0 }
    ]
    },
    {
    name: "Cyberpunk: Edgerunners: Season 1 (2022)",
    episodes: [
        { title: "Cyberpunk: Edgerunners: Season 1", poster: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Cyberpunk_Edgerunners_poster.jpg/250px-Cyberpunk_Edgerunners_poster.jpg", summary: "Cyberpunk: Edgerunners follows David Martinez, a gifted teenager from the slums of Night City whose life spirals out of control after his mother’s death. Injected into a brutal world of cybernetic mercenaries and corporate corruption, David installs a powerful military implant that grants him superhuman abilities but slowly erodes his humanity. As he joins an edgerunner crew led by Maine and falls in love with a mysterious netrunner named Lucy, David rises from street kid to legendary outlaw. However, the more he upgrades his body, the closer he edges toward cyberpsychosis, the madness caused by losing one’s soul to machinery. The series builds to a tragic climax where David sacrifices himself to save Lucy, allowing her to finally fulfill her dream of escaping to the Moon. Stylish, violent, and emotionally devastating, It is both a love story and a warning, showing how dreams and ambition can burn bright, but in Night City, they always burn out.", rating: 8.0 },
        { title: "S01E01 - Let You Down - 7.6", poster: "https://m.media-amazon.com/images/M/MV5BZDFjYjUyY2UtODZiYi00MTI2LTgxZmItNmI5ZjBiNDE4MWI1XkEyXkFqcGc@._V1_QL75_UX388_.jpg", summary: "David Martinez, a gifted but poor student at the prestigious Arasaka Academy, struggles to fit in. After his mother dies in a tragic drive-by accident and he’s left with nothing, he discovers military-grade cyberware, a Sandevistan implant, that changes his life.", rating: 7.6 },
        { title: "S01E02 - Like A Boy", poster: "https://m.media-amazon.com/images/M/MV5BYmFiOTljODgtNGJkNy00ODhhLWEyYmItYmNhNTYyYmQyZTkzXkEyXkFqcGc@._V1_QL75_UX388_.jpg", summary: "David installs the Sandevistan, giving him superhuman speed. He meets Lucy, a mysterious netrunner, and is drawn into her world of edgerunners — mercenaries who live on the edge of survival. Their bond begins forming as they pull off small jobs together.", rating: 8.8 },
        { title: "S01E03 - Smooth Criminal", poster: "https://m.media-amazon.com/images/M/MV5BYWU1NjE5ZWYtNjZkMi00ODhkLTk3ZTUtZDFlNDkxYWVhYTdkXkEyXkFqcGc@._V1_QL75_UX388_.jpg", summary: "Lucy introduces David to Maine’s edgerunner crew. Initially mistrusted, David proves himself by using the Sandevistan in combat. He begins finding belonging within the group, even as he risks his sanity and health from overusing the implant.", rating: 7.5 },
        { title: "S01E04 - Lucky You", poster: "https://m.media-amazon.com/images/M/MV5BYmEwMjJiNjQtYjczNS00YTE3LTk2ODMtMTIyOGY2MThhMTc5XkEyXkFqcGc@._V1_QL75_UX388_.jpg", summary: "David trains under Maine’s crew and starts fitting in. He grows closer to Lucy, but learns more about the dangers of their lifestyle. Maine warns David about cyberpsychosis, a mental breakdown caused by too much augmentation.", rating: 7.4 },
        { title: "S01E05 - All Eyez on Me", poster: "https://m.media-amazon.com/images/M/MV5BM2MwZjdjODMtMzRkMi00ZDcwLTk3ZTUtZDFlNDkxYWVhYTdkXkEyXkFqcGc@._V1_QL75_UX388_.jpg", summary: "The crew takes on a dangerous mission. Maine starts showing early signs of cyberpsychosis, lashing out unpredictably. David and Lucy’s relationship deepens, though their dreams clash — Lucy longs to escape to the Moon.", rating: 7.8 },
        { title: "S01E06 - Girl on Fire", poster: "https://m.media-amazon.com/images/M/MV5BYjc5NmUzNGUtODE5ZS00MTkwLTg1M2ItOWY5NDA4MTYwYzQ2XkEyXkFqcGc@._V1_QL75_UX388_.jpg", summary: "Maine’s descent into cyberpsychosis becomes uncontrollable. During a mission, he loses himself completely. In a heartbreaking end, Maine sacrifices himself to protect his team, leaving David shaken and forcing him to step up as a leader.", rating: 9.1 },
        { title: "S01E07 - Stronger", poster: "https://m.media-amazon.com/images/M/MV5BZGVmYmFjNjUtZTdkOS00YjI2LWFmNTMtNzcyYWNiMTNjNjA5XkEyXkFqcGc@._V1_QL75_UX388_.jpg", summary: "Time skip: David has grown into a hardened edgerunner leader, with far more chrome in his body and greater reliance on implants. He and Lucy are a couple, but cracks show in their lives. Lucy hides secrets about Arasaka’s interest in David.", rating: 7.2 },
        { title: "S01E08 - Stay", poster: "https://m.media-amazon.com/images/M/MV5BM2YyYzYyYjItYzYxNy00ZGI3LWI3ZTAtYjY0YTIyMjM0ZGM3XkEyXkFqcGc@._V1_QL75_UX388_.jpg", summary: "The crew is targeted by Arasaka. Faraday, a fixer with his own agenda, manipulates events to pit Militech and Arasaka against each other. Lucy tries to protect David from becoming a corporate pawn, but he is already too deep in the edgerunner lifestyle.", rating: 7.7 },
        { title: "S01E09 - Humanity", poster: "https://m.media-amazon.com/images/M/MV5BNDc5MzMyNGMtMDY0OS00ZTFhLWE2N2MtZjkzOGI3ODcxNmJhXkEyXkFqcGc@._V1_QL75_UX388_.jpg", summary: "David pushes his body beyond safe limits, installing the massive cyber-skeleton Arasaka wants to test. Lucy is captured. David, despite increasing signs of cyberpsychosis, refuses to back down, determined to rescue her.", rating: 7.3 },
        { title: "S01E10 - My Moon, My Man", poster: "https://m.media-amazon.com/images/M/MV5BZjA0M2QyZmQtNGY1Ny00YmI4LTlkOWEtMzBiMzYzZWUyZDA2XkEyXkFqcGc@._V1_QL75_UX383_.jpg", summary: "David and his crew launch a desperate assault to save Lucy from Arasaka Tower. In a brutal showdown, David battles Adam Smasher, Arasaka’s legendary cyborg enforcer. Overwhelmed, David makes a final stand, buying Lucy’s freedom. He dies heroically, consumed by cyberpsychosis and violence. In the end, Lucy escapes to the Moon, fulfilling her dream — but alone, mourning David.", rating: 9.1 }
    ]
    },
    {
    name: "Iron Heart (2024)",
    episodes: [
        { title: "Iron Heart", poster: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Ironheart_%28miniseries%29_logo.png/250px-Ironheart_%28miniseries%29_logo.png", summary: "After the events of Black Panther: Wakanda Forever, Riri Williams, a young genius inventor, returns to Chicago. She builds advanced armor, the most advanced since Iron Man, and becomes wrapped up in a conflict between technology and magic when she crosses paths with Parker Robbins, aka The Hood.", rating: 3.9 },
        { title: "S01E01 - Take Me Home", poster: "https://m.media-amazon.com/images/M/MV5BZjc5MzlkOWUtZTk2OC00MmZkLWJjOTMtMGI4MjY5ZDU2MjY1XkEyXkFqcGc@._V1_QL75_UX328_.jpg", summary: "Riri Williams is expelled from MIT, returns to Chicago, and joins Parker Robbins’ (The Hood’s) crew while secretly creating an AI of her late friend Natalie.", rating: 2.7 },
        { title: "S01E02 - Will the Real Natalie Please Stand Up", poster: "https://m.media-amazon.com/images/M/MV5BZTRkMzNiNWQtMzQwMC00MzUzLTg3MjUtZTE0YWExYjc3ZmIxXkEyXkFqcGc@._V1_QL75_UX328_.jpg", summary: "Riri officially becomes part of Parker’s gang and helps on a heist, but the reveal of her Natalie AI sparks tension and Parker’s magic begins to worry her.", rating: 2.1 },
        { title: "S01E03 - We in Danger, Girl", poster: "https://m.media-amazon.com/images/M/MV5BYmU2MzVhMzctYTQ2MS00MmU3LTlmZTgtZDU2M2ExNGM4ZDUxXkEyXkFqcGc@._V1_QL75_UX435_.jpg", summary: "A mission against an agritech company spirals out of control; John dies during the chaos, and Riri chooses not to save him, deepening divisions in the crew.", rating: 4.8 },
        { title: "S01E04 - Bad Magic", poster: "https://m.media-amazon.com/images/M/MV5BNjAxOTdlMTEtMWM5Yi00OGQ4LTg0ZWYtMjMzNjYwNWQ3YzNhXkEyXkFqcGc@._V1_QL75_UX389_.jpg", summary: "The origins of Parker’s cloak are traced to dark magic; Xavier demands Riri delete the AI; Parker manipulates the gang into blaming Riri for John’s death.", rating: 5.8 },
        { title: "S01E05 - Karma's a Glitch", poster: "https://m.media-amazon.com/images/M/MV5BYTMyNTgyZjctZjY4OC00NTc5LTk5YzYtYTQxMjY5ZWY3MzhkXkEyXkFqcGc@._V1_QL75_UX522_.jpg", summary: "Riri rebuilds her suit with magical enhancements, reconciles with her family, and chooses to delete the Natalie AI, marking a painful emotional reset.", rating: 3.1 },
        { title: "S01E06 - The Past Is the Past", poster: "https://m.media-amazon.com/images/M/MV5BNWNiZWQzZWQtOWZiMi00OWRlLTk3M2QtN2M0MmUzYWUyODI5XkEyXkFqcGc@._V1_QL75_UX522_.jpg", summary: "It’s revealed Parker’s cloak came from a deal with Mephisto; Riri defeats Parker, but Mephisto tempts her with Natalie’s return—and she accepts his dark bargain.", rating: 5.1 }
    ]
    },
    {
    name: "Black Mirror : Round 1",
    episodes: [
        { title: "Black Mirror: Round 1", poster: "https://platform.vox.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/7321027/lead_960.jpg?quality=90&strip=all&crop=16.666666666667,0,66.666666666667,100", summary:"Black Mirror (created by Charlie Brooker) is a British science fiction anthology series that explores the dark, unsettling, and often satirical relationship between humanity and technology. Each standalone episode tells a self-contained story.  Usually set in a near-future or alternate reality, Black Mirror shows  how modern innovation, social media, artificial intelligence, surveillance, and virtual reality can twist human behavior and morality", rating: 8.8 },
        { title: "Black Mirror - S03E01 - Nosedive (2016)", poster: "https://upload.wikimedia.org/wikipedia/en/d/d9/Black_Mirror_-_Nosedive.png", summary: "In a pastel, Instagram-like future where everyone rates each social interaction on a 5-star system, social status is determined by one’s overall rating. Lacie Pound (Bryce Dallas Howard) is obsessed with boosting her 4.2 rating to a 4.5 so she can afford a luxury apartment. She rehearses smiles, posts carefully curated photos, and tries to impress highly rated people. When her childhood friend Naomi (4.8) asks her to be maid of honor at her wedding, Lacie sees it as the perfect chance to raise her score. But as she travels to the wedding, a series of misfortunes, flight delays, arguments, and car troubles cause her rating to plummet. Strangers rate her poorly for minor outbursts, and her carefully constructed persona crumbles. By the time she arrives at the wedding (disheveled, exhausted, and with a dangerously low rating), she crashes the event, gives an unhinged speech, and is ejected. Her score bottoms out, leading to her arrest and imprisonment. In her cell, stripped of ratings, Lacie finally feels free, trading insults and laughter with another prisoner without worrying about judgment.", rating: 9.0 },
        { title: "Black Mirror - S03E02 - Playtest (2016)", poster: "https://upload.wikimedia.org/wikipedia/en/7/76/Black_Mirror_-_Playtest.jpg", summary: "Cooper, an adventurous American backpacker, is traveling the world to escape responsibility after his father’s death. While in London, he signs up to test a revolutionary new augmented reality video game created by the gaming company SaitoGemu. The game implants a small device into his neck that connects to his nervous system, generating hyper-realistic experiences tailored to his fears. At first, Cooper is amused as he explores a haunted house simulation with simple scares. But the game rapidly escalates, blending real memories with hallucinations. Monsters morph into people from his life, and he loses the ability to tell what’s real.  As Cooper’s terror grows, he begs for the test to stop, but the simulation traps him in deeper layers of false reality. Finally, it’s revealed that the entire horrifying experience, that from the house to his breakdown, it happened in an instant. The device malfunctioned due to interference from his phone, killing him almost immediately. In the end, Cooper finally called 'Mom'", rating: 8.0 },
        { title: "Black Mirror - S03E03 - Shut Up and Dance (2016)", poster: "https://upload.wikimedia.org/wikipedia/en/a/a8/Black_Mirror_-_Shut_Up_and_Dance.jpg", summary: "A shy teenager named Kenny is secretly recorded through his laptop webcam while masturbating. Hackers threaten to release the footage unless he follows their escalating instructions. At first, the tasks seem like minor humiliations, but soon he’s paired with another blackmail victim, Hector, a married man caught trying to cheat on his wife. Together, they are forced to carry out increasingly criminal acts such as delivering suspicious packages, robbing a bank, and finally being ordered to fight another blackmail victim to the death. Kenny kills his opponent, only to discover the hackers leak his video anyway. The final reveal exposes why Kenny was targeted: his “private” video wasn’t innocent, because he had been watching child pornography.", rating: 9.3 },
        { title: "Black Mirror - S03E04 - San Junipero (2016)", poster: "https://upload.wikimedia.org/wikipedia/en/e/e3/Black_Mirror_-_San_Junipero.jpg", summary: "In 1987, the shy and awkward Yorkie visits the lively seaside party town of San Junipero, where she meets the outgoing and carefree Kelly. They connect quickly, though Kelly insists their romance stay casual. Over repeated visits, sometimes in different time periods, it’s revealed that San Junipero isn’t real but a simulated reality where elderly or deceased people can upload their consciousness. In the real world, Yorkie is a woman who has been paralyzed since a car accident in her youth, and Kelly is an elderly widow in a nursing home. Yorkie plans to permanently upload into San Junipero, but Kelly hesitates, since her husband chose not to, and she fears betraying his memory. Ultimately, Kelly decides she wants to keep living and loving with Yorkie. After her real body passes away, she joins Yorkie in San Junipero. The episode closes on them together in the simulation, finally free and happy.", rating: 7.9 },
        { title: "Black Mirror - S04E02 - Arkangel (2017)", poster: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Black_Mirror_S04E02_-_ArkAngel.png/250px-Black_Mirror_S04E02_-_ArkAngel.png", summary: "Single mother Marie panics after briefly losing sight of her young daughter, Sara. To ease her fears, she agrees to have a high-tech implant called Arkangel placed in Sara’s brain. The system allows Marie to track Sara’s location, monitor her health, and even filter out disturbing sights and sounds from her perspective. At first, it seems protective, but as Sara grows, the censorship warps her experiences; she cannot perceive violence or blood or danger; leaving her naive and socially awkward.", rating: 8.8 },
        { title: "Black Mirror - S02E07 - White Christmas (2014)", poster: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Black_Mirror_-_White_Christmas.jpg/250px-Black_Mirror_-_White_Christmas.jpg", summary: "The story unfolds in three interwoven segments; told by two men; Matt (Jon Hamm) and Joe (Rafe Spall); who are stuck together in a remote snowy outpost during Christmas.", rating: 10.0 },
        { title: "Black Mirror - S01E02 - Fifteen Million Merits (2011)", poster: "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Black_Mirror_-_Fifteen_Million_Merits.jpg/330px-Black_Mirror_-_Fifteen_Million_Merits.jpg", summary: "In a dystopian future, people live in a closed society where they generate energy by pedaling stationary bikes. Their labor earns them “merits”, a digital currency used to buy food, virtual goods, or access entertainment. The protagonist, Bing, is disillusioned with the system. After his brother dies, Bing inherits 15 million merits. He meets Abi, a kind young woman with a beautiful singing voice, and convinces her to audition for the talent show “Hot Shot.” He believes she can break free of the cycle. However, once Abi is on stage, the judges pressure her into joining the pornography industry instead of pursuing music. To Bing’s horror, she accepts. Crushed, Bing spends all his remaining merits on another “Hot Shot” audition. On stage, instead of performing, he delivers a furious, emotional rant against the system while holding a shard of glass to his neck, threatening suicide. The judges, instead of resisting, applaud his authenticity and offer him his own show where he rants weekly. In the end, Bing accepts. He lives in a larger, more luxurious cell with a view of nature on his screen, but it’s still artificial. He has traded one cage for another.", rating: 8.8 },
        { title: "Black Mirror - S02E01 - Be Right Back (2013)", poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/97/Be_Right_Back.jpg/250px-Be_Right_Back.jpg", summary: "Martha and her boyfriend Ash are deeply in love, but their life together is cut short when Ash dies suddenly in a car accident. Martha is devastated by grief. A friend introduces her to a new service that uses Ash’s digital footprint, his social media, texts, emails, and voice recordings, to create an AI version of him. At first, Martha is hesitant, but she begins texting “Ash” and is comforted by how much the AI resembles him. She upgrades to the next stage: a synthetic body, an android made to look and sound exactly like Ash. At first, the illusion brings comfort, but over time Martha grows frustrated. The android lacks the small flaws, spontaneity, and depth that made the real Ash human. When she tries to test his emotional authenticity by asking him to “leave” or show anger, he can only comply in a programmed, shallow way. Eventually, Martha locks the android away in her attic, unable to fully let go but also unable to accept him as a real replacement. Years later, her daughter knows of “Ash” as a strange presence kept upstairs, preserved like a living ghost.", rating: 8.6 },
    ]
    },
    {
    name: "Game of Thrones: Season 1 (2011)",
    episodes: [
        { title: "Game of Thrones: Season 1", poster: "https://resizing.flixster.com/z8ZxTVTr1HyRw_S9wyc2dgn2gOk=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p8681514_i_v9_ac.jpg", summary: "The first season introduces the Seven Kingdoms of Westeros, a realm filled with political scheming, betrayal, and ambition. Lord Eddard “Ned” Stark, a noble and honorable man from the North, is appointed Hand of the King to his old friend Robert Baratheon. In King’s Landing, Ned uncovers a deadly secret: that Queen Cersei Lannister’s children are not Robert’s heirs, but her brother Jaime’s. When Robert dies, Cersei’s son Joffrey seizes the throne and has Ned executed for treason, sparking rebellion across the realm. In the North, Ned’s son Robb Stark rallies his bannermen to war against the Lannisters, while beyond the Wall, Jon Snow and the Night’s Watch discover growing threats from mysterious undead creatures. Across the sea, Daenerys Targaryen, an exiled princess sold into marriage to the warlord Khal Drogo, rises in power after his death by walking into his funeral pyre and emerging unburned with three newborn dragons, signaling the return of magic to the world.", rating: 9.3 },
        { title: "S01E01 - Winter Is Coming", poster: "https://m.media-amazon.com/images/M/MV5BYjc1ZTg3YWItNTRiNC00NGY0LTg0MDAtOGZhNjZlMmIwNDMzXkEyXkFqcGc@._V1_QL75_UX400_.jpg", summary: "Beyond the Wall, Night’s Watch rangers encounter White Walkers; one survivor flees and is executed by Ned Stark for desertion. In Winterfell, Ned rules as Warden of the North with his wife Catelyn and children Robb, Sansa, Arya, Bran, and Rickon, along with his illegitimate son Jon Snow. They discover orphaned direwolf pups, one for each Stark child. King Robert Baratheon arrives with Queen Cersei, asking Ned to replace the recently deceased Jon Arryn as Hand of the King. Robert proposes betrothing Sansa to Prince Joffrey. Across the Narrow Sea, exiled Viserys Targaryen marries off his sister Daenerys to Khal Drogo, hoping to gain an army to reclaim the Iron Throne. Bran stumbles upon Cersei and Jaime Lannister’s incest, then Jaime pushes him from a tower.", rating: 9.4 },
        { title: "S01E02 - The Kingsroad", poster: "https://m.media-amazon.com/images/M/MV5BMjE3MDQ2MDI0OV5BMl5BanBnXkFtZTcwMjIyMzkxNA@@._V1_QL75_UX145_.jpg", summary: "Bran lies comatose after his fall. Jon Snow departs for the Wall, gifting Arya a small sword, Needle. Tyrion Lannister joins him, traveling north. On the Kingsroad, Joffrey bullies Arya’s friend; Arya fights back. When Nymeria attacks Joffrey, Arya drives her away to save her life. Cersei demands retribution—Arya’s direwolf is gone, so Sansa’s wolf, Lady, is executed instead. Ned reluctantly carries out the killing. Meanwhile, Daenerys begins her life among the Dothraki; Drogo is distant, but she begins learning to adapt to her new role.", rating: 9.8 },
        { title: "S01E03 - Lord Snow", poster: "https://m.media-amazon.com/images/M/MV5BOGVkMjU4M2MtZmRkYy00OWIwLTk3NmQtZDE0ZjliOTYxYjk0XkEyXkFqcGc@._V1_QL75_UX383_.jpg", summary: "Ned, Sansa, and Arya arrive in King’s Landing. Arya trains secretly with Syrio Forel, a Braavosi swordmaster. Ned learns the court is a web of scheming led by Varys, Littlefinger, and Pycelle. At the Wall, Jon trains but bullies weaker recruits until Tyrion reminds him of his own outsider status. Jon befriends Samwell Tarly, a cowardly new recruit. In Essos, Daenerys grows more confident, asserting herself with Drogo and beginning to challenge Viserys’ abusive control. Bran awakens from his coma, paralyzed from the waist down.", rating: 9.0 },
        { title: "S01E04 - Cripples, Bastards, and Broken Things", poster: "https://m.media-amazon.com/images/M/MV5BYTkxMWZhOTQtNDA2Yi00ZDNmLTljOWMtMjBiZTliZDcwYTIxXkEyXkFqcGc@._V1_QL75_UX145_.jpg", summary: "Tyrion provides Bran with a saddle design so he can ride despite his paralysis. Jon protects Sam from brutal training, gaining loyalty from his fellow recruits. Ned investigates Jon Arryn’s death, discovering he was researching the Baratheon family lineage. At a tourney, Ser Hugh is killed under suspicious circumstances. Viserys’ frustrations boil over when Daenerys shows her authority as khaleesi, striking him. Across Westeros, Catelyn learns Tyrion may have been behind Bran’s fall after finding a dagger she believes is his.", rating: 9.0 },
        { title: "S01E05 - The Wolf and the Lion", poster: "https://m.media-amazon.com/images/M/MV5BNTczMmNmNTYtZGFiMS00ZmUzLTljODYtM2E0MGI4YjMwZTQwXkEyXkFqcGc@._V1_QL75_UX327_.jpg", summary: "Robert learns of Daenerys’ pregnancy and insists she be assassinated; Ned refuses to condone it and resigns as Hand. Tensions rise between him and Robert. In the Vale, Catelyn captures Tyrion, accusing him of trying to kill Bran. At the Eyrie, her sister Lysa Arryn imprisons him. In King’s Landing, political intrigue deepens as Renly and Loras Tyrell plot together. The Mountain goes berserk at the tourney, and Sandor “The Hound” Clegane saves lives by stopping him.", rating: 9.1 },
        { title: "S01E06 - A Golden Crown", poster: "https://m.media-amazon.com/images/M/MV5BZjFjMWU1M2YtOGJiYS00MGVjLWE0MmEtZmEzNTM5ZmZlMTNkXkEyXkFqcGc@._V1_QL75_UX328_.jpg", summary: "At the Eyrie, Tyrion demands trial by combat, and sellsword Bronn fights for him, winning his freedom. Ned returns as Hand after Robert is injured in a hunt. Investigating further, Ned confirms that Cersei’s children are not Robert’s but Jaime’s. In Essos, Viserys’ desperation peaks—he threatens Daenerys but Drogo kills him by pouring molten gold on his head, granting him the “crown” he craved.", rating: 9.3 },
        { title: "S01E07 - You Win or You Die", poster: "https://m.media-amazon.com/images/M/MV5BMGY4MGY3YjMtODEyMy00OThlLWFmYmEtMTczMGNmNDk2NTkyXkEyXkFqcGc@._V1_QL75_UX283_.jpg", summary: "Ned confronts Cersei, revealing he knows the truth of her children’s parentage and giving her the chance to flee before Robert discovers it. Robert is mortally wounded by a boar during a hunt and names Ned Protector of the Realm until Joffrey comes of age. Instead, Cersei moves swiftly, claiming power for Joffrey. Littlefinger, whom Ned trusted, betrays him, leading to Ned’s arrest.", rating: 9.5 },
        { title: "S01E08 - The Pointy End", poster: "https://m.media-amazon.com/images/M/MV5BM2Q3MjgxYWMtZjIxZC00OWUzLWE2ZjctMTI2MDZiYjBjN2FkXkEyXkFqcGc@._V1_QL75_UX328_.jpg", summary: "Following Ned’s arrest, Lannister forces slaughter Ned’s household guards and seize control. Arya narrowly escapes with Syrio Forel’s help, while Sansa is captured. Catelyn urges her son Robb to raise the northern bannermen, and Robb marches south with his army. At the Wall, Jon kills a wight that attacks Lord Commander Mormont, hinting at the growing supernatural threat. In Essos, Drogo kills an insubordinate warrior but suffers a festering wound. Daenerys attempts to save him with blood magic.", rating: 9.5 },
        { title: "S01E09 - Baelor", poster: "https://m.media-amazon.com/images/M/MV5BZTFlODNhYjQtMDAwNS00OGRlLWE5YjItMDVlYWU1OWQzNzdlXkEyXkFqcGc@._V1_QL75_UX388_.jpg", summary: "Robb wins a tactical victory and captures Jaime Lannister but sacrifices troops in the process. To save her father, Sansa begs mercy from Joffrey, who demands Ned confess to treason. Ned falsely admits guilt, hoping to save Sansa, but Joffrey defies promises of mercy and orders Ned’s execution. Arya watches in horror as her father is beheaded. Across the sea, Drogo collapses from his wound. Daenerys turns to Mirri Maz Duur’s blood magic ritual to save him, but it comes at a heavy cost.", rating: 10.0 },
        { title: "S01E10 - Fire and Blood", poster: "https://m.media-amazon.com/images/M/MV5BOWFmNzQ0OTctMTRjYy00YWFjLTg0NGUtODRkNWYzYWNjNjY0XkEyXkFqcGc@._V1_QL75_UX388_.jpg", summary: "News of Ned’s execution spreads, sparking outrage. Robb is declared “King in the North.” Tyrion is ordered by his father Tywin to act as Hand of the King. Sansa remains hostage, enduring Joffrey’s cruelty, while Arya flees disguised as a boy among recruits for the Night’s Watch. At the Wall, Jon is tempted to desert to join Robb but is persuaded to honor his vows. In Essos, Drogo lives as a mindless shell after the blood magic. Daenerys suffocates him, then builds his funeral pyre. Walking into the flames with her dragon eggs, she emerges unburnt at dawn with three newborn dragons, the first seen in centuries.", rating: 9.1 }
    ]
    },
    {
    name: "Squid Games: Season 1 (2021)",
    episodes: [
      { title: "Squid Games: Season 1", poster: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7b/Squid_Game_season_1_poster.png/250px-Squid_Game_season_1_poster.png", summary: "Squid Game follows Seong Gi-hun, a kind but deeply indebted man, who joins a secret survival competition alongside 455 other financially desperate participants. They are taken to a hidden island where they must compete in a series of deadly children’s games, with losers executed on the spot. Each death increases the enormous cash prize, creating a brutal incentive to keep playing. As the games progress, Gi-hun forms alliances with other players—his childhood friend Sang-woo, North Korean defector Sae-byeok, migrant worker Ali, and the elderly Player 001. But survival soon turns everyone against each other as greed, fear, and desperation take over. Meanwhile, a police officer named Jun-ho infiltrates the facility, uncovering that the games are run by masked overseers and funded by wealthy elites who gamble on human lives for entertainment. In the end, only Gi-hun and Sang-woo remain. Gi-hun wins but is emotionally shattered, learning that the old man he trusted was secretly the creator of the games. Haunted by guilt and trauma, Gi-hun discovers the operation still continues and vows to stop it.", rating: 8.76},
      { title: "S01E01 - Red Light, Green Light", poster: "https://m.media-amazon.com/images/M/MV5BYWM4ZDVhYmEtYWI4Yi00OGJkLTgxZDgtZjQwZjhjYjMzZDA1XkEyXkFqcGc@._V1_QL75_UX388_.jpg", summary: "Down-on-his-luck gambler Seong Gi-hun joins a mysterious survival competition promising huge cash rewards. Along with 455 others, he’s taken to a secret facility and forced to play children’s games with deadly consequences. In the first game, “Red Light, Green Light,” hundreds are gunned down for moving at the wrong time, leaving the survivors horrified.", rating: 8.7 },
      { title: "S01E02 - Hell", poster: "https://m.media-amazon.com/images/M/MV5BNDAxNWVlYWYtYjRkMi00NDhiLThkOTUtMTAzZjJlZjExMmNlXkEyXkFqcGc@._V1_QL75_UX456_.jpg", summary: "The players vote to end the games and are released, only to find life outside is just as hopeless. Gi-hun faces debt and his mother’s illness, Sang-woo hides from the law, and others struggle to survive. With nothing left to lose, most of them, including Gi-hun, choose to return to the deadly games, seeking a chance at the prize money.", rating: 9.6 },
      { title: "S01E03 - The Man with the Umbrella", poster: "https://m.media-amazon.com/images/M/MV5BNGFhZjdmODQtNjNkZS00ZThmLWE3OWQtOTJmZDIzOTg0NTFhXkEyXkFqcGc@._V1_QL75_UX448_.jpg", summary: "The contestants return to the facility, now aware that losing means death. A police officer named Jun-ho infiltrates the game by posing as a guard to find his missing brother. In the second challenge, players must carve shapes from honeycomb candy (dalgona) without breaking them. Gi-hun’s chosen shape, an umbrella, is the hardest, and many die. Gi-hun barely survives using his wits, while alliances start to form among players.", rating: 8.4 },
      { title: "S01E04 - Stick to the Team", poster: "https://m.media-amazon.com/images/M/MV5BYTdlNDI1MDYtZDYwMS00YTQzLTlkNTMtMTI2MGYxODgwODZkXkEyXkFqcGc@._V1_QL75_UX458_.jpg", summary: "Tensions rise as players turn violent at night, attacking each other for survival. Gi-hun, Sang-woo, Ali, Sae-byeok, and the old man form a team for the next game. They face Tug-of-War, played high above the ground where losing means falling to your death. Using strategy instead of strength, their team manages to win, barely escaping death once again.", rating: 9.0 },
      { title: "S01E05 - A Fair World", poster: "https://m.media-amazon.com/images/M/MV5BMDQxNjA4ZGItYjgzNi00N2RhLWFiOTQtNzljZTAwMWM2ODc5XkEyXkFqcGc@._V1_QL75_UX388_.jpg", summary: "After the Tug-of-War game, paranoia spreads among the survivors. The players realize fairness is an illusion. Jun-ho uncovers a dark side operation where guards harvest organs from the dead to sell on the black market. He secretly records evidence, discovering the hierarchy of masked workers and their strict rules. Meanwhile, the next challenge looms, with trust between players beginning to crumble.", rating: 7.6},
      { title: "S01E06 - Gganbu", poster: "https://m.media-amazon.com/images/M/MV5BNmQ0YjA4MGQtYWY1ZC00ZDJiLThlNTktYTIyMWMyOWQ0YmY3XkEyXkFqcGc@._V1_QL75_UX328_.jpg", summary: "Players are told to choose a partner, only to learn they’ll face each other in a marble game where only one can live. The episode is emotional and devastating as Ali is tricked by Sang-woo, Sae-byeok bonds with Ji-yeong before she sacrifices herself, and Gi-hun deceives the old man, who appears to die after forgiving him. The episode marks the emotional heart of the series, highlighting how desperation destroys morality.", rating: 10.0},
      { title: "S01E07 - VIPs", poster: "https://m.media-amazon.com/images/M/MV5BNmIyOGFmYTQtMjgyNy00MDk2LTg4MGUtMWUzNWM2YmI5Mzc4XkEyXkFqcGc@._V1_QL75_UX456_.jpg", summary: "Wealthy international elites, the VIPS, arrive to watch the games in person. The next challenge, a glass bridge, tests both luck and courage as players must step on tempered glass panels or fall to their deaths. Gi-hun survives with Sang-woo and Sae-byeok, but Sang-woo’s ruthlessness grows as he pushes another contestant to his death. Jun-ho escapes the island with evidence, pursued by the Front Man.", rating: 7.4},
      { title: "S01E08 - Front Man", poster: "https://m.media-amazon.com/images/M/MV5BNzkwNzRmNDQtNDBjZC00MzIwLWEwM2YtYTQ0ZjgwNDIyMGY4XkEyXkFqcGc@._V1_QL75_UX364_.jpg", summary: "Only three players remain. They’re given a feast before the final game, tension mounting between Sang-woo, Gi-hun, and Sae-byeok. Meanwhile, Jun-ho reaches the mainland but is cornered by the Front Man, who reveals himself as Jun-ho’s missing brother before shooting him. Sae-byeok dies from her wounds that night, leaving only Gi-hun and Sang-woo alive for the final confrontation.", rating: 9.4},
      { title: "S01E09 - One Lucky Day", poster: "https://m.media-amazon.com/images/M/MV5BOWRjYmViN2QtOWE3ZS00MWUyLWIyMzUtN2RhN2IyNWNmZmJhXkEyXkFqcGc@._V1_QL75_UX457_.jpg", summary: "The final Squid Game pits Gi-hun and Sang-woo in a brutal fight. Gi-hun wins but refuses to kill his friend; Sang-woo takes his own life so Gi-hun can claim victory. Afterward, Gi-hun receives the money but is haunted by guilt and trauma. A year later, he learns the old man was secretly the game’s creator, playing for amusement before dying. As Gi-hun prepares to move on, he discovers the games continue, and vows to stop them.", rating: 9.1}
    ]
    }


]

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
    title: "Superman - James Gunn Version",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Superman_%282025_film%29_poster.jpg/250px-Superman_%282025_film%29_poster.jpg",
    summary: "Superman (2025) reboots the Man of Steel’s story under director James Gunn. It follows a young Clark Kent (David Corenswet) balancing life as a reporter in Metropolis and his role as Superman. When Lex Luthor (Nicholas Hoult) manipulates the world into distrusting Superman by framing him in an international conflict, Clark must confront both human fear and his alien heritage. With help from Lois Lane, Krypto, and other heroes, Superman restores hope and reaffirms his place as Earth’s greatest protector.",
    year: 2025,
    rating: 2.9,
    budget: "$225,000,000",
    earnings: "$615,800,000"
  },
  {
    title: "Until Dawn",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/f/fc/Until_Dawn_%282025%29_poster.jpg/250px-Until_Dawn_%282025%29_poster.jpg",
    summary: "A year after her sister Melanie disappears under mysterious circumstances, Clover and her friends Max, Nina, Megan, and Abe travel to Glore Valley to retrace Melanie’s last known steps. They head to the remote visitor center where a heavy rainstorm forces them to take shelter. Soon strange and deadly events begin: masked killers, Wendigos, supernatural forces, and worst of all, a time loop that resets the night every time they all die. Trapped with a limited number of lives, the group must uncover the truth behind the valley’s horrors and survive until dawn. Along the way, Clover learns that the real monsters may be tied to her fears and her connection to her missing sister.",
    year: 2025,
    rating: 5.1,
    budget: "$15,000,000",
    earnings: "$54,000,000"
  },
  {
    title: "The Wailing",
    poster: "https://upload.wikimedia.org/wikipedia/en/e/eb/The_Wailing_%28film%29.png",
    summary: "In a quiet rural village, a series of gruesome murders and mysterious illnesses spread after the arrival of a reclusive Japanese stranger. Local police officer Jong-goo investigates the killings, which leave victims deranged and covered in strange boils. As fear grips the community, rumors circulate that the foreigner is behind it, practicing dark rituals. When Jong-goo’s young daughter Hyo-jin begins showing signs of possession, his desperation drives him to consult both a shaman and a Catholic priest. Their conflicting rituals escalate the terror, as it becomes unclear who or what is truly evil. In a nightmarish climax filled with deception and spiritual chaos, Jong-goo realizes too late that he’s been manipulated by unseen demonic forces.",
    year: 2016,
    rating: 9.0,
    budget: "$8,000,000",
    earnings: "$51,300,000"
  },
  {
    title: "Battleship",
    poster: "https://upload.wikimedia.org/wikipedia/en/6/6e/Battleship_Poster.jpg",
    summary: "The story follows Alex Hopper (Taylor Kitsch), a reckless naval officer serving aboard the USS John Paul Jones. During international naval war games off the coast of Hawaii, Earth receives a response to a signal sent into space years earlier, but instead of friendly contact, alien ships arrive and erect a massive force field over the ocean. Cut off from the rest of the fleet, Alex and his crew must face off against the technologically superior invaders using strategy, courage, and classic naval tactics. As the battle intensifies, Alex matures from an impulsive troublemaker into a true leader. With help from his brother Stone (Alexander Skarsgård), fiancée Sam (Brooklyn Decker), and retired veterans, Alex launches a last stand aboard the decommissioned USS Missouri to defeat the aliens and save humanity.",
    year: 2012,
    rating: 4.4,
    budget: "$209,000,000",
    earnings: "$303,200,000"
  },
  {
    title: "Deadstream",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Deadstream-poster.png/250px-Deadstream-poster.png",
    summary: "A disgraced YouTuber, Shawn Ruddy, known for his reckless stunts, attempts to win back followers by livestreaming a night alone in a supposedly haunted house. Determined to prove it's all fake, he mocks the spirits until he accidentally unleashes a vengeful ghost named Mildred. As his livestream audience watches in horror, Shawn's night devolves into a chaotic, terrifying battle with supernatural forces, blending found-footage horror with dark comedy.",
    year: 2022,
    rating: 3.5,
    budget: null,
    earnings: null
  },
  {
    title: "Tarot",
    poster: "https://upload.wikimedia.org/wikipedia/en/1/10/Tarot_Teaser_Poster.jpg",
    summary: "A group of college friends, partying in a remote mansion, discover a mysterious deck of tarot cards. Ignoring the warning never to use another person’s deck, they perform a reading for fun—unleashing a malevolent entity tied to the cards. Each player is hunted and killed in ways that mirror their fortune. As the survivors race to understand the curse, they realize they’ve invoked something ancient that can’t be easily stopped.",
    year: 2024,
    rating: 2.8,
    budget: "$8,000,000",
    earnings: "$49,300,000"
  },
  {
    title: "Match",
    poster: "https://m.media-amazon.com/images/M/MV5BNjI1ZjNlZTMtZGY3ZS00NmNhLTliYjUtYjY3MDVhNDU5ODc5XkEyXkFqcGc@._V1_QL75_UX153_.jpg",
    summary: "After Paola is matched with a handsome online suitor, she arrives for a first date to discover a house full of dark and terrifying secrets.",
    year: 2024,
    rating: 2.6,
    budget: null,
    earnings: null
  },
  {
    title: "Host",
    poster: "https://upload.wikimedia.org/wikipedia/en/9/94/Host_%28film%29.jpg",
    summary: "Set entirely on a Zoom call during the COVID lockdown, six friends hire a medium to conduct a virtual séance. When one of them fakes a ghostly encounter, they accidentally invite a real malevolent spirit into their homes. One by one, the demon attacks through the digital connection, killing them in chilling, creative ways. Shot entirely on screens, Host is a masterclass in minimalist horror and modern isolation.",
    year: 2020,
    rating: 2.6,
    budget: "$100,000",
    earnings: "$443,807"
  },
  {
    title: "Weapons",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6d/Weapons_film_2025.jpeg/250px-Weapons_film_2025.jpeg",
    summary: "From director Zach Cregger (Barbarian), Weapons is an ensemble horror-drama set in a small American town. One night, seventeen children vanish after leaving their homes simultaneously. The film follows several intersecting characters: the children's homeroom teacher, a grieving father, a troubled addict, and local police officer, as they uncover how the disappearances tie to a series of bizarre, possibly supernatural events. Tension builds toward a disturbing revelation about human cruelty and mass hysteria.",
    year: 2025,
    rating: 9.4,
    budget: "$38,000,000",
    earnings: "$268,000,000"
  },
  {
    title: "Hereditary",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d9/Hereditary.png/250px-Hereditary.png",
    summary: "After the death of her secretive mother, Annie Graham and her family begin to unravel under a series of strange and terrifying events. Their grief exposes dark family secrets, leading to possession, death, and madness. Annie learns her family is cursed by a demonic cult worshipping King Paimon, which has been manipulating generations to summon him into a human host. The film’s dread-filled atmosphere builds to a shocking, unforgettable finale.",
    year: 2018,
    rating: 9.4,
    budget: "$10,000,000",
    earnings: "$90,200,000"
  },
  {
    title: "Texas Chainsaw Massacre", 
    poster: "https://upload.wikimedia.org/wikipedia/en/a/a0/The_Texas_Chain_Saw_Massacre_%281974%29_theatrical_poster.jpg",
    summary: "A group of friends road-tripping through rural Texas stumble upon a house of horrors inhabited by a family of cannibals, led by the monstrous Leatherface, who wields a chainsaw and wears masks made of human skin. As the friends are hunted and butchered, survivor Sally Hardesty becomes the first “final girl” in horror cinema. The film’s gritty realism and relentless violence redefined the slasher genre.",
    year: 1974,
    rating: 6.6,
    budget: "$140,000",
    earnings: "$30,900,000"
  },
  {
    title: "Popeye's Revenge",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Popeye%27s_Revenge.jpeg/250px-Popeye%27s_Revenge.jpeg",
    summary: "When a group of urban explorers attempts to reopen a long-abandoned summer camp, they uncover the dark history of “Popeye,” a disfigured ex-counselor who died in a bullying incident decades earlier. As they work to restore the site, the vengeful spirit of Popeye returns, seeking bloody revenge on anyone who enters his territory. The film mixes slasher and supernatural horror in a grim throwback to 1980s camp slashers.",
    year: 2025,
    rating: 0.9,
    budget: null,
    earnings: null
  },
  {
    title: "Good Boy",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/e/ee/Good_Boy_2025_film_poster.jpg/250px-Good_Boy_2025_film_poster.jpg",
    summary: "Told from the perspective of Indy, a loyal dog, the story follows his growing unease after his owner moves into a new home filled with strange noises and dark energy. As supernatural forces threaten his human, Indy becomes both protector and witness to horrifying events. The film uses the dog’s perspective to explore loyalty, helplessness, and love in the face of evil.",
    year: 2025,
    rating: 6.4,
    budget: "$750,000",
    earnings: "$8,500,000"
  },
  {
    title: "Look Back",
    poster: "https://upload.wikimedia.org/wikipedia/en/e/eb/Look_Back_%28%E3%83%AB%E3%83%83%E3%82%AF%E3%83%90%E3%83%83%E3%82%AF%2C_2024%29_film_poster.jpg",
    summary: "Look Back (2024) is a Japanese animated drama about two gifted young artists, Ayumu Fujino and Kyomoto, who meet in elementary school and bond over creating manga. Fujino, celebrated for her gag comics in the school paper, becomes both inspired and challenged when Kyomoto’s more detailed artwork appears alongside hers. Their friendship evolves through rivalry, collaboration, and time, each pushing the other to improve. Tragically, an unexpected act of violence changes everything, forcing them to reckon with loss, the passage of time, and what it truly means to pursue an artistic passion.",
    year: 2024,
    rating: 7.1,
    budget: null,
    earnings: "$12,700,000"
  },
  {
    title: "The Witch",
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/The_Witch_poster.png/250px-The_Witch_poster.png",
    summary: " In 1630s New England, a devout Puritan family is banished from their colony and forced to live on the edge of a dense, ominous forest. When their baby mysteriously vanishes, paranoia and religious hysteria take hold. Teenage daughter Thomasin becomes the scapegoat for the family’s misfortunes. As madness consumes them, Thomasin ultimately embraces the dark power of the forest by signing her soul over to the Devil in the form of a black goat named Black Phillip.",
    year: 2015,
    rating: 8.5,
    budget: "$4,000,000",
    earnings: "$40,400,000"
  }
]

OneOff.deleteMany({}).then(() => {
  OneOff.insertMany(OneOffArray)
    .then(() => console.log("One-off movies seeded!"))
    .catch(err => console.error(err));
});

app.get('/api/oneoffs', async (req, res) => {
  const movies = await OneOff.find();
  res.json(movies);
});

mongoose.connection.once('open', () => {
  // Seed TV Series
  Series.deleteMany({}).then(() => {
    Series.insertMany(seriesArray)
      .then(() => console.log("TV series seeded!"))
      .catch(err => console.error(err));
  });

  // Seed One-Off Movies (moved inside)
  OneOff.deleteMany({}).then(() => {
    OneOff.insertMany(OneOffArray)
      .then(() => console.log("One-off movies seeded!"))
      .catch(err => console.error(err));
  });

  // Seed Movie Series (add this if you have data)
  MovieSeries.deleteMany({}).then(() => {
    // Replace [] with your movie series data array if available
    MovieSeries.insertMany([])  // e.g., insertMany(movieSeriesArray)
      .then(() => console.log("Movie series seeded!"))
      .catch(err => console.error(err));
  });

  // API routes
  app.get('/api/series', async (req, res) => {
    const series = await Series.find();
    console.log('Series from DB:', series);
    res.json(series);
  });

  app.get('/api/movieseries', async (req, res) => {
    const series = await MovieSeries.find();
    res.json(series);
  });

  app.get('/api/oneoffs', async (req, res) => {
    const movies = await OneOff.find();
    res.json(movies);
  });

  // ...existing code...
  app.listen(3000, () => console.log('Server running on port 3000'));
});