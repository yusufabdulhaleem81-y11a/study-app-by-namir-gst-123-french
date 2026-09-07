/* ================= COURSE INFO ================= */
const COURSE = { name: "Communication in French (GST 123)", short: "GST 123 • Communication in French", uni: "Federal University Dutse — Faculty of General Studies", level: "Level 100", author: "Osita Nicholas, PhD" };

/* ================= CHAPTER CONTENT ================= */
const CHAPTERS = [
{
 id:1, title:"Entrer en contact", en:"Making Contact",
 desc:"Greetings and farewells, essential verbs (avoir, être, aller), nouns, articles, numbers 1–100, introducing yourself, ER verbs, nationalities, professions, the French alphabet, places in town, family and directions.",
 secs:[
 {id:"saluer", title:"Section A — Saluer (Greetings)", html:`
   <div class="callout c-tip"><b>🎯 Objectives:</b> greet people • say goodbye • count from 1 to 50.</div>
   <h4>Dialogue</h4>
   <div class="dialogue">
     <span><b>Mme Dupont:</b> Bonjour Monsieur Dulac.</span>
     <span><b>M. Dulac:</b> Bonjour Madame.</span>
     <span><b>Mme Dupont:</b> Comment allez-vous ?</span>
     <span><b>M. Dulac:</b> Ça va bien, merci. Et vous ?</span>
   </div>
   <table class="tbl"><tr><th>Les salutations</th><th>English</th></tr>
   <tr><td>Bonjour</td><td>good day / good morning</td></tr>
   <tr><td>Bonjour Monsieur / Madame</td><td>good day sir / good morning madam</td></tr>
   <tr><td>Bonsoir</td><td>good evening</td></tr></table>
   <div class="callout c-note"><b>📌 Important:</b> The French do <b>NOT</b> have an equivalent of “good afternoon” like English. <b>Bonjour</b> therefore means both <i>good morning</i> and <i>good afternoon</i>.</div>
   <div class="callout c-note"><b>📌 Greeting mates:</b> When greeting friends/classmates, titles (Monsieur, Madame, Mademoiselle) are removed — simply say <i>Bonjour Zainab</i>, <i>Bonsoir Musa</i>, <i>Salut Doris</i>.</div>
   <h4>Vocabulaire supplémentaire (Extra vocabulary)</h4>
   <table class="tbl"><tr><th>French</th><th>English</th><th>French</th><th>English</th></tr>
   <tr><td>Bonne soirée</td><td>have a nice (social) evening</td><td>Bonne nuit</td><td>good night</td></tr>
   <tr><td>Bon voyage</td><td>safe journey</td><td>Bonne guérison</td><td>get well soon</td></tr>
   <tr><td>Joyeux anniversaire</td><td>happy birthday</td><td>Bonne chance</td><td>good luck</td></tr>
   <tr><td>Bon appétit</td><td>enjoy your meal</td><td>Merci beaucoup</td><td>thanks a lot</td></tr>
   <tr><td>Salut !</td><td>hi / hello</td><td>Bravo</td><td>well done</td></tr>
   <tr><td>Au revoir</td><td>bye bye</td><td>Pas de quoi</td><td>don’t mention it</td></tr>
   <tr><td>Bienvenu(e)</td><td>welcome</td><td>C’est dommage</td><td>it is a pity</td></tr>
   <tr><td>Quel dommage</td><td>what a pity</td><td>Du courage</td><td>well done (to someone at work)</td></tr>
   <tr><td>À bientôt</td><td>see you soon</td><td>À tout à l’heure</td><td>see you later</td></tr>
   <tr><td>À lundi / À mardi</td><td>see you Monday / Tuesday</td><td>Félicitations</td><td>congratulations</td></tr>
   <tr><td>Oh là là !</td><td>exclamation: surprise, excitement, shock or anger</td><td>De rien / Ce n’est rien / Je vous en prie</td><td>you are welcome</td></tr></table>
   <h4>Ma carte d’identité (Identity card vocabulary)</h4>
   <table class="tbl"><tr><th>French</th><th>English</th><th>French</th><th>English</th></tr>
   <tr><td>Nom</td><td>surname</td><td>Prénom</td><td>first name</td></tr>
   <tr><td>Nationalité</td><td>nationality</td><td>Situation familiale</td><td>marital status</td></tr>
   <tr><td>Célibataire</td><td>single</td><td>Marié(e)</td><td>married</td></tr>
   <tr><td>Domicile</td><td>residence</td><td>Date de naissance</td><td>date of birth</td></tr>
   <tr><td>Couleur des yeux</td><td>colour of the eyes</td><td>Couleur des cheveux</td><td>colour of hair</td></tr>
   <tr><td>Poids</td><td>weight</td><td>Taille</td><td>height</td></tr></table>
   <h4>Les verbes : avoir, être, aller (present tense)</h4>
   <table class="tbl"><tr><th>Avoir (to have)</th><th>Être (to be)</th><th>Aller (to go)</th></tr>
   <tr><td>J’ai — I have</td><td>Je suis — I am</td><td>Je vais — I go</td></tr>
   <tr><td>Tu as — you have</td><td>Tu es — you are</td><td>Tu vas — you go</td></tr>
   <tr><td>Il/elle a — he/she has</td><td>Il/elle est — he/she is</td><td>Il/elle va — he/she goes</td></tr>
   <tr><td>Nous avons — we have</td><td>Nous sommes — we are</td><td>Nous allons — we go</td></tr>
   <tr><td>Vous avez — you have</td><td>Vous êtes — you are</td><td>Vous allez — you go</td></tr>
   <tr><td>Ils/elles ont — they have</td><td>Ils/elles sont — they are</td><td>Ils/elles vont — they go</td></tr></table>
   <p><i>Examples: J’ai une voiture (I have a car) • Nous avons des livres • Je suis nigérian • Vous êtes professeur • Je vais à Kano • Nous allons au cinéma.</i></p>
   <h4>Other special uses of AVOIR (very common exam area!)</h4>
   <table class="tbl"><tr><th>Expression</th><th>Meaning</th><th>Example</th></tr>
   <tr><td>Avoir + âge</td><td>to be … years old</td><td>J’ai 20 ans ✔ (NOT ✗ Je suis 20 ans)</td></tr>
   <tr><td>Avoir peur</td><td>to be afraid</td><td>J’ai peur — I am afraid</td></tr>
   <tr><td>Avoir faim</td><td>to be hungry</td><td>J’ai faim — I am hungry</td></tr>
   <tr><td>Avoir soif</td><td>to be thirsty</td><td>Il a soif — he is thirsty</td></tr>
   <tr><td>Avoir froid</td><td>to be / feel cold</td><td>Elle a froid — she is cold</td></tr>
   <tr><td>Avoir chaud</td><td>to be / feel hot</td><td>J’ai chaud — I am warm</td></tr>
   <tr><td>Avoir mal à + body part</td><td>to have an ache</td><td>J’ai mal à la tête — I have a headache</td></tr>
   <tr><td>Avoir raison / tort</td><td>to be right / wrong</td><td>J’ai raison — I am right • Il a tort — he is wrong</td></tr></table>
   <div class="callout c-tip"><b>💡 Exam tip:</b> Age in French uses <b>avoir</b>, never être: «Ma mère a cinquante ans» (my mother is fifty). This is a classic exam trap!</div>
   <h4>Preposition contractions with “à”</h4>
   <table class="tbl"><tr><th>à + le = <b>au</b></th><th>à + les = <b>aux</b></th><th>à + la = à la</th><th>à + l’ = à l’</th></tr>
   <tr><td>au marché</td><td>aux dents</td><td>à la banque</td><td>à l’école</td></tr></table>
   <h4>Aller + infinitive = the immediate future</h4>
   <p>Aller is conjugated in the present; the action verb stays in the infinitive (raw form): <b>Je vais manger</b> (I am going to eat) • <b>Tu vas dormir</b> • <b>Ils vont nager</b> • <b>Vous allez écrire</b>.</p>
   <h4>Les noms (Nouns) — gender</h4>
   <p>In French <b>ALL nouns are either masculine or feminine</b>: <i>un cinéma, un éléphant</i> (masculine) • <i>une table, une fille</i> (feminine). Always learn the article with the noun: don’t learn «voyage», learn <b>«un voyage»</b>.</p>
   <h4>Plural rules</h4>
   <table class="tbl"><tr><th>Rule</th><th>Examples</th></tr>
   <tr><td>Most nouns add <b>-s</b> (usually not pronounced)</td><td>le garçon → les garçons • la fille → les filles</td></tr>
   <tr><td>Nouns in <b>-al → -aux</b></td><td>un animal → des animaux • un cheval → des chevaux</td></tr>
   <tr><td>Already ending in -s, -x, -z → <b>no change</b></td><td>le bras → les bras • le prix → les prix</td></tr>
   <tr><td>Nouns in <b>-eau / -eu add -x</b></td><td>un gâteau → des gâteaux • un jeu → des jeux</td></tr>
   <tr><td>Completely irregular</td><td>un œil → des yeux</td></tr></table>
   <h4>Les articles (Articles)</h4>
   <p>Articles must <b>agree in gender and number</b> with their noun.</p>
   <table class="tbl"><tr><th colspan="2">Definite (the)</th><th colspan="2">Indefinite (a/an/some)</th></tr>
   <tr><th>Article</th><th>Use</th><th>Article</th><th>Use</th></tr>
   <tr><td>Le</td><td>masculine singular (le garçon, le livre)</td><td>Un</td><td>masculine singular (un stylo, un tableau)</td></tr>
   <tr><td>La</td><td>feminine singular (la fille, la voiture)</td><td>Une</td><td>feminine singular (une maison, une porte)</td></tr>
   <tr><td>Les</td><td>plural, both genders (les étudiants)</td><td>Des</td><td>plural, both genders (des enfants, des villes)</td></tr>
   <tr><td>L’</td><td>singular noun starting with a vowel (a,e,i,o,u) or silent h (l’homme, l’école, l’université)</td><td>—</td><td>—</td></tr></table>
   <h4>Les nombres 1–50</h4>
   <table class="tbl"><tr><th>No.</th><th>French</th><th>No.</th><th>French</th><th>No.</th><th>French</th></tr>
   <tr><td>1</td><td>un</td><td>11</td><td>onze</td><td>21</td><td>vingt et un</td></tr>
   <tr><td>2</td><td>deux</td><td>12</td><td>douze</td><td>30</td><td>trente</td></tr>
   <tr><td>3</td><td>trois</td><td>13</td><td>treize</td><td>31</td><td>trente et un</td></tr>
   <tr><td>4</td><td>quatre</td><td>14</td><td>quatorze</td><td>40</td><td>quarante</td></tr>
   <tr><td>5</td><td>cinq</td><td>15</td><td>quinze</td><td>41</td><td>quarante et un</td></tr>
   <tr><td>6</td><td>six</td><td>16</td><td>seize</td><td>50</td><td>cinquante</td></tr>
   <tr><td>7</td><td>sept</td><td>17</td><td>dix-sept</td><td>38</td><td>trente-huit</td></tr>
   <tr><td>8</td><td>huit</td><td>18</td><td>dix-huit</td><td>45</td><td>quarante-cinq</td></tr>
   <tr><td>9</td><td>neuf</td><td>19</td><td>dix-neuf</td><td>49</td><td>quarante-neuf</td></tr>
   <tr><td>10</td><td>dix</td><td>20</td><td>vingt</td><td>—</td><td>—</td></tr></table>
   <div class="callout c-tip"><b>💡 Exam tip:</b> Compound numbers 21, 31, 41 use <b>“et un”</b> (vingt <b>et</b> un); others use a hyphen (trente-huit).</div>`},
 {id:"presenter", title:"Section B — Se Présenter (Introducing oneself)", html:`
   <div class="callout c-tip"><b>🎯 Objectives:</b> introduce yourself • conjugate ER verbs • state nationalities • mention professions • recite the alphabet &amp; numbers 51–100 • identify French sounds.</div>
   <h4>Casual dialogue</h4>
   <div class="dialogue">
     <span><b>Abdul:</b> Salut ! Comment ça va ?</span>
     <span><b>Shehu:</b> Ça va bien, merci. Je m’appelle Shehu. Et toi, comment t’appelles-tu ?</span>
     <span><b>Abdul:</b> Je m’appelle Abdul. Moi, j’ai vingt ans. Tu as quel âge ?</span>
     <span><b>Shehu:</b> Moi aussi j’ai vingt ans. Je suis nigérian. D’où viens-tu ?</span>
     <span><b>Abdul:</b> Je viens du Bénin. Je suis béninois. Je suis étudiant de français. J’habite Dutse. Où habites-tu ?</span>
     <span><b>Shehu:</b> Moi aussi j’habite Dutse. Je suis ravi de te connaître.</span>
   </div>
   <h4>Key introduction phrases</h4>
   <table class="tbl"><tr><th>French</th><th>English</th></tr>
   <tr><td>Je m’appelle…</td><td>My name is…</td></tr>
   <tr><td>Comment t’appelles-tu ? (casual)</td><td>What is your name?</td></tr>
   <tr><td>Comment vous appelez-vous ? (formal)</td><td>What is your name?</td></tr>
   <tr><td>D’où viens-tu ? / D’où venez-vous ?</td><td>Where do you come from?</td></tr>
   <tr><td>J’habite à Dutse</td><td>I live in Dutse</td></tr>
   <tr><td>Je suis ravi de te connaître</td><td>Nice to meet you (casual)</td></tr>
   <tr><td>Je suis content de faire votre connaissance</td><td>Nice to meet you (formal)</td></tr>
   <tr><td>Enchantée / Enchanté</td><td>Nice to meet you</td></tr></table>
   <h4>Les verbes en ER (first group verbs)</h4>
   <p>French has <b>3 groups of verbs</b>: 1st = <b>-ER</b> (parler, travailler), 2nd = <b>-IR</b> (finir, choisir), 3rd = all others (recevoir, comprendre). A verb = <b>root/radical + ending</b>: in <i>parler</i>, “parl” is the root and “er” is the ending. When conjugating, <b>the root stays the same, only the ending changes</b>.</p>
   <table class="tbl"><tr><th>Parler (to speak)</th><th>Aider (to help)</th><th>Commencer (to start)</th><th>Manger (to eat)</th></tr>
   <tr><td>Je parle</td><td>J’aide</td><td>Je commence</td><td>Je mange</td></tr>
   <tr><td>Tu parles</td><td>Tu aides</td><td>Tu commences</td><td>Tu manges</td></tr>
   <tr><td>Il/elle parle</td><td>Il/elle aide</td><td>Il/elle commence</td><td>Il/elle mange</td></tr>
   <tr><td>Nous parlons</td><td>Nous aidons</td><td>Nous <b>commençons</b></td><td>Nous <b>mangeons</b></td></tr>
   <tr><td>Vous parlez</td><td>Vous aidez</td><td>Vous commencez</td><td>Vous mangez</td></tr>
   <tr><td>Ils/elles parlent</td><td>Ils/elles aident</td><td>Ils/elles commencent</td><td>Ils/elles mangent</td></tr></table>
   <div class="callout c-note"><b>📌 Note:</b> -CER and -GER verbs change spelling in the <b>nous</b> form (commençons, mangeons) to keep the soft sound. <b>Lever</b> takes accents: je lève, tu lèves, il/elle lève, nous levons, vous levez, ils/elles lèvent.</div>
   <p><b>More -ER verbs to master:</b> donner, arriver, compter, couper, laver, trouver, téléphoner, fermer, entrer, garder, acheter, travailler, voler, regarder, sauter, jouer, écouter, monter, pleurer, préparer, expliquer, étudier, penser, nager, voyager.</p>
   <h4>Les nationalités (Nationalities)</h4>
   <table class="tbl"><tr><th>Pays</th><th>Nationalité</th><th>Pays</th><th>Nationalité</th></tr>
   <tr><td>L’Algérie</td><td>Algérien/ne</td><td>Le Ghana</td><td>Ghanéen/ne</td></tr>
   <tr><td>L’Égypte</td><td>Égyptien/ne</td><td>Le Mali</td><td>Malien/ne</td></tr>
   <tr><td>Le Maroc</td><td>Marocain/e</td><td>Le Nigéria</td><td><b>Nigérian/e</b></td></tr>
   <tr><td>La Tunisie</td><td>Tunisien/ne</td><td>Le Sénégal</td><td>Sénégalais/e</td></tr>
   <tr><td>Le Bénin</td><td>Béninois/e</td><td>Le Togo</td><td>Togolais/e</td></tr>
   <tr><td>La Côte d’Ivoire</td><td>Ivoirien/ne</td><td>Le Cameroun</td><td>Camerounais/e</td></tr>
   <tr><td>La Chine</td><td>Chinois/e</td><td>Le Canada</td><td>Canadien/ne</td></tr>
   <tr><td>Le Japon</td><td>Japonais/e</td><td>Les États-Unis</td><td>Américain/e</td></tr>
   <tr><td>La Russie</td><td>Russe</td><td>La Belgique</td><td>Belge</td></tr>
   <tr><td>La Grande Bretagne</td><td>Britannique</td><td>L’Espagne</td><td>Espagnol/e</td></tr>
   <tr><td>La Grèce</td><td>Grec/Grecque</td><td>L’Italie</td><td>Italien/ne</td></tr>
   <tr><td>La France</td><td><b>Français/e</b></td><td>Le Qatar</td><td>Qatari/e</td></tr></table>
   <p><b>Expressing nationality:</b> <i>Je suis nigérian</i> • <i>Je viens du Nigéria</i> • <i>Je suis de la nationalité nigériane</i>. For a friend: <i>Il est béninois</i> or <i>C’est un Béninois</i>.</p>
   <div class="callout c-key"><b>⭐ Key:</b> Adjectives of nationality are written with a <b>lowercase</b> letter: <i>Kofi est ghanéen</i>, <i>C’est un tissu ghanéen</i>, <i>Ces chaussures italiennes me plaisent</i>.</div>
   <h4>Les métiers / Les professions</h4>
   <table class="tbl"><tr><th>French</th><th>English</th><th>French</th><th>English</th></tr>
   <tr><td>Informaticien/ne</td><td>computer scientist</td><td>Coiffeur/coiffeuse</td><td>barber / hair-dresser</td></tr>
   <tr><td>Avocat/Avocate</td><td>lawyer</td><td>Banquier</td><td>banker</td></tr>
   <tr><td>Infirmier/Infirmière</td><td>nurse</td><td>Menuisier</td><td>carpenter</td></tr>
   <tr><td>Maçon</td><td>bricklayer</td><td>Boucher</td><td>butcher</td></tr>
   <tr><td>Boulanger</td><td>baker</td><td>Ingénieur</td><td>engineer</td></tr>
   <tr><td>Professeur</td><td>secondary school teacher</td><td>Forgeron</td><td>blacksmith</td></tr>
   <tr><td>Soudeur</td><td>welder</td><td>Peintre</td><td>painter</td></tr>
   <tr><td>Écrivain</td><td>writer</td><td>Étudiant(e)</td><td>student</td></tr></table>
   <div class="callout c-key"><b>⭐ Key rule:</b> Unlike English, French uses <b>NO article</b> with professions: <i>Elle est avocate</i>. BUT with <i>c’est / ce sont</i> the article IS present: <i>C’est un forgeron</i> • <i>Ce sont des étudiants</i>.</div>
   <h4>L’alphabet français</h4>
   <p>26 letters = <b>6 vowels</b> (a, e, i, o, u, y) + <b>20 consonants</b>. Letter names: A(a), B(be), C(se), D(de), E(ə), F(ef), G(ʒe), H(ash), I(i), J(ʒi), K(ka), L(el), M(em), N(en), O(o), P(pe), Q(ky), R(ɛr), S(es), T(te), U(y), V(ve), W(double-vé), X(iks), <b>Y(igrek)</b>, Z(zède).</p>
   <p>From these letters are formed <b>16 vowel sounds, 18 consonant sounds and 3 semi-vowel sounds</b>.</p>
   <h4>Les nombres 51–100</h4>
   <table class="tbl"><tr><th>No.</th><th>French</th><th>No.</th><th>French</th></tr>
   <tr><td>51</td><td>cinquante et un</td><td>60</td><td>soixante</td></tr>
   <tr><td>55</td><td>cinquante-cinq</td><td>61</td><td>soixante et un</td></tr>
   <tr><td>69</td><td>soixante-neuf</td><td>70</td><td><b>soixante-dix</b></td></tr>
   <tr><td>71</td><td><b>soixante et onze</b></td><td>75</td><td><b>soixante-quinze</b></td></tr>
   <tr><td>79</td><td>soixante-dix-neuf</td><td>80</td><td><b>quatre-vingts</b></td></tr>
   <tr><td>81</td><td>quatre-vingt-un</td><td>89</td><td>quatre-vingt-neuf</td></tr>
   <tr><td>90</td><td><b>quatre-vingt-dix</b></td><td>91</td><td>quatre-vingt-onze</td></tr>
   <tr><td>99</td><td>quatre-vingt-dix-neuf</td><td>100</td><td><b>cent</b></td></tr></table>
   <div class="callout c-note"><b>📌 Note:</b> Alternatives used in some regions: 70 = <i>septante</i>, 80 = <i>octante</i>, 90 = <i>nonante</i>. France itself uses soixante-dix, quatre-vingts, quatre-vingt-dix (literally “60+10”, “4×20”, “4×20+10”).</div>`},
 {id:"ville", title:"Section C — En ville (Places in town)", html:`
   <div class="callout c-tip"><b>🎯 Objectives:</b> ask for and give directions • talk about your family • count from 100 to 1,000,000.</div>
   <h4>Dialogue — asking for directions</h4>
   <div class="dialogue">
     <span><b>Abdullahi:</b> Excusez-moi, monsieur. Où est la poste s’il vous plaît ?</span>
     <span><b>Passer-by:</b> Allez tout droit. Puis prenez la deuxième rue à droite. C’est la rue Zola. La poste se trouve à gauche.</span>
     <span><b>Abdullahi:</b> Merci, monsieur. — <b>Passer-by:</b> Je vous en prie.</span>
   </div>
   <table class="tbl"><tr><th>French</th><th>English</th></tr>
   <tr><td>Demander/expliquer le chemin</td><td>Ask for / give directions</td></tr>
   <tr><td>Où est la poste s’il vous plaît ?</td><td>Where is the post office please?</td></tr>
   <tr><td>Allez tout droit</td><td>Go straight ahead</td></tr>
   <tr><td>Prenez la deuxième rue à droite</td><td>Take the second street on the right</td></tr>
   <tr><td>Prenez la troisième rue à gauche</td><td>Take the third street on the left</td></tr></table>
   <h4>En ville (In town)</h4>
   <table class="tbl"><tr><th>French</th><th>English</th><th>French</th><th>English</th></tr>
   <tr><td>un marché</td><td>a market</td><td>un musée</td><td>a museum</td></tr>
   <tr><td>un supermarché</td><td>a supermarket</td><td>un zoo</td><td>a zoo</td></tr>
   <tr><td>une banque</td><td>a bank</td><td>une boulangerie</td><td>a bakery</td></tr>
   <tr><td>une église</td><td>a church</td><td>une mosquée</td><td>a mosque</td></tr>
   <tr><td>une pharmacie</td><td>a chemist</td><td>une poste</td><td>a post office</td></tr>
   <tr><td>un hôpital</td><td>a hospital</td><td>un cinéma</td><td>a cinema</td></tr>
   <tr><td>un restaurant</td><td>a restaurant</td><td>un hôtel</td><td>a hotel</td></tr>
   <tr><td>un café</td><td>a coffee shop</td><td>un magasin</td><td>a shop</td></tr>
   <tr><td>un centre commercial</td><td>a shopping centre</td><td>une bibliothèque</td><td>a library</td></tr>
   <tr><td>un stade</td><td>a stadium</td><td>—</td><td>—</td></tr></table>
   <h4>Les nombres ordinaux (Ordinal numbers)</h4>
   <p><b>Premier</b> (1st) • <b>deuxième</b> (2nd) • <b>troisième</b> (3rd) • <b>quatrième</b> (4th) • <b>cinquième</b> (5th) • quarante-huitième (48th).</p>
   <h4>La famille (Family) — from Musa’s passage</h4>
   <div class="dialogue"><span><i>«Je m’appelle Musa. Je suis nigérian et j’habite à Dutse. J’ai vingt ans. Je suis étudiant. J’ai deux frères et une sœur. Je suis le troisième enfant de mes parents. Mon père est médecin et ma mère est comptable.»</i></span></div>
   <table class="tbl"><tr><th>French</th><th>English</th><th>French</th><th>English</th></tr>
   <tr><td>Mon père</td><td>my father</td><td>Ma mère</td><td>my mother</td></tr>
   <tr><td>Mes parents</td><td>my parents</td><td>Mon frère</td><td>my brother</td></tr>
   <tr><td>Ma sœur</td><td>my sister</td><td>Mon cousin</td><td>my cousin (male)</td></tr>
   <tr><td>Ma cousine</td><td>my cousin (female)</td><td>Mon oncle</td><td>my uncle</td></tr>
   <tr><td>Ma tante</td><td>my aunt</td><td>—</td><td>—</td></tr></table>
   <h4>Les nombres de 100 à 1 000 000</h4>
   <table class="tbl"><tr><th>No.</th><th>French</th><th>No.</th><th>French</th></tr>
   <tr><td>100</td><td>cent</td><td>200</td><td>deux cents</td></tr>
   <tr><td>101</td><td>cent un</td><td>201</td><td>deux cent un</td></tr>
   <tr><td>168</td><td>cent soixante-huit</td><td>275</td><td>deux cent soixante-quinze</td></tr>
   <tr><td>600 / 800 / 900</td><td>six/huit/neuf cents</td><td>1000</td><td>mille</td></tr>
   <tr><td>1001</td><td>mille un</td><td>1992</td><td>mille neuf cent quatre-vingt-douze</td></tr>
   <tr><td>2000</td><td>deux mille</td><td>7000</td><td>sept mille</td></tr>
   <tr><td>1 000 000</td><td>un million</td><td>1269</td><td>mille deux cent soixante-neuf</td></tr></table>
   <div class="callout c-note"><b>📌 Note:</b> <b>cent</b> and <b>mille</b> take a final -s in round hundreds (deux cents) but not when followed by another number (deux cent un).</div>
   <h4>Les verbes réguliers en -ir (second group)</h4>
   <p>Most -ir verbs conjugate like <b>finir</b>:</p>
   <table class="tbl"><tr><th>Finir (to finish)</th><th>Form</th></tr>
   <tr><td>Je finis / Tu finis / Il,Elle finit</td><td>singular</td></tr>
   <tr><td>Nous finissons / Vous finissez / Ils,Elles finissent</td><td>plural</td></tr></table>
   <p>Other regular -ir verbs: <b>choisir</b> (to choose) — <i>Tu choisis quel livre ?</i> • <b>réussir</b> (to succeed) — <i>Nous réussissons toujours</i> • <b>grossir</b> (to get fat) — <i>Marc grossit parce qu’il mange beaucoup</i>.</p>`}
 ],
 summary:`<ul>
 <li><b>Bonjour</b> = good morning AND good afternoon (no separate word exists).</li>
 <li>Age, hunger, thirst, fear, hot/cold, aches and right/wrong all use <b>AVOIR</b>: J’ai 20 ans, J’ai faim, J’ai raison.</li>
 <li><b>aller + infinitive</b> = immediate future (Je vais manger).</li>
 <li>à + le = <b>au</b>; à + les = <b>aux</b>.</li>
 <li>All nouns are masculine or feminine; learn nouns <b>with their article</b> (un voyage).</li>
 <li>Plurals: +s (silent); -al → -aux; -eau/-eu → +x; -s/-x/-z unchanged; œil → yeux.</li>
 <li>Articles: le/la/les/l’ and un/une/des — must agree with the noun.</li>
 <li>ER verbs: root + e, es, e, ons, ez, ent; special nous forms: commençons, mangeons.</li>
 <li>Nationality adjectives start with <b>lowercase</b>; no article with professions (Elle est avocate) except after c’est (C’est un forgeron).</li>
 <li>Numbers: 70 = soixante-dix, 80 = quatre-vingts, 90 = quatre-vingt-dix, 100 = cent.</li>
 <li>-ir verbs (finir): je finis, nous finissons, ils finissent.</li></ul>`},
{
 id:2, title:"A l’université", en:"At the University",
 desc:"Talking about your studies, negative sentences, means of transport, -RE verbs, parts of the body, possessive adjectives, OIR verbs, telling the time, days and months, clothes, colours, money, adjectives and demonstrative adjectives.",
 secs:[
 {id:"universite", title:"Section A — Je suis étudiante (Studies, negation, transport)", html:`
   <div class="callout c-tip"><b>🎯 Objectives:</b> talk about what you study • construct negative sentences • means of transport.</div>
   <h4>Dialogue</h4>
   <div class="dialogue">
     <span><b>Marie:</b> Bonjour, je m’appelle Marie. Je suis étudiante au département de microbiologie.</span>
     <span><b>Jennifer:</b> Enchantée. Moi je m’appelle Jennifer. J’étudie les langues étrangères.</span>
     <span><b>Marie:</b> Super ! Tu parles l’italien ?</span>
     <span><b>Jennifer:</b> Non, je ne parle pas l’italien. Nous n’étudions pas l’italien. Je parle français, anglais et portugais.</span>
     <span><b>Marie:</b> Tu vas toujours à l’université en bus ?</span>
     <span><b>Jennifer:</b> Non, quelquefois j’y vais en taxi ou à moto.</span>
   </div>
   <h4>Vocabulary</h4>
   <table class="tbl"><tr><th>French</th><th>English</th></tr>
   <tr><td>Enchantée</td><td>nice to meet you</td></tr>
   <tr><td>J’étudie les langues étrangères</td><td>I am studying foreign languages</td></tr>
   <tr><td>Super !</td><td>Great !</td></tr>
   <tr><td>Tu vas toujours à l’université en bus ?</td><td>Do you always go to the university by bus?</td></tr></table>
   <h4>A l’université (faculties &amp; departments)</h4>
   <table class="tbl"><tr><th>French</th><th>English</th></tr>
   <tr><td>Faculté des lettres et sciences sociales</td><td>Faculty of Arts and Social Sciences</td></tr>
   <tr><td>Faculté des sciences</td><td>Faculty of Science</td></tr>
   <tr><td>Faculté d’agriculture</td><td>Faculty of Agriculture</td></tr>
   <tr><td>Département de microbiologie / biologie / botanique / zoologie</td><td>Department of Microbiology / Biology / Botany / Zoology</td></tr>
   <tr><td>Département de criminologie / sciences politiques / sociologie</td><td>Department of Criminology / Political Science / Sociology</td></tr>
   <tr><td>Département des forêts et faune</td><td>Department of Forestry and Wild Life</td></tr>
   <tr><td>Département de pisciculture et aquaculture</td><td>Department of Fisheries and Aquaculture</td></tr></table>
   <h4>La négation (The negative)</h4>
   <p><b>Rule:</b> Subject + <b>ne</b> + Verb + <b>pas</b> → Il ne travaille pas (He doesn’t work).<br>Before a vowel, <b>ne becomes n’</b>: Je n’étudie pas l’italien.</p>
   <table class="tbl"><tr><th>Affirmative</th><th>Negative</th></tr>
   <tr><td>Je parle</td><td>Je ne parle pas</td></tr>
   <tr><td>Tu parles</td><td>Tu ne parles pas</td></tr>
   <tr><td>Il/Elle parle</td><td>Il/Elle ne parle pas</td></tr>
   <tr><td>Nous parlons</td><td>Nous ne parlons pas</td></tr>
   <tr><td>Vous parlez</td><td>Vous ne parlez pas</td></tr>
   <tr><td>Ils/Elles parlent</td><td>Ils/Elles ne parlent pas</td></tr></table>
   <h4>Les moyens de transport (Means of transport)</h4>
   <table class="tbl"><tr><th>Use EN + transport</th><th>Use À + transport</th></tr>
   <tr><td>en train (by train) • en bus (by bus) • en voiture (by car) • en avion (by plane) • en taxi</td><td>à pied (on foot) • à cheval (on horse) • à vélo (by bicycle) • à moto (by motorbike)</td></tr></table>
   <div class="callout c-key"><b>⭐ Key:</b> Walking, two-wheeled vehicles and animals take <b>à</b>; everything else takes <b>en</b>. <i>Je vais à la mosquée à pied. Je vais en France en avion.</i></div>
   <h4>Some verbs ending in -RE</h4>
   <p>Most -RE verbs conjugate like <b>vendre</b> (to sell): je vends, tu vends, il/elle vend, nous vendons, vous vendez, ils/elles vendent. The final <b>d is silent in the singular</b> but pronounced in the plural.</p>
   <p>Similar verbs: <b>attendre</b> (to wait) • <b>entendre</b> (to hear) • <b>perdre</b> (to lose) • <b>répondre</b> (to answer).</p>
   <p><b>Irregular -RE verbs:</b> prendre (to take — nous prenons le bus), apprendre (to learn — nous apprenons le français), comprendre (to understand — je comprends, tu comprends, il/elle comprend, nous comprenons, vous comprenez, ils/elles comprennent).</p>`},
 {id:"corps", title:"Section B — Les parties du corps (Parts of the body)", html:`
   <div class="callout c-tip"><b>🎯 Objectives:</b> names of body parts • saying how you feel • possessive adjectives • OIR verbs.</div>
   <h4>Dialogue at the doctor’s</h4>
   <div class="dialogue">
     <span><b>Martin:</b> Bonjour docteur.</span>
     <span><b>Docteur:</b> Bonjour monsieur. Qu’est-ce qui ne va pas ?</span>
     <span><b>Martin:</b> J’ai mal à la tête et au ventre.</span>
     <span><b>Docteur:</b> D’accord. Je vais vous examiner.</span>
   </div>
   <h4>Le corps (the body)</h4>
   <table class="tbl"><tr><th>French</th><th>English</th><th>French</th><th>English</th></tr>
   <tr><td>la bouche</td><td>mouth</td><td>le bras</td><td>arm</td></tr>
   <tr><td>le cou</td><td>neck</td><td>la dent</td><td>tooth</td></tr>
   <tr><td>le doigt</td><td>finger</td><td>le dos</td><td>back</td></tr>
   <tr><td>une épaule</td><td>shoulder</td><td>le genou</td><td>knee</td></tr>
   <tr><td>la gorge</td><td>throat</td><td>la jambe</td><td>leg</td></tr>
   <tr><td>la main</td><td>hand</td><td>le nez</td><td>nose</td></tr>
   <tr><td>un œil (les yeux)</td><td>eye(s)</td><td>une oreille</td><td>ear</td></tr>
   <tr><td>le pied</td><td>foot</td><td>la tête</td><td>head</td></tr>
   <tr><td>le ventre</td><td>stomach</td><td>le menton</td><td>chin</td></tr>
   <tr><td>la joue</td><td>cheek</td><td>la langue</td><td>tongue</td></tr>
   <tr><td>l’ongle</td><td>nail</td><td>le front</td><td>forehead</td></tr></table>
   <p><b>Saying how you feel:</b> J’ai mal à la tête (I have a headache) • J’ai mal au dos (my back hurts) • Il a mal aux dents (toothache) • Mon frère a mal au ventre (stomach ache).</p>
   <h4>Possessive adjectives</h4>
   <p>A possessive adjective (my, your, his, their…) shows that something belongs to someone. In French it <b>agrees in gender and number with the noun POSSESSED (not the owner)</b>.</p>
   <table class="tbl"><tr><th>Owner</th><th>Masc. singular</th><th>Fem. singular</th><th>Plural</th></tr>
   <tr><td>my</td><td>mon (mon père)</td><td>ma (ma mère)</td><td>mes (mes livres)</td></tr>
   <tr><td>your</td><td>ton (ton sac)</td><td>ta (ta maison)</td><td>tes (tes amis)</td></tr>
   <tr><td>his/her</td><td>son (son stylo)</td><td>sa (sa voiture)</td><td>ses (ses enfants)</td></tr>
   <tr><td>our</td><td>notre (notre classe)</td><td>notre (notre mère)</td><td>nos (nos parents)</td></tr>
   <tr><td>your</td><td>votre (votre ami)</td><td>votre (votre femme)</td><td>vos (vos sacs)</td></tr>
   <tr><td>their</td><td>leur (leur pays)</td><td>leur (leur classe)</td><td>leurs (leurs noms)</td></tr></table>
   <div class="callout c-key"><b>⭐ Key:</b> Before a feminine noun starting with a vowel or h, use the masculine form: <b>mon école</b>, <b>mon histoire</b>, <b>son église</b>. «Son» means both <b>his and her</b>.</div>
   <h4>OIR verbs</h4>
   <table class="tbl"><tr><th>Pouvoir (to be able)</th><th>Savoir (to know)</th><th>Voir (to see)</th><th>Vouloir (to wish)</th></tr>
   <tr><td>Je peux</td><td>Je sais</td><td>Je vois</td><td>Je veux</td></tr>
   <tr><td>Tu peux</td><td>Tu sais</td><td>Tu vois</td><td>Tu veux</td></tr>
   <tr><td>Il/elle peut</td><td>Il/elle sait</td><td>Il/elle voit</td><td>Il/elle veut</td></tr>
   <tr><td>Nous pouvons</td><td>Nous savons</td><td>Nous voyons</td><td>Nous voulons</td></tr>
   <tr><td>Vous pouvez</td><td>Vous savez</td><td>Vous voyez</td><td>Vous voulez</td></tr>
   <tr><td>Ils/elles peuvent</td><td>Ils/elles savent</td><td>Ils/elles voient</td><td>Ils/elles veulent</td></tr></table>
   <p>Others: <b>valoir</b> (to be worth — je vaux, il vaut, nous valons) • <b>recevoir</b> (to receive — je reçois, il reçoit, nous recevons, ils reçoivent) • <b>mouvoir</b> (to move) • <b>prévoir</b> (to foresee — je prévois, nous prévoyons, ils prévoient).</p>`},
 {id:"heure", title:"Section C — L’heure (The time, days and months)", html:`
   <div class="callout c-tip"><b>🎯 Objectives:</b> tell the time • give the date and the day of the week.</div>
   <h4>Dialogue</h4>
   <div class="dialogue">
     <span><b>Mélanie:</b> Quelle heure est-il ?</span>
     <span><b>Jean-Paul:</b> Il est dix heures.</span>
     <span><b>Mélanie:</b> Oh là là ! J’ai un rendez-vous avec David dans trente minutes. À dix heures et demie.</span>
   </div>
   <h4>How to talk about the time</h4>
   <table class="tbl"><tr><th>Clock</th><th>French</th></tr>
   <tr><td>Quelle heure est-il ?</td><td>What time is it?</td></tr>
   <tr><td>08:00</td><td>il est huit heures</td></tr>
   <tr><td>08:05</td><td>il est huit heures cinq (minutes)</td></tr>
   <tr><td>08:15</td><td>huit heures quinze / huit heures <b>et quart</b></td></tr>
   <tr><td>08:30</td><td>huit heures trente / huit heures <b>et demie</b></td></tr>
   <tr><td>08:40</td><td>huit heures quarante / <b>neuf heures moins vingt</b></td></tr>
   <tr><td>08:45</td><td>huit heures quarante-cinq / <b>neuf heures moins le quart</b></td></tr>
   <tr><td>12:00</td><td>douze heures (<b>midi</b>)</td></tr></table>
   <div class="callout c-key"><b>⭐ Key:</b> «heures» can never be dropped (unlike “o’clock”): Il est dix <b>heures</b>.</div>
   <h4>Distinguishing A.M. and P.M.</h4>
   <p><b>du matin</b> (in the morning — dix heures du matin) • <b>de l’après-midi</b> (in the afternoon — deux heures de l’après-midi) • <b>du soir</b> (in the evening — huit heures du soir).</p>
   <h4>The 24-hour clock</h4>
   <p>For official purposes (administration, radio, TV) the French count after 12: 13h = treize heures • 13h15 = treize heures quinze • 14h = quatorze heures • 16h = seize heures.</p>
   <h4>Days &amp; months</h4>
   <table class="tbl"><tr><th>Les jours</th><th>English</th></tr>
   <tr><td>lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche</td><td>Monday → Sunday</td></tr>
   <tr><td>aujourd’hui / demain</td><td>today / tomorrow</td></tr></table>
   <p><b>Les mois:</b> janvier, février, mars, avril, mai, juin, juillet, août, septembre, octobre, novembre, décembre.</p>
   <p><i>C’est quel jour aujourd’hui ? (What day is it?) • Aujourd’hui c’est mardi. • Demain c’est mercredi. • À samedi ! À demain !</i></p>`},
 {id:"vetements", title:"Section D — Les vêtements (Clothes, colours & adjectives)", html:`
   <div class="callout c-tip"><b>🎯 Objectives:</b> name clothes &amp; colours • shop for clothes • talk about money • use adjectives and demonstrative adjectives.</div>
   <h4>Dialogue — shopping</h4>
   <div class="dialogue">
     <span><b>La vendeuse:</b> Bonjour mademoiselle. Je peux vous aider ?</span>
     <span><b>Fatima:</b> Je cherche une belle jupe et une robe.</span>
     <span><b>La vendeuse:</b> Qu’est-ce que vous pensez de cette robe rose ? — Elle coûte 7000 F. La jupe coûte 5000 F.</span>
     <span><b>Ali:</b> Combien coûte ce pantalon gris ? — Il coûte 6000 F. Oh là là, c’est cher !</span>
   </div>
   <h4>Les vêtements (Clothes)</h4>
   <table class="tbl"><tr><th>French</th><th>English</th><th>French</th><th>English</th></tr>
   <tr><td>un blouson</td><td>a bomber jacket</td><td>un jean</td><td>(a pair of) jeans</td></tr>
   <tr><td>un pantalon</td><td>trousers</td><td>un pull</td><td>a pullover</td></tr>
   <tr><td>un short</td><td>shorts</td><td>un sweat</td><td>a sweatshirt</td></tr>
   <tr><td>un tee-shirt</td><td>a T-shirt</td><td>une casquette</td><td>a (baseball) cap</td></tr>
   <tr><td>une chemise</td><td>a shirt</td><td>une cravate</td><td>a tie</td></tr>
   <tr><td>une jupe</td><td>a skirt</td><td>une robe</td><td>a dress</td></tr>
   <tr><td>une veste</td><td>a jacket</td><td>des chaussures</td><td>shoes</td></tr>
   <tr><td>des chaussettes</td><td>socks</td><td>des sandales</td><td>sandals</td></tr></table>
   <h4>Les couleurs (Colours)</h4>
   <p>blanc/blanche (white) • noir/noire (black) • gris/grise (grey) • bleu/bleue (blue) • vert/verte (green) • violet/violette (purple) • rouge (red) • jaune (yellow) • orange (orange) • rose (pink) • beige (beige) • marron (brown).</p>
   <h4>L’argent (Money)</h4>
   <p>Since <b>2002</b>, twelve European countries (France, Germany, Ireland, Austria, Italy, Spain, Portugal, Greece, Finland, Belgium, Luxembourg…) use <b>l’euro</b>, which has the same value in all of them. Many African French-speaking countries (Bénin, Burkina Faso, Cameroun, Côte d’Ivoire, Mali, Niger, Sénégal, Tchad, Togo…) use the <b>CFA franc</b>.</p>
   <p><i>Combien coûte cette jupe ? — Elle coûte cinquante euros. / Le pantalon coûte six mille francs.</i></p>
   <h4>Les adjectifs (Adjectives)</h4>
   <p>Adjectives describe nouns and <b>must agree in gender and number</b> with the noun they describe (unlike English).</p>
   <table class="tbl"><tr><th></th><th>Singular</th><th>Plural</th></tr>
   <tr><td><b>Masculine</b></td><td>add nothing (patient)</td><td>add -s (patients)</td></tr>
   <tr><td><b>Feminine</b></td><td>add -e (patiente)</td><td>add -es (patientes)</td></tr></table>
   <p><i>Mon frère est patient → Mes frères sont patients • Ma sœur est patiente → Mes sœurs sont patientes.</i></p>
   <div class="callout c-note"><b>📌 Irregular patterns:</b> adjectives ending in -s add nothing in the masculine plural (des pantalons gris); adjectives ending in -e add nothing in the feminine (une sœur calme); -eur/-eux → <b>-euse</b> (travailleur → travailleuse, courageux → courageuse); <i>timide</i> never changes.</div>
   <table class="tbl"><tr><th>Masculine</th><th>Feminine</th><th>Masculine pl.</th><th>Feminine pl.</th></tr>
   <tr><td>blanc</td><td>blanche</td><td>blancs</td><td>blanches</td></tr>
   <tr><td>bon</td><td>bonne</td><td>bons</td><td>bonnes</td></tr>
   <tr><td>gros</td><td>grosse</td><td>gros</td><td>grosses</td></tr>
   <tr><td>violet</td><td>violette</td><td>violets</td><td>violettes</td></tr>
   <tr><td>beau</td><td>belle</td><td>beaux</td><td>belles</td></tr>
   <tr><td>nouveau</td><td>nouvelle</td><td>nouveaux</td><td>nouvelles</td></tr>
   <tr><td>vieux</td><td>vieille</td><td>vieux</td><td>vieilles</td></tr></table>
   <h4>Position of adjectives</h4>
   <div class="callout c-key"><b>⭐ Key:</b> French adjectives usually come <b>AFTER</b> the noun (une chemise rouge, une cuisine moderne). BUT these come <b>BEFORE</b>: <b>grand, petit, gros, nouveau, jeune, vieux, beau, bon, mauvais</b> (un nouveau professeur, une jeune fille, un bon café).</div>
   <h4>L’adjectif démonstratif (Demonstrative adjectives)</h4>
   <p>Used to point out specific people or things (this, that, these, those); they agree with the noun they introduce.</p>
   <table class="tbl"><tr><th></th><th>Singular (this/that)</th><th>Plural (these/those)</th><th>Examples</th></tr>
   <tr><td>Masculine</td><td><b>ce</b> / <b>cet</b> (+ vowel)</td><td><b>ces</b></td><td>ce blouson • cet étudiant • ces étudiants</td></tr>
   <tr><td>Feminine</td><td><b>cette</b></td><td><b>ces</b></td><td>cette veste • ces vestes</td></tr></table>`}
 ],
 summary:`<ul>
 <li>Negation: Subject + <b>ne</b> + verb + <b>pas</b>; ne → <b>n’</b> before a vowel (Je n’étudie pas).</li>
 <li>Transport: <b>en</b> train/bus/voiture/avion/taxi BUT <b>à</b> pied/cheval/vélo/moto.</li>
 <li>-RE verbs (vendre): je vends… nous vendons; irregular: prendre, apprendre, comprendre.</li>
 <li>Possessives agree with the <b>thing possessed</b>: mon école (fem. + vowel), son = his AND her.</li>
 <li>OIR verbs: je peux (pouvoir), je sais (savoir), je vois (voir), je veux (vouloir), je reçois (recevoir).</li>
 <li>Time: et quart (¼ past), et demie (½ past), moins le quart (¼ to); midi = 12:00; 24-hour clock officially.</li>
 <li>Adjectives agree in gender &amp; number; usually AFTER the noun; beau/bon/nouveau/vieux etc. go BEFORE.</li>
 <li>-eur/-eux → -euse feminine (travailleuse, courageuse).</li>
 <li>Demonstratives: ce, cet (+vowel), cette, ces.</li>
 <li>Euro since 2002 in 12 European countries; CFA franc in francophone Africa.</li></ul>`},
{
 id:3, title:"Rédaction et civilisation", en:"Composition and Civilization",
 desc:"Four model compositions (myself/family, my country, my school, my friend) packed with examinable facts, plus French idiomatic expressions and their English equivalents.",
 secs:[
 {id:"redaction", title:"Section A — Rédaction (Model compositions)", html:`
   <div class="callout c-tip"><b>How to study this chapter:</b> read the compositions aloud, check pronunciation, recite them off-hand, and use a good French–English dictionary for difficult words.</div>
   <h4>1. Moi-même / Ma famille (Myself / My family) — Asma’u</h4>
   <div class="callout c-note"><b>📌 Key facts:</b> Asma’u is a girl, born <b>6 June 1995</b>, <b>19 years old</b>, from <b>Kaduna State</b>, student at <b>Federal University Dutse</b>, studies <b>French and Arabic</b>, speaks haoussa, English, French and a little Swahili. She is the <b>4th child</b>, single and Muslim. Favourite dessert: <b>strawberry ice-cream (la glace à la fraise)</b>. In future she wants to be a <b>secrétaire bilingue (bilingual secretary)</b>.</div>
   <p><b>Her family (lives in Kano):</b> father <b>M. Abdoulahi — homme d’affaires (businessman)</b>; mother <b>Hadjia Memunat — infirmière (nurse)</b>; sisters: <b>Habibat (25, married)</b> and <b>Zainab (22, works in a bank, marrying next year)</b>; brothers: <b>Mohammed (17, lycéen, wants to be a chirurgien/surgeon)</b>, <b>Shehu (15, wants to be an informaticien)</b>, and twins <b>Musa &amp; Bello (12, in primary six, both want to be avocats/lawyers)</b>.</p>
   <h4>2. Mon pays (My country) — Nigeria</h4>
   <div class="callout c-key"><b>⭐ Exam facts:</b> Nigeria is an <b>anglophone</b> country in <b>West Africa</b>; independence <b>1 October 1960</b> (colonial master: <b>Great Britain</b>); surrounded by francophone countries <b>Bénin, Niger, Tchad, Cameroun</b>; divided into <b>36 parts: 35 states + FCT (Abuja)</b>; area <b>923,000 km²</b>; population <b>over 170 million</b>; two great rivers <b>le fleuve Niger and le fleuve Benue</b>; most spoken languages <b>Yorouba, Haoussa, Ibo</b>; biggest cities include Lagos, Kano, Onitsha, Ibadan, Port-Harcourt; flag colours <b>green and white</b>; parliament = <b>le Sénat + l’Assemblée Nationale</b>; two seasons <b>saison des pluies &amp; saison sèche</b>; education system <b>9-3-4</b>; main religions <b>Islam and Christianity</b>; rich in pétrole, cacao, bois; member of <b>CEDEAO, UA, ONU</b>.</div>
   <h4>3. Mon école (My school) — FUD</h4>
   <div class="callout c-note"><b>📌 Key facts:</b> Federal University Dutse, in <b>Dutse, Jigawa State</b>, established <b>4 October 2011</b>; President/Vice-Chancellor: <b>Professeur J.D Amin</b>; head of academics (Scolarité): <b>Yusuf Adamu</b>; located at the centre of town — NNPC station to the east, central market to the west, central mosque to the north, a big hostel to the south; classes run <b>8 a.m. – 5 p.m.</b>; facilities include faculties, laboratories, dormitories, a central library, gymnasium, medical centre, computer centre and bookshop.</div>
   <h4>4. Mon ami (My friend) — Alli</h4>
   <div class="callout c-note"><b>📌 Key facts:</b> Alli, born <b>4 January 1993</b>, <b>21 years old</b>, from <b>Katsina State</b>, studies <b>chemistry</b> at FUD Dutse; single, Muslim; tall, big and dark; loves beans and vegetables; plays football and tennis, swims well; in future wants to be a <b>pharmacien (pharmacist)</b>; lives in Katsina with father <b>M. Imam (enseignant/teacher)</b>, mother Hadjia Turai, brothers Braimoh &amp; Jimoh, sisters Miriam, Bilikis, Amina and Rakiat.</div>`},
 {id:"idiomes", title:"Section B — Quelques expressions idiomatiques (Idiomatic expressions)", html:`
   <h4>French idioms → English</h4>
   <table class="tbl"><tr><th>French</th><th>English</th></tr>
   <tr><td>Appeler un chat un chat</td><td>to call a spade a spade</td></tr>
   <tr><td>Tel père tel fils</td><td>like father like son</td></tr>
   <tr><td>Qui aime bien châtie bien</td><td>to spare the rod and spoil the child</td></tr>
   <tr><td>Être un/une touche-à-tout</td><td>to be a jack of all trades</td></tr>
   <tr><td>Charité bien ordonnée commence par soi-même</td><td>charity begins at home</td></tr>
   <tr><td>À bon entendeur, salut</td><td>a word is enough for the wise</td></tr>
   <tr><td>À bout portant</td><td>point blank</td></tr>
   <tr><td>À cœur vaillant, rien d’impossible</td><td>nothing is impossible for a willing heart</td></tr>
   <tr><td>Acheter quelque chose à prix d’or</td><td>to pay through the nose</td></tr>
   <tr><td>Aide-toi, le ciel t’aidera</td><td>heaven helps those who help themselves</td></tr>
   <tr><td>Aller au fond des choses</td><td>to get to the bottom of something</td></tr>
   <tr><td>Après la pluie, le beau temps</td><td>every cloud has a silver lining</td></tr>
   <tr><td>Au royaume des aveugles, les borgnes sont rois</td><td>in the kingdom of the blind, the one-eyed man is king</td></tr>
   <tr><td>Rester bouche-bée</td><td>to be speechless</td></tr>
   <tr><td>Avoir un poil dans la main</td><td>to be lazy</td></tr>
   <tr><td>C’est la goutte d’eau qui fait déborder le vase</td><td>the last straw that broke the camel’s back</td></tr>
   <tr><td>Casser du sucre sur son dos</td><td>to gossip about someone behind their back</td></tr>
   <tr><td>Être dans le pétrin</td><td>to be in a mess / a jam</td></tr>
   <tr><td>Devenir chèvre</td><td>to become angry</td></tr>
   <tr><td>Tomber dans les pommes</td><td>to faint / pass out</td></tr>
   <tr><td>Boire comme un trou</td><td>to drink heavily / become drunk</td></tr>
   <tr><td>Bourrer le crâne</td><td>to brainwash</td></tr>
   <tr><td>Qui sème le vent récolte la tempête</td><td>what a man sows he will reap</td></tr>
   <tr><td>Avoir son petit cadavre</td><td>to have a skeleton in his cupboard</td></tr></table>
   <h4>English expressions → French</h4>
   <table class="tbl"><tr><th>English</th><th>French</th></tr>
   <tr><td>At all cost</td><td>à tout prix</td></tr>
   <tr><td>To live from hand to mouth</td><td>vivre au jour le jour</td></tr>
   <tr><td>Better late than never</td><td>mieux vaut tard que jamais</td></tr>
   <tr><td>As simple as ABC</td><td>simple comme bonjour</td></tr>
   <tr><td>To poke one’s nose into someone’s affairs</td><td>se fourrer le nez dans les affaires de quelqu’un</td></tr>
   <tr><td>To turn a deaf ear to…</td><td>faire la sourde oreille / rester sourd à…</td></tr>
   <tr><td>To pull someone’s legs</td><td>monter un bateau à quelqu’un</td></tr>
   <tr><td>As blind as a bat</td><td>être myope comme une taupe</td></tr>
   <tr><td>As deaf as a post</td><td>être sourd comme un pot</td></tr>
   <tr><td>To let the cat out of the bag</td><td>vendre la mèche</td></tr>
   <tr><td>To kill two birds with one stone</td><td>faire d’une pierre deux coups</td></tr>
   <tr><td>To kill something in the bud</td><td>tuer quelque chose dans l’œuf</td></tr>
   <tr><td>All that glitters is not gold</td><td>tout ce qui brille n’est pas or</td></tr>
   <tr><td>Rome was not built in a day</td><td>petit à petit l’oiseau fait son nid</td></tr>
   <tr><td>To be forewarned is to be forearmed</td><td>un homme averti en vaut deux</td></tr>
   <tr><td>To beat about the bush</td><td>tourner autour du pot</td></tr>
   <tr><td>To face the music</td><td>faire face à l’orage</td></tr>
   <tr><td>Make haste while the sun shines</td><td>il faut battre le fer (pendant qu’il est chaud)</td></tr></table>`}
 ],
 summary:`<ul>
 <li>Asma’u: born 6 June 1995, 19, Kaduna, studies French &amp; Arabic at FUD, 4th child, future bilingual secretary.</li>
 <li>Nigeria: independence 1 Oct 1960 (Britain), 36 parts (35 states + Abuja FCT), 923,000 km², 170m+ people, rivers Niger &amp; Benue, green-white flag, 9-3-4 system, CEDEAO/UA/ONU.</li>
 <li>FUD: established 4 October 2011, Dutse, Jigawa; VC Prof. J.D Amin.</li>
 <li>Alli: born 4 Jan 1993, Katsina, chemistry, future pharmacist.</li>
 <li>Idioms: Tomber dans les pommes = faint; Avoir un poil dans la main = lazy; Devenir chèvre = angry; Vendre la mèche = let the cat out of the bag; Faire d’une pierre deux coups = kill two birds with one stone.</li></ul>`}
];

