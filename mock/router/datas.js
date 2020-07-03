
exports.routes = [
  {
    id: '111111111',
    title: 'Welcome',
    type: 'item',
    path: '/demo-Welcome',
  },
  {
    id: '2222222222',
    title: 'demo',
    type: 'submenu'
  },
  {
    id: '333333333',
    parent: '2222222222',
    title: 'provider',
    type: 'item',
    path: '/demo-provider',
  },
  {
    id: '444444444444',
    parent: '2222222222',
    title: 'refs',
    type: 'item',
    path: '/demo-refs',
  },
  {
    id: 'xxxxxxsx',
    parent: '2222222222',
    title: 'hoc',
    type: 'item',
    path: '/demo-hoc',
  },
  {
    id: '555555555',
    parent: '2222222222',
    title: 'fragments',
    type: 'item',
    path: '/demo-fragments',
  },
  {
    id: '66666666666',
    parent: '2222222222',
    title: 'portals',
    path: '/demo-portals',
    type: 'item',
  },
  {
    id: '7777777777',
    parent: '2222222222',
    title: 'hook',
    path: '/demo-hook',
    type: 'item',
  },


  {
    id: '888888888',
    title: 'Redux',
    type: 'submenu'
  },

  {
    id: '99999999999',
    parent: '888888888',
    title: 'redux',
    path: '/demo-redux',
    type: 'item',
  },
  {
    id: '10101010101101',
    parent: '888888888',
    title: 'counter',
    path: '/demo-counter',
    type: 'item',
  },


  {
    id: '12121212121',
    title: 'Redux',
    type: 'submenu',
  },

  {
    id: '1313131313131',
    parent: '12121212121',
    title: 'mobx',
    path: '/demo-mobx',
    type: 'item',
  },
  {
    id: '1414141414141',
    parent: '12121212121',
    title: 'computed',
    path: '/demo-computed',
    type: 'item',
  },
  {
    id: '15151515151',
    parent: '12121212121',
    title: 'autorun',
    path: '/demo-autorun',
    type: 'item',
  },
  {
    id: '161616161616161',
    parent: '12121212121',
    title: 'color',
    path: '/demo-color',
    type: 'item',
  },
  {
    id: '17717171717171',
    parent: '12121212121',
    title: 'action',
    path: '/demo-action',
    type: 'item',
  },
]
