

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer">
        <ul className="footer-menu">
          <li><a href="#">Prix du neuf</a>
            <ul>
              <li><a href="#">Marques</a></li>
              <li><a href="#">Concessionnaires</a></li>
              <li><a href="#">Comparateur</a></li>
            </ul>
          </li>
          <li><a href="#">Occasions</a>
            <ul>
              <li><a href="#">Recherche</a></li>
              <li><a href="#">Annonces du jour</a></li>
              <li><a href="#">Vendeurs Pro</a></li>
            </ul>
          </li>
          <li><a href="#">Auto Mag</a>
            <ul>
              <li><a href="#">Nouveautés</a></li>
              <li><a href="#">Actu</a></li>
              <li><a href="#">Essais</a></li>
              <li><a href="#">Concepts</a></li>
              <li><a href="#">Supercars</a></li>
              <li><a href="#">Sport Auto</a></li>
            </ul>
          </li>
          <li><a href="#">Guide pratique</a>
            <ul>
              <li><a href="#">Droits de douanes</a></li>
              <li><a href="#">FCR</a></li>
              <li><a href="#">Permis de conduire</a></li>
              <li><a href="#">Visite technique</a></li>
              <li><a href="#">Vignette</a></li>
              <li><a href="#">Voitures populaires</a></li>
            </ul>
          </li>
          <li><a href="#">Mon espace</a>
            <ul>
              <li><a href="#">Créer une annonce</a></li>
              <li><a href="#">Annonces favorites</a></li>
              <li><a href="#">Gérer mes alertes</a></li>
              <li><a href="#">Inscription</a></li>
              <li><a href="#">Gérer mes informations</a></li>
              <li><a href="#">Mes annonces</a></li>
            </ul>
          </li>
          <li><a href="#">Qui sommes-nous ?</a>
            <ul>
              <li><a href="#">Contactez-nous</a></li>
              <li><a href="#">Mentions légales</a></li>
              <li><a href="#">Politique de confidentialité</a></li>
              <li><a href="#">Revue de Presse</a></li>
            </ul>
          </li>
        </ul>
        <div className="footer-sub">
          <div className="social-menu-container">

            <div className="footer-title">Restez connecté</div>
            <ul className="social-menu">
              <li><a className="btn btn-footer btn-sm fb" href="https://www.facebook.com/automobile.tn"
                rel="noopener" target="_blank" aria-label="Facebook"><i className="fa fa-facebook"></i></a>
              </li>
              <li><a className="btn btn-footer btn-sm yt" href="https://www.youtube.com/user/AutomobileTn"
                rel="noopener" target="_blank" aria-label="YouTube"><i className="fa fa-youtube"></i></a>
              </li>
              <li><a className="btn btn-footer btn-sm ig" href="https://www.instagram.com/automobile.tn/"
                rel="noopener" target="_blank" aria-label="Instagram"><i
                  className="fa fa-instagram"></i></a></li>
              <li><a className="btn btn-footer btn-sm tw" href="https://twitter.com/AutomobileTN" rel="noopener"
                target="_blank" aria-label="Twitter"><i className="fa fa-twitter"></i></a></li>
              <li><a className="btn btn-footer btn-sm rs" href="#" aria-label="RSS"><i
                className="fa fa-rss"></i></a></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <div className="footer-title">Newsletter</div>
            <form action="https://www.automobile.tn/fr/abo-newsletter">
              <input aria-label="Email" type="email" required placeholder="Votre e-mail ici" />
              <input type="submit" className="btn btn-primary" value="ok" />
            </form>
          </div>

          <p className="powered-by">Developed by <a href="https://www.github.com/youssefmarzouk621/"  target="_blank">Youssef Marzouk</a></p>
          
        </div>
        <div className="clearer"></div>
      </div>
    </div>
  )
}
