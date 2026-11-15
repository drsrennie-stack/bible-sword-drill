/* ============================================================
   Galilee Strike card bank
   bible-card-bank.js

   250 Bible trivia cards from Dr. Rennie's question bank.
   The spreadsheet words each fact four ways. The game uses the
   Direct wording, so a fact is never asked twice in one game.

   Each card:
     dok      1 = Easy, 2 = Advanced, 3 = Expert
     q        the question
     answer   the answer shown after the player responds
     accept   answers the game takes as correct. Each inner list is
              one acceptable answer, and every word in it must be
              in what the player types. Small typos are forgiven.
     choices  the wrong answers shown when the player picks
              Multiple choice. Claude wrote these. The right
              answer is added and the order is shuffled.
     ref      the Bible reference shown with the answer
     groups   optional. Cards that share a group name are never
              asked in the same game, because they test the same
              fact or one gives away the other.
     note     optional. Shown with the answer when the question
              depends on translation or interpretation.
   ============================================================ */

window.BIBLE_CARD_BANK = {
 "courseLabel": "Bible Trivia",
 "modules": [
  {
   "id": "ot",
   "title": "Old Testament",
   "topics": [
    {
     "id": "ot-beginnings",
     "title": "Creation to the flood",
     "subject": "ot",
     "cards": [
      {
       "id": "BT0001",
       "dok": 1,
       "q": "Who built the ark?",
       "answer": "Noah",
       "accept": [
        ["noah"]
       ],
       "ref": "Genesis 6:13-22",
       "choices": ["Moses", "Abraham", "Jonah"]
      },
      {
       "id": "BT0005",
       "dok": 1,
       "q": "Who was the first man?",
       "answer": "Adam",
       "accept": [
        ["adam"]
       ],
       "ref": "Genesis 2:7",
       "choices": ["Noah", "Abel", "Seth"],
       "groups": ["adam"]
      },
      {
       "id": "BT0009",
       "dok": 1,
       "q": "Who was the first woman?",
       "answer": "Eve",
       "accept": [
        ["eve"]
       ],
       "ref": "Genesis 2:21-23",
       "choices": ["Sarah", "Ruth", "Mary"],
       "groups": ["eve"]
      },
      {
       "id": "BT0013",
       "dok": 1,
       "q": "What garden did Adam and Eve inhabit?",
       "answer": "Eden",
       "accept": [
        ["eden"]
       ],
       "ref": "Genesis 2:8",
       "choices": ["Gethsemane", "Canaan", "Goshen"],
       "groups": ["adam", "eve"]
      },
      {
       "id": "BT0017",
       "dok": 1,
       "q": "Who killed Abel?",
       "answer": "Cain",
       "accept": [
        ["cain"]
       ],
       "ref": "Genesis 4:8",
       "choices": ["Seth", "Esau", "Enoch"]
      },
      {
       "id": "BT0021",
       "dok": 1,
       "q": "What sign did God place in the clouds after the flood?",
       "answer": "Rainbow",
       "accept": [
        ["rainbow"],
        ["bow"]
       ],
       "ref": "Genesis 9:13",
       "choices": ["A dove", "A star", "An olive branch"],
       "note": "Older translations say \"bow.\""
      },
      {
       "id": "BT0357",
       "dok": 1,
       "q": "Which book is first in the Bible?",
       "answer": "Genesis",
       "accept": [
        ["genesis"]
       ],
       "ref": "Genesis 1:1",
       "choices": ["Exodus", "Psalms", "Matthew"]
      },
      {
       "id": "BT0361",
       "dok": 1,
       "q": "What did God create on the first day?",
       "answer": "Light",
       "accept": [
        ["light"]
       ],
       "ref": "Genesis 1:3-5",
       "choices": ["The sun and moon", "Land and seas", "Animals"]
      },
      {
       "id": "BT0365",
       "dok": 1,
       "q": "On which day did God rest in the creation account?",
       "answer": "Seventh day",
       "accept": [
        ["seventh"],
        ["7th"],
        ["7"],
        ["seven"],
        ["sabbath"]
       ],
       "ref": "Genesis 2:2-3",
       "choices": ["First day", "Third day", "Sixth day"]
      },
      {
       "id": "BT0393",
       "dok": 1,
       "q": "From what material did God form Adam?",
       "answer": "Dust of the ground",
       "accept": [
        ["dust"],
        ["ground"],
        ["earth"],
        ["soil"],
        ["dirt"],
        ["clay"]
       ],
       "ref": "Genesis 2:7",
       "choices": ["Water", "A rib", "Stone"],
       "groups": ["adam"]
      },
      {
       "id": "BT0737",
       "dok": 3,
       "q": "Who was the father of Methuselah?",
       "answer": "Enoch",
       "accept": [
        ["enoch"]
       ],
       "ref": "Genesis 5:21",
       "choices": ["Lamech", "Jared", "Noah"]
      },
      {
       "id": "BT0741",
       "dok": 3,
       "q": "Who was the father of Noah?",
       "answer": "Lamech",
       "accept": [
        ["lamech"]
       ],
       "ref": "Genesis 5:28-29",
       "choices": ["Methuselah", "Enoch", "Shem"]
      },
      {
       "id": "BT0745",
       "dok": 3,
       "q": "How old was Methuselah when he died?",
       "answer": "969 years",
       "accept": [
        ["969"]
       ],
       "ref": "Genesis 5:27",
       "choices": ["930 years", "950 years", "777 years"]
      }
     ]
    },
    {
     "id": "ot-patriarchs",
     "title": "Abraham to Joseph",
     "subject": "ot",
     "cards": [
      {
       "id": "BT0025",
       "dok": 1,
       "q": "Who was Abraham's wife?",
       "answer": "Sarah",
       "accept": [
        ["sarah"],
        ["sarai"]
       ],
       "ref": "Genesis 17:15",
       "choices": ["Rebekah", "Rachel", "Leah"],
       "groups": ["sarah"]
      },
      {
       "id": "BT0029",
       "dok": 1,
       "q": "Who was Abraham's promised son by Sarah?",
       "answer": "Isaac",
       "accept": [
        ["isaac"]
       ],
       "ref": "Genesis 21:1-3",
       "choices": ["Ishmael", "Jacob", "Esau"],
       "groups": ["sarah"]
      },
      {
       "id": "BT0033",
       "dok": 1,
       "q": "Who was Isaac's wife?",
       "answer": "Rebekah",
       "accept": [
        ["rebekah"],
        ["rebecca"],
        ["rebekka"]
       ],
       "ref": "Genesis 24:67",
       "choices": ["Rachel", "Leah", "Sarah"]
      },
      {
       "id": "BT0037",
       "dok": 1,
       "q": "Who was Jacob's twin brother?",
       "answer": "Esau",
       "accept": [
        ["esau"]
       ],
       "ref": "Genesis 25:24-26",
       "choices": ["Joseph", "Benjamin", "Ishmael"],
       "groups": ["esau"]
      },
      {
       "id": "BT0041",
       "dok": 1,
       "q": "What new name was given to Jacob?",
       "answer": "Israel",
       "accept": [
        ["israel"]
       ],
       "ref": "Genesis 32:28",
       "choices": ["Abraham", "Judah", "Joshua"]
      },
      {
       "id": "BT0045",
       "dok": 1,
       "q": "Who received a multicolored robe from his father?",
       "answer": "Joseph",
       "accept": [
        ["joseph"]
       ],
       "ref": "Genesis 37:3",
       "choices": ["Benjamin", "Reuben", "Judah"],
       "note": "Translations describe the robe differently: many colors, ornate, or long sleeved."
      },
      {
       "id": "BT0049",
       "dok": 1,
       "q": "In what country did Joseph become a ruler under Pharaoh?",
       "answer": "Egypt",
       "accept": [
        ["egypt"]
       ],
       "ref": "Genesis 41:40-43",
       "choices": ["Babylon", "Assyria", "Persia"]
      },
      {
       "id": "BT0397",
       "dok": 2,
       "q": "What was the name of Abraham's nephew?",
       "answer": "Lot",
       "accept": [
        ["lot"]
       ],
       "ref": "Genesis 11:27",
       "choices": ["Laban", "Isaac", "Ishmael"]
      },
      {
       "id": "BT0401",
       "dok": 2,
       "q": "Who was Hagar's son?",
       "answer": "Ishmael",
       "accept": [
        ["ishmael"]
       ],
       "ref": "Genesis 16:15",
       "choices": ["Isaac", "Esau", "Jacob"]
      },
      {
       "id": "BT0405",
       "dok": 2,
       "q": "What was the name of Isaac's son who sold his birthright?",
       "answer": "Esau",
       "accept": [
        ["esau"]
       ],
       "ref": "Genesis 25:29-34",
       "choices": ["Jacob", "Reuben", "Ishmael"],
       "groups": ["esau"]
      },
      {
       "id": "BT0409",
       "dok": 2,
       "q": "Which son of Jacob was born to Rachel first?",
       "answer": "Joseph",
       "accept": [
        ["joseph"]
       ],
       "ref": "Genesis 30:22-24",
       "choices": ["Benjamin", "Reuben", "Judah"],
       "groups": ["rachel"]
      },
      {
       "id": "BT0413",
       "dok": 2,
       "q": "Which son of Jacob was born to Rachel second?",
       "answer": "Benjamin",
       "accept": [
        ["benjamin"]
       ],
       "ref": "Genesis 35:16-18",
       "choices": ["Joseph", "Dan", "Judah"],
       "groups": ["rachel"]
      },
      {
       "id": "BT0417",
       "dok": 2,
       "q": "Who was Joseph's younger full brother?",
       "answer": "Benjamin",
       "accept": [
        ["benjamin"]
       ],
       "ref": "Genesis 35:24",
       "choices": ["Reuben", "Simeon", "Judah"],
       "groups": ["rachel"]
      },
      {
       "id": "BT0421",
       "dok": 2,
       "q": "What did Joseph store during Egypt's seven abundant years?",
       "answer": "Grain",
       "accept": [
        ["grain"],
        ["corn"],
        ["wheat"],
        ["food"],
        ["crops"]
       ],
       "ref": "Genesis 41:48-49",
       "choices": ["Gold", "Livestock", "Wine"]
      },
      {
       "id": "BT0749",
       "dok": 3,
       "q": "Who was Abraham's father?",
       "answer": "Terah",
       "accept": [
        ["terah"]
       ],
       "ref": "Genesis 11:26",
       "choices": ["Nahor", "Haran", "Laban"]
      },
      {
       "id": "BT0753",
       "dok": 3,
       "q": "Who was the priest-king of Salem who blessed Abram?",
       "answer": "Melchizedek",
       "accept": [
        ["melchizedek"],
        ["melchisedec"],
        ["melchisedek"]
       ],
       "ref": "Genesis 14:18-20",
       "choices": ["Abimelech", "Jethro", "Balak"]
      },
      {
       "id": "BT0757",
       "dok": 3,
       "q": "Who was Rebekah's brother?",
       "answer": "Laban",
       "accept": [
        ["laban"]
       ],
       "ref": "Genesis 24:29",
       "choices": ["Bethuel", "Lot", "Nahor"]
      },
      {
       "id": "BT0761",
       "dok": 3,
       "q": "Who was the mother of Dan and Naphtali?",
       "answer": "Bilhah",
       "accept": [
        ["bilhah"]
       ],
       "ref": "Genesis 30:3-8",
       "choices": ["Zilpah", "Leah", "Rachel"]
      },
      {
       "id": "BT0765",
       "dok": 3,
       "q": "Who was the mother of Gad and Asher?",
       "answer": "Zilpah",
       "accept": [
        ["zilpah"]
       ],
       "ref": "Genesis 30:9-13",
       "choices": ["Bilhah", "Leah", "Rachel"]
      },
      {
       "id": "BT0769",
       "dok": 3,
       "q": "Which son of Jacob was the father of Ephraim and Manasseh?",
       "answer": "Joseph",
       "accept": [
        ["joseph"]
       ],
       "ref": "Genesis 41:50-52",
       "choices": ["Judah", "Benjamin", "Levi"]
      },
      {
       "id": "BT0773",
       "dok": 3,
       "q": "Who was Joseph's Egyptian wife?",
       "answer": "Asenath",
       "accept": [
        ["asenath"]
       ],
       "ref": "Genesis 41:45",
       "choices": ["Zipporah", "Hagar", "Keturah"]
      }
     ]
    },
    {
     "id": "ot-exodus",
     "title": "Moses and the wilderness",
     "subject": "ot",
     "cards": [
      {
       "id": "BT0053",
       "dok": 1,
       "q": "Who found the infant Moses in a basket?",
       "answer": "Pharaoh's daughter",
       "accept": [
        ["pharaoh", "daughter"],
        ["daughter", "pharaoh"],
        ["princess"]
       ],
       "ref": "Exodus 2:5-10",
       "choices": ["Miriam", "Jochebed", "Zipporah"]
      },
      {
       "id": "BT0057",
       "dok": 1,
       "q": "Who was Moses' brother?",
       "answer": "Aaron",
       "accept": [
        ["aaron"]
       ],
       "ref": "Exodus 4:14",
       "choices": ["Joshua", "Caleb", "Hur"],
       "groups": ["moses-aaron"]
      },
      {
       "id": "BT0061",
       "dok": 1,
       "q": "Who was Moses' sister?",
       "answer": "Miriam",
       "accept": [
        ["miriam"]
       ],
       "ref": "Exodus 15:20",
       "choices": ["Zipporah", "Deborah", "Jochebed"]
      },
      {
       "id": "BT0065",
       "dok": 1,
       "q": "What body of water did Israel cross after leaving Egypt?",
       "answer": "The Red Sea",
       "accept": [
        ["red", "sea"],
        ["sea", "reeds"],
        ["reed", "sea"],
        ["yam", "suph"]
       ],
       "ref": "Exodus 14:21-22",
       "choices": ["The Dead Sea", "The Sea of Galilee", "The Mediterranean Sea"],
       "note": "The Hebrew name is Yam Suph, which some translate as Sea of Reeds."
      },
      {
       "id": "BT0069",
       "dok": 1,
       "q": "What food appeared on the ground for Israel in the wilderness?",
       "answer": "Manna",
       "accept": [
        ["manna"]
       ],
       "ref": "Exodus 16:14-15",
       "choices": ["Figs", "Barley loaves", "Grapes"]
      },
      {
       "id": "BT0073",
       "dok": 1,
       "q": "On what mountain did Moses receive the commandments?",
       "answer": "Mount Sinai",
       "accept": [
        ["sinai"],
        ["horeb"]
       ],
       "ref": "Exodus 19:20; 20:1-17",
       "choices": ["Mount Carmel", "Mount Ararat", "Mount Nebo"],
       "groups": ["sinai"],
       "note": "Deuteronomy calls this mountain Horeb."
      },
      {
       "id": "BT0077",
       "dok": 1,
       "q": "How many commandments are in the Decalogue?",
       "answer": "Ten",
       "accept": [
        ["ten"],
        ["10"]
       ],
       "ref": "Exodus 34:28",
       "choices": ["Seven", "Twelve", "Forty"],
       "groups": ["sinai"],
       "note": "Jewish, Catholic and Protestant traditions divide the ten differently."
      },
      {
       "id": "BT0369",
       "dok": 1,
       "q": "Who received the Ten Commandments?",
       "answer": "Moses",
       "accept": [
        ["moses"]
       ],
       "ref": "Exodus 20:1-17",
       "choices": ["Aaron", "Joshua", "Abraham"],
       "groups": ["sinai"]
      },
      {
       "id": "BT0373",
       "dok": 1,
       "q": "Who led the Israelites out of Egypt?",
       "answer": "Moses",
       "accept": [
        ["moses"]
       ],
       "ref": "Exodus 12:31-42",
       "choices": ["Joshua", "Joseph", "Abraham"]
      },
      {
       "id": "BT0425",
       "dok": 2,
       "q": "Who was Moses' father-in-law?",
       "answer": "Jethro",
       "accept": [
        ["jethro"],
        ["reuel"]
       ],
       "ref": "Exodus 3:1",
       "choices": ["Laban", "Aaron", "Hur"],
       "note": "Exodus 2:18 calls him Reuel."
      },
      {
       "id": "BT0429",
       "dok": 2,
       "q": "Who made the golden calf for Israel?",
       "answer": "Aaron",
       "accept": [
        ["aaron"]
       ],
       "ref": "Exodus 32:2-4",
       "choices": ["Moses", "Joshua", "Korah"]
      },
      {
       "id": "BT0433",
       "dok": 2,
       "q": "Which tribe was assigned priestly and sanctuary duties?",
       "answer": "Levi",
       "accept": [
        ["levi"],
        ["levites"],
        ["levite"]
       ],
       "ref": "Numbers 3:5-10",
       "choices": ["Judah", "Benjamin", "Ephraim"]
      },
      {
       "id": "BT0437",
       "dok": 2,
       "q": "Who was the high priest after Aaron?",
       "answer": "Eleazar",
       "accept": [
        ["eleazar"]
       ],
       "ref": "Numbers 20:25-28",
       "choices": ["Joshua", "Eli", "Caleb"]
      },
      {
       "id": "BT0441",
       "dok": 2,
       "q": "Who was the Moabite king who hired Balaam?",
       "answer": "Balak",
       "accept": [
        ["balak"]
       ],
       "ref": "Numbers 22:2-6",
       "choices": ["Og", "Sihon", "Eglon"]
      },
      {
       "id": "BT0445",
       "dok": 2,
       "q": "What animal spoke to Balaam?",
       "answer": "Donkey",
       "accept": [
        ["donkey"],
        ["ass"]
       ],
       "ref": "Numbers 22:28",
       "choices": ["Camel", "Serpent", "Raven"]
      },
      {
       "id": "BT0777",
       "dok": 3,
       "q": "Who was the father of Moses and Aaron?",
       "answer": "Amram",
       "accept": [
        ["amram"]
       ],
       "ref": "Exodus 6:20",
       "choices": ["Kohath", "Levi", "Jethro"],
       "groups": ["moses-aaron"]
      },
      {
       "id": "BT0781",
       "dok": 3,
       "q": "Who was the mother of Moses and Aaron?",
       "answer": "Jochebed",
       "accept": [
        ["jochebed"]
       ],
       "ref": "Exodus 6:20",
       "choices": ["Miriam", "Zipporah", "Elisheba"],
       "groups": ["moses-aaron"]
      },
      {
       "id": "BT0785",
       "dok": 3,
       "q": "Who designed much of the tabernacle craftsmanship?",
       "answer": "Bezalel",
       "accept": [
        ["bezalel"],
        ["bezaleel"]
       ],
       "ref": "Exodus 31:1-5",
       "choices": ["Hiram", "Aaron", "Hur"],
       "groups": ["bezalel"]
      },
      {
       "id": "BT0789",
       "dok": 3,
       "q": "Who assisted Bezalel in tabernacle craftsmanship?",
       "answer": "Oholiab",
       "accept": [
        ["oholiab"],
        ["aholiab"]
       ],
       "ref": "Exodus 31:6",
       "choices": ["Hur", "Ithamar", "Hiram"],
       "groups": ["bezalel"]
      },
      {
       "id": "BT0793",
       "dok": 3,
       "q": "Which two sons of Aaron died after offering unauthorized fire?",
       "answer": "Nadab and Abihu",
       "accept": [
        ["nadab", "abihu"]
       ],
       "ref": "Leviticus 10:1-2",
       "choices": ["Eleazar and Ithamar", "Hophni and Phinehas", "Korah and Dathan"]
      },
      {
       "id": "BT0797",
       "dok": 3,
       "q": "Who was the father of Phinehas the priest?",
       "answer": "Eleazar",
       "accept": [
        ["eleazar"]
       ],
       "ref": "Numbers 25:11",
       "choices": ["Aaron", "Ithamar", "Nadab"]
      },
      {
       "id": "BT0801",
       "dok": 3,
       "q": "Which two spies urged Israel to enter Canaan despite fear?",
       "answer": "Joshua and Caleb",
       "accept": [
        ["joshua", "caleb"]
       ],
       "ref": "Numbers 14:6-9",
       "choices": ["Moses and Aaron", "Nadab and Abihu", "Eldad and Medad"]
      },
      {
       "id": "BT0805",
       "dok": 3,
       "q": "Who was Caleb's father?",
       "answer": "Jephunneh",
       "accept": [
        ["jephunneh"]
       ],
       "ref": "Numbers 13:6",
       "choices": ["Nun", "Hur", "Jesse"]
      },
      {
       "id": "BT0809",
       "dok": 3,
       "q": "Who was the king of Bashan defeated by Israel?",
       "answer": "Og",
       "accept": [
        ["og"]
       ],
       "ref": "Numbers 21:33-35",
       "choices": ["Sihon", "Balak", "Eglon"]
      },
      {
       "id": "BT0813",
       "dok": 3,
       "q": "Who was the Amorite king defeated at Heshbon?",
       "answer": "Sihon",
       "accept": [
        ["sihon"]
       ],
       "ref": "Numbers 21:21-26",
       "choices": ["Og", "Balak", "Agag"]
      }
     ]
    },
    {
     "id": "ot-conquest",
     "title": "Joshua, Judges and Ruth",
     "subject": "ot",
     "cards": [
      {
       "id": "BT0081",
       "dok": 1,
       "q": "Who succeeded Moses as leader of Israel?",
       "answer": "Joshua",
       "accept": [
        ["joshua"]
       ],
       "ref": "Joshua 1:1-2",
       "choices": ["Caleb", "Aaron", "Samuel"],
       "groups": ["joshua"]
      },
      {
       "id": "BT0085",
       "dok": 1,
       "q": "What city's walls fell after Israel marched around them?",
       "answer": "Jericho",
       "accept": [
        ["jericho"]
       ],
       "ref": "Joshua 6:20",
       "choices": ["Ai", "Jerusalem", "Bethel"],
       "groups": ["jericho"]
      },
      {
       "id": "BT0089",
       "dok": 1,
       "q": "Who hid Israelite spies in Jericho?",
       "answer": "Rahab",
       "accept": [
        ["rahab"]
       ],
       "ref": "Joshua 2:1-6",
       "choices": ["Ruth", "Deborah", "Jael"],
       "groups": ["jericho"]
      },
      {
       "id": "BT0093",
       "dok": 1,
       "q": "Who was the strong judge whose hair was cut?",
       "answer": "Samson",
       "accept": [
        ["samson"]
       ],
       "ref": "Judges 16:17-19",
       "choices": ["Gideon", "Jephthah", "Ehud"],
       "groups": ["samson"]
      },
      {
       "id": "BT0097",
       "dok": 1,
       "q": "Who was Samson's betrayer?",
       "answer": "Delilah",
       "accept": [
        ["delilah"]
       ],
       "ref": "Judges 16:18-19",
       "choices": ["Jezebel", "Bathsheba", "Jael"],
       "groups": ["samson"]
      },
      {
       "id": "BT0101",
       "dok": 1,
       "q": "Who was the female judge and prophetess in Judges 4?",
       "answer": "Deborah",
       "accept": [
        ["deborah"]
       ],
       "ref": "Judges 4:4",
       "choices": ["Miriam", "Huldah", "Esther"]
      },
      {
       "id": "BT0105",
       "dok": 1,
       "q": "Who defeated Midian with a reduced army of 300?",
       "answer": "Gideon",
       "accept": [
        ["gideon"]
       ],
       "ref": "Judges 7:7",
       "choices": ["Samson", "Joshua", "Barak"]
      },
      {
       "id": "BT0109",
       "dok": 1,
       "q": "Who was Ruth's mother-in-law?",
       "answer": "Naomi",
       "accept": [
        ["naomi"]
       ],
       "ref": "Ruth 1:3-5",
       "choices": ["Orpah", "Hannah", "Rachel"]
      },
      {
       "id": "BT0113",
       "dok": 1,
       "q": "Who married Ruth in Bethlehem?",
       "answer": "Boaz",
       "accept": [
        ["boaz"]
       ],
       "ref": "Ruth 4:13",
       "choices": ["Elimelech", "Jesse", "Obed"]
      },
      {
       "id": "BT0449",
       "dok": 2,
       "q": "Who was Moses' successor's father?",
       "answer": "Nun",
       "accept": [
        ["nun"]
       ],
       "ref": "Joshua 1:1",
       "choices": ["Jephunneh", "Amram", "Jesse"]
      },
      {
       "id": "BT0453",
       "dok": 2,
       "q": "Who led Israel across the Jordan River?",
       "answer": "Joshua",
       "accept": [
        ["joshua"]
       ],
       "ref": "Joshua 3:14-17",
       "choices": ["Moses", "Caleb", "Gideon"],
       "groups": ["joshua"]
      },
      {
       "id": "BT0457",
       "dok": 2,
       "q": "Which woman killed Sisera with a tent peg?",
       "answer": "Jael",
       "accept": [
        ["jael"]
       ],
       "ref": "Judges 4:21",
       "choices": ["Deborah", "Delilah", "Rahab"]
      },
      {
       "id": "BT0461",
       "dok": 2,
       "q": "Which judge made a rash vow concerning his daughter?",
       "answer": "Jephthah",
       "accept": [
        ["jephthah"]
       ],
       "ref": "Judges 11:30-39",
       "choices": ["Gideon", "Samson", "Eli"],
       "note": "Readers disagree on whether Jephthah sacrificed his daughter or gave her to lifelong service."
      },
      {
       "id": "BT0817",
       "dok": 3,
       "q": "Who was Rahab's husband in Matthew's genealogy?",
       "answer": "Salmon",
       "accept": [
        ["salmon"],
        ["salma"]
       ],
       "ref": "Matthew 1:5",
       "choices": ["Boaz", "Obed", "Nahshon"],
       "groups": ["salmon"],
       "note": "Most readers take the Rahab in this genealogy to be Rahab of Jericho."
      },
      {
       "id": "BT0821",
       "dok": 3,
       "q": "Which judge was left-handed and killed Eglon?",
       "answer": "Ehud",
       "accept": [
        ["ehud"]
       ],
       "ref": "Judges 3:15-21",
       "choices": ["Othniel", "Shamgar", "Gideon"]
      },
      {
       "id": "BT0825",
       "dok": 3,
       "q": "Which judge killed 600 Philistines with an oxgoad?",
       "answer": "Shamgar",
       "accept": [
        ["shamgar"]
       ],
       "ref": "Judges 3:31",
       "choices": ["Samson", "Ehud", "Othniel"],
       "note": "The text does not call Shamgar a judge, but it lists him among those who saved Israel."
      },
      {
       "id": "BT0829",
       "dok": 3,
       "q": "Who was Gideon's father?",
       "answer": "Joash",
       "accept": [
        ["joash"]
       ],
       "ref": "Judges 6:11",
       "choices": ["Manoah", "Jesse", "Kish"]
      },
      {
       "id": "BT0833",
       "dok": 3,
       "q": "What other name was given to Gideon after he tore down Baal's altar?",
       "answer": "Jerubbaal",
       "accept": [
        ["jerubbaal"],
        ["jerub", "baal"],
        ["jerubaal"]
       ],
       "ref": "Judges 6:32",
       "choices": ["Jedidiah", "Abimelech", "Barak"]
      },
      {
       "id": "BT0837",
       "dok": 3,
       "q": "Who was Ruth's first husband?",
       "answer": "Mahlon",
       "accept": [
        ["mahlon"]
       ],
       "ref": "Ruth 4:10",
       "choices": ["Chilion", "Elimelech", "Boaz"]
      },
      {
       "id": "BT0841",
       "dok": 3,
       "q": "Who was Boaz's father in Matthew's genealogy?",
       "answer": "Salmon",
       "accept": [
        ["salmon"],
        ["salma"]
       ],
       "ref": "Matthew 1:5",
       "choices": ["Obed", "Jesse", "Nahshon"],
       "groups": ["salmon"]
      },
      {
       "id": "BT0845",
       "dok": 3,
       "q": "Who was the mother of Obed?",
       "answer": "Ruth",
       "accept": [
        ["ruth"]
       ],
       "ref": "Ruth 4:13-17",
       "choices": ["Naomi", "Rahab", "Orpah"]
      }
     ]
    },
    {
     "id": "ot-samuel",
     "title": "Samuel, Saul and David",
     "subject": "ot",
     "cards": [
      {
       "id": "BT0117",
       "dok": 1,
       "q": "Who was the mother of Samuel?",
       "answer": "Hannah",
       "accept": [
        ["hannah"]
       ],
       "ref": "1 Samuel 1:20",
       "choices": ["Peninnah", "Naomi", "Elizabeth"]
      },
      {
       "id": "BT0121",
       "dok": 1,
       "q": "Who was Israel's first king?",
       "answer": "Saul",
       "accept": [
        ["saul"]
       ],
       "ref": "1 Samuel 10:1; 11:15",
       "choices": ["David", "Solomon", "Samuel"]
      },
      {
       "id": "BT0125",
       "dok": 1,
       "q": "Who defeated Goliath?",
       "answer": "David",
       "accept": [
        ["david"]
       ],
       "ref": "1 Samuel 17:49-50",
       "choices": ["Saul", "Jonathan", "Samson"],
       "groups": ["goliath"],
       "note": "2 Samuel 21:19 credits Elhanan with killing Goliath in some translations."
      },
      {
       "id": "BT0129",
       "dok": 1,
       "q": "What weapon did David use against Goliath?",
       "answer": "Sling and stone",
       "accept": [
        ["sling"],
        ["slingshot"],
        ["stone"],
        ["stones"],
        ["rock"]
       ],
       "ref": "1 Samuel 17:49",
       "choices": ["Sword and shield", "Bow and arrow", "Spear"],
       "groups": ["goliath"]
      },
      {
       "id": "BT0133",
       "dok": 1,
       "q": "Who was David's close friend and Saul's son?",
       "answer": "Jonathan",
       "accept": [
        ["jonathan"]
       ],
       "ref": "1 Samuel 18:1-3",
       "choices": ["Absalom", "Solomon", "Joab"]
      },
      {
       "id": "BT0377",
       "dok": 1,
       "q": "What city was David's capital?",
       "answer": "Jerusalem",
       "accept": [
        ["jerusalem"]
       ],
       "ref": "2 Samuel 5:6-9",
       "choices": ["Bethlehem", "Samaria", "Jericho"]
      },
      {
       "id": "BT0389",
       "dok": 1,
       "q": "Who was the giant defeated by David?",
       "answer": "Goliath",
       "accept": [
        ["goliath"]
       ],
       "ref": "1 Samuel 17:4,49-50",
       "choices": ["Og", "Sisera", "Haman"],
       "groups": ["goliath"],
       "note": "2 Samuel 21:19 credits Elhanan with killing Goliath in some translations."
      },
      {
       "id": "BT0465",
       "dok": 2,
       "q": "Who was Samuel's mentor at the sanctuary?",
       "answer": "Eli",
       "accept": [
        ["eli"]
       ],
       "ref": "1 Samuel 3:1-9",
       "choices": ["Nathan", "Saul", "Ahimelech"]
      },
      {
       "id": "BT0469",
       "dok": 2,
       "q": "Who anointed David while Saul was king?",
       "answer": "Samuel",
       "accept": [
        ["samuel"]
       ],
       "ref": "1 Samuel 16:12-13",
       "choices": ["Nathan", "Eli", "Zadok"]
      },
      {
       "id": "BT0473",
       "dok": 2,
       "q": "Who was David's father?",
       "answer": "Jesse",
       "accept": [
        ["jesse"]
       ],
       "ref": "1 Samuel 16:1",
       "choices": ["Obed", "Boaz", "Saul"]
      },
      {
       "id": "BT0477",
       "dok": 2,
       "q": "Which son of David rebelled and died after his hair caught in a tree?",
       "answer": "Absalom",
       "accept": [
        ["absalom"]
       ],
       "ref": "2 Samuel 18:9-15",
       "choices": ["Amnon", "Adonijah", "Solomon"]
      },
      {
       "id": "BT0481",
       "dok": 2,
       "q": "Which prophet confronted David over Bathsheba?",
       "answer": "Nathan",
       "accept": [
        ["nathan"]
       ],
       "ref": "2 Samuel 12:1-7",
       "choices": ["Samuel", "Elijah", "Isaiah"]
      },
      {
       "id": "BT0485",
       "dok": 2,
       "q": "Who was Bathsheba's husband before David?",
       "answer": "Uriah the Hittite",
       "accept": [
        ["uriah"]
       ],
       "ref": "2 Samuel 11:3",
       "choices": ["Joab", "Nabal", "Abner"]
      },
      {
       "id": "BT0609",
       "dok": 2,
       "q": "Who was the father of Solomon?",
       "answer": "David",
       "accept": [
        ["david"]
       ],
       "ref": "2 Samuel 12:24",
       "choices": ["Saul", "Jesse", "Nathan"],
       "groups": ["solomon-david"]
      },
      {
       "id": "BT0849",
       "dok": 3,
       "q": "Who was Saul's father?",
       "answer": "Kish",
       "accept": [
        ["kish"]
       ],
       "ref": "1 Samuel 9:1-2",
       "choices": ["Ner", "Abner", "Jesse"]
      },
      {
       "id": "BT0853",
       "dok": 3,
       "q": "Who was the priest killed along with the priests at Nob by Saul's order?",
       "answer": "Ahimelech",
       "accept": [
        ["ahimelech"]
       ],
       "ref": "1 Samuel 22:11-19",
       "choices": ["Abiathar", "Eli", "Zadok"]
      },
      {
       "id": "BT0857",
       "dok": 3,
       "q": "Which priest escaped the massacre at Nob and joined David?",
       "answer": "Abiathar",
       "accept": [
        ["abiathar"]
       ],
       "ref": "1 Samuel 22:20",
       "choices": ["Ahimelech", "Zadok", "Doeg"]
      },
      {
       "id": "BT0861",
       "dok": 3,
       "q": "Who was Jonathan's son who ate at David's table?",
       "answer": "Mephibosheth",
       "accept": [
        ["mephibosheth"],
        ["merib", "baal"],
        ["meribbaal"]
       ],
       "ref": "2 Samuel 9:6-13",
       "choices": ["Ishbosheth", "Ziba", "Abner"],
       "note": "1 Chronicles calls him Merib-baal."
      },
      {
       "id": "BT0865",
       "dok": 3,
       "q": "Who was Absalom's sister assaulted by Amnon?",
       "answer": "Tamar",
       "accept": [
        ["tamar"]
       ],
       "ref": "2 Samuel 13:1-14",
       "choices": ["Michal", "Abigail", "Bathsheba"]
      },
      {
       "id": "BT0869",
       "dok": 3,
       "q": "Who was the commander of David's army who killed Absalom?",
       "answer": "Joab",
       "accept": [
        ["joab"]
       ],
       "ref": "2 Samuel 18:14-15",
       "choices": ["Abner", "Abishai", "Amasa"],
       "note": "Joab struck Absalom first, and his armor bearers finished the killing."
      },
      {
       "id": "BT0873",
       "dok": 3,
       "q": "Who was Solomon's mother?",
       "answer": "Bathsheba",
       "accept": [
        ["bathsheba"],
        ["bath", "sheba"],
        ["bathshua"]
       ],
       "ref": "2 Samuel 12:24",
       "choices": ["Abigail", "Michal", "Haggith"]
      }
     ]
    },
    {
     "id": "ot-kings",
     "title": "Solomon and the kings",
     "subject": "ot",
     "cards": [
      {
       "id": "BT0137",
       "dok": 1,
       "q": "Who succeeded David as king?",
       "answer": "Solomon",
       "accept": [
        ["solomon"]
       ],
       "ref": "1 Kings 1:39",
       "choices": ["Absalom", "Rehoboam", "Adonijah"],
       "groups": ["solomon-david"]
      },
      {
       "id": "BT0141",
       "dok": 1,
       "q": "Who asked God for wisdom to govern?",
       "answer": "Solomon",
       "accept": [
        ["solomon"]
       ],
       "ref": "1 Kings 3:9-12",
       "choices": ["David", "Saul", "Hezekiah"]
      },
      {
       "id": "BT0145",
       "dok": 1,
       "q": "Who built the first temple in Jerusalem?",
       "answer": "Solomon",
       "accept": [
        ["solomon"]
       ],
       "ref": "1 Kings 6:1",
       "choices": ["David", "Hezekiah", "Zerubbabel"]
      },
      {
       "id": "BT0149",
       "dok": 1,
       "q": "Which prophet confronted the prophets of Baal on Mount Carmel?",
       "answer": "Elijah",
       "accept": [
        ["elijah"]
       ],
       "ref": "1 Kings 18:20-39",
       "choices": ["Elisha", "Isaiah", "Jeremiah"]
      },
      {
       "id": "BT0153",
       "dok": 1,
       "q": "Who succeeded Elijah as prophet?",
       "answer": "Elisha",
       "accept": [
        ["elisha"]
       ],
       "ref": "2 Kings 2:9-15",
       "choices": ["Isaiah", "Samuel", "Nathan"]
      },
      {
       "id": "BT0489",
       "dok": 2,
       "q": "Which queen visited Solomon to test his wisdom?",
       "answer": "Queen of Sheba",
       "accept": [
        ["sheba"]
       ],
       "ref": "1 Kings 10:1",
       "choices": ["Esther", "Vashti", "Jezebel"]
      },
      {
       "id": "BT0493",
       "dok": 2,
       "q": "Who became king of the northern tribes after Solomon's reign?",
       "answer": "Jeroboam",
       "accept": [
        ["jeroboam"]
       ],
       "ref": "1 Kings 12:20",
       "choices": ["Rehoboam", "Ahab", "Omri"]
      },
      {
       "id": "BT0497",
       "dok": 2,
       "q": "Who became king of Judah after Solomon?",
       "answer": "Rehoboam",
       "accept": [
        ["rehoboam"]
       ],
       "ref": "1 Kings 12:17",
       "choices": ["Jeroboam", "Asa", "Hezekiah"]
      },
      {
       "id": "BT0501",
       "dok": 2,
       "q": "Which king married Jezebel?",
       "answer": "Ahab",
       "accept": [
        ["ahab"]
       ],
       "ref": "1 Kings 16:30-31",
       "choices": ["Omri", "Jehu", "Ahaz"]
      },
      {
       "id": "BT0505",
       "dok": 2,
       "q": "Which prophet was fed by ravens?",
       "answer": "Elijah",
       "accept": [
        ["elijah"]
       ],
       "ref": "1 Kings 17:4-6",
       "choices": ["Elisha", "Amos", "Jonah"]
      },
      {
       "id": "BT0509",
       "dok": 2,
       "q": "Which prophet healed Naaman of leprosy?",
       "answer": "Elisha",
       "accept": [
        ["elisha"]
       ],
       "ref": "2 Kings 5:9-14",
       "choices": ["Elijah", "Isaiah", "Samuel"]
      },
      {
       "id": "BT0513",
       "dok": 2,
       "q": "What river did Naaman wash in?",
       "answer": "Jordan",
       "accept": [
        ["jordan"]
       ],
       "ref": "2 Kings 5:10-14",
       "choices": ["Nile", "Euphrates", "Abana"]
      },
      {
       "id": "BT0517",
       "dok": 2,
       "q": "Which king found the book of the law during temple repairs?",
       "answer": "Josiah",
       "accept": [
        ["josiah"]
       ],
       "ref": "2 Kings 22:8-11",
       "choices": ["Hezekiah", "Manasseh", "Joash"],
       "groups": ["josiah"]
      },
      {
       "id": "BT0521",
       "dok": 2,
       "q": "Which priest found the book of the law in Josiah's reign?",
       "answer": "Hilkiah",
       "accept": [
        ["hilkiah"]
       ],
       "ref": "2 Kings 22:8",
       "choices": ["Zadok", "Eli", "Ezra"],
       "groups": ["josiah"]
      },
      {
       "id": "BT0525",
       "dok": 2,
       "q": "Which empire conquered Samaria in 722/721 BCE?",
       "answer": "Assyria",
       "accept": [
        ["assyria"],
        ["assyrians"],
        ["assyrian"]
       ],
       "ref": "2 Kings 17:5-6",
       "choices": ["Babylon", "Persia", "Egypt"],
       "note": "The Bible does not give the year. The date comes from historians."
      },
      {
       "id": "BT0529",
       "dok": 2,
       "q": "Which empire destroyed Jerusalem's first temple?",
       "answer": "Babylon",
       "accept": [
        ["babylon"],
        ["babylonians"],
        ["babylonian"],
        ["babylonia"],
        ["chaldeans"],
        ["neo", "babylonian"]
       ],
       "ref": "2 Kings 25:8-10",
       "choices": ["Assyria", "Persia", "Rome"],
       "groups": ["bab-a", "bab-b"]
      },
      {
       "id": "BT0877",
       "dok": 3,
       "q": "Who was the craftsman from Tyre who worked bronze for Solomon's temple?",
       "answer": "Hiram",
       "accept": [
        ["hiram"],
        ["huram"],
        ["huram", "abi"],
        ["huramabi"]
       ],
       "ref": "1 Kings 7:13-14",
       "choices": ["Bezalel", "Oholiab", "Adoniram"],
       "note": "Chronicles spells the name Huram."
      },
      {
       "id": "BT0881",
       "dok": 3,
       "q": "Who was Jeroboam's mother?",
       "answer": "Zeruah",
       "accept": [
        ["zeruah"]
       ],
       "ref": "1 Kings 11:26",
       "choices": ["Naamah", "Maacah", "Haggith"]
      },
      {
       "id": "BT0885",
       "dok": 3,
       "q": "Which prophet tore a cloak into twelve pieces before Jeroboam?",
       "answer": "Ahijah the Shilonite",
       "accept": [
        ["ahijah"]
       ],
       "ref": "1 Kings 11:29-31",
       "choices": ["Shemaiah", "Elijah", "Nathan"]
      },
      {
       "id": "BT0889",
       "dok": 3,
       "q": "Who was the widow in Zarephath visited by Elijah?",
       "answer": "She is not named",
       "accept": [
        ["unnamed"],
        ["not", "named"],
        ["no", "name"],
        ["nameless"],
        ["unknown"],
        ["anonymous"],
        ["never", "named"],
        ["isnt", "named"],
        ["none"]
       ],
       "ref": "1 Kings 17:8-16",
       "choices": ["Hannah", "Huldah", "Abigail"],
       "note": "The Bible does not give her name."
      },
      {
       "id": "BT0893",
       "dok": 3,
       "q": "Which king was healed after a shadow moved backward as a sign?",
       "answer": "Hezekiah",
       "accept": [
        ["hezekiah"]
       ],
       "ref": "2 Kings 20:8-11",
       "choices": ["Josiah", "Uzziah", "Asa"]
      },
      {
       "id": "BT0897",
       "dok": 3,
       "q": "Who was the Assyrian commander who threatened Jerusalem under Hezekiah?",
       "answer": "The Rabshakeh (a title)",
       "accept": [
        ["rabshakeh"],
        ["rab", "shakeh"],
        ["field", "commander"],
        ["chief", "cupbearer"]
       ],
       "ref": "2 Kings 18:17-19",
       "choices": ["Nebuzaradan", "Naaman", "Sisera"],
       "note": "Rabshakeh is a title. Some translations say \"field commander.\""
      },
      {
       "id": "BT0901",
       "dok": 3,
       "q": "Which king of Judah was struck with leprosy after entering the temple to burn incense?",
       "answer": "Uzziah",
       "accept": [
        ["uzziah"],
        ["azariah"]
       ],
       "ref": "2 Chronicles 26:16-21",
       "choices": ["Hezekiah", "Ahaz", "Manasseh"],
       "note": "2 Kings 15 calls this king Azariah."
      },
      {
       "id": "BT0905",
       "dok": 3,
       "q": "Who was the father of Josiah?",
       "answer": "Amon",
       "accept": [
        ["amon"]
       ],
       "ref": "2 Kings 21:19-26",
       "choices": ["Manasseh", "Hezekiah", "Jehoiakim"]
      },
      {
       "id": "BT0909",
       "dok": 3,
       "q": "Who was the last king of Judah before Jerusalem fell to Babylon?",
       "answer": "Zedekiah",
       "accept": [
        ["zedekiah"]
       ],
       "ref": "2 Kings 25:1-7",
       "choices": ["Jehoiachin", "Jehoiakim", "Josiah"],
       "groups": ["bab-a"]
      }
     ]
    },
    {
     "id": "ot-return",
     "title": "Exile, return and Esther",
     "subject": "ot",
     "cards": [
      {
       "id": "BT0177",
       "dok": 1,
       "q": "Who became queen and helped save her people?",
       "answer": "Esther",
       "accept": [
        ["esther"]
       ],
       "ref": "Esther 4:14-16; 7:3-6",
       "choices": ["Ruth", "Vashti", "Deborah"]
      },
      {
       "id": "BT0181",
       "dok": 1,
       "q": "Who was Esther's cousin and guardian?",
       "answer": "Mordecai",
       "accept": [
        ["mordecai"]
       ],
       "ref": "Esther 2:7",
       "choices": ["Haman", "Boaz", "Nehemiah"]
      },
      {
       "id": "BT0533",
       "dok": 2,
       "q": "Who led the first group of exiles back to rebuild the temple?",
       "answer": "Zerubbabel",
       "accept": [
        ["zerubbabel"],
        ["sheshbazzar"]
       ],
       "ref": "Ezra 2:1-2; 3:8",
       "choices": ["Nehemiah", "Ezra", "Daniel"],
       "note": "Ezra 1 names Sheshbazzar as the leader who brought the temple vessels back, so Sheshbazzar is accepted too."
      },
      {
       "id": "BT0537",
       "dok": 2,
       "q": "Who led a later return and taught the law?",
       "answer": "Ezra",
       "accept": [
        ["ezra"]
       ],
       "ref": "Ezra 7:6-10",
       "choices": ["Zerubbabel", "Daniel", "Haggai"]
      },
      {
       "id": "BT0541",
       "dok": 2,
       "q": "Who oversaw rebuilding Jerusalem's walls?",
       "answer": "Nehemiah",
       "accept": [
        ["nehemiah"]
       ],
       "ref": "Nehemiah 2:17-18; 6:15",
       "choices": ["Ezra", "Zerubbabel", "Solomon"],
       "groups": ["neh-a"]
      },
      {
       "id": "BT0545",
       "dok": 2,
       "q": "Who opposed Nehemiah's rebuilding alongside Tobiah?",
       "answer": "Sanballat",
       "accept": [
        ["sanballat"]
       ],
       "ref": "Nehemiah 4:1-3",
       "choices": ["Haman", "Balak", "Goliath"],
       "groups": ["neh-a", "neh-b"]
      },
      {
       "id": "BT0549",
       "dok": 2,
       "q": "Who plotted against the Jews in Esther?",
       "answer": "Haman",
       "accept": [
        ["haman"]
       ],
       "ref": "Esther 3:5-6",
       "choices": ["Mordecai", "Sanballat", "Tobiah"]
      },
      {
       "id": "BT0553",
       "dok": 2,
       "q": "Which Jewish festival commemorates deliverance in Esther?",
       "answer": "Purim",
       "accept": [
        ["purim"]
       ],
       "ref": "Esther 9:26-28",
       "choices": ["Passover", "Tabernacles", "Pentecost"]
      },
      {
       "id": "BT0953",
       "dok": 3,
       "q": "Who was the Persian king who authorized the first return of exiles?",
       "answer": "Cyrus",
       "accept": [
        ["cyrus"]
       ],
       "ref": "Ezra 1:1-4",
       "choices": ["Darius", "Artaxerxes", "Nebuchadnezzar"]
      },
      {
       "id": "BT0957",
       "dok": 3,
       "q": "Which Persian king was ruling when Ezra arrived in Jerusalem?",
       "answer": "Artaxerxes",
       "accept": [
        ["artaxerxes"]
       ],
       "ref": "Ezra 7:1-8",
       "choices": ["Cyrus", "Darius", "Ahasuerus"],
       "note": "Most scholars date this to Artaxerxes I. Some argue for Artaxerxes II."
      },
      {
       "id": "BT0961",
       "dok": 3,
       "q": "Who was Nehemiah's opponent described as an Ammonite official?",
       "answer": "Tobiah",
       "accept": [
        ["tobiah"]
       ],
       "ref": "Nehemiah 2:10",
       "choices": ["Sanballat", "Geshem", "Haman"],
       "groups": ["neh-b"]
      },
      {
       "id": "BT0965",
       "dok": 3,
       "q": "What was Esther's Hebrew name?",
       "answer": "Hadassah",
       "accept": [
        ["hadassah"]
       ],
       "ref": "Esther 2:7",
       "choices": ["Deborah", "Naomi", "Hannah"]
      },
      {
       "id": "BT0969",
       "dok": 3,
       "q": "Who was Esther's father?",
       "answer": "Abihail",
       "accept": [
        ["abihail"]
       ],
       "ref": "Esther 2:15",
       "choices": ["Mordecai", "Jair", "Kish"]
      },
      {
       "id": "BT0973",
       "dok": 3,
       "q": "Who was the Persian king in Esther?",
       "answer": "Ahasuerus (Xerxes)",
       "accept": [
        ["ahasuerus"],
        ["xerxes"],
        ["assuerus"]
       ],
       "ref": "Esther 1:1",
       "choices": ["Cyrus", "Darius", "Nebuchadnezzar"],
       "note": "Many translations and historians identify Ahasuerus as Xerxes I."
      }
     ]
    },
    {
     "id": "ot-wisdom",
     "title": "Job, Psalms and Proverbs",
     "subject": "ot",
     "cards": [
      {
       "id": "BT0185",
       "dok": 1,
       "q": "Who suffered severe trials yet continued to address God?",
       "answer": "Job",
       "accept": [
        ["job"]
       ],
       "ref": "Job 1-2",
       "choices": ["Jonah", "Noah", "Lot"]
      },
      {
       "id": "BT0189",
       "dok": 1,
       "q": "Which book contains the psalm that begins 'The LORD is my shepherd'?",
       "answer": "Psalms",
       "accept": [
        ["psalms"],
        ["psalm"],
        ["psalter"]
       ],
       "ref": "Psalm 23:1",
       "choices": ["Proverbs", "Isaiah", "Ecclesiastes"],
       "note": "Psalm numbers are one lower in Bibles that follow the Greek and Latin numbering."
      },
      {
       "id": "BT0193",
       "dok": 1,
       "q": "Who is traditionally associated with many psalms?",
       "answer": "David",
       "accept": [
        ["david"]
       ],
       "ref": "Psalm 3 superscription; 2 Samuel 23:1",
       "choices": ["Samuel", "Isaiah", "Elijah"],
       "note": "The psalm headings link David to about half of the psalms. Scholars read those headings in different ways."
      },
      {
       "id": "BT0197",
       "dok": 1,
       "q": "Which book is famous for short sayings about wisdom?",
       "answer": "Proverbs",
       "accept": [
        ["proverbs"]
       ],
       "ref": "Proverbs 1:1-7",
       "choices": ["Psalms", "Job", "Lamentations"]
      },
      {
       "id": "BT0557",
       "dok": 2,
       "q": "Which psalm begins 'The heavens declare the glory of God'?",
       "answer": "Psalm 19",
       "accept": [
        ["19"],
        ["nineteen"]
       ],
       "ref": "Psalm 19:1",
       "choices": ["Psalm 1", "Psalm 23", "Psalm 100"],
       "note": "Psalm numbers are one lower in Bibles that follow the Greek and Latin numbering."
      },
      {
       "id": "BT0561",
       "dok": 2,
       "q": "Which psalm begins 'God is our refuge and strength'?",
       "answer": "Psalm 46",
       "accept": [
        ["46"]
       ],
       "ref": "Psalm 46:1",
       "choices": ["Psalm 23", "Psalm 51", "Psalm 91"],
       "note": "Psalm numbers are one lower in Bibles that follow the Greek and Latin numbering."
      },
      {
       "id": "BT0977",
       "dok": 3,
       "q": "Which of Job's friends was a Temanite?",
       "answer": "Eliphaz",
       "accept": [
        ["eliphaz"]
       ],
       "ref": "Job 2:11",
       "choices": ["Bildad", "Zophar", "Elihu"]
      },
      {
       "id": "BT0981",
       "dok": 3,
       "q": "Which of Job's friends was a Shuhite?",
       "answer": "Bildad",
       "accept": [
        ["bildad"]
       ],
       "ref": "Job 2:11",
       "choices": ["Eliphaz", "Zophar", "Elihu"]
      },
      {
       "id": "BT0985",
       "dok": 3,
       "q": "Which of Job's friends was a Naamathite?",
       "answer": "Zophar",
       "accept": [
        ["zophar"]
       ],
       "ref": "Job 2:11",
       "choices": ["Eliphaz", "Bildad", "Elihu"]
      },
      {
       "id": "BT0989",
       "dok": 3,
       "q": "Who was the younger speaker who addressed Job after his three friends?",
       "answer": "Elihu",
       "accept": [
        ["elihu"]
       ],
       "ref": "Job 32:2-5",
       "choices": ["Eliphaz", "Bildad", "Zophar"]
      },
      {
       "id": "BT0993",
       "dok": 3,
       "q": "Which psalm is attributed to Moses in its superscription?",
       "answer": "Psalm 90",
       "accept": [
        ["90"],
        ["ninety"]
       ],
       "ref": "Psalm 90 superscription",
       "choices": ["Psalm 1", "Psalm 51", "Psalm 72"],
       "note": "Psalm numbers are one lower in Bibles that follow the Greek and Latin numbering."
      },
      {
       "id": "BT0997",
       "dok": 3,
       "q": "Which psalm is the longest chapter in the Bible?",
       "answer": "Psalm 119",
       "accept": [
        ["119"]
       ],
       "ref": "Psalm 119",
       "choices": ["Psalm 117", "Psalm 150", "Psalm 23"],
       "note": "Psalm numbers are one lower in Bibles that follow the Greek and Latin numbering."
      }
     ]
    },
    {
     "id": "ot-prophets",
     "title": "The prophets",
     "subject": "ot",
     "cards": [
      {
       "id": "BT0157",
       "dok": 1,
       "q": "Who was swallowed by a great fish?",
       "answer": "Jonah",
       "accept": [
        ["jonah"],
        ["jonas"]
       ],
       "ref": "Jonah 1:17",
       "choices": ["Job", "Daniel", "Peter"],
       "groups": ["jonah"]
      },
      {
       "id": "BT0161",
       "dok": 1,
       "q": "To what city was Jonah sent to preach?",
       "answer": "Nineveh",
       "accept": [
        ["nineveh"]
       ],
       "ref": "Jonah 1:2",
       "choices": ["Babylon", "Tarshish", "Jerusalem"],
       "groups": ["jonah"]
      },
      {
       "id": "BT0165",
       "dok": 1,
       "q": "Who was thrown into a lions' den?",
       "answer": "Daniel",
       "accept": [
        ["daniel"]
       ],
       "ref": "Daniel 6:16",
       "choices": ["David", "Jonah", "Samson"]
      },
      {
       "id": "BT0169",
       "dok": 1,
       "q": "Who interpreted Nebuchadnezzar's dream?",
       "answer": "Daniel",
       "accept": [
        ["daniel"]
       ],
       "ref": "Daniel 2:26-28",
       "choices": ["Joseph", "Ezekiel", "Jeremiah"]
      },
      {
       "id": "BT0173",
       "dok": 1,
       "q": "Who were Daniel's three friends thrown into the furnace?",
       "answer": "Shadrach, Meshach, and Abednego",
       "accept": [
        ["shadrach", "meshach", "abednego"],
        ["hananiah", "mishael", "azariah"]
       ],
       "ref": "Daniel 3:19-25",
       "choices": ["Peter, James, and John", "Eliphaz, Bildad, and Zophar", "Shem, Ham, and Japheth"]
      },
      {
       "id": "BT0565",
       "dok": 2,
       "q": "Which prophet saw the Lord high and lifted up in the temple?",
       "answer": "Isaiah",
       "accept": [
        ["isaiah"]
       ],
       "ref": "Isaiah 6:1",
       "choices": ["Ezekiel", "Jeremiah", "Daniel"]
      },
      {
       "id": "BT0569",
       "dok": 2,
       "q": "Which prophet was told to buy a field during Jerusalem's siege?",
       "answer": "Jeremiah",
       "accept": [
        ["jeremiah"]
       ],
       "ref": "Jeremiah 32:6-15",
       "choices": ["Isaiah", "Ezekiel", "Hosea"]
      },
      {
       "id": "BT0573",
       "dok": 2,
       "q": "Which prophet saw a valley of dry bones?",
       "answer": "Ezekiel",
       "accept": [
        ["ezekiel"]
       ],
       "ref": "Ezekiel 37:1-14",
       "choices": ["Isaiah", "Daniel", "Joel"]
      },
      {
       "id": "BT0577",
       "dok": 2,
       "q": "Which prophet married Gomer?",
       "answer": "Hosea",
       "accept": [
        ["hosea"]
       ],
       "ref": "Hosea 1:2-3",
       "choices": ["Amos", "Micah", "Isaiah"]
      },
      {
       "id": "BT0581",
       "dok": 2,
       "q": "Which prophet proclaimed 'Let justice roll down like waters'?",
       "answer": "Amos",
       "accept": [
        ["amos"]
       ],
       "ref": "Amos 5:24",
       "choices": ["Micah", "Isaiah", "Hosea"]
      },
      {
       "id": "BT0585",
       "dok": 2,
       "q": "Which prophet was sent to Nineveh after fleeing toward Tarshish?",
       "answer": "Jonah",
       "accept": [
        ["jonah"]
       ],
       "ref": "Jonah 1:1-3",
       "choices": ["Nahum", "Obadiah", "Amos"],
       "groups": ["jonah"]
      },
      {
       "id": "BT0589",
       "dok": 2,
       "q": "Which prophet foretold a ruler from Bethlehem?",
       "answer": "Micah",
       "accept": [
        ["micah"]
       ],
       "ref": "Micah 5:2",
       "choices": ["Isaiah", "Malachi", "Zechariah"]
      },
      {
       "id": "BT0593",
       "dok": 2,
       "q": "Which prophet said the righteous shall live by faith?",
       "answer": "Habakkuk",
       "accept": [
        ["habakkuk"]
       ],
       "ref": "Habakkuk 2:4",
       "choices": ["Haggai", "Zephaniah", "Nahum"],
       "note": "Some translations say \"faithfulness\" where others say \"faith.\""
      },
      {
       "id": "BT0597",
       "dok": 2,
       "q": "Which prophet encouraged rebuilding the temple after exile?",
       "answer": "Haggai",
       "accept": [
        ["haggai"],
        ["zechariah"],
        ["zachariah"]
       ],
       "ref": "Haggai 1:7-8",
       "choices": ["Jonah", "Amos", "Hosea"],
       "note": "Zechariah also urged the rebuilding (Ezra 5:1), so Zechariah is accepted too."
      },
      {
       "id": "BT0601",
       "dok": 2,
       "q": "Which prophet saw a flying scroll?",
       "answer": "Zechariah",
       "accept": [
        ["zechariah"],
        ["zachariah"],
        ["zacharias"]
       ],
       "ref": "Zechariah 5:1-2",
       "choices": ["Daniel", "Amos", "Joel"]
      },
      {
       "id": "BT0605",
       "dok": 2,
       "q": "Which prophet challenged Israel about robbing God in tithes?",
       "answer": "Malachi",
       "accept": [
        ["malachi"]
       ],
       "ref": "Malachi 3:8",
       "choices": ["Haggai", "Micah", "Amos"]
      },
      {
       "id": "BT0913",
       "dok": 3,
       "q": "Who was the Babylonian official who released Jeremiah after Jerusalem fell?",
       "answer": "Nebuzaradan",
       "accept": [
        ["nebuzaradan"],
        ["nebuzar", "adan"]
       ],
       "ref": "Jeremiah 40:1-4",
       "choices": ["Nebuchadnezzar", "Gedaliah", "Belshazzar"],
       "groups": ["bab-b"]
      },
      {
       "id": "BT0917",
       "dok": 3,
       "q": "Who was the scribe who wrote Jeremiah's dictated scroll?",
       "answer": "Baruch",
       "accept": [
        ["baruch"]
       ],
       "ref": "Jeremiah 36:4",
       "choices": ["Ezra", "Shaphan", "Gedaliah"]
      },
      {
       "id": "BT0921",
       "dok": 3,
       "q": "Who was the Ethiopian official who rescued Jeremiah from a cistern?",
       "answer": "Ebed-melech",
       "accept": [
        ["ebedmelech"],
        ["ebed", "melech"]
       ],
       "ref": "Jeremiah 38:7-13",
       "choices": ["Baruch", "Gedaliah", "Nebuzaradan"],
       "note": "Translations say Ethiopian or Cushite."
      },
      {
       "id": "BT0925",
       "dok": 3,
       "q": "Which prophet named his son Maher-shalal-hash-baz?",
       "answer": "Isaiah",
       "accept": [
        ["isaiah"]
       ],
       "ref": "Isaiah 8:1-3",
       "choices": ["Hosea", "Jeremiah", "Ezekiel"]
      },
      {
       "id": "BT0929",
       "dok": 3,
       "q": "What was the name of Hosea's daughter?",
       "answer": "Lo-ruhamah",
       "accept": [
        ["loruhamah"],
        ["lo", "ruhamah"],
        ["no", "mercy"],
        ["not", "loved"],
        ["not", "pitied"]
       ],
       "ref": "Hosea 1:6",
       "choices": ["Lo-ammi", "Jezreel", "Gomer"],
       "note": "Some translations print the meaning of the name, such as No Mercy or Not Loved."
      },
      {
       "id": "BT0933",
       "dok": 3,
       "q": "What was the name of Hosea's son whose name meant 'not my people'?",
       "answer": "Lo-ammi",
       "accept": [
        ["loammi"],
        ["lo", "ammi"]
       ],
       "ref": "Hosea 1:8-9",
       "choices": ["Jezreel", "Lo-ruhamah", "Ichabod"],
       "note": "Some translations print the meaning in place of the name."
      },
      {
       "id": "BT0937",
       "dok": 3,
       "q": "Which prophet described a plumb line vision?",
       "answer": "Amos",
       "accept": [
        ["amos"]
       ],
       "ref": "Amos 7:7-8",
       "choices": ["Hosea", "Jonah", "Obadiah"],
       "groups": ["amos"]
      },
      {
       "id": "BT0941",
       "dok": 3,
       "q": "Which prophet described locusts, fire, and a plumb line?",
       "answer": "Amos",
       "accept": [
        ["amos"]
       ],
       "ref": "Amos 7:1-8",
       "choices": ["Joel", "Hosea", "Nahum"],
       "groups": ["amos"]
      },
      {
       "id": "BT0945",
       "dok": 3,
       "q": "Which prophet saw four horns and four craftsmen?",
       "answer": "Zechariah",
       "accept": [
        ["zechariah"],
        ["zachariah"],
        ["zacharias"]
       ],
       "ref": "Zechariah 1:18-21",
       "choices": ["Daniel", "Ezekiel", "Haggai"]
      },
      {
       "id": "BT0949",
       "dok": 3,
       "q": "Who was the high priest shown in Zechariah's vision of clean garments?",
       "answer": "Joshua son of Jehozadak",
       "accept": [
        ["joshua"],
        ["jeshua"]
       ],
       "ref": "Zechariah 3:1-5",
       "choices": ["Aaron", "Zadok", "Hilkiah"],
       "note": "Ezra and Nehemiah spell the name Jeshua."
      }
     ]
    }
   ]
  },
  {
   "id": "nt",
   "title": "New Testament",
   "topics": [
    {
     "id": "nt-jesus",
     "title": "Birth and ministry of Jesus",
     "subject": "nt",
     "cards": [
      {
       "id": "BT0201",
       "dok": 1,
       "q": "In what town was Jesus born?",
       "answer": "Bethlehem",
       "accept": [
        ["bethlehem"]
       ],
       "ref": "Matthew 2:1",
       "choices": ["Nazareth", "Jerusalem", "Capernaum"]
      },
      {
       "id": "BT0205",
       "dok": 1,
       "q": "Who was Jesus' mother?",
       "answer": "Mary",
       "accept": [
        ["mary"]
       ],
       "ref": "Luke 1:30-31",
       "choices": ["Elizabeth", "Martha", "Anna"],
       "groups": ["mary"]
      },
      {
       "id": "BT0209",
       "dok": 1,
       "q": "Who was Mary's husband?",
       "answer": "Joseph",
       "accept": [
        ["joseph"]
       ],
       "ref": "Matthew 1:18-24",
       "choices": ["Zechariah", "Simeon", "Cleopas"]
      },
      {
       "id": "BT0213",
       "dok": 1,
       "q": "Who announced Jesus' birth to Mary?",
       "answer": "Gabriel",
       "accept": [
        ["gabriel"]
       ],
       "ref": "Luke 1:26-31",
       "choices": ["Michael", "Simeon", "John the Baptist"],
       "groups": ["mary"]
      },
      {
       "id": "BT0217",
       "dok": 1,
       "q": "Who baptized Jesus?",
       "answer": "John the Baptist",
       "accept": [
        ["john", "baptist"],
        ["john"],
        ["baptist"],
        ["john", "baptizer"]
       ],
       "ref": "Matthew 3:13-17",
       "choices": ["Peter", "Andrew", "Elijah"]
      },
      {
       "id": "BT0221",
       "dok": 1,
       "q": "In what river was Jesus baptized?",
       "answer": "Jordan River",
       "accept": [
        ["jordan"]
       ],
       "ref": "Mark 1:9",
       "choices": ["Nile River", "Euphrates River", "Tigris River"]
      },
      {
       "id": "BT0225",
       "dok": 1,
       "q": "How many apostles did Jesus appoint?",
       "answer": "Twelve",
       "accept": [
        ["twelve"],
        ["12"]
       ],
       "ref": "Mark 3:13-19",
       "choices": ["Seven", "Ten", "Forty"]
      },
      {
       "id": "BT0237",
       "dok": 1,
       "q": "Which disciple was a tax collector before following Jesus?",
       "answer": "Matthew",
       "accept": [
        ["matthew"],
        ["levi"]
       ],
       "ref": "Matthew 9:9",
       "choices": ["Peter", "Andrew", "Thomas"],
       "note": "Mark and Luke call this tax collector Levi."
      },
      {
       "id": "BT0241",
       "dok": 1,
       "q": "Who was the brother of Simon Peter?",
       "answer": "Andrew",
       "accept": [
        ["andrew"]
       ],
       "ref": "John 1:40",
       "choices": ["James", "John", "Philip"]
      },
      {
       "id": "BT0245",
       "dok": 1,
       "q": "Who climbed a sycamore tree to see Jesus?",
       "answer": "Zacchaeus",
       "accept": [
        ["zacchaeus"],
        ["zaccheus"],
        ["zacheus"],
        ["zacchaeous"]
       ],
       "ref": "Luke 19:1-4",
       "choices": ["Nicodemus", "Bartimaeus", "Lazarus"],
       "note": "Most modern translations say sycamore fig."
      },
      {
       "id": "BT0249",
       "dok": 1,
       "q": "Who was raised from the dead after four days in a tomb?",
       "answer": "Lazarus",
       "accept": [
        ["lazarus"]
       ],
       "ref": "John 11:17,43-44",
       "choices": ["Jairus", "Bartimaeus", "Stephen"]
      },
      {
       "id": "BT0253",
       "dok": 1,
       "q": "Who were Lazarus' sisters?",
       "answer": "Mary and Martha",
       "accept": [
        ["mary", "martha"]
       ],
       "ref": "John 11:1-2",
       "choices": ["Mary and Elizabeth", "Ruth and Naomi", "Rachel and Leah"]
      },
      {
       "id": "BT0257",
       "dok": 1,
       "q": "At what village did Jesus turn water into wine?",
       "answer": "Cana",
       "accept": [
        ["cana"]
       ],
       "ref": "John 2:1-11",
       "choices": ["Capernaum", "Bethany", "Nazareth"]
      },
      {
       "id": "BT0261",
       "dok": 1,
       "q": "What did Jesus use to feed five thousand men?",
       "answer": "Five loaves and two fish",
       "accept": [
        ["loaves", "fish"],
        ["loaves", "fishes"],
        ["bread", "fish"],
        ["bread", "fishes"],
        ["loafs", "fish"],
        ["loafs", "fishes"],
        ["loaf", "fish"]
       ],
       "ref": "Matthew 14:17-21",
       "choices": ["Seven loaves and a few fish", "Two loaves and five fish", "Twelve baskets of bread"]
      },
      {
       "id": "BT0265",
       "dok": 1,
       "q": "On what sea did Jesus walk?",
       "answer": "Sea of Galilee",
       "accept": [
        ["galilee"],
        ["tiberias"],
        ["gennesaret"],
        ["kinneret"]
       ],
       "ref": "Matthew 14:24-26",
       "choices": ["Dead Sea", "Red Sea", "Mediterranean Sea"],
       "note": "John calls it the Sea of Tiberias, and Luke calls it the Lake of Gennesaret."
      },
      {
       "id": "BT0269",
       "dok": 1,
       "q": "Who walked briefly on water toward Jesus?",
       "answer": "Peter",
       "accept": [
        ["peter"],
        ["simon"],
        ["cephas"]
       ],
       "ref": "Matthew 14:28-31",
       "choices": ["John", "James", "Andrew"]
      },
      {
       "id": "BT0273",
       "dok": 1,
       "q": "Which prayer begins 'Our Father in heaven'?",
       "answer": "The Lord's Prayer",
       "accept": [
        ["lord", "prayer"],
        ["lords", "prayer"],
        ["our", "father"],
        ["pater", "noster"],
        ["model", "prayer"]
       ],
       "ref": "Matthew 6:9-13",
       "choices": ["The Beatitudes", "The Magnificat", "The Great Commission"],
       "note": "The wording changes by translation, for example \"Our Father which art in heaven.\""
      },
      {
       "id": "BT0277",
       "dok": 1,
       "q": "What parable features a son who returns after squandering his inheritance?",
       "answer": "The prodigal son",
       "accept": [
        ["prodigal"],
        ["lost", "son"]
       ],
       "ref": "Luke 15:11-32",
       "choices": ["The good Samaritan", "The lost sheep", "The sower"]
      },
      {
       "id": "BT0281",
       "dok": 1,
       "q": "What parable features a traveler helped by a Samaritan?",
       "answer": "The good Samaritan",
       "accept": [
        ["samaritan"]
       ],
       "ref": "Luke 10:30-37",
       "choices": ["The prodigal son", "The sower", "The rich man and Lazarus"],
       "groups": ["samaritan"]
      },
      {
       "id": "BT0381",
       "dok": 1,
       "q": "Who was the father of John the Baptist?",
       "answer": "Zechariah",
       "accept": [
        ["zechariah"],
        ["zacharias"],
        ["zachariah"],
        ["zachary"]
       ],
       "ref": "Luke 1:13",
       "choices": ["Joseph", "Simeon", "Zebedee"],
       "note": "The King James Version spells the name Zacharias."
      },
      {
       "id": "BT0385",
       "dok": 1,
       "q": "Who was the mother of John the Baptist?",
       "answer": "Elizabeth",
       "accept": [
        ["elizabeth"],
        ["elisabeth"]
       ],
       "ref": "Luke 1:57-60",
       "choices": ["Mary", "Anna", "Martha"]
      },
      {
       "id": "BT0613",
       "dok": 2,
       "q": "Which Gospel opens with a genealogy of Jesus that starts from Abraham?",
       "answer": "Matthew",
       "accept": [
        ["matthew"]
       ],
       "ref": "Matthew 1:1-17",
       "choices": ["Mark", "Luke", "John"]
      },
      {
       "id": "BT0617",
       "dok": 2,
       "q": "Which Gospel opens with 'In the beginning was the Word'?",
       "answer": "John",
       "accept": [
        ["john"]
       ],
       "ref": "John 1:1",
       "choices": ["Matthew", "Mark", "Luke"]
      },
      {
       "id": "BT0621",
       "dok": 2,
       "q": "Which Gospel begins with the ministry of John the Baptist and no infancy narrative?",
       "answer": "Mark",
       "accept": [
        ["mark"]
       ],
       "ref": "Mark 1:1-4",
       "choices": ["Matthew", "Luke"]
      },
      {
       "id": "BT0625",
       "dok": 2,
       "q": "Which Gospel includes the parable of the good Samaritan?",
       "answer": "Luke",
       "accept": [
        ["luke"]
       ],
       "ref": "Luke 10:25-37",
       "choices": ["Matthew", "Mark", "John"],
       "groups": ["samaritan"]
      },
      {
       "id": "BT0629",
       "dok": 2,
       "q": "Who visited Jesus by night in John 3?",
       "answer": "Nicodemus",
       "accept": [
        ["nicodemus"]
       ],
       "ref": "John 3:1-2",
       "choices": ["Zacchaeus", "Joseph of Arimathea", "Gamaliel"]
      },
      {
       "id": "BT0637",
       "dok": 2,
       "q": "What was the name of the well where Jesus spoke to a Samaritan woman?",
       "answer": "Jacob's well",
       "accept": [
        ["jacob"],
        ["jacobs"]
       ],
       "ref": "John 4:6",
       "choices": ["Joseph's well", "David's well", "Isaac's well"]
      },
      {
       "id": "BT0641",
       "dok": 2,
       "q": "What pool is associated with the healing of a man ill for 38 years?",
       "answer": "Bethesda",
       "accept": [
        ["bethesda"],
        ["bethzatha"],
        ["bethsaida"]
       ],
       "ref": "John 5:2-9",
       "choices": ["Siloam", "Gihon", "Kidron"],
       "note": "Some manuscripts and translations spell it Bethzatha or Bethsaida."
      },
      {
       "id": "BT0645",
       "dok": 2,
       "q": "What pool did Jesus send the man born blind to wash in?",
       "answer": "Siloam",
       "accept": [
        ["siloam"]
       ],
       "ref": "John 9:7",
       "choices": ["Bethesda", "Gihon", "Kidron"]
      },
      {
       "id": "BT0725",
       "dok": 2,
       "q": "Who was the father of the apostles James and John?",
       "answer": "Zebedee",
       "accept": [
        ["zebedee"]
       ],
       "ref": "Mark 1:19-20",
       "choices": ["Alphaeus", "Jonah", "Zechariah"]
      },
      {
       "id": "BT0729",
       "dok": 2,
       "q": "What nickname did Jesus give James and John?",
       "answer": "Sons of Thunder",
       "accept": [
        ["thunder"],
        ["boanerges"]
       ],
       "ref": "Mark 3:17",
       "choices": ["Fishers of Men", "The Rock", "Sons of Encouragement"]
      },
      {
       "id": "BT0733",
       "dok": 2,
       "q": "Which disciple was also called Didymus?",
       "answer": "Thomas",
       "accept": [
        ["thomas"]
       ],
       "ref": "John 11:16",
       "choices": ["Bartholomew", "Thaddaeus", "Matthew"],
       "note": "Didymus is Greek for twin, and some translations print \"the Twin.\""
      }
     ]
    },
    {
     "id": "nt-passion",
     "title": "The cross and the resurrection",
     "subject": "nt",
     "cards": [
      {
       "id": "BT0229",
       "dok": 1,
       "q": "Which disciple denied Jesus three times?",
       "answer": "Peter",
       "accept": [
        ["peter"],
        ["simon"],
        ["cephas"]
       ],
       "ref": "Luke 22:54-62",
       "choices": ["Judas Iscariot", "Thomas", "John"]
      },
      {
       "id": "BT0233",
       "dok": 1,
       "q": "Which disciple betrayed Jesus?",
       "answer": "Judas Iscariot",
       "accept": [
        ["judas"]
       ],
       "ref": "Matthew 26:14-16",
       "choices": ["Peter", "Thomas", "Matthew"]
      },
      {
       "id": "BT0285",
       "dok": 1,
       "q": "What animal did Jesus ride into Jerusalem?",
       "answer": "Donkey",
       "accept": [
        ["donkey"],
        ["colt"],
        ["ass"],
        ["foal"],
        ["donkeys"]
       ],
       "ref": "Matthew 21:1-7",
       "choices": ["Horse", "Camel", "Ox"],
       "note": "Matthew mentions a donkey and a colt. Mark, Luke and John mention one young donkey."
      },
      {
       "id": "BT0289",
       "dok": 1,
       "q": "Where did Jesus pray before his arrest?",
       "answer": "Gethsemane",
       "accept": [
        ["gethsemane"],
        ["mount", "olives"],
        ["olivet"]
       ],
       "ref": "Matthew 26:36",
       "choices": ["Golgotha", "Bethany", "The temple courts"]
      },
      {
       "id": "BT0293",
       "dok": 1,
       "q": "Who ordered Jesus' crucifixion under Roman authority?",
       "answer": "Pontius Pilate",
       "accept": [
        ["pilate"]
       ],
       "ref": "Mark 15:15",
       "choices": ["Herod Antipas", "Caiaphas", "Caesar Augustus"]
      },
      {
       "id": "BT0297",
       "dok": 1,
       "q": "At what place was Jesus crucified?",
       "answer": "Golgotha",
       "accept": [
        ["golgotha"],
        ["calvary"],
        ["skull"]
       ],
       "ref": "Mark 15:22",
       "choices": ["Gethsemane", "Bethany", "Mount Sinai"],
       "note": "The King James Version of Luke 23:33 uses the Latin name, Calvary."
      },
      {
       "id": "BT0301",
       "dok": 1,
       "q": "Who asked Pilate for Jesus' body?",
       "answer": "Joseph of Arimathea",
       "accept": [
        ["joseph", "arimathea"],
        ["joseph"],
        ["arimathea"]
       ],
       "ref": "Mark 15:43",
       "choices": ["Nicodemus", "Simon of Cyrene", "Peter"]
      },
      {
       "id": "BT0305",
       "dok": 1,
       "q": "On which day after his burial did Jesus rise?",
       "answer": "The third day",
       "accept": [
        ["third"],
        ["3rd"],
        ["3"],
        ["three"]
       ],
       "ref": "Luke 24:6-7",
       "choices": ["The second day", "The seventh day", "The fortieth day"]
      },
      {
       "id": "BT0309",
       "dok": 1,
       "q": "Who first encountered the risen Jesus in John's Gospel?",
       "answer": "Mary Magdalene",
       "accept": [
        ["mary", "magdalene"],
        ["magdalene"],
        ["mary", "magdala"]
       ],
       "ref": "John 20:14-18",
       "choices": ["Peter", "Mary the mother of Jesus", "Thomas"],
       "note": "The four Gospels describe the first appearances differently. This question follows John."
      },
      {
       "id": "BT0313",
       "dok": 1,
       "q": "Who doubted until he saw Jesus' wounds?",
       "answer": "Thomas",
       "accept": [
        ["thomas"],
        ["didymus"]
       ],
       "ref": "John 20:24-29",
       "choices": ["Peter", "Philip", "Andrew"]
      },
      {
       "id": "BT0633",
       "dok": 2,
       "q": "Which Pharisee helped prepare Jesus' body for burial?",
       "answer": "Nicodemus",
       "accept": [
        ["nicodemus"]
       ],
       "ref": "John 19:39",
       "choices": ["Gamaliel", "Caiaphas", "Simon the Pharisee"]
      }
     ]
    },
    {
     "id": "nt-acts",
     "title": "The early church in Acts",
     "subject": "nt",
     "cards": [
      {
       "id": "BT0317",
       "dok": 1,
       "q": "What event brought the Holy Spirit upon believers in Acts 2?",
       "answer": "Pentecost",
       "accept": [
        ["pentecost"]
       ],
       "ref": "Acts 2:1-4",
       "choices": ["Passover", "The Transfiguration", "The Ascension"],
       "groups": ["pentecost"]
      },
      {
       "id": "BT0321",
       "dok": 1,
       "q": "Who preached to the crowd at Pentecost?",
       "answer": "Peter",
       "accept": [
        ["peter"],
        ["simon"],
        ["cephas"]
       ],
       "ref": "Acts 2:14",
       "choices": ["Paul", "Stephen", "James"],
       "groups": ["pentecost"]
      },
      {
       "id": "BT0325",
       "dok": 1,
       "q": "Who was the first Christian martyr described in Acts?",
       "answer": "Stephen",
       "accept": [
        ["stephen"],
        ["steven"]
       ],
       "ref": "Acts 7:54-60",
       "choices": ["James", "Paul", "Barnabas"]
      },
      {
       "id": "BT0329",
       "dok": 1,
       "q": "What was Paul's name before he was commonly called Paul?",
       "answer": "Saul",
       "accept": [
        ["saul"]
       ],
       "ref": "Acts 13:9",
       "choices": ["Simon", "Silas", "Barnabas"],
       "groups": ["saul-paul"],
       "note": "Acts 13:9 says Saul was also called Paul. It does not describe a change of name."
      },
      {
       "id": "BT0333",
       "dok": 1,
       "q": "On what road did Saul encounter the risen Jesus?",
       "answer": "Road to Damascus",
       "accept": [
        ["damascus"]
       ],
       "ref": "Acts 9:3-6",
       "choices": ["Road to Emmaus", "Road to Jericho", "Road to Bethlehem"],
       "groups": ["saul-paul"]
      },
      {
       "id": "BT0337",
       "dok": 1,
       "q": "Who was Paul's missionary companion on his first journey?",
       "answer": "Barnabas",
       "accept": [
        ["barnabas"]
       ],
       "ref": "Acts 13:2-4",
       "choices": ["Silas", "Timothy", "Luke"]
      },
      {
       "id": "BT0341",
       "dok": 1,
       "q": "Who was the physician and companion associated with a Gospel and Acts?",
       "answer": "Luke",
       "accept": [
        ["luke"]
       ],
       "ref": "Colossians 4:14; Luke 1:1-4; Acts 1:1",
       "choices": ["Mark", "Titus", "Timothy"],
       "note": "Colossians calls Luke a physician. Linking him to the Gospel and Acts comes from early church tradition."
      },
      {
       "id": "BT0349",
       "dok": 1,
       "q": "Which New Testament book describes the early church after Jesus' ascension?",
       "answer": "Acts",
       "accept": [
        ["acts"]
       ],
       "ref": "Acts 1:1-9",
       "choices": ["Romans", "Hebrews", "Revelation"]
      },
      {
       "id": "BT0649",
       "dok": 2,
       "q": "Who was the Roman centurion in Caesarea who received Peter?",
       "answer": "Cornelius",
       "accept": [
        ["cornelius"]
       ],
       "ref": "Acts 10:1-6",
       "choices": ["Julius", "Felix", "Sergius Paulus"]
      },
      {
       "id": "BT0653",
       "dok": 2,
       "q": "Who was the first named European convert in Paul's Philippi account?",
       "answer": "Lydia",
       "accept": [
        ["lydia"]
       ],
       "ref": "Acts 16:14-15",
       "choices": ["Priscilla", "Dorcas", "Phoebe"],
       "note": "Lydia came from Thyatira in Asia Minor. She believed in Philippi, which is in Europe."
      },
      {
       "id": "BT0657",
       "dok": 2,
       "q": "What trade did Lydia practice?",
       "answer": "Seller of purple goods",
       "accept": [
        ["purple"]
       ],
       "ref": "Acts 16:14",
       "choices": ["Tentmaker", "Fisher", "Tax collector"],
       "note": "Translations say purple cloth, purple goods, or simply purple."
      },
      {
       "id": "BT0661",
       "dok": 2,
       "q": "Who was the eloquent Alexandrian teacher instructed by Priscilla and Aquila?",
       "answer": "Apollos",
       "accept": [
        ["apollos"]
       ],
       "ref": "Acts 18:24-26",
       "choices": ["Timothy", "Silas", "Barnabas"],
       "groups": ["apollos"]
      },
      {
       "id": "BT0665",
       "dok": 2,
       "q": "Who was Paul's young coworker with a Greek father and Jewish mother?",
       "answer": "Timothy",
       "accept": [
        ["timothy"]
       ],
       "ref": "Acts 16:1",
       "choices": ["Titus", "Silas", "John Mark"]
      },
      {
       "id": "BT0677",
       "dok": 2,
       "q": "Which couple explained God's way more accurately to Apollos?",
       "answer": "Priscilla and Aquila",
       "accept": [
        ["priscilla", "aquila"],
        ["prisca", "aquila"]
       ],
       "ref": "Acts 18:26",
       "choices": ["Ananias and Sapphira", "Zechariah and Elizabeth", "Andronicus and Junia"],
       "groups": ["apollos"]
      },
      {
       "id": "BT0681",
       "dok": 2,
       "q": "Who fell from a window during Paul's lengthy speech?",
       "answer": "Eutychus",
       "accept": [
        ["eutychus"]
       ],
       "ref": "Acts 20:9-10",
       "choices": ["Tychicus", "Trophimus", "Epaphroditus"]
      },
      {
       "id": "BT0685",
       "dok": 2,
       "q": "On what island was Paul shipwrecked?",
       "answer": "Malta",
       "accept": [
        ["malta"],
        ["melita"]
       ],
       "ref": "Acts 28:1",
       "choices": ["Crete", "Cyprus", "Patmos"],
       "note": "The King James Version calls the island Melita."
      }
     ]
    },
    {
     "id": "nt-letters",
     "title": "Letters and Revelation",
     "subject": "nt",
     "cards": [
      {
       "id": "BT0345",
       "dok": 1,
       "q": "Which apostle wrote letters to the Corinthians?",
       "answer": "Paul",
       "accept": [
        ["paul"]
       ],
       "ref": "1 Corinthians 1:1",
       "choices": ["Peter", "John", "James"]
      },
      {
       "id": "BT0353",
       "dok": 1,
       "q": "Which book is last in the New Testament?",
       "answer": "Revelation",
       "accept": [
        ["revelation"],
        ["revelations"],
        ["apocalypse"]
       ],
       "ref": "Revelation 22:18-21",
       "choices": ["Jude", "Acts", "Hebrews"]
      },
      {
       "id": "BT0669",
       "dok": 2,
       "q": "Who was Timothy's mother?",
       "answer": "Eunice",
       "accept": [
        ["eunice"]
       ],
       "ref": "2 Timothy 1:5",
       "choices": ["Lois", "Lydia", "Priscilla"]
      },
      {
       "id": "BT0673",
       "dok": 2,
       "q": "Who was Timothy's grandmother?",
       "answer": "Lois",
       "accept": [
        ["lois"]
       ],
       "ref": "2 Timothy 1:5",
       "choices": ["Eunice", "Phoebe", "Dorcas"]
      },
      {
       "id": "BT0689",
       "dok": 2,
       "q": "Which letter contains the 'fruit of the Spirit' list?",
       "answer": "Galatians",
       "accept": [
        ["galatians"]
       ],
       "ref": "Galatians 5:22-23",
       "choices": ["Ephesians", "Romans", "Philippians"]
      },
      {
       "id": "BT0693",
       "dok": 2,
       "q": "Which letter contains the 'armor of God' passage?",
       "answer": "Ephesians",
       "accept": [
        ["ephesians"]
       ],
       "ref": "Ephesians 6:10-17",
       "choices": ["Galatians", "Colossians", "Romans"]
      },
      {
       "id": "BT0697",
       "dok": 2,
       "q": "Which letter contains the 'love is patient' passage?",
       "answer": "1 Corinthians",
       "accept": [
        ["1", "corinthians"],
        ["first", "corinthians"],
        ["i", "corinthians"],
        ["1st", "corinthians"],
        ["one", "corinthians"]
       ],
       "ref": "1 Corinthians 13:4",
       "choices": ["2 Corinthians", "Romans", "1 John"],
       "note": "The King James Version reads \"Charity suffereth long.\""
      },
      {
       "id": "BT0701",
       "dok": 2,
       "q": "Which letter discusses faith without works being dead?",
       "answer": "James",
       "accept": [
        ["james"]
       ],
       "ref": "James 2:17",
       "choices": ["Romans", "Galatians", "Hebrews"]
      },
      {
       "id": "BT0705",
       "dok": 2,
       "q": "Which letter describes Jesus as the great high priest?",
       "answer": "Hebrews",
       "accept": [
        ["hebrews"]
       ],
       "ref": "Hebrews 4:14",
       "choices": ["Romans", "James", "1 Peter"]
      },
      {
       "id": "BT0709",
       "dok": 2,
       "q": "Which book addresses seven churches in Asia Minor?",
       "answer": "Revelation",
       "accept": [
        ["revelation"],
        ["revelations"],
        ["apocalypse"]
       ],
       "ref": "Revelation 1:11",
       "choices": ["Acts", "Hebrews", "Jude"],
       "groups": ["rev-a", "rev-b"]
      },
      {
       "id": "BT0713",
       "dok": 2,
       "q": "Which church in Revelation was called lukewarm?",
       "answer": "Laodicea",
       "accept": [
        ["laodicea"]
       ],
       "ref": "Revelation 3:14-16",
       "choices": ["Ephesus", "Smyrna", "Philadelphia"],
       "groups": ["rev-a"]
      },
      {
       "id": "BT0717",
       "dok": 2,
       "q": "Which church in Revelation had abandoned its first love?",
       "answer": "Ephesus",
       "accept": [
        ["ephesus"]
       ],
       "ref": "Revelation 2:1-4",
       "choices": ["Laodicea", "Sardis", "Pergamum"],
       "groups": ["rev-b"]
      },
      {
       "id": "BT0721",
       "dok": 2,
       "q": "Who received the vision recorded in Revelation?",
       "answer": "John",
       "accept": [
        ["john"]
       ],
       "ref": "Revelation 1:1,9",
       "choices": ["Peter", "Paul", "Daniel"],
       "note": "The book names its writer only as John. Tradition identifies him as the apostle."
      }
     ]
    }
   ]
  }
 ]
};
