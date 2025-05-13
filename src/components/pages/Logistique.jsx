import React from 'react'
import Hero from '../Hero'
import useGlobalTitleAnimations from "../../hooks/useGlobalTitleAnimations";
import useScrollAnimations from "../../hooks/useScrollAnimations";

const Logistique = () => {
  useGlobalTitleAnimations();
  useScrollAnimations();
  return (
    <>
      <section className='hero'>
        <img src='/assets/img/hero.webp' alt="hero-image" loading="lazy"/>
      </section>
      <section className='logistique'>
      
        <div className="logistique-section">

                    <p className='title2'>Logistique Pétrolière du Congo</p>

              <div className="items">
                <div className="item">
                  <img src="/assets/img/paysage2.jpg" className='slide-in'/>
                  <p className='slide-in-delay'>
                  La logistique pétrolière au Congo repose sur un processus structuré garantissant l'approvisionnement en carburants à travers le pays. Les produits proviennent soit de la raffinerie CORAF, soit sont importés par les marketeurs à l’aide de navires et barges par voie maritime ou fluviale. Ces produits pétroliers sont réceptionnés et stockés dans les dépôts d'importation de Pointe-Noire et Brazzaville.
                  </p>
                </div>
                <div className="item">
                  <img src="/assets/img/paysage7.jpg" className='slide-in-delay' />
                  <p className='slide-in'>
                  La SCLOG assure ensuite leur transfert vers les dépôts intérieurs par camions-citernes, barges ou wagons-citernes. Cette organisation logistique permet de desservir efficacement les différentes régions, garantissant un approvisionnement constant, même dans les zones les plus reculées.
                  </p>
                </div>
                <div className="item">
                  <img src="/assets/img/paysage6.jpg" className='slide-in'/>
                  <p className='slide-in-delay'>
                  À la demande de ses clients (marketeurs) tels que SNPC-D, TotalEnergies, Afric, Puma, X-Oil,… la SCLOG charge les produits dans des camions-citernes.  Ces entreprises prennent en charge la distribution finale vers les stations-service, les clients industriels et d'autres infrastructures stratégiques, garantissant ainsi un approvisionnement constant sur tout le territoire.
                  </p>
                </div>
              </div>

        </div>

        <div className="logistique-schema">

          <p>La logistique pétrolière au CONGO</p>
          <div className="schema">
            
          </div>

        </div>

        <div className="big-carte">
          
            <p className='title2'>Réseau de dépôts SCLOG</p>

            <div className="carte">

              <div>
                <img src="/assets/carte.svg" class="slide-in" />
              </div>

              <div className='carte-right'>
                
                <div>
                  <img src="/assets/route.svg" class="slide-in-delay" />
                  <p className='slide-in-delay'>Transferts assurés par voie routière</p>
                </div>

                <div>
                  <img src="/assets/rail.svg" class="slide-in-delay" />
                  <p className='slide-in-delay'>Transferts assurés par voie ferroviaire</p>
                </div>

                <div>
                  <img src="/assets/fluvial.svg" class="slide-in-delay" />
                  <p className='slide-in-delay'>Transferts assurés par voie fluviale</p>
                </div>

                <div>
                  <img src="/assets/depot.svg" class="slide-in-delay" />
                </div>

              </div>

            </div>

        </div>

    </section>
      
    </>
  )
}

export default Logistique
