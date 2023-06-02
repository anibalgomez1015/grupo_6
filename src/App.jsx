import { useState } from 'react'
import reactLogo from './assets/react.svg'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
        <h1>MEDICINA ALTERNATIVA PARA EL ALIVIO DEL DOLOR</h1>
        
      
    <form class="search-container"> 
        
        <input type="text" id="searchInput" name="search" placeholder="Buscar..." class="search-input"/>
            
        
        <button type="button" class="search-button" onclick="searchArticle()">
        <i class="material-icons">search</i> 
        </button>
        
    </form>
        
    <section class="article-grid" id='articleGrid'>
       
       
    
            <img class="imagen" src="Medicinal.jpg" alt="imagen" />
          
        <p >
        

        Se refiere a tratamientos con bajo o sin riesgo que son utilizados en lugar de tratamientos convencionales (estándar). Si usted utiliza un tratamiento alternativo junto a medicina o terapia convencional, el tratamiento alternativo será considerado como terapia complementaria.
      <h3>INFORMACION</h3>
      Existen muchas formas de medicina alternativa. Estas incluyen acupuntura, quiropráctica, medicina herbaria, masaje, ondas magnéticas, hipnosis, biorretroalimentación, meditación, yoga y tai chi.

La acupuntura consiste en estimular ciertos puntos de acupuntura en el cuerpo utilizando agujas finas u otros métodos. La forma como funciona la acupuntura no está completamente clara. Se cree que los puntos de acupuntura se encuentran cerca de las fibras nerviosas. Cuando se estimulan los puntos de acupuntura, las fibras nerviosas le dan la señal a la médula espinal y al cerebro para liberar químicos que alivian el dolor.

La acupuntura es un medio efectivo para aliviar el dolor como, por ejemplo, el dolor de espalda y el dolor de cabeza. La acupuntura también puede ayudar a aliviar el dolor debido a:
La acupuntura es un medio efectivo para aliviar el dolor como, por ejemplo, el dolor de espalda y el dolor de cabeza. La acupuntura también puede ayudar a aliviar el dolor debido a:
<li>Cancer.</li>
<li>Síndrome del túnel carpiano.</li>
<li>Fibromialgia.</li>
<li>Parto (trabajo de parto).
</li>
<li>Lesiones musculoesqueléticas (por ejemplo, del cuello, hombros, rodilla o codo)
</li>
<li>Osteoartritris.</li>
<li>Artritis reumatoidea.</li>
La hipnosis es un estado de concentración enfocada. En la autohipnosis, usted repite un enunciado positivo una y otra vez.

La hipnosis puede ayudar a aliviar el dolor a causa de:
<li>Después de cirugía o parto.</li>
<li>Artritis.</li>
<li>Cáncer.</li>
<li>Fibromialgia.</li>
<li>Síndrome del intestino irritable.</li>
<li>Migrañas.</li>
<li>Cefaleas tensionales.</li>
Tanto la acupuntura como la hipnosis a menudo se ofrecen en los centros de tratamiento del dolor en los Estados Unidos. Otros métodos no farmacológicos usados en dichos centros son:
<li>Biorretroalimentación.
</li>
<li>Masaje.</li>
<li>
  Entrenamiento en relajación.</li>
<li>Fisioterapia.<a href="https://medlineplus.gov/spanish/ency/article/002064.htm#:~:text=Existen%20muchas%20formas%20de%20medicina,meditaci%C3%B3n%2C%20yoga%20y%20tai%20chi.">Continuar leyendo</a></li>




<h4>Referencias</h4>



    <p>Hecht FM. Complementary, alternative, and integrative medicine. In: Goldman L, Schafer AI, eds. Goldman-Cecil Medicine. 26th ed. Philadelphia, PA: Elsevier; 2020:chap 34.

      Hsu ES, Wu I, Lai B. Acupuncture. In: Benzon HT, Raja SN, Liu SS, Fishman SM, Cohen SP, eds. Essentials of Pain Medicine. 4th ed. Philadelphia, PA: Elsevier; 2018:chap 60.
      
      White JD. Complementary and alternative medicine. In: Niederhuber JE, Armitage JO, Kastan MB, Doroshow JH, Tepper JE, eds. Abeloff's Clinical Oncology. 6th ed. Philadelphia, PA: Elsevier; 2020:chap 31.</p>
  <h3>Ultima revisión 11/9/2021</h3>
  Versión en inglés revisada por: Joseph V. Campellone, MD, Department of Neurology, Cooper Medical School at Rowan University, Camden, NJ. Review provided by VeriMed Healthcare Network. Also reviewed by David Zieve, MD, MHA, Medical Director, Brenda Conaway, Editorial Director, and the A.D.A.M. Editorial team.

Traducción y localización realizada por: DrTango, Inc.


        </p>

        </section>
        <section class="hashtag">
        <p>
         #Medicinasnaturales,
         #Comoquitareldolor,
         #medicinas,
         #remediosalternativos.
        </p>
        </section>
        <section class="footer">
  <footer><p>&copy; 2023 Cuerpo y Mente Sana. Todos los derechos reservados.</p></footer>
  </section>
    </>
     
  )
}

export default App
