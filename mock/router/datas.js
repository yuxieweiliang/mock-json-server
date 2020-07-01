
exports.menus = [
  {
    id: '111111111',
    title: 'Welcome',
    type: 'item',
    path: '/demo-Welcome',
    component: '../pages/Welcome/Welcome'
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
    component: 'lazypages/demo-component/Context'
  },
  {
    id: '444444444444',
    parent: '2222222222',
    title: 'refs',
    type: 'item',
    path: '/demo-refs',
    component: '../pages/DemoRefs/DemoRefs'
  },
  {
    id: '555555555',
    parent: '2222222222',
    title: 'fragments',
    type: 'item',
    path: '/demo-fragments',
    component: 'lazypages/demo-component/DemoFragments'
  },
  {
    id: '66666666666',
    parent: '2222222222',
    title: 'portals',
    path: '/demo-portals',
    type: 'item',
    component: '../pages/DemoPortals/DemoPortals'
  },
  {
    id: '7777777777',
    parent: '2222222222',
    title: 'hook',
    path: '/demo-hook',
    type: 'item',
    component: '../pages/DemoHook/DemoHook'
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
    component: '../pages/DemoRedux/DemoRedux'
  },
  {
    id: '10101010101101',
    parent: '888888888',
    title: 'counter',
    path: '/demo-counter',
    type: 'item',
    component: '../pages/DemoRedux/DemoCounter'
  },




  {
    id: '12121212121',
    title: 'Redux',
    type: 'submenu',
    children: [

    ]
  },

  {
    id: '12121212121',
    parent: '1313131313131',
    title: 'mobx',
    path: '/demo-mobx',
    type: 'item',
    component: '../pages/DemoMobx/DemoMobx'
  },
  {
    id: '12121212121',
    parent: '1414141414141',
    title: 'computed',
    path: '/demo-computed',
    type: 'item',
    component: '../pages/DemoMobx/Computed'
  },
  {
    id: '12121212121',
    parent: '15151515151',
    title: 'autorun',
    path: '/demo-autorun',
    type: 'item',
    component: '../pages/DemoMobx/Autorun'
  },
  {
    id: '12121212121',
    parent: '161616161616161',
    title: 'color',
    path: '/demo-color',
    type: 'item',
    component: '../pages/DemoMobx/Color'
  },
  {
    id: '12121212121',
    parent: '17717171717171',
    title: 'action',
    path: '/demo-action',
    type: 'item',
    component: '../pages/DemoMobx/Action'
  },
]