/* ================= TOPIC → SECTION MAP ================= */
const T2S = {
 "Saluer (Greetings)":{ch:1,sec:"saluer"},"Identity Card Vocabulary":{ch:1,sec:"saluer"},"Verbs: Avoir, Être, Aller":{ch:1,sec:"saluer"},"Nouns: Gender & Plural":{ch:1,sec:"saluer"},"Articles":{ch:1,sec:"saluer"},"Numbers 1–50":{ch:1,sec:"saluer"},
 "Se Présenter (Introductions)":{ch:1,sec:"presenter"},"ER Verbs (1st Group)":{ch:1,sec:"presenter"},"Nationalities":{ch:1,sec:"presenter"},"Professions":{ch:1,sec:"presenter"},"Alphabet & Sounds":{ch:1,sec:"presenter"},"Numbers 51–100":{ch:1,sec:"presenter"},
 "En Ville: Directions & Places":{ch:1,sec:"ville"},"Ordinal Numbers":{ch:1,sec:"ville"},"Family Vocabulary":{ch:1,sec:"ville"},"Numbers 100–1,000,000":{ch:1,sec:"ville"},"Regular -IR Verbs":{ch:1,sec:"ville"},
 "At the University":{ch:2,sec:"universite"},"La Négation (Negation)":{ch:2,sec:"universite"},"Means of Transport":{ch:2,sec:"universite"},"-RE Verbs":{ch:2,sec:"universite"},
 "Parts of the Body":{ch:2,sec:"corps"},"Possessive Adjectives":{ch:2,sec:"corps"},"OIR Verbs":{ch:2,sec:"corps"},
 "Telling the Time":{ch:2,sec:"heure"},"Days, Months & Dates":{ch:2,sec:"heure"},
 "Les Vêtements (Clothes)":{ch:2,sec:"vetements"},"Colours":{ch:2,sec:"vetements"},"L'Argent (Money)":{ch:2,sec:"vetements"},"Adjectives":{ch:2,sec:"vetements"},"Demonstrative Adjectives":{ch:2,sec:"vetements"},
 "Model Compositions":{ch:3,sec:"redaction"},"Idiomatic Expressions":{ch:3,sec:"idiomes"}
};

