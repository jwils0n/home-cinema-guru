const CHOICES_BRANDS = 'choices_brands';
const CHOICES_IMPORTANCE = [
    { key: 0, value: 'Not important at all' },
    { key: 1, value: 'Not very important' },
    { key: 2, value: 'Somewhat important' },
    { key: 3, value: 'Quite important' },
    { key: 4, value: 'Extremely important' },
];

const QUESTIONS = [
    {
        question: 'What is your ballpark budget?',
        binding: 'budget',
        type: 'slider',
        sliderRange: ['100', '20000'],
        sliderStart: '800',
        sliderStep: '100',
        sliderFormat: 'currency'
    },
    {
        question: 'How will this setup be used?',
        binding: 'usage',
        type: 'custom_usage',
        component: 'usage'
    },
    {
        question: 'How big is your watching/listening room?',
        binding: 'room_size',
        type: 'choice',
        choices: ['Huge', 'Large', 'Average', 'Small']
    },
    {
        question: 'Is your watching/listening room a dedicated theater room (no ambient light)?',
        binding: 'theater_room',
        type: 'bool'
    },
    {
        question: 'Are you looking to set up a specific speaker configuration?',
        type: 'bool',
        followUp: {
            condition: true,
            binding: 'speaker_configurations',
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
        binding: 'taste',
        type: 'choice',
        choices: ['Minimalistic', 'Rustic', 'Modern', 'Eccentric', 'I dont care']
    },
    {
        question: 'How important is visual appearance?',
        binding: 'waf',
        type: 'choice',
        choices: CHOICES_IMPORTANCE
    },
    {
        question: 'How important is simplicity?',
        binding: 'simplicity',
        type: 'choice',
        choices: CHOICES_IMPORTANCE
    },
    {
        question: 'Are you willing to install in-wall and/or in-ceiling speakers?',
        binding: 'hide',
        type: 'bool'
    },
    {
        question: 'Are wireless speakers a must-have?',
        binding: 'wireless',
        type: 'bool'
    },
    {
        question: 'Audio/video brands you love?',
        binding: 'brands_like',
        type: 'multichoice',
        choices: CHOICES_BRANDS
    },
    {
        question: 'Audio/video brands you hate?',
        binding: 'brands_hate',
        type: 'multichoice',
        choices: CHOICES_BRANDS
    },
    {
        question: 'Must have technology support?',
        binding: 'fanboy',
        type: 'choice',
        choices: ['4k', 'HDR', 'Dolby Atmos', 'Apple Airplay', 'HEOS', 'SONOS']
    },
];

export default {
    CHOICES_BRANDS,
    CHOICES_IMPORTANCE,
    QUESTIONS
}