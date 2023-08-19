// Based on a script by Kathie Decora : katydecorah.com/code/lunr-and-jekyll/

// Create the lunr index for the search
var index = elasticlunr(function () {
  this.addField('title')
  this.addField('author')
  this.addField('layout')
  this.addField('content')
  this.setRef('id')
});

// Add to this index the proper metadata from the Jekyll content

index.addDoc({
  title: "La muestra",
  author: null,
  layout: "page",
  content: "\n\n\nLa muestra... [TITULO]\n\n\n\n\n\n    La obra Juan Moreira (1884), del escritor Eduardo Gutiérrez marca el inicio del campo \n    teatral argentino porque permite la sistematización de una poética textual de \n    temática gaucha, la visibilización de una poética actoral popular, la invención \n    de un público, el surgimiento de la crítica y la aparición del teatro como práctica social. \n    A partir de su éxito, la arena del circo -que era donde se representaban estas obras \n    luego de los espectáculos circenses-, se llena de nuevos gauchos: Juan Cuello, \n    Julián Giménez, Martín Fierro, Calandria, entre otros, quienes poco a poco abandonan \n    el picadero para pasar a las salas de los teatros de la ciudad de Buenos Aires \n    tanto como a los del interior durante las giras nacionales. Además, con el estreno \n    de Juan Moreira se produce un acuerdo estético, social y político que concentra \n    los paradigmas principales que constituyen la estructura de sentimiento de la \n    Argentina de fines del siglo XIX en su proceso de enculturación, posterior al \n    surgimiento del Estado Moderno argentino.\n\n\n    Esta exposición virtual se centra en el estudio de los textos teatrales, \n    las puestas en escena y los autores de diecinueve obras teatrales estrenadas y \n    representadas por la familia fundante del teatro argentino: Los Podestá, a partir de \n    las compañías formadas por los hermanos José, Gerónimo y Pablo, durante el periodo 1884-1910. \n    Entre los autores de las piezas seleccionadas, que se hallan en formato manuscritos en el \n    Instituto Nacional de Estudios Teatrales y que a partir de esta muestra se posibilita \n    su exhibición en formato digital, se destacan Eduardo Gutiérrez, José Podestá, \n    Abdón Aróstegui, Martín Coronado, Ezequiel Soria, Roberto Cayol, Florencio Sánchez, \n    José Lenchantin y Luis Armando Vasallo. Sus obras no sólo revelan los cambios, rupturas y \n    continuidades al interior de las compañías para las cuales escribieron, sino que \n    también revelan el estado de situación del sistema teatral desde sus inicios hasta el \n    Primer Centenario de la Nación: que abarca desde la poética gauchesca teatral hasta el \n    sainete. \n\n\n",
  id: 0
});
index.addDoc({
  title: "Las compañías teatrales",
  author: null,
  layout: "page",
  content: "\n\n\n\ncompañías\n\n\n",
  id: 1
});
index.addDoc({
  title: "Los autores",
  author: null,
  layout: "page",
  content: "\n\n\n\nLos autores\n\n    Abdón Aróztegui\n    Roberto Cayol\n    Martín Coronado\n    Eduardo Gutierrez y José Podestá\n    José Lenchantin\n    Elias Regules\n    Florencio Sánchez\n    Ezequiel Soria\n    Nemesio Trejo\n    Luis Armando Vasallo\n\n\n\n\n",
  id: 2
});
index.addDoc({
  title: "404: Page not found",
  author: null,
  layout: "page",
  content: "Sorry, we've misplaced that URL or it's pointing to something that doesn't exist.\nHead back home to try finding it again.\n",
  id: 3
});
index.addDoc({
  title: "Team charter / Estatuto del equipo",
  author: null,
  layout: "default",
  content: "\n\t\n\t\tBack / Volver\n\t\t\n    \n    \n\nCarbon-Based Lifeforms (CBL)\n\n\n\n \n\n \nTeam charter\n\n\nTeam Members and Roles\n\n\n\n    Gabriel Calarco, (He/Him), ARG. Technical leader\n    Jewlia Koehn, (She/Her), USA. Submitter\n    Pamela Gionco, ARG.Technical assistant \n    Daniel Rossi, (He/Him), USA. Secondary Submitter\n\n\n\n\nEstatuto del grupo\n\n\nIntegrantes del equipo y Roles\n\n\n\n\n    Gabriel Calarco, (Él), ARG. Líder técnico\n    Jewlia Koehn, (Ella), USA. Responsable de envíos\n    Pamela Gionco, ARG. Ayudante técnica \n    Daniel Rossi, (Él), USA. Segundo responsable de envíos\n\n\n\n\n\n \n\n \nGoals\n\n    \n    Build a solid structure for a team-based workflow in order to develop DH’s projects, in the context of this course and in future situations like:\n\n    Research in humanities\n    Digital edition\n    Digital publishing\n\nHave a practical experience in the process of work of a Digital Scholarly Edition\n\nImprove our understanding of the process required in order to make my TEI files visible for other people\n\n\n\n\n\nObjetivos\n\n    Construir una estructura sólida para un flujo de trabajo grupal, a fin de desarrollar proyectos de HD, en el contexto de este curso y en futuras situaciones tales como:\n\n    Investigación en Humanidades\n    Edición digital\n    Publicación digital\n\nTener experiencia práctica en el proceso de trabajo de una Edición Académica Digital\nMejorar nuestra comprensión sobre el proceso requerido para que mis archivos TEI sean visibles para otras personas.\n\n\n\n    \n\n\n \n\n\n\nCore Values\nOur group will achieve our goals through using all the resources we have at our disposal as well as remaining true to ourselves and the group. The expectations we have of the individual group members are the qualities that follows:\n\n\nCommitment: Each group member will be committed to himself/herself as well as the group at large. Group members will be committed to their own respective workload as well as the goals of the group.\n\nHonesty: Each group member will be honest with the other group members. When a group member does not feel comfortable with their workload or their understanding of the class material, they will let the others know so they understand and may receive help.\n\nResponsibility: Each group member will be responsible for communicating his or her thoughts and feelings with the group as well as his or her workload as well.\n\nIntegrity: each group member will have respect and regard for the other members in the group. Conversation will be respectful with one another. \n\nUnderstanding: Though we will use English as a primary communication language, we will not exclude Spanish when it is useful to the group’s progress. Each group member will make an acknowledgement of the language barrier between us and will be patience with others understanding that sometimes things may be lost in translation. We will ask questions for clarification if we do not understand completely at first. We will also recognize that some group members have not coded before and allow assistance and advice when others may be having trouble.\n\n\n\n\n\n\nFundamentos\n\nNuestro grupo alcanzará sus objetivos a través del uso de todos los recursos que tenemos a nuestra disposición, así como manteniéndonos fieles a nosotrxs mismxs y al grupo. Las expectativas que tenemos como miembros individuales del grupo son las siguientes cualidades:\n\n    Compromiso: Cada integrante del grupo se comprometerá con sí mismx y con el grupo en general. Lxs miembros del grupo se comprometerán con su propia carga de trabajo así como con los objetivos del grupo.\n    Honestidad: Cada integrante del grupo será honestx con el resto del grupo. Cuando un/a integrante del grupo no se sienta a gusto con su carga de trabajo o su comprensión sobre el material de la clase, lo hará saber al grupo para que le entiendan y pueda recibir ayuda.\n    Responsabilidad: Cada integrante del grupo será responsable de comunicar sus pensamientos y sentimientos al grupo, así como su carga de trabajo. \n    Integridad: Cada integrante del grupo tendrá respeto y consideración por las demás personas del grupo. La conversación será respetuosa entre integrantes. \n    Comprensión: Aunque usaremos el inglés como lengua de comunicación primaria, no excluiremos el español cuando sea útil para el progreso del grupo. Cada integrante del grupo reconocerá la barrera del lenguaje y tendrá paciencia con el resto, entendiendo que a veces las cosas se pueden perder en la traducción. Haremos preguntas para aclarar si no entendemos completamente al principio. También reconoceremos que algunxs integrantes del grupo no han escrito código antes y habilitaremos ayuda y consejo cuando puedan tener problemas.\n\n\n\n\n     \n\n\n\nTeam management\nConsensus oriented decision-making along with keeping Slack (private messages) as a communication channel. We can do most of the work asynchronously, and program virtual meetings for specific goals as they appear along the way. Decision making will be easy, as we all come together to choose whatever route. The specific roles so far is Gabriel as our technical leader and Jewlia as the one who submits the projects. However, we all do equal work and help each other. \n\n\n\n\nGestión del equipo\nLa toma de decisiones orientada al consenso junto con mantener Slack (mensajes privados) como canal de comunicación. Podemos hacer la mayor parte del trabajo asincrónicamente, y programar reuniones virtuales para objetivos específicos según vayan apareciendo en el camino. La toma de decisiones será fácil, ya que todos nos reunimos para elegir cualquier ruta. Los roles específicos hasta ahora son Gabriel como nuestro líder técnico y Jewlia como la que presenta los proyectos. Sin embargo, hacemos el mismo trabajo y nos ayudamos mutuamente.\n\n\n\n \n\n\n\nEthos\n\n\nWhen there's a will there's way\nProblems today are lessons for tomorrow\nTeamwork makes the dream work\nOne team, one mission :)\nNobody is born knowing\n\n\n\n\n\n\nEthos\n\nCuando hay voluntad hay camino\nLos problemas de hoy son lecciones para mañana\nEl trabajo en equipo hace que el sueño funcione\nUn equipo, una misión :)\nNadie nace sabiendo\n\n\n\n\n\nLast updated / Última actualización:\n2020-10-17\n\n\n\t\n\t\tBack / Volver\n\t\t\n    ",
  id: 4
});
index.addDoc({
  title: "Sobre el proyecto",
  author: null,
  layout: "page",
  content: "Proyecto CONICET Museos\n\n  \n\n\n\nCONICET - Proyectos Museos \n    Convocatoria 2021/2022 \n    Proyecto: Las compañías teatrales argentinas de los Podestá (1886-1910) y el Archivo Manuscritos del INET. Digitalización, puesta en valor y acceso de sus textos teatrales \n    Dirección: Dra. Lía Noguera\n\n\n\n\n\n \nEnglish\nThis site was created in the framework of the course \"Digital Publishing with Minimal Computing:\nhumanities at a global scale\" with the aim of hosting a digital edition of the “Descripción de Buenos Ayres”, from Acarete du Biscay's Un viaje al Río de la Plata.\n\n\n \nEspañol\nEste sitio fue creado en el marco del course \"Digital Publishing with Minimal Computing:\nhumanities at a global scale\" con el objetivo de alojar la edición digital de la “Descripción de Buenos Ayres”, contenida en Un viaje al Río de la Plata, de Acarete du Biscay.\n\n\n\n\n\n    Sobre el proyecto\n    \n    Team charter / Estatuto del equipo          \n    Editorial principles / Principios editoriales\n    \n\n\n\n\n",
  id: 5
});
index.addDoc({
  title: "Sobre el equipo",
  author: null,
  layout: "page",
  content: "\n\n\n\nAbout us / Quiénes somos\n\nPamela Gionco\n",
  id: 6
});
index.addDoc({
  title: "Editorial principles / Principios editoriales",
  author: null,
  layout: "default",
  content: "\n\t\n\t\tGo to About page / Ir a la página Acerca de\n\t\tGo to the edition / Ir a la edición\n\t\t\n\t\nEditorial principles / Principios editoriales\n\n \n\n\nEnglish\nOur bilingual digital edition aims to bring the text of the \"Description of Buenos Aires\" of Acarete du Biscay closer \n\tto modern readers for that we offer a modernized text, where we regularize the archaic spelling\n\tand we correct the errors of the originals, in parallel with the facsimile reproduction of the pages of our sources.\n\t\n\tThe modernized text was edited using TEI (Text Encoding Initiative)\n\tusing the following elements:\n\n\tpb: \n\t\tWe mark the beginning of the pages of our source documents.\n\t\tIn our edition we maintain this division, and the text of each page appears followed by the\n\t\tFascimilar reproduction of the same in the printed source. Also, we add the number of page with the  attribute @n\n\t\t graphic: We use this element in order to include the fascimilar reproduction of the\n\t\t\tsource documents, since the \n\t\t\tSimple Print schema does not include the \n\t\t\tfacsimile element,\n\t\t\tthat would be more appropriate for this purpose.\n\t\t\t lb: \n\t\t\t\tWe mark the beginning of each line of text in the source document. But, in order not to hinder\n\t\t\treading, this characteristic does not influence the display of the text of our edition. \n\t\t\thead: Chapter title.\n\t\t\t p: \n\t\t\t\tThe paragraph separation of the printed source is maintained \n\t\t\t reg: \n\t\t\t\tThe archaic spelling usages of the source documents were modernized and marked with\n\t\t\tthis element, without offering the original alternative in the text (since the reader has the facsimile reproduction\n\t\t\tto consult it). To indicate the regularizations we use the color\n\t\t\tgreen.\n\t\t\t corr: \n\t\t\t\tThe misprints of the source documents were corrected and marked with this element,\n\t\t\twithout offer the original alternative in the text (since the reader has the facsimile reproduction to consult\n\t\t\tthe original reading). To indicate the corrections we use the color red. \n\t\t\t\n\t\t\t name: \n\t\t\t\tWe indicate the names in the text with this element, which we define with the @type attributes, \n\t\t\t\tto indicate the type of entity to which that name refers (people, places, countries or organizations); and  @ref  \n\t\t\t\tto assign it an identifier using the permanent link provided by  VIAF . \n\t\t\tforeign: \n\t\t\t\tWe use this element to indicate words in a language other than that of the translation \n\t\t\t\n\t\t\t\n\n\n\n \nEspañol\n\nNuestra edición digital bilingüe tiene como objetivo acercar a lxs lectorxs modernxs el texto de la “Descripción de Buenos Aires” \nde Acarete du Biscay, para eso ofrecemos el texto modernizado, en donde regularizamos los usos ortográficos arcaicos\ny corregimos los errores de los originales, en paralelo a la reproducción facsimilar de las páginas de nuestras fuentes. \n\nEl texto modernizado fue editado mediante el uso de la codificación TEI (Text Encoding Initiative) \nutilizando los siguientes elementos:\n\n\n\tpb: \n\t\tSeñalamos el inicio de las páginas de nuestros documentos fuente. \n\tEn nuestra edición mantenemos esta división, y el texto de cada página aparece seguido de la \n\treproducción fascimilar de la misma en la fuente impresa. También se añade el número de página de la revista mediante el atributo @n\n\tgraphic: \n\t\tUtilizamos este elemento con el fin de incluir la reproducción fascimilar de los \n\tdocumentos fuente, ya que el esquema de \n\tSimple Print \n\tno incluye el elemento facsimile , \n\tque resultaría más apropiada para este fin.\n\tlb: \n\t\tMarcamos el inicio de cada línea de texto del documento fuente. Con el fin de no entorpecer \n\tla lectura, esta característica no influye en la visualización del texto de nuestra edición\n\thead: \n\t\tTítulo del capítulo\n\tp: \n\t\tSe mantiene la separación en párrafos de la fuente impresa\n\treg: \n\t\tLos usos ortográficos arcaicos de los documentos fuente fueron modernizados y marcados con \n\teste elemento, sin ofrecen la alternativa original en el texto (ya que el lector dispone de la reproducción facsimilar \n\tpara consultar la lectura original). Para señalar las regularizaciones utilizamos el color \n\tverde.\n\tcorr: \n\t\tLos errores de imprenta de los documentos fuente fueron corregidos y marcados con esta elemento, \n\tsin ofrecen la alternativa original en el texto (ya que el lector dispone de la reproducción facsimilar para consultar \n\tla lectura original). Para señalar las correcciones utilizamos el color rojo.\n\tnote:\n\t\t Mantenemos las notas del traductor de la fuente impresa, así como el formato de numeración, la llamada a las notas \n\t\tfueron marcadas con el elemento \n\t\tref.\n\tname: \n\t\tSeñalamos los nombres en el texto con este elemento, al que definimos con los atributos @type , \n\t\tpara indicar el tipo de entidad a la que refiere ese nombre (personas, lugares, países u organizaciones); y @ref  \n\t\tpara asignarle un identificador mediante el enlace permanente proporcionado por VIAF.\n\tforeign: \n\t\tUtilizamos este elemento para señalar palabras en un idioma diferente del de la traducción\n\n\t\n\n\n\n",
  id: 7
});
index.addDoc({
  title: "Inicio",
  author: null,
  layout: "default",
  content: "\n\n\n\n  \n\n\n    \n \nOur digital publishing project offers the edition of two translations,\nin English and Spanish, from the chapter dedicated to the description of Buenos Aires in the account of the trip made\nby Acarete du Biscay to the Río de la Plata and Peru,\noriginally published in French in 1672.\n\n\n \nNuestro proyecto de publicación digital ofrece la edición de dos traducciones, \nal inglés y al castellano, del capítulo dedicado a la descripción de Buenos Aires en el relato del viaje realizado \npor Acarete du Biscay al Río de la Plata y al Perú virreinal, \npublicada originalmente en francés en 1672.\n\n\n\n\n\n \n\nLa familia Podestá\n\n\n",
  id: 8
});
index.addDoc({
  title: "Pamela Gionco (Bio)",
  author: null,
  layout: "default",
  content: "\n\n    Back / Volver\n    \n\n\nPamela Gionco (Bio)\n\n\n\n    I was born in 1982, the same year that the Times Magazine selected Personal Computer as \"Person of the Year\".\n        In my family, it is said that I learned to type my name on the keyboard before I learned how to hand-write it. I still remember an amber monochrome CRT monitor where I used to play old video games.\n        I started using Windows when you should type the command \"win\" in DOS, a little time before it became an auto launch program that invade and conquer all computers an Operating System.\n        In 2000, the 2YK found me finishing high school... but the world didn't end then.\n        \n        In spite all that, I studied Humanities.\n        To be more specific, I have a degree in Art History and Theory and I'm assistant professor and researcher on Film and Media Studies, both in the Philosophy and Literature School of the Universidad de Buenos Aires.  \n        I also took postgraduate courses in Library and Information Science.\n        I work as a technical assistant in Digitization Project Management in a national cultural institution.\n        \n        So, here I am/we are, trying to deal with the idea (and the making) of Digital Humanities.\n        \n        \n            Formal presentation\n            \n\n   \n\n\n\n\n \n",
  id: 9
});
index.addDoc({
  title: "Search / Búsquedas",
  author: null,
  layout: "page",
  content: "\n\n\n    \n\n     \n    This is a simple search system. It will match most non-grammatical words.\n      Not all results will be highlighted on the page.\n    \n    \n     \n    Este es un sistema de búsqueda simple. Coincidirá con la mayoría de las palabras no gramaticales.\n      No todos los resultados se resaltarán en la página.\n    \n    \n\n\n  \n    \n\n    \n    \n    \n    \n\n\n\n",
  id: 10
});
index.addDoc({
  title: null,
  author: null,
  layout: null,
  content: "// Based on a script by Kathie Decora : katydecorah.com/code/lunr-and-jekyll/\n\n// Create the lunr index for the search\nvar index = elasticlunr(function () {\n  this.addField('title')\n  this.addField('author')\n  this.addField('layout')\n  this.addField('content')\n  this.setRef('id')\n});\n\n// Add to this index the proper metadata from the Jekyll content\n{% assign count = 0 %}{% for text in site.pages %}\nindex.addDoc({\n  title: {{text.title | jsonify}},\n  author: {{text.author | jsonify}},\n  layout: {{text.layout | jsonify}},\n  content: {{text.content | jsonify | strip_html}},\n  id: {{count}}\n});{% assign count = count | plus: 1 %}{% endfor %}\n\n// Builds reference data (maybe not necessary for us, to check)\nvar store = [{% for text in site.pages %}{\n  \"title\": {{text.title | jsonify}},\n  \"author\": {{text.author | jsonify}},\n  \"layout\": {{ text.layout | jsonify }},\n  \"link\": {{text.url | jsonify}},\n}\n{% unless forloop.last %},{% endunless %}{% endfor %}]\n\n// Query\nvar qd = {}; // Gets values from the URL\nlocation.search.substr(1).split(\"&\").forEach(function(item) {\n    var s = item.split(\"=\"),\n        k = s[0],\n        v = s[1] && decodeURIComponent(s[1]);\n    (k in qd) ? qd[k].push(v) : qd[k] = [v]\n});\n\nfunction doSearch() {\n  var resultdiv = document.querySelector('#results');\n  var query = document.querySelector('input#search').value;\n\n  // The search is then launched on the index built with Lunr\n  var result = index.search(query);\n  resultdiv.innerHTML = \"\";\n  if (result.length == 0) {    \n    resultdiv.append(document.createElement('p').innerHTML = 'No results found.');\n  } else if (result.length == 1) {\n    resultdiv.append(document.createElement('p').innerHTML = 'Found '+result.length+' result');\n  } else {\n    resultdiv.append(document.createElement('p').innerHTML = 'Found '+result.length+' results');\n  }\n  // Loop through, match, and add results\n  for (var item in result) {\n    var ref = result[item].ref;\n    res = document.createElement('div')\n    res.classList.add(\"result\")\n    link = document.createElement('a')\n    link.setAttribute('href', '{{site.baseurl}}'+store[ref].link+'?q='+query)\n    link.innerHTML = store[ref].title || 'Untitled page'\n    p = document.createElement('p')\n    p.appendChild(link)\n    res.appendChild(p)\n    resultdiv.appendChild(res)\n  }\n}\n\nvar callback = function(){\n  searchInput = document.querySelector('input#search') \n  if (qd.q) {\n    searchInput.value = qd.q[0];\n    doSearch();\n  }\n  searchInput.addEventListener('keyup', doSearch);\n};\n\nif (\n    document.readyState === \"complete\" ||\n    (document.readyState !== \"loading\" && !document.documentElement.doScroll)\n) {\n  callback();\n} else {\n  document.addEventListener(\"DOMContentLoaded\", callback);\n}\n",
  id: 11
});
index.addDoc({
  title: null,
  author: null,
  layout: null,
  content: "/*\n  Common Variables\n\n  Feel free to change!\n*/\n\n/* Fonts */\n$main-font: \"Palatino Linotype\", \"Book Antiqua\", Palatino, serif;\n$heading-font: sans-serif;\n$regular-font-size: 1.25em; /* 20px / 16px = 1.25em; support text resizing in all browsers */\n\n\n/*\n  Color\n\n  Make sure to leave color-scheme in `_config.yml` file empty for granular control\n*/\n\n$text-color: #454545;\n$heading-color: #404040;\n$link-color: #841212;\n\n@import \"ed\";\n@import \"syntax\";\n@import \"CETEIcean.css\";\n\n/* In this lines I am defining 3 class of  element */\n    /* The first 'multiling' is the container for the two columns */\n    \n    .multiling {\n        overflow: hidden;\n    }\n    \n    /*  The second defines divs to the left */\n    \n    .left {\n        float: left;\n        width: 40%;\n    }\n    \n    /* And the third to the right */\n    \n    .right {\n        float: right;\n        width: 40%;\n    }\n    \n    tei-reg \n{\n font-weight: bold;\n/*font-style: italic;*/\ncolor: #279711;\n}\n    \n    tei-sic {\n  color: brown\n}\n\n tei-corr {\n  font-weight: bold;\n  color: brown\n}\n\ntei-name {\n  font-weight: bold;\n}\n\ntei-note {\n  display: block;\n  font-size: 85%;\n  text-align: justify;\n  margin-top: 30px;\n}\n\ntei-ref {\n  color: #5f0000;\n  /*text-decoration: underline;*/\n    vertical-align:super;            /*superindice*/ \n    font-size:8pt; \n}\n\ntei-graphic {\ndisplay: block;\nmargin-top: 2em;\n}\n\ntei-div > tei-head {\n  font-size: 180%;\n  text-indent: 0em;\n   margin-bottom: 8px;\n}\n\n/*tei-div {\n  text-indent: 30px; /\\*Te odioooooooooooooooooooooo*\\/\n  }*/\n\n\ntei-lb {\n  display:none;\n  text-align: justify;\n}\n\ntei-p {\n text-indent: 15px;\n/*  display: inline;*/\n  display: block;\n  margin-top: 0em;\n  margin-bottom: 10px;\n  text-align: justify;\n}\n\ntei-foreign {\nfont-style: italic;\n}\n\np {\n text-indent: 15px;\n/*  display: inline;*/\n  display: block;\n  margin-top: 0em;\n  margin-bottom: 10px;\n  text-align: justify;\n}\n\nh2 {\n  text-align: center;\n}\n\n.page-title {\n  display:none;\n}\n\n.green {\n font-weight: bold;\n/*font-style: italic;*/\ncolor: #279711;\n}\n\n.red {\n  font-weight: bold;\n  color: brown\n}\n\nimg {\n  display: block;\n  max-width: 100%;\n  margin: 0rem;\n  border-radius: 15px;\n}\n\ntei-head {\n  text-align: center;\n}\n\nli {\n  text-indent: 0px;\n   text-align: justify;\n } ",
  id: 12
});

