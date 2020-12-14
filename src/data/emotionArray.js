const emotionArray = [
    {
    attributeName: 'creative',
    emotionName: 'Excitement',
    emotionConnectDescription: 'Excitement often comes from what is new - and God is the Creator of all new things!',
    group: 'pleasure'
    },
    {
    attributeName: 'eternal',
    emotionName: 'Grief',
    emotionConnectDescription: 'Grief is from suffering a loss or death - but God is Eternal and always remains to comfort my grief.',
    group: 'sadness'
    },
    {
    attributeName: 'faithful',
    emotionName: 'Disappointment',
    emotionConnectDescription: 'Disappointment is from unmet expectations - but God is Faithful to do all that He has promised.',
    group: 'sadness'
    },
    {
    attributeName: 'glorious',
    emotionName: 'Rejection',
    emotionConnectDescription: 'Rejection of who I am or what I offer hurts - but I am hurt even more when I reject God and His Glory.',
    group: 'fear'
    },
    {
    attributeName: 'good',
    emotionName: 'Satisfaction',
    emotionConnectDescription: 'Satisfaction means my need or desire was met - and all my needs and desires ultimately come from God and are thus Good.',
    group: 'pleasure'
    },
    {
    attributeName: 'gracious',
    emotionName: 'Love',
    emotionConnectDescription: 'True love is more gift than emotion - and God is Gracious in giving us His love first.',
    group: 'pleasure'
},
    {
    attributeName: 'holy',
    emotionName: 'Guilt',
    emotionConnectDescription: 'Guilt comes from doing wrong - and a Holy God always brings guilt in some form to all people.',
    group: 'fear'
},
    {
    attributeName: 'humble',
    emotionName: 'Anger',
    emotionConnectDescription: 'Anger often seeks flawed justice or punishment - but God tempers anger with Humility.',
    group: 'anger'
},
    {
    attributeName: 'immutable',
    emotionName: 'Insecurity',
    emotionConnectDescription: 'Insecurity comes from threats of change to what I hold dear - but God is Immutable and never changes.',
    group: 'fear'
},
    {
    attributeName: 'incomprehensible',
    emotionName: 'Doubt',
    emotionConnectDescription: 'Doubt lies between belief and disbelief - and is a very natural byproduct of an Incomprehensible God.',
    group: 'anger'
},
    {
    attributeName: 'independent',
    emotionName: 'Contentment',
    emotionConnectDescription: 'Contentment is happiness with what I already have - and a fully Independent God can afford to give us contentment in Him.',
    group: 'pleasure'
},
    {
    attributeName: 'invisible',
    emotionName: 'Distress',
    emotionConnectDescription: 'Distress is an urgent need for tangible help - and an Invisible God will be seen only by those with faith in Him.',
    group: 'fear'
},
    {
    attributeName: 'jealous',
    emotionName: 'Fear',
    emotionConnectDescription: 'Fear anticipates danger to what I love - and a Jealous God should be both feared and loved.',
    group: 'fear'
},
    {
    attributeName: 'joyful',
    emotionName: 'Happiness',
    emotionConnectDescription: 'Happiness is a feeling of pleasure and delight - and God is the source of all Joy.',
    group: 'pleasure'
},
    {
    attributeName: 'just',
    emotionName: 'Indignation',
    emotionConnectDescription: 'Indignation makes me want to correct unfair treatment - but God is Just, not necessarily fair.',
    group: 'anger'
},
    {
    attributeName: 'loving',
    emotionName: 'Shame',
    emotionConnectDescription: 'Shame tells me I am unworthy of love or belonging - but God is Loving to all.',
    group: 'sadness'
},
    {
    attributeName: 'merciful',
    emotionName: 'Resentment',
    emotionConnectDescription: 'Resentment clings to an anger over real or imagined offenses - but God is Merciful to those unworthy.',
    group: 'anger'
    },
    {
    attributeName: 'omnipotent',
    emotionName: 'Nervousness',
    emotionConnectDescription: 'Nervousness is being powerless in view of all that could go wrong - but God is lovingly Omnipotent.',
    group: 'fear'
    },
    {
    attributeName: 'omnipresent',
    emotionName: 'Loneliness',
    emotionConnectDescription: 'Loneliness is sadness in response to perceived isolation - but God is Omnipresent.',
    group: 'sadness'},
    {
    attributeName: 'omniscient',
    emotionName: 'Misunderstood',
    emotionConnectDescription: 'I feel misunderstood when others see me incorrectly - but God is Omniscent.',
    group: 'fear'},
    {
    attributeName: 'patient',
    emotionName: 'Self Pity',
    emotionConnectDescription: 'Self-pity is excessive, self-absorbed unhappiness over my own troubles - but God gives Patience in suffering.',
    group: 'sadness'},
    {
    attributeName: 'patient',
    emotionName: 'Annoyance',
    emotionConnectDescription: 'Annoyance blanes another for my suffering - but God gives Patience in suffering.',
    group: 'anger'},
    {
    attributeName: 'peaceful',
    emotionName: 'Dissatisfaction',
    emotionConnectDescription: 'Dissatisfaction stems from unfulfilled expectations - but God brings Peace.',
    group: 'sadness'},
    {
    attributeName: 'planning',
    emotionName: 'Worry',
    emotionConnectDescription: 'Worry is ongoing uneasiness over what could go wrong - but God is a perfect Planner.',
    group: 'fear'},
    {
    attributeName: 'providing',
    emotionName: 'Pride',
    emotionConnectDescription: 'Pride is deep satisfaction in my own achievements - but it is God who Provides.',
    group: 'happiness'},
    {
    attributeName: 'relational',
    emotionName: 'Frustration',
    emotionConnectDescription: 'Frustration comes when my persistent efforts appear blocked by others - but God embraces Relationship.',
    group: 'anger'},
    {
    attributeName: 'saving',
    emotionName: 'Desperation',
    emotionConnectDescription: 'Desperation sees hope draining even with a willingness to do anything  - but only God can truly Save.',
    group: 'anger'},
    {
    attributeName: 'sovereign',
    emotionName: 'Sadness',
    emotionConnectDescription: 'Sadness urges me to withdraw and seek comfort after a loss - but what I need is my Sovereign and Lord.',
    group: 'sadness'},
    {
    attributeName: 'teaching',
    emotionName: 'Reluctance',
    emotionConnectDescription: 'Reluctance keeps me from doing what I know I should - but God is a faithful Teacher.',
    group: 'fear'},
    {
    attributeName: 'truthful',
    emotionName: 'Distrust',
    emotionConnectDescription: 'Distrust is being careful around those who may have poor intent - but God is Truth, which builds trust.',
    group: 'fear'},
    {
    attributeName: 'unique',
    emotionName: 'Humiliation',
    emotionConnectDescription: 'Humiliation may deliberately cause pain to my reputation - but it changes not how a Unique God sees me.',
    group: 'sadness'},
    {
    attributeName: 'wise',
    emotionName: 'Regret',
    emotionConnectDescription: 'Regret is sadness that follows an earlier action - but God is Wise and gives Wisdom to go forward.',
    group: 'fear'},
    {
    attributeName: 'wrathful',
    emotionName: 'Contempt',
    emotionConnectDescription: 'Contempt looks down on another and is driven by hate - but God is Wrathful, which is driven by love.',
    group: 'anger'}
]

export default emotionArray;
