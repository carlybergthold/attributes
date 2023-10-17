import ControlSVG from "../images/explore/fear/control.svg";
import RejectionSVG from "../images/explore/fear/rejection.svg";
import ShameSVG from "../images/explore/fear/shame.svg";
import TroublesSVG from "../images/explore/fear/troubles.svg";

const fearArray = [
    {
        id: 1,
        name: "Being Shamed",
        image: ShameSVG,
        description: "Shame comes from lies I tell myself about who I am. Pick the item that you have been telling yourself a lot recently.",
        details: [
            {
                id: 1,
            attributeName: 'creative',
            name: 'Insignificance',
            description: 'When I fear that I am insignificant, I need to seek the one who Created me.',
            group: 'Shame',
            groupId: 1
            },
            {
                id: 15,
            
            attributeName: 'just',
            name: 'Being wrong',
                description: 'When I fear being wrong, I need to dwell on the Justice of God.',
            group: 'Shame',
            groupId: 1
            },
            {
                id: 16,
            
            attributeName: 'loving',
            name: 'Being unlovable',
                description: 'When I fear I will not be loved if I am truly known, I need to talk with the God of Love.',
            group: 'Shame',
            groupId: 1
            },
            {
                id: 17,
            
            attributeName: 'merciful',
            name: 'Unworthy of mercy',
                description: 'When I fear that I might not deserve mercy, I need to experience a Merciful God.',
            group: 'Shame',
            groupId: 1
            },
            {
                id: 30,
                attributeName: 'unique',
                name: 'Being average or common',
                description: 'When I fear that I am just like everyone else, I need to learn from a Unique God.',
                group: 'Shame',
            groupId: 1
            },
            {
                id: 31,
                attributeName: 'wise',
                name: 'Seen as foolish',
                description: 'When I fear that I might seem foolish, I need to approach the God of Wisdom.',
                group: 'Shame',
            groupId: 1
            },
            {
                id: 20,
            
            attributeName: 'omniscient',
            name: 'Insufficient information',
                description: 'When I cannot get enough info to move forward, I need to seek guidance from an Omniscient God.',
            group: 'Shame',
            groupId: 1
            }
        ]
    },
    {
        id: 2, name: "Losing Control",
        image: ControlSVG,
        description: "Losing control can easily lead to a life-changing wreck. Select which control you most fear losing.",
        details: [
            {
                id: 3,
            
            attributeName: 'faithful',
            name: 'Disappointment from others',
            description: 'When I fear that others will let me down if I truly rely on them, I need to seek a Faithful God.',
            group: 'Loss of Control',
            groupId: 2
            },
            {
                id: 9,
            
            attributeName: 'immutable',
            name: 'Loss',
                description: 'When I fear losing what is important to me, I need to stand firm in the Immutability of God.',
            group: 'Loss of Control',
            groupId: 2
            },
            {
                id: 10,
            
            attributeName: 'incomprehensible',
            name: 'Inability to understand',
                description: 'When I fear I may never fully understanding something, I need to trust an Incomprehensible God.',
            group: 'Loss of Control',
            groupId: 2
            },
            {
                id: 11,
            
            attributeName: 'independent',
            name: 'Becoming dependent',
                description: 'When I fear I may lose my independence, I need to depend on an Independent God.',
            group: 'Loss of Control',
            groupId: 2
            },
            {
                id: 14,
            
            attributeName: 'joyful',
            name: 'Continued unhappiness',
                description: 'When I fear I may never be truly happy, I need to explore the Joy of God.',
            group: 'Loss of Control',
            groupId: 2
            },
            
            {
                id: 18,
            
            attributeName: 'omnipotent',
            name: 'Failure',
                description: 'When I fear I might fail, I need to trust in an Omnipotent God.',
            group: 'Loss of Control',
            groupId: 2
            },
            {
                id: 19,
            
            attributeName: 'omnipresent',
            name: 'Missing out',
                description: 'When I fear I am missing out on much of life, I need to appreciate an Omnipresent God.',
            group: 'Loss of Control',
            groupId: 2
            },
            {
                id: 22,
            
            attributeName: 'peaceful',
            name: 'Never ending trouble',
                description: 'When I fear that my troubles will never end, I need to see the Peace of God.',
            group: 'Loss of Control',
            groupId: 2
            },
            {
                id: 23,
            
            attributeName: 'planning',
            name: 'The future',
                description: 'When I fear that I cannot control my future, I need to meet a God with a Plan.',
            group: 'Loss of Control',
            groupId: 2
            },
            {
                id: 27,
            
            attributeName: 'sovereign',
            name: 'Losing control',
                description: 'When I fear that I am losing control, I need to trust in Sovereign God.',
            group: 'Loss of Control',
            groupId: 2
            }
        ]
    },
    {
        id: 3, name: "Being Rejected",
        image: RejectionSVG,
        description: "Our greatest need is love and rejection unfortunately comes in so many forms. Which of these may you be fearing?",
        details: [
            {
                id: 4,
            
            attributeName: 'glorious',
            name: 'Low opinion of others',
            description: 'When I fear what others think of me, I will do well to ponder the Glory of God.',
            group: 'Rejection',
            groupId: 3
            },
            {
                id: 5,
            
            attributeName: 'good',
            name: 'Unworthiness',
            description: 'When I fear I will not be good enough, I can rest in the Goodness of God.',
            group: 'Rejection',
            groupId: 3
            },
            
            {
                id: 7,
            
            attributeName: 'holy',
            name: 'Unworthy of God',
                description: 'When I fear that I am not worthy of a Holy God, I am on a good path.',
            group: 'Rejection',
            groupId: 3
            },
            {
                id: 8,
            
            attributeName: 'humble',
            name: 'Wrong opinions of me',
                description: 'When I fear what others think of me, I need to understand the Humility of God.',
            group: 'Rejection',
            groupId: 3
            },
            {
                id: 13,
            
            attributeName: 'jealous',
            name: 'Punishment',
                description: 'When I fear that God will harm or punish me, I need to understand the Jealousy of God.',
            group: 'Rejection',
            groupId: 3
            },
            {
                id: 25,
            
            attributeName: 'relational',
            name: 'Loneliness',
            description: 'When I fear that no one ever wants to be with me, I need to see how Relational God is.',
            group: 'Rejection',
            groupId: 3
            },
            {
                id: 32,
                attributeName: 'wrathful',
                name: 'Being found out',
                description: 'When I fear that I might be found out and suffer consequences, I need to better understand the God of Wrath.',
                group: 'Rejection',
            groupId: 3
            }
        ]
    },
    {
        id: 4, name: "Real Troubles",
        image: TroublesSVG,
        description: "The worst fears can be these which threaten how, or even whether, we live. Pick the fear that comes closest to your concern today.",
        details: [
            {
                id: 2,
            attributeName: 'eternal',
            name: 'Death',
            description: 'When I fear death, I need to seek a longer perspective of an Eternal God.',
            group: 'Survival',
            groupId: 4
            },
            {
                id: 6,
            attributeName: 'gracious',
            name: 'Abuse',
            description: 'When I fear that others may take advantage of me, I need to explore the Graciousness of God.',
            group: 'Survival',
            groupId: 4
            },
            {
                id: 12,
            
            attributeName: 'invisible',
            name: 'The hidden',
                description: 'When I fear what I cannot see, I need to consider the reality of an Invisible God.',
            group: 'Survival',
            groupId: 4
            },
            {
                id: 21,
            
            attributeName: 'patient',
            name: 'Impending trouble',
                description: 'When I fear the trouble ahead, I need to learn from a Patient God.',
            group: 'Survival',
            groupId: 4
            },
            {
                id: 24,
            
            attributeName: 'providing',
            name: 'Poverty',
                description: 'When I fear that I might eventually run out of money, I need to trust a Providing God.',
            group: 'Survival',
            groupId: 4
            },
            {
                id: 26,
            
            attributeName: 'saving',
            name: 'Hopelessness',
            description: 'When I fear that I am hopeless, I need to turn to the God who Saves.',
            group: 'Survival',
            groupId: 4
            },
            {
                id: 28,
            
            attributeName: 'teaching',
            name: 'Inability to learn',
                description: 'When I fear that I will not be able to learn all I need to learn, I need to approach Teacher God.',
            group: 'Survival',
            groupId: 4
            },
            {
                id: 29,
            
            attributeName: 'truthful',
            name: 'Deception',
                description: 'When I fear that I am believing a lie, I need to go to the God of Truth.',
            group: 'Survival',
            groupId: 4
            }
        ]
    }
];

export default fearArray;


