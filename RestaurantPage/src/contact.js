function LoadContact()
{
    let card = document.createElement('div');
    card.classList.add('card');
    let title = document.createElement('h2');
    title.textContent = "Contact us!";

    let contactWrapper = document.createElement('div');
    contactWrapper.classList.add('contactwrapper');
    let phone = document.createElement('h3');
    phone.textContent = "123-456-789";
    let mail = document.createElement('h3');
    mail.textContent = "some.restaurant@gmail.com";

    contactWrapper.append(phone, mail);
    card.append(title, contactWrapper);
    return card;
}

export default LoadContact;