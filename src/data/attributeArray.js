const attributeArray = [
    {
    id: 0,
    attributeName: 'creative',
    description: 'Make new from nothing',
    symbol: 'World - Made with a Word',
    seenInJesus: 'Jesus, the Word, made and sustains all things',
    whoSaintsAre: 'Created beings with a new Spirit who praise and thank the Creator',
    whoUnsavedAre: 'Created beings who praise self or creation',
    color: 'teal'
    },
    {
    id: 1,
    attributeName: 'eternal',
    description: 'Exist independent of time',
    symbol: 'Alpha and Omega',
    seenInJesus: 'Jesus is eternal - He claimed to be older than Abraham and the Bible says He was in the very beginning.',
    whoSaintsAre: 'Eternal soul to be given an eternal resurrected body',
    whoUnsavedAre: 'Eternal soul apart from God with a mortal body',
    color: 'teal'
    },
    {
    id: 2,
    attributeName: 'faithful',
    description: 'Able to be trusted',
    symbol: 'Rock',
    seenInJesus: 'Jesus faithfulness to His disciples and to His Father',
    whoSaintsAre: 'Fruit bearers',
    whoUnsavedAre: 'Barren of praise for God',
    color: 'teal'
    },
    {
    id: 3,
    attributeName: 'glorious',
    description: 'Who God is - the summation of all His attributes',
    symbol: 'Light - Often Shining Through Some Medium',
    seenInJesus: 'Transfiguration',
    whoSaintsAre: 'Purpose of life is to see & reflect His glory',
    whoUnsavedAre: 'Missing the key purpose of life - God’s glory',
    color: 'teal'
    },
    {
    id: 4,
    attributeName: 'good',
    description: 'All God is and does/What pleases God',
    symbol: 'God is good',
    seenInJesus: 'In all His actions, including His claims to be God.',
    whoSaintsAre: 'Blessed to glorify God',
    whoUnsavedAre: 'Partakers of common grace & goodness of God',
    color: 'teal'
    },
    {
    id: 5,
    attributeName: 'gracious',
    description: 'Sacrificial loving-kindness to the undeserving',
    symbol: 'Gift',
    seenInJesus: 'Jesus forgiving/healing the paralytic in front of the scribes',
    whoSaintsAre: 'Chosen by God for forgiveness, reconcilliation and eternal life',
    whoUnsavedAre: 'Common grace (or mercy) only',
    color: 'teal'
    },
    {
    id: 6,
    attributeName: 'holy',
    description: 'Worthy - Separate from sin & creation',
    symbol: 'Fire',
    seenInJesus: 'Identified by unclean demon as the Holy One of God',
    whoSaintsAre: 'Joined with Jesus and one with God',
    whoUnsavedAre: 'Joined with Jesus and one with God',
    color: 'teal'
    },
    {
    attributeName: 'humble',
    description: 'Rightly considering yourself and elevating others',
    symbol: 'Donkey colt',
    seenInJesus: 'Washing His disciples feet',
    whoSaintsAre: 'See themselves in light of who God is and desire to obey Him',
    whoUnsavedAre: 'Proud and in need of humility to see God',
    color: 'teal'
    },
    {
    attributeName: 'immutable',
    description: 'Consistent for eternity',
    symbol: 'Rock',
    seenInJesus: 'The Old and New Testaments are about the same God, with Jesus the primary focus of both.',
    whoSaintsAre: 'Secure in unchanging truth & promises',
    whoUnsavedAre: 'Lost, stumbling over the Rock',
    color: 'yellow'
    },
    {
    attributeName: 'incomprehensible',
    description: 'More than we can humanly fathom',
    symbol: 'Mystery',
    seenInJesus: 'Who is this Jesus spoken of in the Bible?',
    whoSaintsAre: 'In Christ now',
    whoUnsavedAre: 'Not fully comprehending of Who Christ was, is, or will be',
    color: 'yellow'
    },
    {
    attributeName: 'independent',
    description: 'Self-existent - no need for man',
    symbol: 'I AM',
    seenInJesus: 'Jesus is God.  While on earth, He gave His all and still had everything.',
    whoSaintsAre: 'Desiring dependence upon God',
    whoUnsavedAre: 'Desiring independence from God',
    color: 'yellow'
    },
    {
    attributeName: 'invisible',
    description: 'Exists beyond our current senses',
    symbol: 'Wind',
    seenInJesus: 'Jesus was the historical visible image of the invisible God, making way for the Holy Spirit to prepare for His coming physical kingdom.',
    whoSaintsAre: 'Have a growing perception and appreciation of the true spiritual kingdom',
    whoUnsavedAre: 'Have no or false beliefs of the spiritual realm',
    color: 'yellow'
    },
    {
    attributeName: 'jealous',
    description: 'Eagerly desiring the best for His own and thus not tolerating rivals',
    symbol: 'Bridegroom',
    seenInJesus: ' Jesus is the actual bridegroom who is about to wed His bride, the Church (all believers).',
    whoSaintsAre: 'Protected by & desired by Jesus Christ',
    whoUnsavedAre: 'Having no desire to be with Jesus Christ',
    color: 'yellow'
    },
    {
    attributeName: 'joyful',
    description: 'Cheerful, glad',
    symbol: 'Beauty of creation',
    seenInJesus: 'Jesus wants us to partake of His joy.',
    whoSaintsAre: 'Sharing in God’s joy',
    whoUnsavedAre: 'Seeking, but separated from, true joy',
    color: 'yellow'
    },
    {
    attributeName: 'just',
    description: 'Making all things right/holy',
    symbol: 'Judge',
    seenInJesus: 'Jesus will be the ultimate judge and dispense justice',
    whoSaintsAre: 'Chosen - made right & being made right, Extensions of & slaves to His righteousness',
    whoUnsavedAre: "Slaves to unrighteousness and the object of God's wrath, heading for destruction",
    color: 'yellow'
    },
    {
    attributeName: 'loving',
    description: 'Willing self-sacrifice for the good of another without being deserved or requiring reciprocation',
    symbol: 'Bridegroom',
    seenInJesus: 'Jesus willingly gave His life because it provided the greatest good (eternal life with God) to those who did not deserve it or who could never pay it back',
    whoSaintsAre: 'Empowered to truly love Him & others',
    whoUnsavedAre: 'Condemned/self-serving, but being given opportunity',
    color: 'yellow'
    },
    {
    attributeName: 'merciful',
    description: 'Active compassion for those in need/distress',
    symbol: 'Mercy Seat',
    seenInJesus: 'Compassionately connected people to God and His gifts',
    whoSaintsAre: "Free from God's condemnation, free to be compassionate with others",
    whoUnsavedAre: 'Condemned/self-serving, but still being given opportunity',
    color: 'blue'
    },
    {
    attributeName: 'omnipotent',
    description: 'Unlimited power & authority',
    symbol: 'Earthquake',
    seenInJesus: "Jesus's power was complete, connected to His Father",
    whoSaintsAre: 'Dependent - Source of Praise',
    whoUnsavedAre: 'Dependent, But Confident in Self',
    color: 'blue'
    },
    {
    attributeName: 'omnipresent',
    description: 'Exists everywhere',
    symbol: 'Immanuel ',
    seenInJesus: "Jesus' limited his physical body while on earth, but then affirmed His omnipresence for eternity.",
    whoSaintsAre: 'Near to God - In Christ Jesus',
    whoUnsavedAre: 'Separated From God',
    color: 'blue'
    },
    {
    attributeName: 'omniscient',
    description: 'Knows all - past, present & future',
    symbol: 'Eyes',
    seenInJesus: 'On earth Jesus was fully omniscient, but humbly set aside certain elements to also be fully man ',
    whoSaintsAre: 'Known & loved, receivers of His Revelation',
    whoUnsavedAre: 'Known & loved, yet reject His revelation',
    color: 'blue'
    },
    {
    attributeName: 'patient',
    description: 'Bearing of suffering caused by others',
    symbol: 'The Cross',
    seenInJesus: 'Jesus constantly gave of Himself to help others come to know Him.',
    whoSaintsAre: 'Being sanctified over a lifetime',
    whoUnsavedAre: 'Hope of salvation in due time',
    color: 'blue'
    },
    {
    attributeName: 'peaceful',
    description: 'Source of unity & reconciliation',
    symbol: 'Dove',
    seenInJesus: 'The Prince of Peace who is our peace',
    whoSaintsAre: 'At peace with God',
    whoUnsavedAre: 'In need of peace with God',
    color: 'blue'
    },
    {
    attributeName: 'planning',
    description: "How God's attributes perfectly fit together",
    symbol: 'The cross',
    seenInJesus: 'Jesus had a clear plan to teach salvation and save',
    whoSaintsAre: 'Chosen as part of His plan/His workmanship',
    whoUnsavedAre: 'Chosen as objects of wrath',
    color: 'blue'
    },
    {
    attributeName: 'providing',
    description: 'See the needs of a dependent and supply whatever is best',
    symbol: 'Wedding Wine',
    seenInJesus: 'Provided bread, water/wine, healing/sight, understanding, life',
    whoSaintsAre: 'Dependent, but as a child born of God with a new affection for our Father',
    whoUnsavedAre: 'Dependent, but as a child born of God with a new affection for our Father',
    color: 'blue'
    },
    {
    attributeName: 'relational',
    description: 'Relational to God & people',
    symbol: 'Trinity',
    seenInJesus: 'Care and intimacy shown in serving his disciples and close friends',
    whoSaintsAre: 'In His image - His chosen sheep who belong to Him',
    whoUnsavedAre: 'In His image - Desirous of relationship',
    color: 'orange'
    },
    {
    attributeName: 'saving',
    description: 'The remedy/atonement for sin',
    symbol: 'Lamb',
    seenInJesus: 'Jesus was the perfect Lamb needed to save the world',
    whoSaintsAre: "Redeemed By Christ's Blood",
    whoUnsavedAre: 'Lost - Benefits from common grace, possibly Objects of Wrath',
    color: 'orange'
    },
    {
    attributeName: 'sovereign',
    description: 'Lord & King',
    symbol: 'Messiah',
    seenInJesus: 'Jesus as Supreme Lord in Revelation',
    whoSaintsAre: 'Citizens of Heaven/Ambassadors and Aliens in this World',
    whoUnsavedAre: 'Citizens of World/Rebels to God',
    color: 'orange'
    },
    {
    attributeName: 'teaching',
    description: 'Leads His own perfectly',
    symbol: 'Shepherd',
    seenInJesus: 'Teacher of all He comes into contact with, whether through parables or admonishment',
    whoSaintsAre: 'His Adopted Children Who He Disciples',
    whoUnsavedAre: 'Lost/Rebellious/Centered on Self',
    color: 'orange'
    },
    {
    attributeName: 'truthful',
    description: 'Unobscured Reality',
    symbol: 'Light, Word, Jesus, Belt, Gospel',
    seenInJesus: 'Jesus is the truth.',
    whoSaintsAre: 'Light of the World - Mind of Christ - Illuminating',
    whoUnsavedAre: 'In Darkness/Deceived',
    color: 'orange'
    },
    {
    attributeName: 'unique',
    description: 'Without Equal',
    symbol: 'I AM',
    seenInJesus: 'Unique sacrifice as the Only Son of God - the only God-Human in history',
    whoSaintsAre: 'In His Image and Conforming to Christ Over Time',
    whoUnsavedAre: 'In His Image, But Taking the Wide Road In Life',
    color: 'orange'
    },
    {
    attributeName: 'wise',
    description: 'Knowing Truth, doing good',
    symbol: 'Eyes Looking Up',
    seenInJesus: 'In all His words',
    whoSaintsAre: "In need of God's wisdom and pursue it",
    whoUnsavedAre: "In need of God's wisdom, but view it as foolishness",
    color: 'orange'
    },
    {
    attributeName: 'wrathful',
    description: 'A just & loving insistence on holiness',
    symbol: 'Reaper/ Consuming Fire',
    seenInJesus: 'Cleared the temple of money-changers to keep the temple holy',
    whoSaintsAre: "Covered/protected by Jesus' Blood",
    whoUnsavedAre: "Object of God's Wrath",
    color: 'orange'
    }
]

export default attributeArray;