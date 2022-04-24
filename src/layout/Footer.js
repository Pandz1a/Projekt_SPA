export function Footer() {
    const section = document.createElement('section');

    section.innerHTML = `
    <div class=endimg> </div>
    <div class="footer">
            <p>Copyright &reg; by Marta</p>

            <p>Kontakt i współpraca | Dla mediów i blogerów</p>
            <a title="facebook" href="#"> <img src="../assets/img/footer/iconmonstr-facebook-3-24.png" />  </a>
            <a title="instagram" href="#"><img src="../assets/img/footer/iconmonstr-instagram-13-24.png" /></a>
            <a title="twitter" href="#"> <img src="../assets/img/footer/iconmonstr-twitter-3-24.png" /> </a>
            <a title="snapchat" href="#"> <img src="../assets/img/footer/iconmonstr-snapchat-3-24.png" /> </a>
            <a title="youtube" href="#"> <img src="../assets/img/footer/iconmonstr-youtube-8-24.png" /> </a>
        </div>
    `;

    return section;
}


