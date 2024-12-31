const galleryData = [
  { id: 1, 
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    imageType: "Corporates" 
  },
  { id: 2, 
    image: "https://plus.unsplash.com/premium_photo-1677948482945-58c58d732238?q=80&w=1403&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    imageType: "Lounges & Cocktail Furniture" 
  },
  { id: 3, 
    image: "https://images.unsplash.com/photo-1561394742-4f9ab68d1a42?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGFydGllc3xlbnwwfHwwfHx8MA%3D%3D", 
    imageType: "Private Parties" 
  },
  { id: 4, 
    image: "https://images.unsplash.com/photo-1709744699635-7aca3718181e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UHJvcHMlMjAlMjYlMjBEZWNvcnxlbnwwfHwwfHx8MA%3D%3D", 
    imageType: "Props & Decor" 
  },
  { id: 5, 
    image: "https://images.unsplash.com/photo-1593498208892-bf9d06296062?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFN1c3RhaW5hYmxlJTIwRnVybml0dXJlfGVufDB8fDB8fHww", 
    imageType: "Sustainable Furniture" 
  },
  { id: 6, 
    image: "https://images.unsplash.com/photo-1527678826328-0597f0250279?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFdlZGRpbmdzfGVufDB8fDB8fHww", 
    imageType: "Weddings" 
  },
  { id: 7, 
    image: "https://images.unsplash.com/photo-1578962648525-9bed89f4d826?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UnVzdGljJTIwRnVybml0dXJlfGVufDB8fDB8fHww", 
    imageType: "Rustic Furniture" 
  },
  { id: 8, 
    image: "https://images.unsplash.com/photo-1679419858319-f22bb6d67a05?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TG91bmdlcyUyMCUyNiUyMENvY2t0YWlsJTIwRnVybml0dXJlfGVufDB8fDB8fHww", 
    imageType: "Lounges & Cocktail Furniture" 
  },
  { id: 9, 
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    imageType: "Private Parties" 
  },
  { id: 10, 
    image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    imageType: "Props & Decor" 
  },
  { id: 11, 
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENvcnBvcmF0ZXN8ZW58MHx8MHx8fDA%3D", 
    imageType: "Corporates" 
  },
  { id: 12, 
    image: "https://plus.unsplash.com/premium_photo-1683141537564-a87e06beb330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3VzdGFpbmFibGUlMjBGdXJuaXR1cmV8ZW58MHx8MHx8fDA%3D", 
    imageType: "Sustainable Furniture" 
  },
  { id: 13, 
    image: "https://images.unsplash.com/photo-1529635958611-473523f87664?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2VkZGluZ3N8ZW58MHx8MHx8fDA%3D", 
    imageType: "Weddings" 
  },
  { id: 14, 
    image: "https://images.unsplash.com/photo-1445510861639-5651173bc5d5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFJ1c3RpYyUyMEZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D", 
    imageType: "Rustic Furniture" 
  },
  { id: 15, 
    image: "https://images.unsplash.com/photo-1679419859523-97c0f0e8985d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fExvdW5nZXMlMjAlMjYlMjBDb2NrdGFpbCUyMEZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D", 
    imageType: "Lounges & Cocktail Furniture" 
  },
  { id: 16, 
    image: "https://images.unsplash.com/photo-1514845505178-849cebf1a91d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGNlbGVicmF0ZXxlbnwwfHwwfHx8MA%3D%3D", 
    imageType: "Private Parties" 
  },
  { id: 17, 
    image: "https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fFByb3BzJTIwJTI2JTIwRGVjb3J8ZW58MHx8MHx8fDA%3D", 
    imageType: "Props & Decor" 
  },
  { id: 18, 
    image: "https://images.unsplash.com/photo-1590650046871-92c887180603?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    imageType: "Corporates" 
  },
  { id: 19, 
    image: "https://images.unsplash.com/photo-1593670755742-cf27bab84755?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3VzdGFpbmFibGUlMjBGdXJuaXR1cmV8ZW58MHx8MHx8fDA%3D", 
    imageType: "Sustainable Furniture" 
  },
  { id: 20, 
    image: "https://plus.unsplash.com/premium_photo-1675719791228-84b6eea924f0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFdlZGRpbmdzfGVufDB8fDB8fHww", 
    imageType: "Weddings" 
  },
  { id: 21, 
    image: "https://images.unsplash.com/photo-1560184897-0e5d96d86acd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UnVzdGljJTIwRnVybml0dXJlfGVufDB8fDB8fHww", 
    imageType: "Rustic Furniture" 
  },
  { id: 22, 
    image: "https://images.unsplash.com/photo-1679419860174-132f33cdb9bd?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
    imageType: "Lounges & Cocktail Furniture" 
  },
  { id: 23, 
    image: "https://images.unsplash.com/photo-1554126196-3bdaba97491c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFBhcnRpZXN8ZW58MHx8MHx8fDA%3D", 
    imageType: "Private Parties" 
  },
  { id: 24, 
    image: "https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFByb3BzJTIwJTI2JTIwRGVjb3J8ZW58MHx8MHx8fDA%3D", 
    imageType: "Props & Decor" 
  },
  { id: 25, 
    image: "https://plus.unsplash.com/premium_photo-1733869775237-c299116705f2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fENvcnBvcmF0ZXN8ZW58MHx8MHx8fDA%3D", 
    imageType: "Corporates" 
  },
  { id: 26, 
    image: "https://images.unsplash.com/photo-1599643332904-ddc6060f3289?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8U3VzdGFpbmFibGUlMjBGdXJuaXR1cmV8ZW58MHx8MHx8fDA%3D", 
    imageType: "Sustainable Furniture" 
  },
];

export default galleryData;