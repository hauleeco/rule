const ROLE = {
  ADMIN: 'admin',
  BASIC: 'basic'
}

module.exports = {
  ROLE: ROLE,
  users: [
    { id: 1, name: 'hau123', role: ROLE.ADMIN },
    { id: 2, name: 'hau456', role: ROLE.BASIC },
    { id: 3, name: 'hau789', role: ROLE.BASIC }
  ],
  projects: [
    { id: 1, name: "hau123's project", userId: 1 },
    { id: 2, name: "hau456's project", userId: 2 },
    { id: 3, name: "hau789's project", userId: 3 }
  ]
}