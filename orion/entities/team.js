Teams = new orion.collection('team', {
  icon: 'suitcase',
  sidebarName: 'Team',
  pluralName: 'Team Persons',
  singularName: 'Team Person',
  tabular: {
    columns: [
      { data: 'name', title: 'Name' },
      { data: 'index', title: 'Index' }
    ]
  }
})

Teams.attachSchema(new SimpleSchema({
  index: {
    type: Number,
    label: 'Index'
  },
  name: {
    type: String,
    label: 'Name'
  },
  role: {
    type: String,
    label: 'Role'
  },
  email: {
    type: String,
    label: 'email',
    optional: true
  },
  image: orion.attribute('file', {
      label: 'Image'
  })
}))
