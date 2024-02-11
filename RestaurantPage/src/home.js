function LoadHome()
{
    let card = document.createElement('div');
    card.classList.add('card');
    let text1 = document.createElement('h2');
    let text2 = document.createElement('h2');
    text1.textContent = "The best food in your neighbourhood";
    text2.textContent = "Visit us in one of our restaurants";
    card.append(text1, text2);
    return card;
}

export default LoadHome;