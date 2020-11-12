const CHOICES_BRANDS = 'choices_brands';

const QUESTIONS = [
    {
        question: 'What is your budget?',
        explanation: 'Just a ballpark estimate, I\'ll try to keep it as close as possible.',
        binding: 'budget',
        type: 'slider',
        sliderRange: ['100', '20000'],
        sliderStart: '800',
        sliderStep: '100',
        sliderFormat: 'currency'
    },
    {
        question: 'How will this setup be used?',
        explanation: 'Different components sometimes excel with specific types of media.',
        binding: 'usage',
        type: 'custom_usage',
        component: 'usage'
    },
    {
        question: 'How big is your watching/listening room?',
        explanation: 'No need for two 15" subwoofers in a closet.',
        binding: 'room_size',
        type: 'choice',
        choices: ['Huge (> 500 sq ft)', 'Large (300-500 sq ft) ', 'Average (200-300 sq ft) ', 'Small (< 200 sq ft)']
    },
    {
        question: 'Is your watching/listening room a dedicated theater room?',
        explanation: 'Some TV\'s/projectors are only effective in complete darkness.',
        binding: 'theater_room',
        type: 'bool'
    },
    {
        question: 'Are you looking to install surround sound?',
        explanation: 'Speakers all around you for a more immersive experience. Usually requires running speaker wire through walls or around the room.',
        binding: 'theater_room',
        type: 'bool'
    },
    {
        question: 'Are you looking to set up a specific speaker configuration?',
        explanation: 'If you have no idea what 3.1 or 7.2.4 mean, select no.',
        binding: 'speaker_configurations',
        type: 'bool',
        followUp: {
            type: 'compactchoice',
            choices: [
                '2.0', '2.1', '3.0', '3.1',
                '5.1', '5.2', '5.1.2', '5.2.2', '5.1.4', '5.2.4',
                '7.1', '7.2', '7.1.2', '7.1.4', '7.2.2', '7.2.4',
                '9.1', '9.2', '9.1.2', '9.1.4', '9.2.2', '9.2.4',
                '11.1', '11.2', '11.1.2', '11.1.4', '11.2.2', '11.2.4',
                '13.1', '13.2', '13.1.2', '13.1.4', '13.2.2', '13.2.4',
                'Something else'
            ]
        }
    },
    {
        question: 'How would you best describe your design taste?',
        explanation: 'Because mixing cubism and art-nuveau is so faux-pas.',
        binding: 'taste',
        type: 'choice',
        choices: ['Minimalistic', 'Rustic', 'Modern', 'Eccentric', 'I dont care']
    },
    {
        question: 'How important is visual appearance?',
        explanation: '"My wife told me I can\'t have a subwoofer in the living room that looks like a subwoofer."',
        binding: 'waf',
        type: 'choice',
        choices: [
            { key: 0, value: 'Not important at all' },
            { key: 1, value: 'Not very important' },
            { key: 2, value: 'Somewhat important' },
            { key: 3, value: 'Quite important' },
            { key: 4, value: 'Extremely important' },
        ]
    },
    {
        question: 'What\'s your A/V "savviness"?',
        explanation: 'Some people just want to be able to click a button and have everything consistently turn on.',
        binding: 'audiophile',
        type: 'choice',
        choices: [
            { key: 0, value: 'I hope to never open the settings for my TV or receiver' },
            { key: 1, value: 'I\'d like to avoid doing as much as possible' },
            { key: 2, value: 'Indifferent, I can do what\'s reasonable' },
            { key: 3, value: 'I enjoy the setup and tweaking process' },
            { key: 4, value: 'I\'m a total A/V geek' },
        ]
    },
    {
        question: 'Are you looking to install in-wall and/or in-ceiling speakers?',
        explanation: 'It involves cutting large holes in your drywall and running speaker wire, but looks nice.',
        binding: 'in_wall',
        type: 'choice',
        choices: [
            { key: 0, value: 'No' },
            { key: 1, value: 'Yes, for surround channels' },
            { key: 2, value: 'Yes, for all channels' }
        ]
    },
    {
        question: 'Are wireless speakers a must-have?',
        explanation: 'It severely limits options, but can be convenient. Note: you still have to plug them in for power.',
        binding: 'wireless',
        type: 'choice',
        choices: [
            { key: 0, value: 'No' },
            { key: 1, value: 'Yes, for surround channels' },
            { key: 2, value: 'Yes, for all channels' }
        ]
    },
    {
        question: 'Audio/video brands you love?',
        explanation: 'Whatever you select won\'t restrict your results, it just adds some weight to my selection process.',
        binding: 'brands_like',
        type: 'multichoice',
        hasSkip: true,
        choices: CHOICES_BRANDS
    },
    {
        question: 'Audio/video brands you hate?',
        explanation: 'Whatever you select won\'t restrict your results, it just adds some weight to my selection process.',
        binding: 'brands_hate',
        type: 'multichoice',
        hasSkip: true,
        choices: CHOICES_BRANDS
    },
    {
        question: 'Must have technology support?',
        explanation: 'These ones ARE almost definitely dealbreakers.',
        binding: 'fanboy',
        type: 'choice',
        hasSkip: true,
        choices: ['4k', 'HDR', 'Dolby Atmos', 'Apple Airplay', 'HEOS', 'SONOS']
    },
];

export default {
    CHOICES_BRANDS,
    QUESTIONS
}