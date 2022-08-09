let author=document.querySelector('.author')
let quote=document.querySelector('.quote')
let btn=document.querySelector('.btn')


table=[
    {
        quote:'The foundation stones of honesty, character, faith, integrity, love, and loyalty are necessary for a balanced success that includes health, wealth, and happiness. As you go onward and upward in life, you will discover that if you compromise any of these principles you will end up with only a beggar\'s portion of what life has to offer.',
        author:'Zig Ziglar'
    },
    {
        quote:'You - yourself, not someone else - need to determine where you want to go and what you want to do in your life. And once you make that decision, you can begin mapping a plan to get there and focusing on that objective every single day.',
        author:'Squire Rushnell,' 
    },
    {
        quote:'Every day, think as you wake up, today I am fortunate to be alive, I have a precious human life, I am not going to waste it. I am going to use all my energies to develop myself, to expand my heart out to others; to achieve enlightenment for the benefit of all beings. I am going to have kind thoughts towards others, I am not going to get angry or think badly about others. I am going to benefit others as much as I can.',
        author:'Dalai Lama'
    },
    {
        quote:'Winning is not necessarily finishing first but finishing well, to the best of your God-given abilities. When you embrace this concept in your life, you will be relieved from the stress of competing to finish first, to win in life.',
        author:'Dr. Ignatius K' 
    },
    {
        quote:'A life that seems small on the outside can be limitless on the inside. Even a person living in the remotest place can be concerned about hundreds, or the whole galaxy.',
        author:'Obi-Wan Kenobi'
    },
    {
        quote:'One of the most important secrets of life that will be more contented is the act of gratitude and being grateful for the things you have in your life. It is so natural to get caught on the continually needing more prepare, that we don\'t stop to welcome the things that we have now.',
        author:'Adam Green' 
    },
    {
        quote:'There is no substitute for being yourself. In a world where so many people are not real with themselves or others, I am going so far as to say that being authentic is the only true way to stand out and win at life.',
        author:'Jeff Davis'
    }
  
]


btn.addEventListener('click',function(){
    random=table[parseInt(Math.random()*8)]
    author.innerHTML='--'+random.author+'--'
    quote.innerHTML=random.quote
})