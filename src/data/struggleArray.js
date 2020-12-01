const struggleArray = [
    {
    attributeName: 'creative',
    name: 'purpose',
    group: 'physical'},
    {
    attributeName: 'eternal',
    name: 'pessimism',
    group: 'physical',
},
    {
    attributeName: 'faithful',
    name: 'reliability',
    group: 'physical',
},
    {
    attributeName: 'glorious',
    name: 'reputation',
    group: 'mental',
},
    {
    attributeName: 'good',
    name: 'failure',
    group: 'mental',
},
    {
    attributeName: 'gracious',
    name: 'no free lunch',
    group: 'mental',
},
    {
    attributeName: 'holy',
    name: 'making comparisons',
    group: 'mental',
},
    {
    attributeName: 'humble',
    name: 'urgent schedule',
    group: 'mental',
},
    {
    attributeName: 'immutable',
    name: 'security',
    group: 'mental',
},
    {
    attributeName: 'incomprehensible',
    name: 'ability to learn',
    group: 'mental',
},
    {
    attributeName: 'independent',
    name: 'must do it myself',
    group: 'spiritual',
    },
    {
    attributeName: 'invisible',
    name: 'worshipping someone unseen',
    group: 'spiritual',
    },
    {
    attributeName: 'jealous',
    name: 'idols',
    group: 'spiritual',
    },
    {
    attributeName: 'joyful',
    name: 'source of joy',
    group: 'spiritual',
    },
    {
    attributeName: 'just',
    group: 'mental',
    name: 'what is fair',
    },
    {
        group: 'mental',
        attributeName: 'loving',
    name: 'loving others',
    },
    {
        group: 'mental',
        attributeName: 'merciful',
    name: 'forgiveness',
    },
    {
        group: 'mental',
        attributeName: 'omnipotent',
    name: 'with weakness',
    },
    {
        group: 'mental',
        attributeName: 'omnipresent',
    name: 'gods absence',
    },
    {
    attributeName: 'omniscient',
    group: 'mental',
    name: 'information overload',
    },
    {
    attributeName: 'patient',
    group: 'mental',
    name: 'current hardship',
    },
    {
    attributeName: 'peaceful',
    group: 'mental',
    name: 'ongoing conflict',
    },
    {
    attributeName: 'planning',
    group: 'mental',
    name: 'perfectionism',
    },
    {
    attributeName: 'providing',
    group: 'mental',
    name: 'unmet needs',
    },
    {
    attributeName: 'relational',
    group: 'mental',
    name: 'good relationships',
    },
    {
    attributeName: 'saving',
    group: 'mental',
    name: 'codependency',
    },
    {
    attributeName: 'sovereign',
    group: 'mental',
    name: 'maintaining control',
    },
    {
    attributeName: 'teaching',
    name: 'difficulty in learning',
    group: 'Emotional',
    },
    {
    attributeName: 'truthful',
    group: 'Spiritual',
    name: 'knowing what is true',
    },
    {
    attributeName: 'unique',
    name: 'acceptance',
    group: 'Physical',
    },
    {
    attributeName: 'wise',
    name: 'keeping perspective',
    group: 'Mental',
    },
    {
    attributeName: 'wrathful',
    name: 'obedience',
    group: 'Spiritual',
    description: 'Purpose - What is my purpose?',
    }
    // {
    // attributeName: 'eternal',
    // name: 'Pessimism - I have this sinking feeling that things will not turn out very well in the end. ',
    // },
    // {
    // attributeName: 'faithful',
    // name: 'Reliability - I often have a hard time fully meeting the commitments I make.',
    // },
    // {
    // attributeName: 'glorious',
    // name: 'Reputation - I want people to think more highly of me.',
    // },
    // {
    // attributeName: 'good',
    // name: 'Failure - I often do things that disappoint God or other important people in my life.',
    // },
    // {
    // attributeName: 'gracious',
    // name: 'No Free Lunch - I must work for everything I get.',
    // },
    // {
    // attributeName: 'holy',
    // name: 'Making Comparisons - My personal holiness certainly suffers at times, but I am as good as most people.',
    // },
    // {
    // attributeName: 'humble',
    // name: 'Urgent Schedule - I want to focus more on others but I’ve got a lot going on right now.',
    // },
    // {
    // attributeName: 'immutable',
    // name: 'Security - I need to protect myself and family from unexpected change (through insurance, warranties, precautions, even lawsuit if needed)',
    // },
    // {
    // attributeName: 'incomprehensible',
    // name: 'Ability to Learn - I really work hard to fully comprehend some things, but my progress seems so slow.',
    // },
    // {
    // attributeName: 'independent',
    // name: 'Depending on Others - If I depend on someone else, they may fail me.',
    // },
    // {
    // attributeName: 'invisible',
    // name: 'Worshipping Someone Unseen - I sometimes have trouble worshiping a god I cannot see.',
    // },
    // {
    // attributeName: 'jealous',
    // name: 'Idols - People and things I like seem to get in the way of my relationship with God.',
    // },
    // {
    // attributeName: 'joyful',
    // name: 'Source of Joy - I can’t seem to find what brings me joy consistently.',
    // },
    // {
    // attributeName: 'just',
    // name: 'What Is Fair - I often wonder if I am being treated fairly. ',
    // },
    // {
    // attributeName: 'loving',
    // name: 'Loving Others - Sometimes I do not feel like loving a specific person.',
    // },
    // {
    // attributeName: 'merciful',
    // name: 'Forgiveness - I struggle with whether to exercise mercy or justice when dealing with a person who has wronged me.',
    // },
    // {
    // attributeName: 'omnipotent',
    // name: 'With Weakness - I have weaknesses that keep me from doing what I should.',
    // },
    // {
    // attributeName: 'omnipresent',
    // name: 'Absence of God - It seems God is absent.',
    // },
    // {
    // attributeName: 'omniscient',
    // name: 'Information Overload - I feel overwhelmed by the amount of knowledge required simply to live these days.ad',
    // },
    // {
    // attributeName: 'patient',
    // name: 'Current Hardship - My current hardship seems like it will never end.',
    // },
    // {
    // attributeName: 'peaceful',
    // name: 'Ongoing Conflict - I am weary from a conflict that just never seems to end.',
    // },
    // {
    // attributeName: 'planning',
    // name: 'Perfectionism - I like to make a plan and stick to it.',
    // },
    // {
    // attributeName: 'providing',
    // name: 'Unmet Needs - God must either not know, or not care, about my current unmet need.',
    // },
    // {
    // attributeName: 'relational',
    // name: 'Good Relationships - Relating well to other people can be so hard - I want to do better in this arena.',
    // },
    // {
    // attributeName: 'saving',
    // name: 'Codependency - I must fix someone else - save them from drugs, illness, themselves, other danger, etc. without any thought of myself (or God).',
    // },
    // {
    // attributeName: 'sovereign',
    // name: 'Maintaining Control - I have no control over my circumstances or will lose what little control I currently have.',
    // },
    // {
    // attributeName: 'teaching',
    // name: 'Difficulty in Learning - I have difficulties learning and my past teachers were often harsh or uncaring.',
    // },
    // {
    // attributeName: 'truthful',
    // name: 'Knowing What is True - How do I know what is truly right?',
    // },
    // {
    // attributeName: 'unique',
    // name: 'Acceptance - My uniquenesses will not be accepted by others - or worse, will be made fun of or derided.',
    // },
    // {
    // attributeName: 'wise',
    // name: 'Keeping Perspective - I lose perspective by being too short-sighted, tired, selfish, one-sided, etc.',
    // },
    // {
    // attributeName: 'wrathful',
    // name: 'Obedience - That I cannot obey perfectly and that my human faults will be exposed (such as what drives a fear of public speaking).',
]

export default struggleArray;