/* ================= QUESTION BANK ================= */
const QB=[];
function addQ(ch,t,s,d,ty,q,o,a,e){QB.push({id:QB.length+1,ch:ch,t:t,s:s,d:d,ty:ty,q:q,o:o,a:a,e:e});}

addQ(1,"Saluer (Greetings)","Core Greetings","easy","mcq","What does « Bonjour » mean in English?",["Good evening","Good day / good morning","Good night","Goodbye"],1,"Bonjour means good day / good morning. Since French has no separate word for 'good afternoon', bonjour is used for both morning and afternoon.");
addQ(1,"Saluer (Greetings)","Core Greetings","easy","mcq","« Bonsoir » means:",["Good morning","Good afternoon","Good evening","Good night"],2,"Bonsoir = good evening. (Bonne nuit = good night.)");
addQ(1,"Saluer (Greetings)","Core Greetings","medium","tf","French has a separate everyday word for “good afternoon” just like English does.",["True","False"],1,"False. The French do not have an equivalent of 'good afternoon' — bonjour means both good morning and good afternoon.");
addQ(1,"Saluer (Greetings)","Farewell & Wishes","easy","mcq","« Bon voyage » means:",["Happy journey party","Safe journey","Long journey","Expensive trip"],1,"Bon voyage = safe journey.");
addQ(1,"Saluer (Greetings)","Farewell & Wishes","medium","mcq","« Bonne guérison » means:",["Good weather","Get well soon","Good reading","Happy healing day"],1,"Bonne guérison = get well soon, said to a sick person.");
addQ(1,"Saluer (Greetings)","Farewell & Wishes","easy","mcq","How do you say “Happy birthday” in French?",["Bonne chance","Joyeux anniversaire","Bon appétit","Félicitations"],1,"Joyeux anniversaire / Bon anniversaire = happy birthday.");
addQ(1,"Saluer (Greetings)","Farewell & Wishes","easy","mcq","« Bon appétit » means:",["Good appetite loss","Enjoy your meal","Good food shop","Have fun"],1,"Bon appétit = enjoy your meal.");
addQ(1,"Saluer (Greetings)","Farewell & Wishes","easy","mcq","« Au revoir » means:",["See you never","Bye bye","Until revoir","Good redo"],1,"Au revoir = bye bye / goodbye.");
addQ(1,"Saluer (Greetings)","Social Expressions","easy","mcq","« À bientôt » means:",["See you soon","Good night","See you on Monday","Farewell forever"],0,"À bientôt = see you soon. À lundi = see you on Monday; à tout à l'heure = see you later.");
addQ(1,"Saluer (Greetings)","Social Expressions","medium","mcq","« À tout à l'heure » means:",["See you soon","See you later (the same day)","See you next year","Goodbye forever"],1,"À tout à l'heure = see you later, used when you will meet again the same day.");
addQ(1,"Saluer (Greetings)","Social Expressions","easy","mcq","« Félicitations » means:",["Happy birthday","Congratulations","Good luck","Welcome"],1,"Félicitations = congratulations.");
addQ(1,"Saluer (Greetings)","Social Expressions","medium","mcq","The exclamation « Oh là là ! » is used to express:",["Only anger","Only surprise","Surprise, excitement, shock or anger","Boredom"],2,"Oh la la! is an exclamation used for surprise, excitement, shock or anger.");
addQ(1,"Saluer (Greetings)","Social Expressions","medium","mcq","Which of these means “You are welcome”?",["Merci beaucoup","De rien / Ce n'est rien / Je vous en prie","Pas de quoi merci","Bienvenu ici"],1,"De rien, Ce n'est rien and Je vous en prie all mean 'you are welcome'. (Pas de quoi = don't mention it.)");
addQ(1,"Saluer (Greetings)","Forms of Address","medium","mcq","When greeting your classmates and mates in French, you should:",["Always use Monsieur / Madame","Drop the titles and say bonjour or salut + their name","Use Bonsoir only","Never greet them at all"],1,"With mates, titles like Monsieur/Madame/Mademoiselle are removed: Bonjour Zainab, Salut Doris, Bonsoir Musa.");
addQ(1,"Saluer (Greetings)","Forms of Address","medium","tf","When greeting mates, titles such as Monsieur, Madame and Mademoiselle are usually removed.",["True","False"],0,"True. With friends/mates we simply say bonjour or salut plus their first name.");
addQ(1,"Saluer (Greetings)","Social Expressions","medium","mcq","« Bonne soirée » is used for:",["A cold night","Wishing a nice (social) evening such as a party or dance","Saying good night before sleeping","A morning greeting"],1,"Bonne soirée = have a nice evening (a social evening, dance or party). Bonne nuit is used when going to bed.");
addQ(1,"Saluer (Greetings)","Social Expressions","easy","mcq","« Merci beaucoup » means:",["You are welcome","Thanks a lot","Don't mention it","Excuse me"],1,"Merci beaucoup = thanks a lot.");
addQ(1,"Saluer (Greetings)","Farewell & Wishes","medium","fill","Complete: « Quel ___ ! » = What a pity!",null,["dommage"],"Quel dommage = what a pity. (C'est dommage = it is a pity.)");

