const headerColumns = () => {
  return [
    {
      id: 'gasConcentration',
      label: 'Gas Concentration',
    },
    {
      id: 'lat',
      label: 'Latitude',
      sortable: true,
    },
    {
      id: 'long',
      label: 'Longitude',
      sortable: true,
    },
  ]
}

export default headerColumns;