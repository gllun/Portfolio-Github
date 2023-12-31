import {
    mobile,
    cv, brochure, calendrier,
    axa,grdf,isabelmarant, graphcom, pierrefitte,
    backend, creator, web,
    javascript,
    html,
    css,
    redux,
    figma,
    sql, reactjs, tailwind, nodejs, git, cherch, threejs,
    pauleluard, ingetis, collegegc,
    python, aspnetcore, laravel, csharp, blazor, xamarin, syncfusion,
    pythontkinter, laravelreactnative,
    csharpwindowsform, saccherch,
    xamaringraphcom, blazorgraphcom, builderjava, deepLearning,
    futura, frandroid, github, graphcom_v, graphcom_b,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "profil",
      title: "Profil",
    },
    {
      id: "experience",
      title: "Experience",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Curriculum Vitae",
      file: cv,
      filename: 'CV - Gael Luntala',
      icon: web,
    },
    // {
    //   title: "Calendrier Alternant",
    //   file: calendrier,
    //   filename: 'Calendrier 2023-2024',
    //   icon: mobile,
    // },
    {
      title: "Brochure École INGETIS",
      file: brochure,
      filename: 'Brochure INGETIS',
      icon: backend,
    },
    // {
    //   title: "GRAPHCOM",
    //   file: 'https://www.graphcom.fr/',
    //   filename: 'Graphcom',
    //   icon: creator,
    // },
  ];
  
  const technologies = [
    {
      name: "Csharp",
      icon: csharp,
    },
    // {
    //   name: "HTML 5",
    //   icon: html,
    // },
    // {
    //   name: "CSS 3",
    //   icon: css,
    // },
    // {
    //   name: "JavaScript",
    //   icon: javascript,
    // },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Asp.Net Core",
      icon: aspnetcore,
    },
    {
      name: "Syncfusion",
      icon: syncfusion,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Blazor",
      icon: blazor,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Sql",
      icon: sql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    {
      name: "Xamarin",
      icon: xamarin,
    },
  ];
  
  const experiences = [
    {
      title: "Assistant Administratif",
      company_name: "AXA Assurance - Stage",
      icon: axa,
      iconBg: "#383E56",
      date: "Janv 2014",
      points: [
        "Accueillir, orienter et renseigner les clients.", 
        "Identifier leurs besoins et répondre à leurs demandes.",
        "Réaliser des devis / Assurer la mise sous pli.",
      ],
    },
    {
      title: "Préparateur de commande",
      company_name: "Isabel Marant - CDD",
      icon: isabelmarant,
      iconBg: "#E6DEDD",
      date: "Juil 2019 - Aoû 2019",
      points: [
        "Gestion des stocks",
        "Réceptionner et vérifier la marchandise",
        "Préparer les commandes",
      ],
    },
    {
      title: "Coach Sportif",
      company_name: "Pierrefitte F.C - Service Civique puis bénévolat",
      icon: pierrefitte,
      iconBg: "#383E56",
      date: "Sept 2017 - Sept 2019",
      points: [
        "Accueillir les enfants et jeunes adolescents",
        "Les accompagner et les conseiller dans leur pratique du football",
        "Veiller au respect, par les jeunes des règles de vie collective",
      ],
    },
    {
      title: "Technicien BDD",
      company_name: "GRDF - Contrat de professionalisation",
      icon: grdf,
      iconBg: "#E6DEDD",
      date: "Sept 2019 - Juil 2020",
      points: [
        "Contrôle d’information par des requêtes SQL",
        "Utilisation de Power BI relié à une BDD pour effectuer des reportings",
        "Développement de fichier Excel en code VBA",
      ],
    },
    {
      title: "Appui Gestionnaire BDD",
      company_name: "GRDF - Intérim",
      icon: grdf,
      iconBg: "#383E56",
      date: "Nov 2020 - Mar 2022",
      points: [
        "Réalisation d'un reporting mensuelles des activités en Excel et PowerBI",
        "Analyses et traitements de cas en rejet avec proposition de modes opératoires",
        "Traitements et réponses aux sollicitations des régions avec mise à jour du fichier de suivi associé.",
      ],
    },
    {
      title: "Developpeur C#",
      company_name: "GRAPHCOM - Contrat d'apprentissage",
      icon: graphcom,
      iconBg: "#E6DEDD",
      date: "Dec 2022 - Aoû 2023",
      points: [
        "Développement d'une application mobile multiplateforme",
        "Intégration avec des services et API externe ",
        "Débogage et tests",
        "Développement d'une application web avec ASP.NET Core Blazor",
      ],
    },
  ];
  
  const study = [
    {
      title: "Collège Gustave Courbet",
      ville: "Pierrefitte-sur-Seine",
      diplome: "Diplôme National du Brevet",
      option: "Classe Sport (Football)",
      obtenu: "Date de délivrance: Juil. 2014",
      icon: collegegc,
      iconBg: "#FFFFFF",
      date: "Sept 2010 - Juil 2014",
    },
    {
      title: "Lycée Paul Eluard",
      ville: "Saint-Denis",
      diplome: "Baccalauréat Sciences et Technologies de l'Industrie et du Développement Durable (STI2D)",
      option: "Système d'Information et Numérique (SIN)",
      obtenu: "Date de délivrance: Juil. 2017",
      icon: pauleluard,
      iconBg: "#FFFFFF",
      date: "Sept 2015 - Juil 2017",
    },
    {
      title: "Ecole informatique INGETIS",
      ville: "Paris 5ème Arr.",
      diplome: "BTS Services Informatiques aux Organisations (SIO)",
      option: "Solutions Logicielles et Applications Métiers (SLAM)",
      obtenu: "Date de délivrance: Juil. 2020",
      icon: ingetis,
      iconBg: "#FFFFFF",
      date: "Sept 2018 - Juil 2020",
    },
    {
      title: "Ecole informatique INGETIS",
      ville: "Paris 5ème Arr.",
      diplome: "Bachelor Administrateur des Systèmes d’Information",
      option: "Parcours DevOps",
      obtenu: "Date de délivrance: Juillet 2023",
      icon: ingetis,
      iconBg: "#FFFFFF",
      date: "Sept 2022 - Juil 2023",
    },
    {
      title: "Ecole informatique INGETIS",
      ville: "Paris 5ème Arr.",
      diplome: "MBA Expert en Système Informatique",
      option: "DevOps",
      obtenu: "Date de délivrance: En cours ...",
      icon: ingetis,
      iconBg: "#FFFFFF",
      date: "Sept 2023 - Juil 2025",
    },
  ];

  const testimonials = [
    {
      testimonial:
        "Apple compte intégrer une nouvelle technologie de lentilles pour lunettes et capteurs photo.",
      name: "Théo Sire",
      designation: "Le 14 Avril 2023",
      // company: "Journaliste Hi-Tech",
      image: "https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2023/04/theo-09-grande-e1681476478231.jpeg?webp=1&resize=164,164&key=947e73d0",
      liens: "https://www.frandroid.com/marques/apple/1664997_apple-pourrait-proposer-des-meta-verres-pour-ses-lunettes-connectees",
      icon: frandroid,
    },
    {
      testimonial:
        "Des chercheurs ont mis au point des lunettes connectées capables de détecter les mots articulés.",
      name: "Edward Back",
      designation: "Le 8 Avril 2023",
      // company: "Journaliste Hi-Tech",
      image: "https://cdn.futura-sciences.com/cdn-cgi/image/width=87.5,height=96.25,quality=60,format=auto/sources/images/Edward%20Back.jpg",
      liens: "https://www.futura-sciences.com/tech/actualites/technologie-lunettes-connectees-lisent-levres-104620/",
      icon: futura,
    },
    {
      testimonial:
        "Les lunettes connectées se sont en effet imposées comme une des plus grandes tendances à suivre.",
      name: "Titouan Gourlin",
      designation: "Le 4 Mars 2023",
      // company: "Journaliste",
      image: "https://c1.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2021/04/titouan-01.jpg?resize=200,200",
      liens : "https://www.frandroid.com/produits-android/accessoires-objets-connectes/lunettes-intelligentes/1625419_les-stars-du-mwc-2023-cetaient-les-lunettes-connectees-voici-les-plus-belles-nouveautes",
      icon: frandroid,
    },
  ];
  
  const projects = [
    // {
    //   name: "Generateur de projet",
    //   description:
    //     "Application Windows Forms qui permet de générer la base d'un projet via un fichier Excel en renseignant les noms de classes qu'on souhaite opérer (CRUD) avec la BDD.",
    //   tags: [
    //     {
    //       name: "VisualStudio",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: " C#",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "MsSQLServer",
    //       color: "pink-text-gradient",
    //     },
    //   ],
    //   image: csharpwindowsform,
    //   source_code_link: "https://github.com/",
    // },
    // {
    //   name: "BioTourist",
    //   description:
    //     "Site Web qui permet aux vendeur de mettre leur produit frais (fruits et légumes) en vente. Grâce à une map, le client voit ça position et les produits disponibles autour de lui.",
    //   tags: [
    //     {
    //       name: "AspNet",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: " C#",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "Leaflet",
    //       color: "pink-text-gradient",
    //     },
    //     {
    //       name: "MsSQLServer",
    //       color: "purple-text-gradient",
    //     },
    //   ],
    //   image: biotourist,
    //   source_code_link: "https://github.com/",
    // },
    {
      name: "Gestion Immobilière",
      description:
        "Mise en place d’une application de gestion de biens d’une agence immobilière qui permet de gérer leur bien (appartement ou maison) en quelques clics.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Tkinter",
          color: "green-text-gradient",
        },
        {
          name: "SqLite",
          color: "pink-text-gradient",
        },
      ],
      image: pythontkinter,
      img_logo: github,
      source_code_link: "https://github.com/gllun/gestion_bien_immobilier",
    },
    {
      name: "App Gestion Budget",
      description:
        "Application mobile qui permet à l'utilisateur de pouvoir gerer sont budget à partir de son téléphone. L'utilisateur aura une vision globale de ses dépenses.",
      tags: [
        {
          name: "Laravel",
          color: "blue-text-gradient",
        },
        {
          name: " ReactNative",
          color: "green-text-gradient",
        },
        {
          name: "Sqlite",
          color: "pink-text-gradient",
        },
      ],
      image: laravelreactnative,
      img_logo: github,
      source_code_link: "https://github.com/",
    },
    {
      name: "C# - Graphcom",
      description:
        "Etant alternant dans la societe GRAPHCOM, nous développons une application pour les restaurateurs qui leur permet de prendre les commandes clients avec ticket de caisse.",
      tags: [
        {
          name: "Xamarin",
          color: "blue-text-gradient",
        },
        {
          name: "MsSQLServer",
          color: "green-text-gradient",
        },
        {
          name: "SignalR",
          color: "pink-text-gradient",
        },
      ],
      image: xamaringraphcom,
      img_logo: graphcom_b,
      source_code_link: "https://www.graphcom.fr/menu-board-dynamique-communication",
    },
    // {
    //   name: "Portfolio",
    //   description:
    //     "Site Web qui permet aux vendeur de mettre leur produit frais (fruits et légumes) en vente. Grâce à une map, le client voit ça position et les produits disponibles autour de lui.",
    //   tags: [
    //     {
    //       name: "AspNet",
    //       color: "blue-text-gradient",
    //     },
    //     {
    //       name: " C#",
    //       color: "green-text-gradient",
    //     },
    //     {
    //       name: "Leaflet",
    //       color: "pink-text-gradient",
    //     },
    //     {
    //       name: "MsSQLServer",
    //       color: "purple-text-gradient",
    //     },
    //   ],
    //   image: jobit,
    //   source_code_link: "https://github.com/",
    // },
    // {
    //   name: "UX-UI Portfolio",
    //   description:
    //     "Site Web qui permet aux vendeur de mettre leur produit frais (fruits et légumes) en vente. Grâce à une map, le client voit ça position et les produits disponibles autour de lui.",
    //   tags: [
    //     {
    //       name: "AdobeXD",
    //       color: "green-text-gradient",
    //     },
    //   ],
    //   image: adbxd,
    //   source_code_link: "https://github.com/",
    // },
    // {
    //   name: "UX-UI App Budget",
    //   description:
    //     "Site Web qui permet aux vendeur de mettre leur produit frais (fruits et légumes) en vente. Grâce à une map, le client voit ça position et les produits disponibles autour de lui.",
    //   tags: [
    //     {
    //       name: "AdobeXD",
    //       color: "blue-text-gradient",
    //     },
    //   ],
    //   image: adbxd,
    //   source_code_link: "https://github.com/",
    // },
    {
      name: "Blazor - Graphcom",
      description:
        "Etant alternant dans la societe GRAPHCOM, nous avons développez un dashboard qui permet au restaurateur de voir en un clic leur statistiques journalières et mensuelles avec la possibilité de telecharger en app mobile.",
      tags: [
        {
          name: "AspNetCore",
          color: "blue-text-gradient",
        },
        {
          name: "MsSQLServer",
          color: "green-text-gradient",
        },
        {
          name: "Blazor",
          color: "pink-text-gradient",
        },
      ],
      image: blazorgraphcom,
      img_logo: graphcom_v,
      source_code_link: "https://dash.alta-pos.fr/login",
    },
    {
      name: "Gestion des notes de frais",
      description:
        "Une entreprise souhaite gerer les notes de frais professionnels via un logiciel qui sont des avances consenties par un salarié dans le cadre de son activité professionnelle remboursable par l'entreprise.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "SceneBuilder",
          color: "green-text-gradient",
        },
        {
          name: "Sqlite",
          color: "pink-text-gradient",
        },
      ],
      image: builderjava,
      img_logo: github,
      source_code_link: "https://github.com/",
    },
    {
      name: "Hate Cheek",
      description:
        "Ce projet Deep Learning consiste a apprendre à notre robot d'analyser la phrase écrite et de la qualifier désagréable ou non. Si la phrase est grossier, alors elle retourne un message negative. ",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "JupyterLab",
          color: "green-text-gradient",
        },
        {
          name: "Docker",
          color: "pink-text-gradient",
        },
      ],
      image: deepLearning,
      img_logo: github,
      source_code_link: "https://github.com/Azrogue/hate_speech_check",
    },
    {
      name: "CHERCH.™ (WordPress)",
      description:
        "Création d'un Site Web E-Commerce avec l'extension open source WooCommerce pour un client qui souhaite développe sa gamme de sacs de la marque Cherch.™ fabriqué à la main en utilisant de la pellote.",
      tags: [
        {
          name: "Elementor",
          color: "blue-text-gradient",
        },
        {
          name: "Photoshop",
          color: "green-text-gradient",
        },
        {
          name: "Illustrator",
          color: "pink-text-gradient",
        },
      ],
      image: saccherch,
      img_logo: cherch,
      source_code_link: "https://cherchandco.fr/",
    },
  ];
  
  export { services, technologies, experiences, study, testimonials, projects };