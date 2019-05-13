var sInterval

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
  phones: [
    'samsung',
    'apple'
  ],
  winner: {
    name: 'Claudette Pinneau',
    city: 'LYON',
    phone: 'samsung'
  },
  phoneNumber: ''
}

const getters = {
  winner: state => state.winner,
  phoneNumber: state => state.phoneNumber
}

const actions = {
  startGetWinner ({ commit, state }) {
    sInterval = setInterval(function () {
      commit('setWinner', {
        name: state.names[Math.floor(Math.random() * state.names.length)],
        city: state.cities[Math.floor(Math.random() * state.cities.length)],
        phone: state.phones[Math.floor(Math.random() * 2)]
      })
    }, 4000)
  },
  endGetWinner () {
    clearInterval(sInterval)
  },
  changePhoneNumber ({ commit }, phoneNumber) {
    commit('setPhoneNumber', phoneNumber)
  }
}

const mutations = {
  setWinner: (state, winner) => (state.winner = winner),
  setPhoneNumber: (state, phoneNumber) => (state.phoneNumber = phoneNumber)
}

export default {
  state,
  getters,
  actions,
  mutations
}
