const accordian = document.querySelectorAll('.accordian');

accordian.forEach(drop => {
    const down = drop.querySelector('.down');
    const answer = drop.querySelector('.answer');

    drop.addEventListener('click', () =>
    {
        // down.classList.toggle('active');
        // answer.classList.toggle('active');

        if(down.classList.contains('active'))
        {
            down.classList.remove('active');
            answer.style.maxHeight = null;
        }
        else
        {
            down.classList.add('active');
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    })
});