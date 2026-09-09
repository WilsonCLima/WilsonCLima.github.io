// ===============================
// MENU MOBILE
// ===============================

const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// ===============================
// FECHAR MENU AO CLICAR
// ===============================

const links = document.querySelectorAll(".nav-links a");

links.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// ===============================
// ANO AUTOMÁTICO DO FOOTER
// ===============================

const footer = document.querySelector(".footer");

const year = new Date().getFullYear();

footer.innerHTML = `
    <div class="container">
        <p>
            Desenvolvido por <strong>Wilson Costa Lima</strong>
        </p>

        <p class="footer-code">
            © ${year} • &lt;code /&gt;
        </p>
    </div>
`;