// Builds reference data (maybe not necessary for us, to check)
var store = [{
  "title": "La muestra",
  "author": null,
  "layout": "page",
  "link": "/_pages/1_LaMuestra/",
}
,{
  "title": "Las compañías teatrales",
  "author": null,
  "layout": "page",
  "link": "/_pages/2_companias/",
}
,{
  "title": "Los autores",
  "author": null,
  "layout": "page",
  "link": "/_pages/3_autores/",
}
,{
  "title": "404: Page not found",
  "author": null,
  "layout": "page",
  "link": "/404.html",
}
,{
  "title": "Team charter / Estatuto del equipo",
  "author": null,
  "layout": "default",
  "link": "/charter",
}
,{
  "title": "Sobre el proyecto",
  "author": null,
  "layout": "page",
  "link": "/_pages/about-project/",
}
,{
  "title": "Sobre el equipo",
  "author": null,
  "layout": "page",
  "link": "/_pages/about-team/",
}
,{
  "title": "Editorial principles / Principios editoriales",
  "author": null,
  "layout": "default",
  "link": "/ed_prin",
}
,{
  "title": "Inicio",
  "author": null,
  "layout": "default",
  "link": "/",
}
,{
  "title": "Pamela Gionco (Bio)",
  "author": null,
  "layout": "default",
  "link": "/pamela-gionco",
}
,{
  "title": "Search / Búsquedas",
  "author": null,
  "layout": "page",
  "link": "/_pages/search/",
}
,{
  "title": null,
  "author": null,
  "layout": null,
  "link": "/assets/js/search.js",
}
,{
  "title": null,
  "author": null,
  "layout": null,
  "link": "/assets/css/style.css",
}
]

