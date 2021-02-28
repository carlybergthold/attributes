const struggleArray = [
    {
    attributeName: 'creative',
    name: 'My Purpose',
    description: 'When I struggle to find purpose, I need to seek my Creator and His purpose.',
    group: 'Spiritual'},
    {
    attributeName: 'creative',
    name: 'No Meaning/Purpose',
    description: 'When I struggle to find purpose, I need to seek my Creator and His purpose.',
    group: 'Physical'},
    {
    attributeName: 'creative',
    name: 'I Am Bored',
    description: 'When I struggle with boredom or emptiness, I need to seek my Creator and His purpose.',
    group: 'Mental'},
    {
    attributeName: 'eternal',
    name: 'Pessimism',
    description: 'When I struggle with pessimism, I need to lift my head towards an Eternal God and perspective.',
    group: 'Mental',
},
    {
    attributeName: 'faithful',
    name: 'My Reliability',
    description: 'When I am often not very reliable for others, I need to lean on the commitment of a Faithful God.',
    group: 'Physical',
},
    {
    attributeName: 'glorious',
    name: 'My Reputation',
    description: 'When I often want people to think more highly of me, I need to seek the Glory of God.',
    group: 'Social',
},
    {
    attributeName: 'good',
    name: 'My Failure',
    description: 'When I seem to often fail God or others, I need to understand the Goodness of God.',
    group: 'Spiritual',
},
    {
    attributeName: 'gracious',
    name: 'Workaholic',
    description: 'When I feel like I must work for everything I get in life, I need to realize the Graciousness of God.',
    group: 'Mental',
},
    {
    attributeName: 'holy',
    name: 'Comparing Myself With Others',
    description: 'When I often compare myself to others, I need to see the Holiness of God.',
    group: 'Social',
},
    {
    attributeName: 'humble',
    name: 'Just Way Too Busy',
    description: 'When I struggle with balancing all I have to do, I need to seek the Humility of God.',
    group: 'Physical',
},
{
    attributeName: 'humble',
    name: 'Work Pressure/Stress',
    description: 'When I struggle with all I need to do at work, I need to seek the Humility of God.',
    group: 'Physical',
},
    {
    attributeName: 'immutable',
    name: 'Keeping Safe and Secure',
    description: 'When I feel like I have to protect myself and my family from everything, I need to lean into the Immutability of God.',
    group: 'Physical',
},
    {
    attributeName: 'incomprehensible',
    name: 'My Ability To Learn',
    description: 'When I struggle with being a slow learner, I need to learn that God is Incomprehensible.',
    group: 'Mental',
},
    {
    attributeName: 'independent',
    name: 'Must Do It All Myself',
    description: 'When I feel like I always have to do it myself, I need to connect with the Independence of God.',
    group: 'Social',
    },
    {
    attributeName: 'invisible',
    name: 'Worshipping Someone Unseen',
    description: 'When I struggle with worshiping a god I cannot see, I need to remember that God is Invisible for a reason.',
    group: 'Spiritual',
    },
    {
    attributeName: 'jealous',
    name: 'Idols',
    description: 'When I struggle with all those things that are more urgent than God, I need to see the Jealousy of God.',
    group: 'Spiritual',
    },
    {
    attributeName: 'joyful',
    name: 'Unhappiness',
    description: 'When I struggle with finding happiness, I need to understand how God is Joyful.',
    group: 'Mental',
    },
    {
    attributeName: 'just',
    name: 'What Is Fair',
    description: 'When I struggle with whether I am being treated fairly, I need to understand the Justice of God.',
    group: 'Social',
    },
    {
    attributeName: 'loving',
    name: 'Truly Loving Others',
    description: 'When I struggle with loving certain people, I need to see how God is Loving to me.',
    group: 'Social',
    },
    {
    attributeName: 'merciful',
    name: 'Forgiveness',
    description: 'When I struggle with forgiving or showing mercy to another, I need to see the Mercy that God gives me.',
    group: 'Spiritual',
    },
    {
    attributeName: 'omnipotent',
    name: 'My Own Fault/Weakness',
    description: 'When I struggle with one of my weaknesses that holds me back, I need to feel the Omnipotence of God. ',
    group: 'Physical',
    },
    {
    attributeName: 'omnipresent',
    name: 'God Seems Absent',
    description: 'When it seems that God is absent, I need to meet an Omnipresent God.',
    group: 'Spiritual',
    },
    {
    attributeName: 'omniscient',
    name: 'Information Overload',
    description: 'When I struggle with information overload, I need to realize the Omniscience of God.',
    group: 'Mental',
    },
    {
    attributeName: 'patient',
    name: 'Ongoing Health Issue',
    description: 'When I struggle with a never-ending hardship, I need to learn that God is Patient.',
    group: 'Physical',
    },
    {
    attributeName: 'peaceful',
    name: 'Ongoing Conflict',
    description: 'When I struggle with a conflict that seems never to resolve, I need to meet the God of Peace.',
    group: 'Social',
    },
    {
    attributeName: 'planning',
    name: 'Perfectionism',
    description: 'When I always need a plan and then stick to my plan, I need to see God as the masterful Planner.',
    group: 'Mental',
    },
    {
    attributeName: 'providing',
    name: 'I Need More Money',
    description: 'When I struggle with money, I need to see Him as my Provider.',
    group: 'Physical',
    },
    {
    attributeName: 'providing',
    name: 'Lost My Job',
    description: 'When I struggle with a job loss, I need to see Him as my Provider.',
    group: 'Physical',
    },
    {
    attributeName: 'relational',
    name: 'Developing Good Relationships',
    description: 'When I struggle with how I can cultivate better relationships, I need to experience a Relational God.',
    group: 'Social',
    },
    {
    attributeName: 'relational',
    name: 'A Relationship Just Ended',
    description: 'When I struggle with a relationship that just ended, I need to experience a Relational God.',
    group: 'Social',
    },
    {
    attributeName: 'saving',
    name: 'Codependency',
    description: 'When I struggle with how best to fix someone else, I need to learn how God alone is Savior.',
    group: 'Social',
    },
    {
    attributeName: 'sovereign',
    name: 'Maintaining Control',
    description: 'When I struggle with keeping what little control I still have, I need to see God as Sovereign.',
    group: 'Mental',
    },
    {
    attributeName: 'truthful',
    name: 'Knowing What Is True',
    description: 'When I struggle to know what is really true, I need to go to the God of Truth.',
    group: 'Mental',
    },
    {
    attributeName: 'unique',
    name: 'Being Accepted By Others',
    description: 'When I struggle with being accepted by others, I need to understand the Uniqueness of God and myself.',
    group: 'Social',
    },
    {
    attributeName: 'wise',
    name: 'Keeping Perspective',
    description: 'When I struggle with keeping the right perspective, I need to search out the Wisdom of God.',
    group: 'Mental',
    },
    {
    attributeName: 'wrathful',
    name: 'Fully Satisfying Others',
    description: 'When I struggle to satisfy others and their rigorous demands, I need to reflect on the Wrath of God.',
    group: 'Social',
    }
]

export default struggleArray;