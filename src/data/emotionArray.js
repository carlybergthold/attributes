const emotionArray = [
    {
    attributeName: 'creative',
    name: 'Excitement',
    description: 'Excitement often comes from what is new - and God is the Creator of all new things!',
    group: 'Pleased'
    },
    {
    attributeName: 'eternal',
    name: 'Grief',
    description: 'Grief is from suffering a loss or death - but God is Eternal and always remains to comfort my grief.',
    group: 'Sad'
    },
    {
    attributeName: 'faithful',
    name: 'Disappointment',
    description: 'Disappointment is from unmet expectations - but God is Faithful to do all that He has promised.',
    group: 'Sad'
    },
    {
    attributeName: 'glorious',
    name: 'Rejection',
    description: 'Rejection of who I am or what I offer hurts - but I am hurt even more when I reject God and His Glory.',
    group: 'Afraid'
    },
    {
    attributeName: 'good',
    name: 'Satisfaction',
    description: 'Satisfaction means my need or desire was met - and all my needs and desires ultimately come from God and are thus Good.',
    group: 'Pleased'
    },
    {
    attributeName: 'gracious',
    name: 'Love',
    description: 'True love is more gift than emotion - and God is Gracious in giving us His love first.',
    group: 'Pleased'
},
    {
    attributeName: 'holy',
    name: 'Guilt',
    description: 'Guilt comes from doing wrong - and a Holy God always brings guilt in some form to all people.',
    group: 'Afraid'
},
    {
    attributeName: 'humble',
    name: 'Anger',
    description: 'Anger often seeks flawed justice or punishment - but God tempers anger with Humility.',
    group: 'Angry'
},
    {
    attributeName: 'immutable',
    name: 'Insecurity',
    description: 'Insecurity comes from threats of change to what I hold dear - but God is Immutable and never changes.',
    group: 'Afraid'
},
    {
    attributeName: 'incomprehensible',
    name: 'Doubt',
    description: 'Doubt lies between belief and disbelief - and is a very natural byproduct of an Incomprehensible God.',
    group: 'Angry'
},
    {
    attributeName: 'independent',
    name: 'Contentment',
    description: 'Contentment is happiness with what I already have - and a fully Independent God can afford to give us contentment in Him.',
    group: 'Pleased'
},
    {
    attributeName: 'invisible',
    name: 'Distress',
    description: 'Distress is an urgent need for tangible help - and an Invisible God will be seen only by those with faith in Him.',
    group: 'Afraid'
},
    {
    attributeName: 'jealous',
    name: 'Fear',
    description: 'Fear anticipates danger to what I love - and a Jealous God should be both feared and loved.',
    group: 'Afraid'
},
    {
    attributeName: 'joyful',
    name: 'Happiness',
    description: 'Happiness is a feeling of Pleased and delight - and God is the source of all Joy.',
    group: 'Pleased'
},
    {
    attributeName: 'just',
    name: 'Indignation',
    description: 'Indignation makes me want to correct unfair treatment - but God is Just, not necessarily fair.',
    group: 'Angry'
},
    {
    attributeName: 'loving',
    name: 'Shame',
    description: 'Shame tells me I am unworthy of love or belonging - but God is Loving to all.',
    group: 'Sad'
},
    {
    attributeName: 'merciful',
    name: 'Resentment',
    description: 'Resentment clings to an anger over real or imagined offenses - but God is Merciful to those unworthy.',
    group: 'Angry'
    },
    {
    attributeName: 'omnipotent',
    name: 'Nervousness',
    description: 'Nervousness is being powerless in view of all that could go wrong - but God is lovingly Omnipotent.',
    group: 'Afraid'
    },
    {
    attributeName: 'omnipresent',
    name: 'Loneliness',
    description: 'Loneliness is Sad in response to perceived isolation - but God is Omnipresent.',
    group: 'Sad'},
    {
    attributeName: 'omniscient',
    name: 'Misunderstood',
    description: 'I feel misunderstood when others see me incorrectly - but God is Omniscent.',
    group: 'Afraid'},
    {
    attributeName: 'patient',
    name: 'Self Pity',
    description: 'Self-pity is excessive, self-absorbed unhappiness over my own troubles - but God gives Patience in suffering.',
    group: 'Sad'},
    {
    attributeName: 'patient',
    name: 'Annoyance',
    description: 'Annoyance blanes another for my suffering - but God gives Patience in suffering.',
    group: 'Angry'},
    {
    attributeName: 'peaceful',
    name: 'Dissatisfaction',
    description: 'Dissatisfaction stems from unfulfilled expectations - but God brings Peace.',
    group: 'Sad'},
    {
    attributeName: 'planning',
    name: 'Worry',
    description: 'Worry is ongoing uneasiness over what could go wrong - but God is a perfect Planner.',
    group: 'Afraid'},
    {
    attributeName: 'providing',
    name: 'Pride',
    description: 'Pride is deep satisfaction in my own achievements - but it is God who Provides.',
    group: 'Pleased'},
    {
    attributeName: 'relational',
    name: 'Frustration',
    description: 'Frustration comes when my persistent efforts appear blocked by others - but God embraces Relationship.',
    group: 'Angry'},
    {
    attributeName: 'saving',
    name: 'Desperation',
    description: 'Desperation sees hope draining even with a willingness to do anything  - but only God can truly Save.',
    group: 'Angry'},
    {
    attributeName: 'sovereign',
    name: 'Sad',
    description: 'Sad urges me to withdraw and seek comfort after a loss - but what I need is my Sovereign and Lord.',
    group: 'Sad'},
    {
    attributeName: 'teaching',
    name: 'Reluctance',
    description: 'Reluctance keeps me from doing what I know I should - but God is a faithful Teacher.',
    group: 'Afraid'},
    {
    attributeName: 'truthful',
    name: 'Distrust',
    description: 'Distrust is being careful around those who may have poor intent - but God is Truth, which builds trust.',
    group: 'Afraid'},
    {
    attributeName: 'unique',
    name: 'Humiliation',
    description: 'Humiliation may deliberately cause pain to my reputation - but it changes not how a Unique God sees me.',
    group: 'Sad'},
    {
    attributeName: 'wise',
    name: 'Regret',
    description: 'Regret is Sad that follows an earlier action - but God is Wise and gives Wisdom to go forward.',
    group: 'Afraid'},
    {
    attributeName: 'wrathful',
    name: 'Contempt',
    description: 'Contempt looks down on another and is driven by hate - but God is Wrathful, which is driven by love.',
    group: 'Angry'}
]

export default emotionArray;