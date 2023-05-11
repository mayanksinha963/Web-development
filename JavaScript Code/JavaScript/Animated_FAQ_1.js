const accordian = document.querySelectorAll('.accordian');

accordian.forEach(down =>
    {
        const drop = down.querySelector('.drop');
        const answer = down.querySelector('.answer');

        down.addEventListener('click', () =>
        {
            if(drop.classList.contains('active'))
            {
                drop.classList.remove('active');
                answer.style.maxHeight = null;
            }
            else
            {
                drop.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        })
    }
    )