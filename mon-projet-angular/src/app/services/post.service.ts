import { Post} from '../post'

export class PostService {
    
    posts = [
        new Post(
            1,
            'assets/astierA.jpg',
            'ALEXANDRE ASTIER (Roi Arthur)',
            `La passion première d\'Alexandre Astier n\'est pas la comédie mais la musique.Très jeune, il entre au Conservatoire avant de poursuivre ses études à l\'American School of Modern Music à Paris. En parallèle, il suit ses premiers cours de théâtre et se met peu à peu à l\'écriture. Très vite, il monte deux pièces écrites par ses soins : en 1997, Poule Fiction, et en 2000, L\'étrange assistant du Docteur Lannion. C\'est grâce à sa prestation sur scène à Lyon dans Le jour du froment qu\'il se fait remarquer par les professionnels. Il se distingue notamment dans la pièce de Jacques Chambon, Nous  grâce.
            Après avoir composé des musiques pour des courts-métrages tels que Soyons sport et Un soupçon fondé sur quelque chose de gras, il se lance dans la réalisation de son propre court, Dies iræ, qui remporte le Prix du public 2003 du Festival Off-Courts. Celui-ci donnera naissance à la série Kaamelott qui l\'a fait connaître auprès du grand public. Il est à la fois réalisateur, scénariste et acteur de cette fiction qui met en scène la légende des chevaliers de la Table Ronde. Elle a remplacé avec succès Caméra Café sur l\'antenne de M6 à partir du mois de Janvier 2005. Tandis qu\'il s\'offre le rôle du Roi Arthur, il en profite pour faire jouer sa famille. Ainsi, son père Lionel Astier obtient le rôle de Léodagan, son frère Simon Astier celui d\'Yvain, Joëlle Sevilla, sa mère, celui de Sévi et Josée Drevon, sa belle-mère, celui d\'Ygerne. Il va même jusqu\'à composer les musiques de la série ! A partir de 2006, il décline l\'univers de Kaamelott dans une BD dont il a écrit le scénario. Il décroche son premier rôle au cinéma en 2006 dans le film Comme t\'y es belle !, aux cotés de Michèle Laroque, puis il enchaîne avec le blockbuster français Astérix aux Jeux Olympiques. En 2008, il endosse le rôle de Reiser, grand dessinateur et ami de Coluche, dans le film d\'Antoine de Caunes, Coluche, l\'histoire d\'un mec. L\'année suivante, il offre un registre inattendu avec son rôle d\'ex-mari confident de Sophie Marceau dans LOL - Laughing Out Loud. Il fera un petit retour à la télévision en 2010 le temps d\'un caméo dans la série de son frère Simon, Hero Corp avant d\'incarner en 2011 le méchant Clotindre dans Philibert, pastiche de films de cape et d\'épée face à Jérémie Renier.  En 2012, Alexandre Astier voit enfin l’accomplissement de son premier long-métrage au cinéma : David et Madame Hansen. Comme à son habitude, Alexandre est sur tous les fronts puisqu\’il écrit, produit, réalise, monte et compose même les musiques de ce film. En 2012 aussi, il retrouve les planches avec sa pièce Que ma joie demeure !, et fait de nombreuses apparitions dans des émissions et mini-séries à succès comme Bref, Le Golden Show, ou encore Scènes de ménages en 2013. La même année, il collabore au scénario de Pop Rédemption et y joue avec Julien Doré. Le 6 mars 2014 est mis en ligne un court-métrage de Lisa Azuelos intitulé 14 millions de cris dans lequel il joue aux côtés de Julie Gayet et qui dénonce le mariage forcé de plus de 14 millions de mineurs chaque année dans le monde. Le mois suivant sort dans les salles la quatrième collaboration d\’Alexandre Astier et Lisa Azuelos dans la romance Une rencontre. A Noël 2014, le public français découvre Astérix - Le Domaine des Dieux, le neuvième film d’animation du célèbre petit gaulois. Alexandre Astier, à l’origine de ce projet, réunit une pléiade de stars dont des habitués de Kaamelott comme Lionel Astier et Joëlle Sevilla, mais aussi Elie Sémoun, Alain Chabat, Géraldine Nakache, ainsi que Florence Foresti et Roger Carel, la voix officielle d’Astérix depuis 1967. En 2014 toujours, l\’hyperactif Astier tourne dans le premier long-métrage de Kheiron et débute la tournée dans l\’hexagone, la Suisse et la Belgique de sa nouvelle pièce de théâtre l\’Exoconférence.`,
            '16-06-1974',
            '45 ans',
            'Français',
            'Acteur, Scénariste, Réalisateur',
            2
        ),

        new Post(
            2,
            'assets/astierL.jpg',
            'LIONNEL ASTIER (Roi Léodagan) ',
            `Lionnel Astier est le père d'Alexandre Astier (créateur de la série Kaamelott) et de Simon Astier.

            Essentiellement connu pour le rôle de Léodagan dans la série Kaamelott de M6, Lionnel Astier est avant tout un auteur et un metteur en scène de renom, et c'est avec le théâtre qu'il va commencer à se forger une réputation. Il écrit pas moins d'une quinzaine de pièces dont la dernière est Pouic-pouic, une adaptation du film du même nom de Jean Girault.
            
            Auteur donc, mais aussi acteur ! En effet, Lionnel Astier a ciré les planches d'un bon nombre de scènes avec à son actif une soixantaine de pièces, quelles soient classiques (Molière, Victor Hugo, Emile Zola...) ou modernes (Jean Giono...). Sa dernière apparition sur scène remonte à 2010 dans Pourquoi j'ai jeté ma grand-mère dans le Vieux-Port ! de Serge Valetti.
            
            Lionnel Astier est loin d'être un néophyte du petit écran puisqu'il commence à jouer dans des téléfilms dès le début des années 80. Il fait partie du casting de plusieurs téléséries à fortes audiences telles que Maigret, Nestor Burma, Engrenages ou encore Julie Lescaut.
            
            Après quelques rares apparitions pour le grand écran tel que Zone rouge de Robert Enrico en 1986 ou encore La Femme du cosmonaute de Jacques Monnet en 1997, sa carrière s'envole en 2009 avec Le Dernier pour la route aux cotés de François Cluzet dans lequel il joue un alcoolique notoire.
            
            Le succès de la série Kaamelott (2004 - 2010) le fait connaître du grand public et l'envoie sous les feux de la rampe puisqu'il se voit proposer plusieurs projets, les derniers étant Le Fils à Jo de Philippe Guillard en 2010, Bienvenue à bord d'Eric Lavaine ainsi que Les Lyonnais d'Olivier Marchal, en 2011, soit trois productions appartenant à des genres cinématographiques bien distincts.
            
            Kevin Poujoulat`,

            '31-10-1953',
            '66 ans',
            'Français',
            'Acteur',
            2
        ),
        new Post(
            3,
            'assets/hembertJC.jpg',
            'JEAN-CHRISTOPHE HEMBERT (Seigneur Karadoc)',
            `Après des études de théâtre à Lyon, Jean-Christophe Hembert se lance dans la mise en scène avec sa première pièce, une adaptation de "Barbe bleue " en 1996. Cette même année, il commence à diriger la compagnie "Groupe 4" avec laquelle il produira de nombreuses pièces, notamment "Mardi" en 1998 et "La conquête du Pôle Sud" en 1999. À partir des années 2000, il commence à travailler avec Thomas Cousseau et Alexandre Astier pour les pièces "Timon d’Athènes" et "Le jour du froment", toujours à Lyon. Il jouera dans la pièce "L’Avare", mise en scène par Roger Planchon, à Villeurbanne et à Paris. En 2004, il met en scène deux pièces d’auteur, "Jacket ou la main secrète" et "Faust 1911". À partir de 2005, le public le découvre à la télévision dans la série humoristique créée par Alexandre Astier "Kaamelott", diffusée sur M6. Pendant six saisons, il interprètera le rôle de Karadoc, l'un des Chevaliers de la Table Ronde originaire de Vannes, un peu bête et plus intéressé par un bon repas que par la quête du Graal.`,

            '04-03-1976',
            '44 ans',
            'Français',
            'Acteur, Producteur exécutif',
            2
        ),
        new Post(
            4,
            'assets/pitiotF.jpg',
            'FRANCK PITIOT (Seigneur Perceval)',
            `Franck Pitiot est un acteur français, célèbre grâce à la série Kaamelott sur M6 (diffusée de 2004 à 2009), dans laquelle il incarne Perceval, un chevalier de la table ronde particulièrement sot, mais excessivement drôle. En effet, son personnage est analphabète, ce qui le met facilement en décalage avec ses interlocuteurs, notamment avec le roi Arthur, créant ainsi des situations ubuesques dans lesquelles il tente d'échapper par son fameux : "C'est pas faux"!Franck Pitiot est par ailleurs issu d'une formation théâtrale, qui lui a ouvert les portes du festival d'Avignon en 1995 dans la pièce "Moment de détente". Il s'est également illustré au cinéma dans "Mon colonel" en 2006, puis dans le film d'Isabelle Mergault "Enfin Veuve" (2008), où il partage l'affiche avec Michèle Laroque et Jacques Gamblin. Enfin, il participe en 2010 à la réalisation et au scénario de "La Nouvelle Expédition de Darwin", une série scientifico-humoristique en trois épisodes créée pour Canal+. Le spectateur y suit un globe-trotter déjanté, accompagné d'un surfeur amateur de massages ayurvédiques, tous deux bien décidés à prouver l'existence de nouvelles espèces animales...`,
            '27-06-1964',
            '55 ans',
            'Français',
            'Acteur, Créateur, Réalisateur',
            2
        ),
        new Post(
            5,
            'assets/girouardA.jpg',
            'ANNE GIROUARD (Reine Guenièvre)',
            `L’actrice Anne Girouard, née en 1976, s’est formée au Conservatoire national de Versailles puis à l'École supérieure d'art dramatique de Paris. Enfin, elle parfait sa formation à l’ENSATT de Lyon. En 1995, Anne Girouard foule sa première scène et devient plus coutumière des salles de théâtre que des plateaux de cinéma ou de télévision, avec plus d’une vingtaine de pièces à son actif. C’est pourtant la télévision qui la hisse au rang de reine du petit écran en 2007 grâce au personnage de Guenièvre dans la comédie-fantasy "Kaamelott" relatant les grandes mésaventures du roi Arthur et des chevaliers de la table ronde. Entre le tournage de la série et les longues tournées théâtrales dans toute la France, l’actrice parvient tout de même à être présente au cinéma, notamment dans "Le Démon de Midi" avec Michèle Bernier, dans "Enfin Veuve" d’Isabelle Mergault, dans "La Journée de la jupe" avec Isabelle Adjani, ou plus récemment dans la comédie "Au bistrot du coin" aux côtés de Fred Testot. En 2006, accompagnée de Rafaèle Huou, Anne Girouard s’essaye à la mise en scène avec la tragédie-comédie "L’Éveil du printemps" de Frank Wedekind.`,
            '18-03-1976',
            '44 ans',
            'Française',
            'Actrice',
            2
        ),
        new Post(
            6,
            'assets/cousseauT.jpg',
            'THOMAS COUSSEAU (Seigneur Lancelot)',
            `Issu du monde du théâtre, Thomas Cousseau est un acteur français connu pour sa participation à la série télévisée Kaamelott. Formé au Conservatoire national supérieur d’art dramatique de Paris, Thomas Cousseau fait la rencontre de Catherine Hiegel et Daniel Mesguich qui lui transmettent, entre autres, l’art d’occuper une scène de théâtre. Aux côtés de comédiens comme Laurent Terzieff, Roger Planchon, Jean-Christophe Hembert ou encore Christian Schiaretti, le Français réalise son apprentissage. Il s’essaie, à Paris et en Province, à du classique avec des pièces de Molière, Corneille ou Shakespeare, mais également à certaines œuvres plus contemporaines.

            Désormais comédien aguerri, Thomas Cousseau multiplie les apparitions à la télévision et au cinéma. On l’aperçoit dans les séries policières Julie Lescaut et PJ, ainsi que dans le court-métrage 300 000 kilomètres/seconde. En 2005, la série télévisée Kaamelott, une série humoristique de fantasy historique, débarque sur M6. Thomas Cousseau y incarne le personnage de Lancelot jusqu’en 2009, date à laquelle s’arrête la diffusion de cette série populaire. `,
            '06-06-1968',
            '52 ans',
            'Français',
            'Acteur',
            2
        ),
        new Post(
            7,
            'assets/chambonJ.jpg',
            'JACQUES CHAMBON (Merlin)',
            `Jacques Chambon a été formé par Serge Erich à l’école d’acteurs Jean-Louis Martin-Barbaz.
            Il a été pendant de nombreuses années l’un des piliers de la Compagnie Sortie de Route au sein de laquelle il a enchaîné les créations et les tournées dans les mises en scène de Jean-Luc Bosc et de Thierry Chantrel. Il a joué dans des mises en scène de Bruno Bonjean.
            Il a joué sous la direction de Roger Planchon lors de la création de S’agite et se pavane d’Ingmar Bergman. Il a été Banquo dans Macbeth, et Trivelin dans La Fausse Suivante mis en scène par Cécile Perrot, à Montreuil.
            Il a joué avec la compagnie de danse contemporaine ACTE, sous la direction d’Annick Charlot.Il a collaboré également avec l’Opéra-Théâtre, sous la direction d’André Fornier et avec l’ensemble de musique baroque le Concert de l’Hostel-Dieu, dirigé par Franck-Emmanuel Comte.
            Il est auteur de comédies dans lesquelles il joue parfois :
            Du plomb dans le super, Ascension pour les fauchés, Ta Gueule !, Plein Phare, Un petit coup de blues, La mobylette, Smart Faune, Caron Rouge, Troubles de l’élection, Milady en sous-sol, Calamity Job, En face de l’immeuble d’en face. Il a aussi écrit, dans un registre plus dramatique Nous crions grâce et Les sentinelles.
            Il a écrit ses deux spectacles solo : Bilan Provisoire et La vie est une fête.
            Il a joué dans une quarantaine de téléfilms.
            En tant que parolier, il a signé deux chansons pour la comédienne et chanteuse Karimouche.
            En 2014 et 2015, il écrit joue en duo avec Franck Pitiot dans le web-série comique Méli Mélo, produite par le GRAIE, qui évoque les problématiques de l'eau.
            En 2016, il joue dans deux web-séries, dans lesquelles il est aussi acteur : Les nouvelles Métamorphoses avec l'ensemble de musique baroque Le Concert de l'Hostel Dieu et Entre 2 portes une co-réalisation Acteurs & Cie et Evedia3.
            Il a fondé avec le comédien Laurent Lacroix, la société Evedia, société de production dont l'objet est de proposer aux entreprises les compétences des métiers de la scène (théâtre, formation, animation) et d'investir les ressources générées dans la création artistique.`,
            '27-09-1962',
            '58 ans',
            'Français',
            'Acteur',
            2
        ),

        new Post(
            8,
            'assets/gabionN.jpg',
            'NICOLAS GABION ( Seigneur Bohort)',
            `Nicolas Gabion est un comédien français, né le 1er juin 1972 à Saint-Étienne, en France. Après beaucoup de rôles au théâtre, dans les répertoires classiques (Molière, Shakespeare, Tchekhov, Sophocle) et contemporains, sa carrière s'oriente vers la télévision et le cinéma.
            Il est principalement connu du grand public pour avoir interprété le rôle du seigneur Bohort, personnage de fiction dans la série Kaamelott.
            Il a également un diplôme d'ingénieur en génie électrique de l'Institut national des sciences appliquées de Lyon en 19951.
            Depuis la rentrée 2011, il est enseignant à Bellecour École d'Arts à Lyon où il aide les élèves à l'élaboration de scénarios dans la section Mastère Réalisateur 3D et le Bachelor 3D art animation, ainsi que des cours d'acting auprès des filières Animation 2D et 3D.`,
            '01-06-1972',
            '48 ans',
            'Français',
            'Acteur',
            2
        ),

        new Post(
            9,
            'assets/fleurotA.jpg',
            'AUDREY FLEUROT 5 La dame du lac) ',
            `Après être sortie diplômée de l'École nationale supérieure des arts et techniques du théâtre de Lyon en 2000, Audrey Fleurot joue dans de nombreuses pièces de théâtre et apparaît aussi à la télévision, notamment dans l'un des épisodes de la série Blague à part. Mais c'est grâce au succès de Kaamelott, où elle campe la Dame du Lac tout au long des 6 saisons, qu'elle se fait remarquer. Toujours à la télévision, elle s'illustre dans un autre registre à partir de 2005 dans le rôle d'une avocate dans la série Engrenages.
            Au cinéma, elle débute avec des petits rôles dans Les Deux mondes en 2007 puis 4 ans plus tard dans Les Femmes du 6e étage (2011) de Philippe Le Guay. Cette même année, elle s'affiche dans Minuit à Paris de Woody Allen mais sa performance est coupée au montage. C'est avec Intouchables d'Eric Toledano et Olivier Nakache qu'Audrey Fleurot trouve un rôle marquant au cinéma, aux côtés d'Omar Sy et François Cluzet. L'actrice enchaîne avec La Délicatesse, comédie romantique portée par le duo Tautou/Damiens et dans laquelle elle incarne la secrétaire de Bruno Todeschini.
            Tout en continuant à apparaître régulièrement à la télévision, notamment dans la série historique Un Village français, l'actrice enchaîne les comédies sur grand écran. Elle est tour à tour une présidente des Etats-Unis un brin décalée dans Mais qui a re-tué Pamela Rose ? (2012) de et avec Kad Merad et Olivier Baroux, une professeure stricte mais qui cache un drôle de secret dans La Vraie vie des profs (2013), une caissière qui s'essaie au catch dans Les Reines du ring (id.), une célibataire fêtarde dans Les Gazelles (2014), un esprit condamné à hanter un château dans Le Fantôme de Canterville (2016) et la directrice visuelle autoritaire d'une grande entreprise de cosmétiques dans L'Idéal (id.). 
            Toujours aussi courtisée par la télévision, elle s'amuse avec son image en jouant son propre rôle dans un épisode de la saison 1 de Dix pour cent en 2015. Elle retrouve France 2 deux ans plus tard pour la saison 2 des Témoins dans laquelle elle est une femme amnésique dont les anciens amants sont assassinés. Elle poursuit en 2018 dans la veine du thriller télévisé avec Safe de l'auteur à succès Harlan Coben aux côtés de Michael C. Hall. Six ans après Mais qui a re-tué Pamela Rose ?, Audrey Fleurot incarne à nouveau une Chef d'État mais dans un registre plus sérieux et tendre. Dans le choral La Fête des mères, elle est la Présidente de la République qui tente de jongler tant bien que mal entre sa fonction et son rôle de mère.
            Auteur : Nicolas Johary`,
            '01-07-1977',
            '43 ans',
            'Française',
            'Actrice',
            2
        ),

        ] 


    getPostById(id:number){
        const post = this.posts.find(
            (postObject)=>{
                return postObject.id === id;
            }
        );
        return post
    }
    
}