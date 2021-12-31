// secure - groupId 1
// significant - groupId 2
// accepted - groupId 3

const basicNeedsArray = [
    {
        id: 1,
        groupId: 1,
        attributeName: "Creative",
        name: "A New Creation",
        longDesc: "I am a re-created being who is reconciled with my Creator, who I can now thank and praise.",
        verses: [
            {
                reference: "2 Corinthians 5:17",
                text: "Therefore, if anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come"
            }
        ]
    },
    {
        id: 2,
        groupId: 1,
        attributeId: 2,
        attributeName: "Eternal",
        name: "An Eternal Soul",
        longDesc: "I am an eternal soul and will be given an eternal resurrected body like Christ and live in heaven.",
        verses: [
            {
                reference: "2 Corinthians 5:1",
                text: "For we know that when this earthly tent we live in is taken down (that is, when we die and leave this earthly body), we will have a house in heaven, an eternal body made for us by God himself and not by human hands."
            }
        ]
    },
    {
        id: 3,
        groupId: 1,
        attributeId: 3,
        attributeName: "Faithful",
        name: "A Slave to Righteousness",
        longDesc: "My faith in Christ frees me from being a slave to sin, allowing me to serve Christ. While I may still choose to disobey, I can fully trust my Master to bring about righteousness in my life.",
        verses: [
            {
                reference: "Romans 6:16",
                text: "Don’t you realize that you become the slave of whatever you choose to obey? You can be a slave to sin, which leads to death, or you can choose to obey God, which leads to righteous living."
            }
        ]
    },
    {
        id: 4,
        groupId: 2,
        attributeName: "Glorious",
        name: "In Christ",
        longDesc: "When I am in Christ, He IS my life.  My life purpose is to both joyfully experience and reflect the glory of Christ.",
        verses: [
            {
                reference: "Colossians 3:3-4",
                text: "For you have died, and your life is hidden with Christ in God.  When Christ who is your life appears, then you also will appear with him in glory."
            }
        ]
    },
    {
        id: 5,
        groupId: 3,
        attributeName: "Good",
        name: "Good",
        longDesc: "I am good, not through my good works, but when, having faith in Christ, I have the Holy Spirit within me.",
        verses: [
            {
                reference: "Acts 11:24 and Luke 18:19",
                text: "…for he was a good man, full of the Holy Spirit and of faith. And a great many people were added to the Lord. ....And Jesus said to him, 'Why do you call me good? No one is good except God alone.' "
            }
        ]
    },
    {
        id: 6,
        groupId: 2,
        attributeName: "Gracious",
        name: "Graciously Chosen",
        longDesc: "I am chosen by God to receive love, forgiveness, redemption and adopted as His child forever.",
        verses: [
            {
                reference: "Ephesians 1:4-8 and Colossians 3:12",
                text: "Even as he chose us in him before the foundation of the world, that we should be holy and blameless before him. In love he predestined us for adoption to himself as sons through Jesus Christ, according to the purpose of his will, to the praise of his glorious grace, with which he has blessed us in the Beloved. In him we have redemption through his blood, the forgiveness of our trespasses, according to the riches of his grace, which he lavished upon us, in all wisdom and insight.  ....Put on then, as God’s chosen ones, holy and beloved, compassionate hearts, kindness, humility, meekness, and patience,…"
            }
        ]
    },
    {
        id: 7,
        groupId: 3,
        attributeName: "Holy",
        name: "A Holy Temple",
        longDesc: "I am righteous and holy because I have the Holy Spirit within me.  I am also in Christ, joined as one and sharing in His identity.",
        verses: [
            {
                reference: "Ephesians 4:24 and 1 Corinthians 3:16",
                text: "and to put on the new self, created after the likeness of God in true righteousness and holiness.  ....Do you not know that you are God’s temple and that God’s Spirit dwells in you?"
            }
        ]
    },
    {
        id: 8,
        groupId: 3,
        attributeName: "Humble",
        name: "A Living Stone",
        longDesc: "I am but a pebble in this world, but in God’s eyes, a living stone and part of a glorious temple which fully pleases God. I always lean on others, but can also lift others up.",
        verses: [
            {
                reference: "1 Peter 2:4-5",
                text: "As you come to him, a living stone rejected by men but in the sight of God chosen and precious, you yourselves like living stones are being built up as a spiritual house, to be a holy priesthood, to offer spiritual sacrifices acceptable to God through Jesus Christ."
            }
        ]
    },
    {
        id: 9,
        groupId: 1,
        attributeName: "Immutable",
        name: "Possess an Unchanging Promise",
        longDesc: "I am the heir and current holder of God’s promises, which are bound for all eternity by God’s own unchanging character and being.",
        verses: [
            {
                reference: "Hebrews 6:17-19a",
                text: "So when God desired to show more convincingly to the heirs of the promise the unchangeable character of his purpose, he guaranteed it with an oath, so that by two unchangeable things, in which it is impossible for God to lie, we who have fled for refuge might have strong encouragement to hold fast to the hope set before us. We have this as a sure and steadfast anchor of the soul."
            }
        ]
    },
    {
        id: 10,
        groupId: 3,
        attributeName: "Incomprehensible",
        name: "Hidden in Christ",
        longDesc: "Hidden in Christ, I am truly alive to God and my identity begins to take on His. ",
        verses: [
            {
                reference: "Colossians 3:3-4",
                text: "For you have died, and your life is hidden with Christ in God.  When Christ who is your life appears, then you also will appear with him in glory."
            }
        ]
    },
    {
        id: 11,
        groupId: 1,
        attributeName: "Independent",
        name: "No Fear of Man",
        longDesc: "My full dependence upon God and His complete independence of man allows me the freedom to not fear man, but rather to trust in His power and love to address my current circumstance.",
        verses: [
            {
                reference: "2 Timothy 1:7",
                text: "For God gave us a spirit not of fear but of power and love and self-control."
            }
        ]
    },
    {
        id: 12,
        groupId: 3,
        attributeName: "Invisible",
        name: "The Body of Christ",
        longDesc: "I have a growing perception of Christ in me, that I was created in the image of Him, and that the Church is God’s visible representative on earth.",
        verses: [
            {
                reference: "1 Corinthians 12:27",
                text: "Now you are the body of Christ and individually members of it."
            }
        ]
    },
    {
        id: 13,
        groupId: 2,
        attributeName: "Jealous",
        name: "God’s Workmanship",
        longDesc: "I was created for the good works in which God intended.  As His own, God desires for me to accomplish this work and jealously protects me from diversions and provides me with all I need.",
        verses: [
            {
                reference: "Ephesians 2:10",
                text: "For we are his workmanship, created in Christ Jesus for good works, which God prepared beforehand, that we should walk in them."
            }
        ]
    },
    {
        id: 14,
        groupId: 2,
        attributeName: "Joyful",
        name: "Partaker of God’s Joy",
        longDesc: "I can fully share in God’s joy by abiding in His words, regardless of the circumstances that I am facing.",
        verses: [
            {
                reference: "John 15:11 and Hebrews 12:2",
                text: "These things I have spoken to you, that my joy may be in you, and that your joy may be full.   .....Looking to Jesus, the founder and perfecter of our faith, who for the joy that was set before him endured the cross, despising the shame, and is seated at the right hand of the throne of God."
            }
        ]
    },
    {
        id: 15,
        groupId: 3,
        attributeName: "Just",
        name: "Justified by Faith Alone",
        longDesc: "I have been made right in God’s eyes only by faith in Jesus Christ.  My own works always fall short, compelling me to recognize this gracious gift over and over.",
        verses: [
            {
                reference: "Romans 4:24b-25 and Ephesians 2:8-9",
                text: "It will be counted to us who believe in him who raised from the dead Jesus our Lord, who was delivered up for our trespasses and raised for our justification.  ....For by grace you have been saved through faith. And this is not your own doing; it is the gift of God, not a result of works, so that no one may boast."
            }
        ]
    },
    {
        id: 16,
        groupId: 3,
        attributeName: "Loving",
        name: "Christ’s Friend",
        longDesc: "Having initiated a relationship with me, I am empowered by Christ’s love and friendship to  truly love Him & others.",
        verses: [
            {
                reference: "John 15:15",
                text: "No longer do I call you servants, for the servant does not know what his master is doing; but I have called you friends, for all that I have heard from my Father I have made known to you."
            }
        ]
    },
    {
        id: 17,
        groupId: 2,
        attributeName: "Merciful",
        name: "A Merciful Person",
        longDesc: "Being free from God's condemnation, I am free to be compassionate with others who likewise do not deserve mercy.",
        verses: [
            {
                reference: "Matthew 5:7 and Romans 8:1",
                text: "Blessed are the merciful, for they shall receive mercy.  .....There is therefore now no condemnation for those who are in Christ Jesus."
            }
        ]
    },
    {
        id: 18,
        groupId: 1,
        attributeName: "Omnipotent",
        name: "A Mighty Sheep",
        longDesc: "I have all the strength I need to deal with any life circumstance because Christ is my Shepherd.  My greatest weakness is thus transformed into praise for His unlimited strength.",
        verses: [
            {
                reference: "Psalm 23:1 and Philipians 4:12-13",
                text: "The LORD is my shepherd; I shall not want.   ....I know how to be brought low, and I know how to abound. In any and every circumstance, I have learned the secret of facing plenty and hunger, abundance and need.  I can do all things through him who strengthens me."
            }
        ]
    },
    {
        id: 19,
        groupId: 3,
        attributeName: "Omnipresent",
        name: "A Citizen of Heaven",
        longDesc: "I physically live on earth, but in Christ I am not only already a citizen of heaven, but am seated with Him now in the heavenly places.",
        verses: [
            {
                reference: "Philippians 3:20 and Ephesians 2:4-6",
                text: "But our citizenship is in heaven, and from it we await a Savior, the Lord Jesus Christ.  ....But God, being rich in mercy, because of the great love with which he loved us, even when we were dead in our trespasses, made us alive together with Christ—by grace you have been saved— and raised us up with him and seated us with him in the heavenly places in Christ Jesus."
            }
        ]
    },
    {
        id: 20,
        groupId: 2,
        attributeName: "Omniscient",
        name: "The Mind of Christ",
        longDesc: "Having the Holy Spirit means I share the very mind of Christ; at least, all that He shares.  He knows much more of me than I know of Him, but without the Spirit, I cannot comprehend God.",
        verses: [
            {
                reference: "1 Corinthians 2:11-12, 16",
                text: "For who knows a person’s thoughts except the spirit of that person, which is in him? So also no one comprehends the thoughts of God except the Spirit of God. Now we have received not the spirit of the world, but the Spirit who is from God, that we might understand the things freely given us by God….“For who has understood the mind of the Lord so as to instruct him?” But we have the mind of Christ."
            }
        ]
    },
    {
        id: 21,
        groupId: 1,
        attributeName: "Patient",
        name: "Patient in Suffering",
        longDesc: "I know that God is working toward my good, regardless of what I may be suffering.  The Holy Spirit correctly interprets all my petitions, complaints and groaning.",
        verses: [
            {
                reference: "Romans 8:24-28",
                text: "For in this hope we were saved. Now hope that is seen is not hope. For who hopes for what he sees? But if we hope for what we do not see, we wait for it with patience.  Likewise the Spirit helps us in our weakness. For we do not know what to pray for as we ought, but the Spirit himself intercedes for us with groanings too deep for words. And he who searches hearts knows what is the mind of the Spirit, because the Spirit intercedes for the saints according to the will of God. And we know that for those who love God all things work together for good, for those who are called according to his purpose."
            }
        ]
    },
    {
        id: 22,
        groupId: 2,
        attributeName: "Peaceful",
        name: "A Minister of Reconciliation",
        longDesc: "Having been reconciled to God through faith in Christ, I am now at peace with God and share in this same ministry of reconciliation.",
        verses: [
            {
                reference: "2 Corinthians 5:18-19",
                text: "All this is from God, who through Christ reconciled us to himself and gave us the ministry of reconciliation; that is, in Christ God was reconciling the world to himself, not counting their trespasses against them, and entrusting to us the message of reconciliation."
            }
        ]
    },
    {
        id: 23,
        groupId: 2,
        attributeName: "Planning",
        name: "Part of a Bigger Plan",
        longDesc: "Chosen to be part of God’s great plan of redemption, I have purpose in this life - to draw near to Him and discover how I might glorify and enjoy Him.",
        verses: [
            {
                reference: "Jeremiah 1:5 and Romans 12:2",
                text: "Before I formed you in the womb I knew you, and before you were born I consecrated you; I appointed you a prophet to the nations.   ....Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect."
            }
        ]
    },
    {
        id: 24,
        groupId: 1,
        attributeName: "Providing",
        name: "A Steward of God’s Grace",
        longDesc: "I am dependent upon God for everything, but I am also a channel through which God desires to provide His tangible grace to others.",
        verses: [
            {
                reference: "1 Peter 4:9-11",
                text: "Show hospitality to one another without grumbling. As each has received a gift, use it to serve one another, as good stewards of God’s varied grace: whoever speaks, as one who speaks oracles of God; whoever serves, as one who serves by the strength that God supplies—in order that in everything God may be glorified through Jesus Christ. To him belong glory and dominion forever and ever. Amen."
            }
        ]
    },
    {
        id: 25,
        groupId: 3,
        attributeName: "Relational",
        name: "A Child Of God",
        longDesc: "Being a son to God means I am a brother/sister to Christ, and I share with Him both common experiences and a glorious inheritance.",
        verses: [
            {
                reference: "Romans 8:14-17",
                text: "For all who are led by the Spirit of God are sons of God.  For you did not receive the spirit of slavery to fall back into fear, but you have received the Spirit of adoption as sons, by whom we cry, “Abba! Father!”  The Spirit himself bears witness with our spirit that we are children of God, and if children, then heirs—heirs of God and fellow heirs with Christ, provided we suffer with him in order that we may also be glorified with him."
            }
        ]
    },
    {
        id: 26,
        groupId: 3,
        attributeName: "Saving",
        name: "Freed From Sin Into Eternal Life",
        longDesc: "I am redeemed from sin’s bondage and penalty (i.e. death) and free to live eternally with God.",
        verses: [
            {
                reference: "Ephesians 1:7 and Romans 6:22",
                text: "In him we have redemption through his blood, the forgiveness of our trespasses, according to the riches of his grace.    ....But now that you have been set free from sin and have become slaves of God, the fruit you get leads to sanctification and its end, eternal life."
            }
        ]
    },
    {
        id: 27,
        groupId: 2,
        attributeName: "Sovereign",
        name: "An Ambassador For Christ",
        longDesc: "I am a citizen of heaven and thus an alien in this world.  However, I represent God and His kingdom here on earth.",
        verses: [
            {
                reference: "2 Corinthians 5:20",
                text: "Therefore, we are ambassadors for Christ, God making his appeal through us. We implore you on behalf of Christ, be reconciled to God."
            }
        ]
    },
    {
        id: 28,
        groupId: 2,
        attributeName: "Teaching",
        name: "A Earthly Teacher of Wisdom to Heaven",
        longDesc: "I personally need God’s wisdom, but through the church, I also help make known this wisdom - not only to fellow humans but also to those in heaven.",
        verses: [
            {
                reference: "Phil 3:9-10",
                text: "And to bring to light for everyone what is the plan of the mystery hidden for ages in God, who created all things, so that through the church the manifold wisdom of God might now be made known to the rulers and authorities in the heavenly places."
            }
        ]
    },
    {
        id: 29,
        groupId: 1,
        attributeName: "Truthful",
        name: "Free to See Reality",
        longDesc: "I have the light of Christ which illuminates truth in the midst of a dark world, allowing me to see clearly and walk about freely.",
        verses: [
            {
                reference: "John 8:12,32-32",
                text: "Jesus said, 'I am the light of the world. Whoever follows me will never walk in darkness, but will have the light of life.  ....So Jesus said to the Jews who had believed him, ‘If you abide in my word, you are truly my disciples, and you will know the truth, and the truth will set you free.’"
            }
        ]
    },
    {
        id: 30,
        groupId: 2,
        attributeName: "Unique",
        name: "Made In His Image",
        longDesc: "Every human is uniquely created in God’s image.  As a new spiritual creation in Christ, I also have the unique freedom to know and become even more like Christ.",
        verses: [
            {
                reference: "Genesis 1:27 and Romans 12:2",
                text: " So God created man in his own image, in the image of God he created him; male and female he created them.    .....Do not be conformed to this world, but be transformed by the renewal of your mind, that by testing you may discern what is the will of God, what is good and acceptable and perfect."
            }
        ]
    },
    {
        id: 31,
        groupId: 2,
        attributeName: "Wise",
        name: "Spiritually Wise",
        longDesc: "With the Holy Spirit guiding me, I have the secret wisdom of God - that which is pure, peaceable, gentle, open to reason, full of mercy and good fruits, impartial and sincere.",
        verses: [
            {
                reference: "1 Corinthians 6:19-20 and 1 Corinthians 2:6-7 and James 3:17",
                text: "Or do you not know that your body is a temple of the Holy Spirit within you, whom you have from God? You are not your own, for you were bought with a price. So glorify God in your body.   ....Yet among the mature we do impart wisdom, although it is not a wisdom of this age or of the rulers of this age, who are doomed to pass away. But we impart a secret and hidden wisdom of God, which God decreed before the ages for our glory.   ....But the wisdom from above is first pure, then peaceable, gentle, open to reason, full of mercy and good fruits, impartial and sincere."
            }
        ]
    },
    {
        id: 32,
        groupId: 1,
        attributeName: "Wrathful",
        name: "Free from Condemnation",
        longDesc: "I am free from God’s wrath because of my faith in Jesus' intercessory blood shed on the cross. This same blood draws me quite near to God, where I cannot be displaced.",
        verses: [
            {
                reference: "Romans 8:34-35",
                text: "Who is to condemn? Christ Jesus is the one who died—more than that, who was raised—who is at the right hand of God, who indeed is interceding for us. Who shall separate us from the love of Christ? Shall tribulation, or distress, or persecution, or famine, or nakedness, or danger, or sword?"
            }
        ]
    },
    
    ]
    
    // const categoryArray = [
    //     {
    //         id: 1,
    //         name: "secure"
    //     },
    //     {
    //         id: 2,
    //         name: "significant"
    //     },
    //     {
    //         id: 3,
    //         name: "accepted"
    //     }
    // ]
    
    export default basicNeedsArray;
