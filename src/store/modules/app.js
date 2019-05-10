const state = {
  names: [
    'Claudette Pinneau',
    'Natalie Dumoulin',
    'Mariette Trudeau',
    'Fr�d�rique Bernier',
    'Alice Parmentier',
    'Verrill Bellefeuille',
    'Chappell Leroy',
    'Avril Hach�e',
    'Marlon Salmons',
    'Christian Rochefort',
    'G�rard Favreau',
    'Gauthier Brochu',
    'Somerville Reault',
    'Percy Gagn�',
    'Vail Bourque',
    'Avent Caya',
    'Methena Garnier',
    'Henriette Allard',
    'Ferrau St-Jacques',
    'Heloise Daoust',
    'Th�odore Fr�chette',
    'Gilbert Parizeau',
    'Maslin St-Jean',
    'Harbin Croquetaigne',
    'Carolos Huot',
    'Telford Provencher',
    'Donatien Beaulac',
    'P�n�lope Rocher',
    'Fortun Fournier',
    'Forrest Laderoute',
    'Doroth�e Lebrun',
    'Belle Paquette',
    'Prewitt Boncoeur',
    'Delmar Faubert',
    'Nouel Marcil',
    'Xarles Rodrigue',
    'Charlotte Fontaine',
    'Claude Tardif',
    'Thibaut Archambault',
    'Aleron Sevier',
    'Christiane Perreault',
    'Marphisa Gougeon',
    'Wyatt Metivier',
    'Virginie Courtemanche',
    'Byron Sicard',
    'Aubin Laurent',
    'Merci Gilbert',
    'Benjamin Berthelette',
    'Fabienne Mousseau',
    'Josette Rouze'
  ],
  cities: [
    'LYON',
    'SAINT-DIZIER',
    'ALFORTVILLE',
    'TOULON',
    'M�RIGNAC',
    'GARGES-L�S-GONESSE',
    'RIS-ORANGIS',
    'VILLIERS-LE-BEL',
    'LAVAL',
    'MARTIGUES',
    'TOULON',
    'BERGERAC',
    'TALENCE',
    'VICHY',
    'PAU',
    'AGEN',
    'ANGLET',
    'GAP',
    'MONTCEAU-LES-MINES',
    'MARSEILLE',
    'NANCY',
    'ORL�ANS',
    'RIS-ORANGIS',
    'SAINT-POL-SUR-MER',
    'PARIS',
    'CH�TENAY-MALABRY',
    'MARTIGUES',
    'COLOMBES',
    'METZ',
    'PARIS',
    'CLERMONT-FERRAND',
    'PARIS',
    'AVIGNON',
    'HY�RES',
    'ABBEVILLE',
    'LES ABYMES',
    'ANGERS',
    '�PINAY-SUR-SEINE',
    'SAINT-�TIENNE-DU-ROUVRAY',
    'CR�TEIL',
    '�PINAY-SUR-SEINE',
    'MARSEILLE',
    'MEAUX',
    '�PINAY-SUR-SEINE',
    'PAU',
    'TULLE',
    'LE PUY-EN-VELAY',
    'MOULINS',
    'LE PERREUX-SUR-MARNE',
    'ROUBAIX'
  ],
  currentName: 'Claudette Pinneau',
  currentCity: 'LYON'
}

const getters = {
  currentName: state => state.currentName,
  currentCity: state => state.currentCity
}

const actions = {
  getCurrentName ({ commit, state }) {
    const index = Math.floor(Math.random() * state.names.length)
    commit('setCurrentName', state.names[index])
  },
  getCurrentCity ({ commit, state }) {
    const index = Math.floor(Math.random() * state.cities.length)
    commit('setCurrentCity', state.cities[index])
  },
  startGetNameAndCity ({ dispatch }) {
    setInterval(function () {
      dispatch('getCurrentName')
      dispatch('getCurrentCity')
    }, 4000)
  }
}

const mutations = {
  setCurrentName: (state, name) => (state.currentName = name),
  setCurrentCity: (state, city) => (state.currentCity = city)
}

export default {
  state,
  getters,
  actions,
  mutations
}