/* ================= STATE / STORAGE ================= */
const KEY="gst123_french_portal";
let S={name:null,theme:"light",read:[],quizzes:[],exams:[],ans:0,cor:0};
try{const saved=JSON.parse(localStorage.getItem(KEY));if(saved)S=Object.assign(S,saved);}catch(e){}
function save(){localStorage.setItem(KEY,JSON.stringify(S));}

/* ================= HELPERS ================= */
function el(id){return document.getElementById(id);}
function esc(s){return String(s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
function strip(s){return String(s).normalize?String(s).normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase().trim().replace(/\s+/g," "):String(s).toLowerCase().trim();}
function chTitle(id){const c=CHAPTERS.find(c=>c.id===id);return "Chapter "+id+" — "+c.title+" ("+c.en+")";}
let toastT;
function toast(m){const t=el("toast");t.textContent=m;t.classList.add("show");clearTimeout(toastT);toastT=setTimeout(()=>t.classList.remove("show"),2600);}
function levelOf(p){if(p>=90)return{t:"Outstanding",e:"🏆",c:"#10b981"};if(p>=80)return{t:"Excellent",e:"🌟",c:"#10b981"};if(p>=70)return{t:"Very Good",e:"👏",c:"#06b6d4"};if(p>=60)return{t:"Good",e:"👍",c:"#f59e0b"};if(p>=50)return{t:"Needs More Practice",e:"📚",c:"#f59e0b"};return{t:"Keep Studying",e:"💪",c:"#ef4444"};}
function colorOf(p){return p>=80?"var(--ok)":p>=50?"var(--md)":"var(--wr)";}
function emojiOf(p){return p>=80?"🟢":p>=50?"🟡":"🔴";}
function barOf(p){const n=Math.round(p/10);return "█".repeat(n)+"░".repeat(10-n);}

/* ================= THEME / NAV ================= */
function applyTheme(){document.documentElement.setAttribute("data-theme",S.theme);el("themeBtn").textContent=S.theme==="dark"?"☀️":"🌙";}
function toggleTheme(){S.theme=S.theme==="dark"?"light":"dark";save();applyTheme();}
function go(v){document.querySelectorAll(".view").forEach(x=>x.classList.remove("active"));el("view-"+v).classList.add("active");document.querySelectorAll("#navLinks a").forEach(a=>a.classList.toggle("on",a.dataset.v===v));window.scrollTo({top:0,behavior:"smooth"});}
function enterApp(){el("nav").classList.remove("hidden");el("userChip").textContent="👤 "+esc(S.name);renderDashboard();go("dashboard");}

/* ================= WELCOME ================= */
function startLearning(){const n=el("nameInput").value.trim();if(!n){toast("Please enter your name first 🙂");return;}S.name=n;save();enterApp();toast("Welcome, "+n+"! 👋");}
function switchUser(){S.name=null;save();el("nav").classList.add("hidden");go("welcome");toast("You can enter a new name.");}

/* ================= DASHBOARD ================= */
function bestPct(arr){return arr.length?Math.max(...arr.map(x=>x.pct)):0;}
function renderDashboard(){
  const readPct=Math.round(S.read.length/CHAPTERS.length*100);
  el("view-dashboard").innerHTML=`
  <div class="card hero">
    <h1>Welcome back, <span class="grad">${esc(S.name)}</span>! 👋</h1>
    <p>Ready to conquer your <b>${esc(COURSE.short)}</b> exam today?<br>Choose how you want to prepare.</p>
    <div class="hero-stats">
      <div class="mini"><b>${readPct}%</b>study progress</div>
      <div class="mini"><b>${bestPct(S.quizzes)}%</b>best quiz</div>
      <div class="mini"><b>${bestPct(S.exams)}%</b>best exam</div>
      <div class="mini"><b>${QB.length}</b>questions in bank</div>
    </div>
  </div>
  <div class="grid3">
    <div class="card hcard dcard" onclick="go('study')"><div class="ic">📚</div><h3>STUDY CHAPTER BY CHAPTER</h3><p>Read clear notes, definitions, tables, examples and revision summaries for all ${CHAPTERS.length} chapters of the course.</p><button class="btn btn-primary btn-sm">Open Study Area →</button></div>
    <div class="card hcard dcard" onclick="go('quizsetup')"><div class="ic">📝</div><h3>CHAPTER QUIZZES</h3><p>Test yourself on any chapter with instant feedback and detailed explanations for every answer.</p><button class="btn btn-teal btn-sm">Take a Quiz →</button></div>
    <div class="card hcard dcard" onclick="go('examsetup')"><div class="ic">🎯</div><h3>FULL PRACTICE EXAM</h3><p>Timed exam across the whole course. Choose difficulty, number of questions, and get a smart performance analysis.</p><button class="btn btn-gold btn-sm">Start Exam →</button></div>
  </div>
  <h2 class="big-title">💬 Feedback &amp; Suggestions</h2>
  <div class="card fb-card">
    <p class="sub">Have feedback, suggestions, or found an issue with the portal? I would love to hear from you! 😊</p>
    <input id="fb-name" placeholder="Name (optional)" value="${esc(S.name||"")}" maxlength="40">
    <textarea id="fb-msg" placeholder="Write your feedback here..."></textarea>
    <div style="margin-top:12px"><button class="btn btn-teal" onclick="sendFeedback()">📩 Send Feedback on WhatsApp</button></div>
  </div>`;
}
function sendFeedback(){
  const msg=el("fb-msg").value.trim();
  if(!msg){toast("Please write your feedback first 🙂");return;}
  const nm=(el("fb-name").value.trim()||S.name||"Anonymous");
  const text="Hello, I have feedback about the Exam Study Portal.\n\nName: "+nm+"\n\nFeedback:\n"+msg+"\n\nThank you.";
  window.open("https://wa.me/2349013583494?text="+encodeURIComponent(text),"_blank");
}

/* ================= STUDY ================= */
function renderStudy(){
  el("view-study").innerHTML=`<h1 class="big-title">📚 Study Chapter by Chapter</h1><p class="sub">Master every chapter of ${esc(COURSE.name)} before your exam.</p>`+
  CHAPTERS.map(c=>{
    const qn=QB.filter(q=>q.ch===c.id).length, done=S.read.includes(c.id);
    return `<div class="card hcard chap" style="margin-bottom:18px" onclick="openChapter(${c.id})">
      <div class="cnum"><small>CHAP.</small>${c.id}</div>
      <div style="flex:1;min-width:220px"><h3>${c.title} <span style="font-weight:400;font-size:.85rem;color:var(--mut)">(${c.en})</span></h3>
      <p>${c.desc}</p>
      <div class="chap-meta"><span class="tag">📖 ${c.secs.length} sections</span><span class="tag">❓ ${qn} quiz questions</span><span class="tag">⏱ ~${15+qn/8|0} min read</span>${done?'<span class="tag done-tag">✅ Completed</span>':""}</div></div>
    </div>`;}).join("");
}
function openChapter(ch,sec){
  const c=CHAPTERS.find(x=>x.id===ch);
  el("view-chapter").innerHTML=`
  <div class="card" style="margin-bottom:18px">
    <div class="chap"><div class="cnum"><small>CHAP.</small>${c.id}</div>
    <div style="flex:1;min-width:220px"><h2>${c.title} <span style="font-weight:400;font-size:1rem;color:var(--mut)">(${c.en})</span></h2><p style="color:var(--mut)">${c.desc}</p>
    <div class="chap-meta"><span class="tag">📖 ${c.secs.length} sections</span><span class="tag">❓ ${QB.filter(q=>q.ch===c.id).length} quiz questions</span></div></div></div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:16px">
      <button class="btn btn-primary btn-sm" onclick="takeChapterQuiz(${c.id})">📝 Take Chapter Quiz</button>
      ${c.id>1?`<button class="btn btn-ghost btn-sm" onclick="openChapter(${c.id-1})">← Chapter ${c.id-1}</button>`:""}
      ${c.id<CHAPTERS.length?`<button class="btn btn-ghost btn-sm" onclick="openChapter(${c.id+1})">Chapter ${c.id+1} →</button>`:""}
    </div>
  </div>
  ${c.secs.map(s=>`<div id="sec-${s.id}"><h2 class="sec">${s.title}</h2>${s.html}</div>`).join("")}
  <div class="summary-box"><h3>⚡ Quick Revision Summary — What you MUST remember</h3>${c.summary}</div>
  <div style="text-align:center;margin:22px 0">
    <button class="btn ${S.read.includes(c.id)?"btn-ghost":"btn-teal"}" onclick="markRead(${c.id})">${S.read.includes(c.id)?"✅ Chapter Completed — well done!":"✅ Mark This Chapter as Completed"}</button>
  </div>
  <div class="chap-nav">
    ${c.id>1?`<button class="btn btn-ghost" onclick="openChapter(${c.id-1})">← Previous Chapter</button>`:"<span></span>"}
    ${c.id<CHAPTERS.length?`<button class="btn btn-primary" onclick="openChapter(${c.id+1})">Next Chapter →</button>`:`<button class="btn btn-primary" onclick="go('examsetup')">🎯 Go to Practice Exam</button>`}
  </div>`;
  go("chapter");
  if(sec){setTimeout(()=>{const t=el("sec-"+sec);if(t)t.scrollIntoView({behavior:"smooth",block:"start"});},120);}
}
function markRead(ch){if(!S.read.includes(ch)){S.read.push(ch);save();toast("🎉 Chapter "+ch+" marked as completed!");openChapter(ch);}else{toast("Already completed ✅");}}
function studyTopic(idx){const q=lastRes[idx].q,m=T2S[q.t]||{ch:q.ch,sec:null};openChapter(m.ch,m.sec);}

window.addEventListener("DOMContentLoaded",()=>{
  el("view-welcome").classList.add("active");
  el("view-dashboard").innerHTML="";
  el("view-study").innerHTML="";
  el("view-chapter").innerHTML="";
  el("view-quizsetup").innerHTML="";
  el("view-assess").innerHTML="";
  el("view-examsetup").innerHTML="";
  el("view-results").innerHTML="";
  el("view-progress").innerHTML="";
  el("view-about").innerHTML="`<div class='card'><h1 class='big-title'>ℹ About</h1><p class='sub'>This portal is designed for GST 123 students to revise quickly and practice effectively without external dependencies.</p><ul><li>Study notes by chapter</li><li>Randomized chapter quizzes</li><li>Timed full practice exams</li><li>Progress tracking with smart analysis</li></ul></div>`";
  applyTheme();
  if(S.name){enterApp();} else {go("welcome");}
  renderStudy();
  renderQuizSetup();
  renderExamSetup();
  renderProgress();
  renderAbout();
});

function renderAbout(){
  el("view-about").innerHTML=`<div class="card"><h1 class="big-title">ℹ About</h1><p class="sub">This portal is designed for GST 123 students to revise quickly and practice effectively without external dependencies.</p><ul style="margin-left:20px;line-height:1.8;color:var(--mut)"><li>Study notes by chapter</li><li>Randomized chapter quizzes</li><li>Timed full practice exams</li><li>Progress tracking with smart analysis</li></ul></div>`;
}

function renderProgress(){
  const quizzes=S.quizzes||[];
  const exams=S.exams||[];
  const chapterCounts=CHAPTERS.map(c=>({id:c.id,done:S.read.includes(c.id)?1:0}));
  el("view-progress").innerHTML=`<div class="card">
    <h1 class="big-title">📊 My Progress</h1>
    <div class="pbar"><div class="pfill" style="width:${Math.round((S.read.length/CHAPTERS.length)*100)}%"></div></div>
    <p class="sub">${S.read.length}/${CHAPTERS.length} chapters completed</p>
    <div class="mistake-sum">
      <div class="stat2 ok"><b>${quizzes.length}</b><span>Quizzes attempted</span></div>
      <div class="stat2 ok"><b>${exams.length}</b><span>Exams attempted</span></div>
      <div class="stat2 bad"><b>${bestPct(quizzes)}%</b><span>Best quiz score</span></div>
      <div class="stat2 bad"><b>${bestPct(exams)}%</b><span>Best exam score</span></div>
    </div>
    <div class="hist">
      ${chapterCounts.map(c=>`<div class="bar-row"><div class="bar-label">Chapter ${c.id}</div><div class="bar-track"><div class="pbar"><div class="pfill" style="width:${c.done?100:0}%"></div></div></div><div class="bar-pct">${c.done?"Done":"0%"}</div></div>`).join("")}
    </div>
  </div>`;
}

/* ================= QUIZ SETUP ================= */
function renderQuizSetup(){
  el("view-quizsetup").innerHTML=`<h1 class="big-title">📝 Chapter Quizzes</h1><p class="sub">Pick a chapter — every quiz gives instant feedback, explanations and a smart analysis at the end.</p>`+
  CHAPTERS.map(c=>{
    const qn=QB.filter(q=>q.ch===c.id).length;
    const hist=S.quizzes.filter(q=>q.ch===c.id);
    const best=hist.length?Math.max(...hist.map(h=>h.pct)):null;
    return `<div class="card chap" style="margin-bottom:16px">
      <div class="cnum"><small>CHAP.</small>${c.id}</div>
      <div style="flex:1;min-width:220px"><h3>${c.title} <span style="font-weight:400;font-size:.85rem;color:var(--mut)">(${c.en})</span></h3>
      <p style="color:var(--mut);font-size:.9rem">${c.desc}</p>
      <div class="chap-meta"><span class="tag">❓ ${qn} questions</span><span class="tag">🔁 attempts: ${hist.length}</span>${best!==null?`<span class="tag done-tag">🏆 best: ${best}%</span>`:""}</div></div>
      <div><button class="btn btn-teal" onclick="takeChapterQuiz(${c.id})">Start Quiz →</button></div>
    </div>`;}).join("");
}
function takeChapterQuiz(ch){
  const qs=shuffle(QB.filter(q=>q.ch===ch).slice()).map(prepQ);
  ses={type:"quiz",ch:ch,qs:qs,ans:new Array(qs.length).fill(null),cur:0,checked:false,ok:false,start:Date.now(),timer:null};
  renderAssess();go("assess");
}

/* ================= EXAM SETUP ================= */
let exMode="mixed",exCount=20;
function renderExamSetup(){
  const fullN=Math.min(QB.length,100);
  el("view-examsetup").innerHTML=`
  <div class="card">
    <h1 class="big-title" style="margin-top:0">🎯 Full Practice Exam</h1>
    <p class="sub" style="margin-bottom:6px">Covers <b>the entire course</b> — questions are distributed across all ${CHAPTERS.length} chapters. A timer of 45 seconds per question runs automatically.</p>
    <h3 style="margin:14px 0 4px">1️⃣ Choose your mode</h3>
    <div class="mode-grid">
      <button class="pick ${exMode==="easy"?"sel":""}" onclick="selMode('easy')"><b>🟢 Easy</b><small>basic recall</small></button>
      <button class="pick ${exMode==="medium"?"sel":""}" onclick="selMode('medium')"><b>🟡 Medium</b><small>application</small></button>
      <button class="pick ${exMode==="hard"?"sel":""}" onclick="selMode('hard')"><b>🔴 Hard</b><small>tough details</small></button>
      <button class="pick ${exMode==="mixed"?"sel":""}" onclick="selMode('mixed')"><b>🎲 Mixed</b><small>all levels combined</small></button>
    </div>
    <h3 style="margin:14px 0 4px">2️⃣ Choose the number of questions</h3>
    <div class="cnt-grid">
      ${[10,20,30,50].map(n=>`<button class="pick ${exCount===n?"sel":""}" onclick="selCount(${n})"><b>${n}</b><small>questions</small></button>`).join("")}
      <button class="pick ${exCount==="full"?"sel":""}" onclick="selCount('full')"><b>Full</b><small>${fullN} questions</small></button>
    </div>
    <div style="display:flex;gap:10px;flex-wrap:wrap;align-items:center">
      <button class="btn btn-gold" onclick="startExamNow()">🚀 Start Exam</button>
      <span class="tag" style="padding:8px 14px">Best exam score so far: <b>&nbsp;${bestPct(S.exams)}%</b></span>
    </div>
  </div>`;
}
function selMode(m){exMode=m;renderExamSetup();}
function selCount(c){exCount=c;renderExamSetup();}
function pickExam(mode,count){
  let pool=shuffle(QB.filter(q=>mode==="mixed"||q.d===mode).slice());
  if(count==="full")return pool.slice(0,Math.min(pool.length,100));
  const byCh={};
  pool.forEach(q=>{(byCh[q.ch]=byCh[q.ch]||[]).push(q);});
  const out=[],chs=Object.keys(byCh);
  while(out.length<count && chs.length){const ch=chs.splice(Math.floor(Math.random()*chs.length),1)[0];const arr=byCh[ch].slice();out.push(...shuffle(arr).slice(0,Math.max(1,Math.ceil(count/Math.max(1,chs.length+1)))));}
  return shuffle(out).slice(0,count);
}
function startExamNow(){
  const pool=pickExam(exMode,exCount);
  ses={type:"exam",ch:null,qs:pool.map(prepQ),ans:new Array(pool.length).fill(null),cur:0,checked:false,ok:false,start:Date.now(),timer:null};
  renderAssess();go("assess");
}

/* ================= ASSESSMENT ENGINE ================= */
let ses=null;
function prepQ(q){return {...q,selected:null};}
function renderAssess(){
  const q=ses.qs[ses.cur];
  const total=ses.qs.length;
  const elapsed=Math.max(0,Math.floor((Date.now()-ses.start)/1000));
  const left=45 - elapsed; // placeholder; actual timer rules handled by timer loop below
  el("view-assess").innerHTML=`
  <div class="card assess-head">
    <div class="assess-meta">
      <span>${ses.type==="quiz"?"Chapter Quiz":"Practice Exam"}</span>
      <span>${ses.type==="quiz"?chTitle(ses.ch):"Full Course"}</span>
      <span class="timer ${left<=10?"low":""}">⏱ ${left}s left</span>
    </div>
    <div class="pbar"><div class="pfill" style="width:${((ses.cur+1)/total)*100}%"></div></div>
    <div class="qcount">Question ${ses.cur+1} of ${total}</div>
  </div>
  <div class="card">
    <div class="qbadges">
      <span class="badge b-ch">Chapter ${q.ch}</span>
      <span class="badge b-tp">${q.t}</span>
      <span class="badge ${q.d==="easy"?"b-easy":q.d==="medium"?"b-medium":"b-hard"}">${q.d}</span>
    </div>
    <div class="qtext">${q.q}</div>
    ${renderQuestionBody(q)}
    <div class="qnav">
      <button class="btn btn-ghost" onclick="prevQ()" ${ses.cur===0?"disabled":""}>← Previous</button>
      <div class="qpal">${ses.qs.map((_,i)=>`<button class="pdot ${ses.cur===i?"cur":""} ${ses.ans[i]!=null?"ans":""}" onclick="jumpQ(${i})">${i+1}</button>`).join("")}</div>
      <button class="btn btn-primary" onclick="nextQ()">${ses.cur===total-1?"Finish":"Next →"}</button>
    </div>
  </div>`;
  if(!ses.timer){
    ses.timer=setInterval(()=>{
      const sec=Math.max(0,Math.floor((Date.now()-ses.start)/1000));
      const remaining=45-sec;
      const timerNode=el("view-assess").querySelector(".timer");
      if(timerNode){
        timerNode.textContent=`⏱ ${remaining}s left`;
        timerNode.classList.toggle("low",remaining<=10);
      }
      if(remaining<=0){
        clearInterval(ses.timer); ses.timer=null; finishAssessment();
      }
    },1000);
  }
}
function renderQuestionBody(q){
  if(q.ty==="mcq"){
    return `<div class="opts">${q.o.map((opt,i)=>`<button class="opt ${(ses.ans[ses.cur]===i)?"selected":""} ${(ses.checked && i===q.a)?"correct":""} ${(ses.checked && ses.ans[ses.cur]===i && i!==q.a)?"wrong":""}" data-idx="${i}" onclick="selectOption(${i})"><span class="ol">${String.fromCharCode(65+i)}</span><span>${opt}</span></button>`).join("")}</div>`+
      (ses.checked?`<div class="fb ${ses.ans[ses.cur]===q.a?"good":"bad"}"><div class="fb-title">${ses.ans[ses.cur]===q.a?"Correct!":"Incorrect."}</div><div class="fb-correct">Correct answer: ${q.o[q.a]}</div><div class="fb-exp">${q.e}</div></div>`:" ");
  }
  if(q.ty==="tf"){
    const val=ses.ans[ses.cur];
    return `<div class="tfrow">${q.o.map((opt,i)=>`<button class="opt ${(val===i)?"selected":""} ${(ses.checked && i===q.a)?"correct":""} ${(ses.checked && val===i && i!==q.a)?"wrong":""}" onclick="selectOption(${i})"><span class="ol">${i===0?"T":"F"}</span><span>${opt}</span></button>`).join("")}</div>`+
      (ses.checked?`<div class="fb ${val===q.a?"good":"bad"}"><div class="fb-title">${val===q.a?"Correct!":"Incorrect."}</div><div class="fb-correct">Correct answer: ${q.o[q.a]}</div><div class="fb-exp">${q.e}</div></div>`:" ");
  }
  if(q.ty==="fill"){
    const v=ses.ans[ses.cur] ?? "";
    return `<div class="fillrow"><input value="${esc(v)}" placeholder="Type your answer here" oninput="selectFill(this.value)" ${ses.checked?"disabled":""}></div>`+
      (ses.checked?`<div class="fb ${strip(v)===strip(q.o[0])?"good":"bad"}"><div class="fb-title">${strip(v)===strip(q.o[0])?"Correct!":"Incorrect."}</div><div class="fb-correct">Correct answer: ${q.o[0]}</div><div class="fb-exp">${q.e}</div></div>`:" ");
  }
  return "";
}
function selectOption(i){if(ses.checked)return;ses.ans[ses.cur]=i;renderAssess();}
function selectFill(v){if(ses.checked)return;ses.ans[ses.cur]=v;renderAssess();}
function prevQ(){if(ses.cur>0){ses.cur--;renderAssess();}}
function nextQ(){if(ses.ans[ses.cur]==null && !ses.checked){toast("Please answer the current question first.");return;} if(ses.cur===ses.qs.length-1){finishAssessment();return;} ses.cur++;renderAssess();}
function jumpQ(i){if(ses.checked){ses.cur=i;renderAssess();return;} if(ses.ans[ses.cur]==null){toast("Please answer the current question first.");return;} ses.cur=i;renderAssess();}
function finishAssessment(){
  ses.checked=true;
  const total=ses.qs.length;
  const score=ses.qs.reduce((sum,q,i)=>sum+(ses.ans[i]===q.a || (q.ty==="fill" && strip(ses.ans[i]||"")===strip(q.o[0])) ? 1 : 0),0);
  const pct=Math.round(score/total*100);
  const result={type:ses.type,pct,score,total,ts:Date.now(),ch:ses.type==="quiz"?ses.ch:null,questions:ses.qs.map((q,i)=>({q:q.id,ans:ses.ans[i],correct:q.a,topic:q.t}))};
  if(ses.type==="quiz"){
    S.quizzes.push({ch:ses.ch,pct,score,total,when:Date.now()});
  } else {
    S.exams.push({pct,score,total,when:Date.now()});
  }
  save();
  renderResults(result);
  go("results");
  clearInterval(ses.timer); ses.timer=null;
}
function renderResults(r){
  const lv=levelOf(r.pct);
  const panel=el("view-results");
  panel.innerHTML=`<div class="card res-hero">
    <div class="score-ring" style="--pct:${r.pct};--rc:${lv.c}"><span><b>${r.pct}</b><i>%</i></span></div>
    <h2>${lv.e} ${lv.t}</h2>
    <div class="level-chip">${r.score}/${r.total} correct</div>
    <div class="res-sub">Your ${r.type === "quiz" ? "chapter quiz" : "practice exam"} result has been saved to your progress dashboard.</div>
    <div class="res-stats">
      <div class="stat ok"><b>${r.score}</b>correct</div>
      <div class="stat bad"><b>${r.total-r.score}</b>wrong</div>
      <div class="stat pct"><b>${r.pct}%</b>score</div>
    </div>
    <div class="btn-row"><button class="btn btn-primary" onclick="go('dashboard')">🏠 Back to Dashboard</button> <button class="btn btn-ghost" onclick="go('progress')">📊 View Progress</button></div>
  </div>`;
  const byTopic={};
  r.questions.forEach(item=>{
    const q=QB.find(q=>q.id===item.q);
    const key=q ? q.t : "Unknown Topic";
    byTopic[key]=(byTopic[key]||{total:0,ok:0});
    byTopic[key].total++;
    byTopic[key].ok += ((item.ans===q.a) || (q.ty==="fill" && strip(item.ans||"")===strip(q.o[0])) ? 1 : 0);
  });
  const sorted=Object.entries(byTopic).sort((a,b)=>b[1].ok-a[1].ok);
  panel.innerHTML += `<div class="card" style="margin-top:18px"><h3>📌 Topic breakdown</h3>${sorted.map(([name,stat])=>{const p=Math.round(stat.ok/stat.total*100);return `<div class="bar-row"><div class="bar-label">${name}</div><div class="bar-track"><div class="pbar"><div class="pfill" style="width:${p}%"></div></div></div><div class="bar-pct">${p}%</div></div>`;}).join("")}</div>`;
  panel.innerHTML += `<div class="card" style="margin-top:18px"><h3>🔍 Review mistakes</h3>${r.questions.map((item,index)=>{const q=QB.find(q=>q.id===item.q); const got=(item.ans===q.a) || (q.ty==="fill" && strip(item.ans||"")===strip(q.o[0])); if(got)return ""; return `<div class="rev-item bad"><div class="rev-status">❌</div><div class="rev-q">Q${index+1}: ${q.q}</div><div class="rev-line"><b>Correct answer:</b> ${q.o[q.a]}</div><div class="rev-line you"><b>Your answer:</b> ${item.ans!==null?String(item.ans).replace(/\s+/g," "):("No answer")}</div><div class="rev-exp">${q.e}</div></div>`;}).join("") || "<div class='sub'>No mistakes to review — excellent work.</div>"}</div>`;
  renderProgress();
}

/* ================= STARTUP ================= */
function goWelcome(){
  if(!S.name){go("welcome");}
}
if(!document.getElementById("nav")){
  document.body.insertAdjacentHTML("beforeend", `<nav id="nav" class="hidden"><div class="nav-inner"><div class="brand" onclick="go('dashboard')">🇫🇷 GST 123 • French Portal</div><div class="nav-links" id="navLinks"><a data-v="dashboard" onclick="go('dashboard')">🏠 Home</a><a data-v="study" onclick="go('study')">📚 Study</a><a data-v="quizsetup" onclick="go('quizsetup')">📝 Quizzes</a><a data-v="examsetup" onclick="go('examsetup')">🎯 Practice Exam</a><a data-v="progress" onclick="go('progress')">📊 My Progress</a><a data-v="about" onclick="go('about')">ℹ About</a></div><div class="nav-right"><button class="icon-btn" id="themeBtn" onclick="toggleTheme()" title="Toggle dark / light mode">🌙</button><div class="user-chip" id="userChip">👤</div></div></div></nav><main id="app"><section id="view-welcome" class="view active"></section><section id="view-dashboard" class="view"></section><section id="view-study" class="view"></section><section id="view-chapter" class="view"></section><section id="view-quizsetup" class="view"></section><section id="view-assess" class="view"></section><section id="view-examsetup" class="view"></section><section id="view-results" class="view"></section><section id="view-progress" class="view"></section><section id="view-about" class="view"></section></main><div id="modal" class="modal hidden"><div class="modal-box"><h3 id="mTitle">Submit your exam?</h3><p id="mText">Are you sure you want to submit your exam?</p><div class="modal-btns"><button class="btn btn-danger" id="mYes" onclick="confirmSubmit()">✓ Yes, Submit</button><button class="btn btn-ghost" onclick="closeModal()">← Keep Going</button></div></div></div><div id="toast" class="toast"></div><footer>Made with ❤️ for GST 123 students • Federal University Dutse • Jigawa State</footer>`);
}

window.addEventListener("load",()=>{
  renderStudy();
  renderQuizSetup();
  renderExamSetup();
  renderProgress();
  renderAbout();
  if(S.name){enterApp();}
  else{
    el("view-welcome").innerHTML=`<div class="welcome-wrap"><div class="card welcome-card"><div class="w-badge">🇫🇷 GST 123 • FEDERAL UNIVERSITY DUTSE</div><h1>Welcome to the<br><span class="grad">Communication in French</span><br>Exam Study Portal</h1><p class="w-sub">Faculty of General Studies • Level 100 • By Osita Nicholas, PhD</p><p class="w-msg">Your complete learning &amp; examination platform — study chapter by chapter, take quizzes, sit full practice exams, and get a smart analysis of your strengths and weaknesses.</p><div class="w-form"><input id="nameInput" placeholder="Enter Your Name" maxlength="30" onkeydown="if(event.key==='Enter')startLearning()"><button class="btn btn-primary" onclick="startLearning()">🚀 Start Learning</button></div></div></div>`;
    go("welcome");
  }
  applyTheme();
});
