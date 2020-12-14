const emotionArray = [
    {
    attributeName: 'creative',
    emotionName: 'Excitement',
    emotionDescription: 'Excitement often comes from what is new - and God is the Creator of all new things!',
    group: 'pleasure'
    },
    {
    attributeName: 'eternal',
    emotionName: 'Grief',
    emotionDescription: 'Grief is from suffering a loss or death - but God is Eternal and always remains to comfort my grief.',
    group: 'sadness'
    },
    {
    attributeName: 'faithful',
    emotionName: 'Disappointment',
    emotionDescription: 'Disappointment is from unmet expectations - but God is Faithful to do all that He has promised.',
    group: 'sadness'
    },
    {
    attributeName: 'glorious',
    emotionName: 'Rejection',
    emotionDescription: 'Rejection of who I am or what I offer hurts - but I am hurt even more when I reject God and His Glory.',
    group: 'fear'
    },
    {
    attributeName: 'good',
    emotionName: 'Satisfaction',
    emotionDescription: 'Satisfaction means my need or desire was met - and all my needs and desires ultimately come from God and are thus Good.',
    group: 'pleasure'
    },
    {
    attributeName: 'gracious',
    emotionName: 'Love',
    emotionDescription: 'True love is more gift than emotion - and God is Gracious in giving us His love first.',
    group: 'pleasure'
},
    {
    attributeName: 'holy',
    emotionName: 'Guilt',
    emotionDescription: 'Guilt comes from doing wrong - and a Holy God always brings guilt in some form to all people.',
    group: 'fear'
},
    {
    attributeName: 'humble',
    emotionName: 'Anger',
    emotionDescription: 'Anger often seeks flawed justice or punishment - but God tempers anger with Humility.',
    group: 'anger'
},
    {
    attributeName: 'immutable',
    emotionName: 'Insecurity',
    emotionDescription: 'Insecurity comes from threats of change to what I hold dear - but God is Immutable and never changes.',
    group: 'fear'
},
    {
    attributeName: 'incomprehensible',
    emotionName: 'Doubt',
    emotionDescription: 'Doubt lies between belief and disbelief - and is a very natural byproduct of an Incomprehensible God.',
    group: 'anger'
},
    {
    attributeName: 'independent',
    emotionName: 'Contentment',
    emotionDescription: 'Contentment is happiness with what I already have - and a fully Independent God can afford to give us contentment in Him.',
    group: 'pleasure'
},
    {
    attributeName: 'invisible',
    emotionName: 'Distress',
    emotionDescription: 'Distress is an urgent need for tangible help - and an Invisible God will be seen only by those with faith in Him.',
    group: 'fear'
},
    {
    attributeName: 'jealous',
    emotionName: 'Fear',
    emotionDescription: 'Fear anticipates danger to what I love - and a Jealous God should be both feared and loved.',
    group: 'fear'
},
    {
    attributeName: 'joyful',
    emotionName: 'Happiness',
    emotionDescription: 'Happiness is a feeling of pleasure and delight - and God is the source of all Joy.',
    group: 'pleasure'
},
    {
    attributeName: 'just',
    emotionName: 'Indignation',
    emotionDescription: 'Indignation makes me want to correct unfair treatment - but God is Just, not necessarily fair.',
    group: 'anger'
},
    {
    attributeName: 'loving',
    emotionName: 'Shame',
    emotionDescription: 'Shame tells me I am unworthy of love or belonging - but God is Loving to all.',
    group: 'sadness'
},
    {
    attributeName: 'merciful',
    emotionName: 'Resentment',
    emotionDescription: 'Resentment clings to an anger over real or imagined offenses - but God is Merciful to those unworthy.',
    group: 'anger'
    },
    {
    attributeName: 'omnipotent',
    emotionName: 'Nervousness',
    emotionDescription: 'Nervousness is being powerless in view of all that could go wrong - but God is lovingly Omnipotent.',
    group: 'fear'
    },
    {
    attributeName: 'omnipresent',
    emotionName: 'Loneliness',
    emotionDescription: 'Loneliness is sadness in response to perceived isolation - but God is Omnipresent.',
    group: 'sadness'},
    {
    attributeName: 'omniscient',
    emotionName: 'Misunderstood',
    emotionDescription: 'I feel misunderstood when others see me incorrectly - but God is Omniscent.',
    group: 'fear'},
    {
    attributeName: 'patient',
    emotionName: 'Self Pity',
    emotionDescription: 'Self-pity is excessive, self-absorbed unhappiness over my own troubles - but God gives Patience in suffering.',
    group: 'sadness'},
    {
    attributeName: 'patient',
    emotionName: 'Annoyance',
    emotionDescription: 'Annoyance blanes another for my suffering - but God gives Patience in suffering.',
    group: 'anger'},
    {
    attributeName: 'peaceful',
    emotionName: 'Dissatisfaction',
    emotionDescription: 'Dissatisfaction stems from unfulfilled expectations - but God brings Peace.',
    group: 'sadness'},
    {
    attributeName: 'planning',
    emotionName: 'Worry',
    emotionDescription: 'Worry is ongoing uneasiness over what could go wrong - but God is a perfect Planner.',
    group: 'fear'},
    {
    attributeName: 'providing',
    emotionName: 'Pride',
    emotionDescription: 'Pride is deep satisfaction in my own achievements - but it is God who Provides.',
    group: 'happiness'},
    {
    attributeName: 'relational',
    emotionName: 'Frustration',
    emotionDescription: 'Frustration comes when my persistent efforts appear blocked by others - but God embraces Relationship.',
    group: 'anger'},
    {
    attributeName: 'saving',
    emotionName: 'Desperation',
    emotionDescription: 'Desperation sees hope draining even with a willingness to do anything  - but only God can truly Save.',
    group: 'anger'},
    {
    attributeName: 'sovereign',
    emotionName: 'Sadness',
    emotionDescription: 'Sadness urges me to withdraw and seek comfort after a loss - but what I need is my Sovereign and Lord.',
    group: 'sadness'},
    {
    attributeName: 'teaching',
    emotionName: 'Reluctance',
    emotionDescription: 'Reluctance keeps me from doing what I know I should - but God is a faithful Teacher.',
    group: 'fear'},
    {
    attributeName: 'truthful',
    emotionName: 'Distrust',
    emotionDescription: 'Distrust is being careful around those who may have poor intent - but God is Truth, which builds trust.',
    group: 'fear'},
    {
    attributeName: 'unique',
    emotionName: 'Humiliation',
    emotionDescription: 'Humiliation may deliberately cause pain to my reputation - but it changes not how a Unique God sees me.',
    group: 'sadness'},
    {
    attributeName: 'wise',
    emotionName: 'Regret',
    emotionDescription: 'Regret is sadness that follows an earlier action - but God is Wise and gives Wisdom to go forward.',
    group: 'fear'},
    {
    attributeName: 'wrathful',
    emotionName: 'Contempt',
    emotionDescription: 'Contempt looks down on another and is driven by hate - but God is Wrathful, which is driven by love.',
    group: 'anger'}
]

export default emotionArray;