// Query
var qd = {}; // Gets values from the URL
location.search.substr(1).split("&").forEach(function(item) {
    var s = item.split("="),
        k = s[0],
        v = s[1] && decodeURIComponent(s[1]);
    (k in qd) ? qd[k].push(v) : qd[k] = [v]
});

function doSearch() {
  var resultdiv = document.querySelector('#results');
  var query = document.querySelector('input#search').value;

  // The search is then launched on the index built with Lunr
  var result = index.search(query);
  resultdiv.innerHTML = "";
  if (result.length == 0) {    
    resultdiv.append(document.createElement('p').innerHTML = 'No results found.');
  } else if (result.length == 1) {
    resultdiv.append(document.createElement('p').innerHTML = 'Found '+result.length+' result');
  } else {
    resultdiv.append(document.createElement('p').innerHTML = 'Found '+result.length+' results');
  }
  // Loop through, match, and add results
  for (var item in result) {
    var ref = result[item].ref;
    res = document.createElement('div')
    res.classList.add("result")
    link = document.createElement('a')
    link.setAttribute('href', '/inet-test'+store[ref].link+'?q='+query)
    link.innerHTML = store[ref].title || 'Untitled page'
    p = document.createElement('p')
    p.appendChild(link)
    res.appendChild(p)
    resultdiv.appendChild(res)
  }
}

var callback = function(){
  searchInput = document.querySelector('input#search') 
  if (qd.q) {
    searchInput.value = qd.q[0];
    doSearch();
  }
  searchInput.addEventListener('keyup', doSearch);
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}
