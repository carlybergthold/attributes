const emotionArray = [
    {
    id: 1,
    attributeName: 'creative',
    name: 'Excitement',
    description: 'Excitement often comes from what is new to me - and God is the Creator and source of all new things!',
    group: 'Pleased',
    groupId: 1
    },
    {
    id: 2,
    attributeName: 'eternal',
    name: 'Grief',
    description: 'Grief results when I suffer a loss or death - but God is Eternal and always remains to comfort me in my grief.',
    group: 'Sad',
groupId: 2
    },
    {
    id: 3,
    attributeName: 'faithful',
    name: 'Disappointment',
    description: 'Disappointment comes when my expectations are not met - but God is Faithful to do all that He has promised.',
    group: 'Sad',
groupId: 2
    },
    {
    id: 4,
    attributeName: 'glorious',
    name: 'Rejection',
    description: 'Rejection of who I am or what I offer hurts - but I actually suffer more harm when I reject God and His Glory.',
    group: 'Sad',
groupId: 3
    },
    {
    id: 5,
    attributeName: 'good',
    name: 'Satisfaction',
    description: 'Satisfaction means my need or desire was met - and all my deepest needs and desires originate from God and are thus Good.',
    group: 'Pleased',
    groupId: 1
    },
    {
    id: 6,
    attributeName: 'gracious',
    name: 'Love',
    description: 'True love is more a gift I give than an emotion I feel - and God is Gracious in giving me His love first.',
    group: 'Pleased',
    groupId: 1
},
    {
    id: 7,
    attributeName: 'holy',
    name: 'Guilt',
    description: 'Guilt comes when I do wrong and fear punishment - and a perfectly Holy God always brings guilt in some form to all people.',
    group: 'Sad',
groupId: 3
},
    {
    id: 8,
    attributeName: 'humble',
    name: 'Anger',
    description: 'My anger often seeks flawed justice or punishment - but God perfectly tempers anger with Humility.',
    group: 'Angry',
groupId: 4
},
    {
    id: 9,
    attributeName: 'immutable',
    name: 'Insecurity',
    description: 'Insecurity comes from threats of change to what I hold dear - but God is Immutable and never changes.',
    group: 'Sad',
groupId: 3
},
    {
    id: 10,
    attributeName: 'incomprehensible',
    name: 'Doubt',
    description: 'Doubt lies between my belief and my disbelief - and is a very natural byproduct of an Incomprehensible God.',
    group: 'Angry',
groupId: 4
},
    {
        id: 11,
    attributeName: 'independent',
    name: 'Contentment',
    description: 'Contentment is happiness with what I already have - and a fully Independent God can afford to give us contentment in Him.',
    group: 'Pleased',
    groupId: 1
},
    {
        id: 12,
    attributeName: 'invisible',
    name: 'Distress',
    description: 'Distress is my urgent need for tangible help - and an Invisible God will only be seen by those with faith in Him.',
    group: 'Sad',
groupId: 3
},
    {
        id: 13,
    attributeName: 'jealous',
    name: 'Fear',
    description: 'Fear anticipates danger to what I love - and a Jealous God is to be both feared and loved.',
    group: 'Sad',
groupId: 3
},
    {
        id: 14,
    attributeName: 'joyful',
    name: 'Happiness',
    description: 'Happiness is a feeling of pleasure and delight - and God is the source of all Joy, which feels much like happiness.',
    group: 'Pleased',
    groupId: 1
},
    {
    id: 15,
    attributeName: 'just',
    name: 'Indignation',
    description: 'Indignation makes me want to correct unfair treatment - because God is Just, but not always fair as I see fair.',
    group: 'Angry',
groupId: 4
},
    {
        id: 16,
    attributeName: 'loving',
    name: 'Shame',
    description: 'Shame falsely tells me I am unworthy of love or belonging - but God always Loves me.',
    group: 'Sad',
groupId: 2
},
    {
        id: 17,
    attributeName: 'merciful',
    name: 'Resentment',
    description: 'Resentment clings to an anger over real or imagined offenses - but God is Merciful even to those truly offensive and unworthy.',
    group: 'Angry',
groupId: 4
    },
    {
        id: 18,
    attributeName: 'omnipotent',
    name: 'Nervousness',
    description: 'Nervousness is knowing I am powerless in view of what could go wrong - but God is lovingly Omnipotent in all things.',
    group: 'Sad',
groupId: 3
    },
    {
        id: 19,
    attributeName: 'omnipresent',
    name: 'Loneliness',
    description: 'Loneliness is my sadness in response to perceived isolation - but God is Omnipresent and is always with me.',
    group: 'Sad',
groupId: 2},
    {
        id: 20,
    attributeName: 'omniscient',
    name: 'Misunderstood',
    description: 'I feel misunderstood when others see me incorrectly - but God is Omniscient and knows me perfectly.',
    group: 'Sad',
groupId: 3},
    {
    attributeName: 'patient',
    name: 'Self Pity',
    description: 'Self-pity is excessive, self-absorbed unhappiness over my own troubles - but God offers me Patience in suffering.',
    group: 'Sad',
groupId: 2},
    {
    attributeName: 'patient',
    name: 'Annoyance',
    description: 'Annoyance blanes another for my suffering - but God offers me Patience in suffering.',
    group: 'Angry',
groupId: 4},
    {
    attributeName: 'peaceful',
    name: 'Dissatisfaction',
    description: 'Dissatisfaction springs from my unfulfilled expectations - but God brings a reconciling Peace to my life.',
    group: 'Sad',
groupId: 2},
    {
    attributeName: 'planning',
    name: 'Worry',
    description: 'Worry is my ongoing uneasiness over what could go wrong - but God is a perfect Planner who I can trust fully.',
    group: 'Sad',
groupId: 3},
    {
    attributeName: 'providing',
    name: 'Pride',
    description: 'Pride is deep satisfaction in my own achievements - and must be tempered with knowing it is God who Provides everything.',
    group: 'Pleased',
    groupId: 1},
    {
    attributeName: 'relational',
    name: 'Frustration',
    description: 'Frustration comes when my persistent efforts appear blocked by others - but God embraces my need for Relationship.',
    group: 'Angry',
groupId: 4},
    {
    attributeName: 'saving',
    name: 'Desperation',
    description: 'Desperation sees my hope draining even when I am willing to do just about anything - but only God can truly Save me and others.',
    group: 'Angry',
groupId: 4},
    {
    attributeName: 'sovereign',
    name: 'Sad',
    description: 'Sadness urges me to withdraw and seek comfort after a loss - but what I need is knowing my Sovereign Lord who is in full control.',
    group: 'Sad',
groupId: 2},
    {
    attributeName: 'teaching',
    name: 'Reluctance',
    description: 'Reluctance keeps me from doing what I know I should - but God is a faithful Teacher who shapes my very desire.',
    group: 'Sad',
groupId: 3},
    {
    attributeName: 'truthful',
    name: 'Distrust',
    description: 'Distrust is being careful around those who may have poor intent - but God is Truth, which builds trust.',
    group: 'Sad',
groupId: 3},
    {
    attributeName: 'unique',
    name: 'Humiliation',
    description: 'Humiliation may deliberately cause pain to my reputation - but it can never change how a Unique God sees me.',
    group: 'Sad',
groupId: 2},
    {
    attributeName: 'wise',
    name: 'Regret',
    description: 'Regret is sadness that follows my earlier action - but God is Wise and gives me the wisdom to move forward.',
    group: 'Sad',
groupId: 2},
    {
    attributeName: 'wrathful',
    name: 'Contempt',
    description: 'Contempt looks down on another and is driven by hate - but God is Wrathful, which is driven by intense love.',
    group: 'Angry',
groupId: 4}
]

export default emotionArray;