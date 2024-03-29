const questionArray = [
    {
    id: 1,
    attribute: 'relational',
    category: 'reflect',
    question: 'I enjoy interacting with others or have a strong sense of belonging to a group.'
    },
    {
    id: 2,
    attribute: 'relational',
    category: 'reject',
    question: 'I just want to be alone and not be bothered by anyone.'
    },
    {
    id: 3,
    attribute: 'relational',
    category: 'accept',
    question: 'I desire to be a part of a body of local Christian believers.'
    },
    {
    id: 4,
    attribute: 'creative',
    category: 'reflect',
    question: 'I enjoy creating something new - music, art, literature, design, crafts, food, photos, children, etc.'
    },
    {
    id: 5,
    attribute: 'creative',
    category: 'reject',
    question: 'I don\'t see the purpose in living.'
    },
    {
    id: 6,
    attribute: 'creative',
    category: 'accept',
    question: 'I gain insight and perspective into the world through a connection with God who created me.'
    },
    {
    id: 7,
    attribute: 'eternal',
    category: 'reflect',
    question: 'I want to make a lasting impact (children, fame, building wing, memorial).'
    },
    {
    id: 8,
    attribute: 'eternal',
    category: 'reject',
    question: 'This life is all there is.'
    },
    {
    id: 9,
    attribute: 'eternal',
    category: 'accept',
    question: 'I am investing in eternal things such as loving others and knowing God.'
    },
    {
    id: 10,
    attribute: 'faithful',
    category: 'reflect',
    question: 'I am truly loyal to a person or organization.'
    },
    {
    id: 11,
    attribute: 'faithful',
    category: 'reject',
    question: 'I don\'t want to be tied down by anyone or anything.'
    },
    {
    id: 12,
    attribute: 'faithful',
    category: 'accept',
    question: 'I trust in God and specifically the Bible for direction and truthful understanding of this life.'
    },
    {
    id: 13,
    attribute: 'glorious',
    category: 'reflect',
    question: 'I like others to listen to me and appreciate who I am.'
    },
    {
    id: 14,
    attribute: 'glorious',
    category: 'reject',
    question: 'God does not deserve any more glory than anyone else.'
    },
    {
    id: 15,
    attribute: 'glorious',
    category: 'accept',
    question: 'I make much of God and want to be more like Christ.'
    },
    {
    id: 16,
    attribute: 'good',
    category: 'reflect',
    question: 'I want to live the \'good life\'.'
    },
    {
    id: 17,
    attribute: 'good',
    category: 'reject',
    question: 'At times, I just want to be bad.'
    },
    {
    id: 18,
    attribute: 'good',
    category: 'accept',
    question: 'I define good as whatever comes from God - not just what I want or what brings me pleasure or comfort.'
    },
    {
    id: 19,
    attribute: 'gracious',
    category: 'reflect',
    question: 'I love giving gifts to people, especially when they are not expecting them.'
    },
    {
    id: 20,
    attribute: 'gracious',
    category: 'reject',
    question: 'I am not wasting my time, money or effort on someone who doesn\'t deserve it.'
    },
    {
    id: 21,
    attribute: 'gracious',
    category: 'accept',
    question: 'I accept God\'s forgiveness of my sins by believing in Jesus Christ and His work on the cross.'
    },
    {
    id: 22,
    attribute: 'holy',
    category: 'reflect',
    question: 'I consider my \'spiritual\' side when making major decisions.'
    },
    {
    id: 23,
    attribute: 'holy',
    category: 'reject',
    question: 'I believe my personal freedom is more important that any benefits gained from restrictions imposed by others, including God.'
    },
    {
    id: 24,
    attribute: 'holy',
    category: 'accept',
    question: 'I see God\'s commands/law as wholly good and thus are for my benefit to pursue and obey.'
    },
    {
    id: 25,
    attribute: 'humble',
    category: 'reflect',
    question: 'I want to truly know and understand who I am.'
    },
    {
    id: 26,
    attribute: 'humble',
    category: 'reject',
    question: 'I know that I am better than most people.'
    },
    {
    id: 27,
    attribute: 'humble',
    category: 'accept',
    question: 'I believe that I am a child of God.'
    },
    {
    id: 28,
    attribute: 'immutable',
    category: 'reflect',
    question: 'I like my own daily routines and habits such as morning coffee, alone time, my \'to do\' list, etc.'
    },
    {
    id: 29,
    attribute: 'immutable',
    category: 'reject',
    question: 'I believe all things change or evolve, including God.'
    },
    {
    id: 30,
    attribute: 'immutable',
    category: 'accept',
    question: 'I can fully trust God when He makes a promise.'
    },
    {
    id: 31,
    attribute: 'incomprehensible',
    category: 'reflect',
    question: 'I love exploring the unknown - to try and figure out a mystery or puzzle.'
    },
    {
    id: 32,
    attribute: 'incomprehensible',
    category: 'reject',
    question: 'I believe that, given enough time and effort, people will collectively understand everything.'
    },
    {
    id: 33,
    attribute: 'incomprehensible',
    category: 'accept',
    question: 'With what I do know about God, I can trust Him in the things I don\'t fully understand.'
    },
    {
    id: 34,
    attribute: 'independent',
    category: 'reflect',
    question: 'I like to live as independently as I can.'
    },
    {
    id: 35,
    attribute: 'independent',
    category: 'reject',
    question: 'I can do it all myself.'
    },
    {
    id: 36,
    attribute: 'independent',
    category: 'accept',
    question: 'I live dependently upon God.'
    },
    {
    id: 37,
    attribute: 'invisible',
    category: 'reflect',
    question: 'My intuition or gut is an important consideration in most of my decisions.'
    },
    {
    id: 38,
    attribute: 'invisible',
    category: 'reject',
    question: 'I believe that reality is rooted only in what I can physically see.'
    },
    {
    id: 39,
    attribute: 'invisible',
    category: 'accept',
    question: 'I believe in and value a current spiritual kingdom which I cannot physically see.'
    },
    {
    id: 40,
    attribute: 'jealous',
    category: 'reflect',
    question: 'I really want the best for those closest to me.'
    },
    {
    id: 41,
    attribute: 'jealous',
    category: 'reject',
    question: 'God really has no claim on me.'
    },
    {
    id: 42,
    attribute: 'jealous',
    category: 'accept',
    question: 'I recognize God\'s ownership of me, and see His law, discipline and justice as fully good and protective.'
    },
    {
    id: 43,
    attribute: 'joyful',
    category: 'reflect',
    question: 'I seek beauty and pleasure.'
    },
    {
    id: 44,
    attribute: 'joyful',
    category: 'reject',
    question: 'My happiness comes from things and experiences apart from God.'
    },
    {
    id: 45,
    attribute: 'joyful',
    category: 'accept',
    question: 'I find pleasure in Jesus Christ and His word.'
    },
    {
    id: 46,
    attribute: 'just',
    category: 'reflect',
    question: 'I believe I am right most of the time.'
    },
    {
    id: 47,
    attribute: 'just',
    category: 'reject',
    question: 'There is no absolute right or wrong.'
    },
    {
    id: 48,
    attribute: 'just',
    category: 'accept',
    question: 'I recognize and rely on God and the human authorities He places in my life to carry out justice properly.'
    },
    {
    id: 49,
    attribute: 'loving',
    category: 'reflect',
    question: 'I love my family and am willing to sacrifice much for them.'
    },
    {
    id: 50,
    attribute: 'loving',
    category: 'reject',
    question: 'I love many things, but God does not really make the top ten.'
    },
    {
    id: 51,
    attribute: 'loving',
    category: 'accept',
    question: 'I realize that God\'s love for me is not dependent upon my performance.'
    },
    {
    id: 52,
    attribute: 'merciful',
    category: 'reflect',
    question: 'When I have a need, I want others to show me mercy.'
    },
    {
    id: 53,
    attribute: 'merciful',
    category: 'reject',
    question: 'I help those in need through my taxes - that\'s plenty!'
    },
    {
    id: 54,
    attribute: 'merciful',
    category: 'accept',
    question: 'I am absolutely dependent on God\'s mercy and forgiveness for my sins - else I could never know Him as I do.'
    },
    {
    id: 55,
    attribute: 'omnipotent',
    category: 'reflect',
    question: 'I really like autonomy - the ability to do what I want.'
    },
    {
    id: 56,
    attribute: 'omnipotent',
    category: 'reject',
    question: 'My life will really only be what I make of it.'
    },
    {
    id: 57,
    attribute: 'omnipotent',
    category: 'accept',
    question: 'I recognize God as the source of all power.'
    },
    {
    id: 58,
    attribute: 'omnipresent',
    category: 'reflect',
    question: 'I often would like to be in two places at the same time.'
    },
    {
    id: 59,
    attribute: 'omnipresent',
    category: 'reject',
    question: 'God is not present in my life and I doubt that He even exists.'
    },
    {
    id: 60,
    attribute: 'omnipresent',
    category: 'accept',
    question: 'I realize God is present everwhere at all times.'
    },
    {
    id: 61,
    attribute: 'omniscient',
    category: 'reflect',
    question: 'I really like learning new things.'
    },
    {
    id: 62,
    attribute: 'omniscient',
    category: 'reject',
    question: 'Jesus taught many good things, but he is not now actively thinking about me.'
    },
    {
    id: 63,
    attribute: 'omniscient',
    category: 'accept',
    question: 'The most important thing for me to learn is who God is and then let that knowledge shape my soul.'
    },
    {
    id: 64,
    attribute: 'patient',
    category: 'reflect',
    question: 'I would like to have more patience than I have.'
    },
    {
    id: 65,
    attribute: 'patient',
    category: 'reject',
    question: 'I will deal harshly with anything or anyone that gets in my way.'
    },
    {
    id: 66,
    attribute: 'patient',
    category: 'accept',
    question: "I see all that I cannot control as God's plan and seek Him in it."
    },
    {
    id: 67,
    attribute: 'peaceful',
    category: 'reflect',
    question: 'I always seek to be both physically and emotionally fit.'
    },
    {
    id: 68,
    attribute: 'peaceful',
    category: 'reject',
    question: 'I will be at peace when I get what I want.'
    },
    {
    id: 69,
    attribute: 'peaceful',
    category: 'accept',
    question: 'My only real peace comes from reconciling with God through Jesus as Lord.'
    },
    {
    id: 70,
    attribute: 'planning',
    category: 'reflect',
    question: 'I like to do whatever I want.'
    },
    {
    id: 71,
    attribute: 'planning',
    category: 'reject',
    question: 'No one else has the right to tell me what to do.'
    },
    {
    id: 72,
    attribute: 'planning',
    category: 'accept',
    question: 'I see my life as a part of God\'s perfect plan.'
    },
    {
    id: 73,
    attribute: 'providing',
    category: 'reflect',
    question: 'I will meet the needs of those who are depending on me.'
    },
    {
    id: 74,
    attribute: 'providing',
    category: 'reject',
    question: 'I have earned everything I have.'
    },
    {
    id: 75,
    attribute: 'providing',
    category: 'accept',
    question: 'I see God as the source of all good things.'
    },
    {
    id: 76,
    attribute: 'saving',
    category: 'reflect',
    question: 'I love to fix or restore things (or people) to their intended condition.'
    },
    {
    id: 77,
    attribute: 'saving',
    category: 'reject',
    question: 'I have lost hope for something (acceptance, a job, my marriage, weight loss, etc.)'
    },
    {
    id: 78,
    attribute: 'saving',
    category: 'accept',
    question: 'I accept the fact that I am hopelessly lost in sin without Jesus.'
    },
    {
    id: 79,
    attribute: 'Sovereign',
    category: 'reflect',
    question: 'I want to make the final decisions about my life.'
    },
    {
    id: 80,
    attribute: 'Sovereign',
    category: 'reject',
    question: 'My will and pleasure are what is most important to me.'
    },
    {
    id: 81,
    attribute: 'Sovereign',
    category: 'accept',
    question: "I gratefully submit to God's authority."
    },
    {
    id: 82,
    attribute: 'teaching',
    category: 'reflect',
    question: 'I like to help others learn and achieve their goals.'
    },
    {
    id: 83,
    attribute: 'teaching',
    category: 'reject',
    question: 'I know best.'
    },
    {
    id: 84,
    attribute: 'teaching',
    category: 'accept',
    question: 'I value God\'s guidance and see His commands as what is best for me.'
    },
    {
    id: 85,
    attribute: 'truthful',
    category: 'reflect',
    question: 'I want to understand and act upon only real truth.'
    },
    {
    id: 86,
    attribute: 'truthful',
    category: 'reject',
    question: 'I know that I am right and do not need to hear anything more.'
    },
    {
    id: 87,
    attribute: 'truthful',
    category: 'accept',
    question: "I view and act on God's Word in the Bible as real and true."
    },
    {
    id: 88,
    attribute: 'unique',
    category: 'reflect',
    question: 'I like to feel special and unique.'
    },
    {
    id: 89,
    attribute: 'unique',
    category: 'reject',
    question: 'I have nothing in common with God - everyone is simply a physical mix of DNA and environment.'
    },
    {
    id: 90,
    attribute: 'unique',
    category: 'accept',
    question: 'I believe every person is a unique and valuable creation, made in the image of God.'
    },
    {
    id: 91,
    attribute: 'wise',
    category: 'reflect',
    question: 'My intent is normally right and good.'
    },
    {
    id: 92,
    attribute: 'wise',
    category: 'reject',
    question: 'I am normally right and my perspective is almost always good.'
    },
    {
    id: 93,
    attribute: 'wise',
    category: 'accept',
    question: 'I find and fully trust God when I have a specific and difficult need.'
    },
    {
    id: 94,
    attribute: 'wrathful',
    category: 'reflect',
    question: 'I desire to protect the innocent by punishment of the guilty.'
    },
    {
    id: 95,
    attribute: 'wrathful',
    category: 'reject',
    question: 'I see no wrath of God coming on others who do whatever they want, so I might as well do whatever I want during life.'
    },
    {
    id: 96,
    attribute: 'wrathful',
    category: 'accept',
    question: 'I believe in a God who holds everyone accountable for their actions in this life.'
    }
]

export default questionArray;