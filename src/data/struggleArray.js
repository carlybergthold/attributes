const struggleArray = [
    {
    attributeName: 'creative',
    struggleName: 'purpose',
    group: 'Loss of Control'},
    {
    attributeName: 'eternal',
    struggleName: 'pessimism',
    group: 'Shame',
},
    {
    attributeName: 'faithful',
    struggleName: 'reliability',
    group: 'Survival',
},
    {
    attributeName: 'glorious',
    struggleName: 'reputation',
    group: 'mental',
},
    {
    attributeName: 'good',
    struggleName: 'failure',
    group: 'mental',
},
    {
    attributeName: 'gracious',
    struggleName: 'no free lunch',
    group: 'mental',
},
    {
    attributeName: 'holy',
    struggleName: 'making comparisons',
    group: 'mental',
},
    {
    attributeName: 'humble',
    struggleName: 'urgent schedule',
    group: 'mental',
},
    {
    attributeName: 'immutable',
    struggleName: 'security',
    group: 'mental',
},
    {
    attributeName: 'incomprehensible',
    struggleName: 'ability to learn',
    group: 'mental',
},
    {
    attributeName: 'independent',
    struggleName: 'must do it myself',
    group: 'mental',
    },
    {
    attributeName: 'invisible',
    struggleName: 'worshipping someone unseen',
    group: 'mental',
    },
    {
    attributeName: 'jealous',
    struggleName: 'idols',
    group: 'mental',
    },
    {
    attributeName: 'joyful',
    struggleName: 'source of joy',
    group: 'mental',
    },
    {
    attributeName: 'just',
    group: 'mental',
    struggleName: 'what is fair',
    },
    {
        group: 'mental',
        attributeName: 'loving',
    struggleName: 'loving others',
    },
    {
        group: 'mental',
        attributeName: 'merciful',
    struggleName: 'forgiveness',
    },
    {
        group: 'mental',
        attributeName: 'omnipotent',
    struggleName: 'with weakness',
    },
    {
        group: 'mental',
        attributeName: 'omnipresent',
    struggleName: 'gods absence',
    },
    {
    attributeName: 'omniscient',
    group: 'mental',
    struggleName: 'information overload',
    },
    {
    attributeName: 'patient',
    group: 'mental',
    struggleName: 'current hardship',
    },
    {
    attributeName: 'peaceful',
    group: 'mental',
    struggleName: 'ongoing conflict',
    },
    {
    attributeName: 'planning',
    group: 'mental',
    struggleName: 'perfectionism',
    },
    {
    attributeName: 'providing',
    group: 'mental',
    struggleName: 'unmet needs',
    },
    {
    attributeName: 'relational',
    group: 'mental',
    struggleName: 'good relationships',
    },
    {
    attributeName: 'saving',
    group: 'mental',
    struggleName: 'codependency',
    },
    {
    attributeName: 'sovereign',
    group: 'mental',
    struggleName: 'maintaining control',
    },
    {
    attributeName: 'teaching',
    struggleName: 'difficulty in learning',
    group: 'Emotional',
    },
    {
    attributeName: 'truthful',
    group: 'Spiritual',
    struggleName: 'knowing what is true',
    },
    {
    attributeName: 'unique',
    struggleName: 'acceptance',
    group: 'Physical',
    },
    {
    attributeName: 'wise',
    struggleName: 'keeping perspective',
    group: 'Mental',
    },
    {
    attributeName: 'wrathful',
    struggleName: 'obedience',
    group: 'Spiritual',
    struggleName: 'Purpose - What is my purpose?',
    }
    // {
    // attributeName: 'eternal',
    // struggleName: 'Pessimism - I have this sinking feeling that things will not turn out very well in the end. ',
    // },
    // {
    // attributeName: 'faithful',
    // struggleName: 'Reliability - I often have a hard time fully meeting the commitments I make.',
    // },
    // {
    // attributeName: 'glorious',
    // struggleName: 'Reputation - I want people to think more highly of me.',
    // },
    // {
    // attributeName: 'good',
    // struggleName: 'Failure - I often do things that disappoint God or other important people in my life.',
    // },
    // {
    // attributeName: 'gracious',
    // struggleName: 'No Free Lunch - I must work for everything I get.',
    // },
    // {
    // attributeName: 'holy',
    // struggleName: 'Making Comparisons - My personal holiness certainly suffers at times, but I am as good as most people.',
    // },
    // {
    // attributeName: 'humble',
    // struggleName: 'Urgent Schedule - I want to focus more on others but I’ve got a lot going on right now.',
    // },
    // {
    // attributeName: 'immutable',
    // struggleName: 'Security - I need to protect myself and family from unexpected change (through insurance, warranties, precautions, even lawsuit if needed)',
    // },
    // {
    // attributeName: 'incomprehensible',
    // struggleName: 'Ability to Learn - I really work hard to fully comprehend some things, but my progress seems so slow.',
    // },
    // {
    // attributeName: 'independent',
    // struggleName: 'Depending on Others - If I depend on someone else, they may fail me.',
    // },
    // {
    // attributeName: 'invisible',
    // struggleName: 'Worshipping Someone Unseen - I sometimes have trouble worshiping a god I cannot see.',
    // },
    // {
    // attributeName: 'jealous',
    // struggleName: 'Idols - People and things I like seem to get in the way of my relationship with God.',
    // },
    // {
    // attributeName: 'joyful',
    // struggleName: 'Source of Joy - I can’t seem to find what brings me joy consistently.',
    // },
    // {
    // attributeName: 'just',
    // struggleName: 'What Is Fair - I often wonder if I am being treated fairly. ',
    // },
    // {
    // attributeName: 'loving',
    // struggleName: 'Loving Others - Sometimes I do not feel like loving a specific person.',
    // },
    // {
    // attributeName: 'merciful',
    // struggleName: 'Forgiveness - I struggle with whether to exercise mercy or justice when dealing with a person who has wronged me.',
    // },
    // {
    // attributeName: 'omnipotent',
    // struggleName: 'With Weakness - I have weaknesses that keep me from doing what I should.',
    // },
    // {
    // attributeName: 'omnipresent',
    // struggleName: 'Absence of God - It seems God is absent.',
    // },
    // {
    // attributeName: 'omniscient',
    // struggleName: 'Information Overload - I feel overwhelmed by the amount of knowledge required simply to live these days.ad',
    // },
    // {
    // attributeName: 'patient',
    // struggleName: 'Current Hardship - My current hardship seems like it will never end.',
    // },
    // {
    // attributeName: 'peaceful',
    // struggleName: 'Ongoing Conflict - I am weary from a conflict that just never seems to end.',
    // },
    // {
    // attributeName: 'planning',
    // struggleName: 'Perfectionism - I like to make a plan and stick to it.',
    // },
    // {
    // attributeName: 'providing',
    // struggleName: 'Unmet Needs - God must either not know, or not care, about my current unmet need.',
    // },
    // {
    // attributeName: 'relational',
    // struggleName: 'Good Relationships - Relating well to other people can be so hard - I want to do better in this arena.',
    // },
    // {
    // attributeName: 'saving',
    // struggleName: 'Codependency - I must fix someone else - save them from drugs, illness, themselves, other danger, etc. without any thought of myself (or God).',
    // },
    // {
    // attributeName: 'sovereign',
    // struggleName: 'Maintaining Control - I have no control over my circumstances or will lose what little control I currently have.',
    // },
    // {
    // attributeName: 'teaching',
    // struggleName: 'Difficulty in Learning - I have difficulties learning and my past teachers were often harsh or uncaring.',
    // },
    // {
    // attributeName: 'truthful',
    // struggleName: 'Knowing What is True - How do I know what is truly right?',
    // },
    // {
    // attributeName: 'unique',
    // struggleName: 'Acceptance - My uniquenesses will not be accepted by others - or worse, will be made fun of or derided.',
    // },
    // {
    // attributeName: 'wise',
    // struggleName: 'Keeping Perspective - I lose perspective by being too short-sighted, tired, selfish, one-sided, etc.',
    // },
    // {
    // attributeName: 'wrathful',
    // struggleName: 'Obedience - That I cannot obey perfectly and that my human faults will be exposed (such as what drives a fear of public speaking).',
]

export default struggleArray;
