export const countryAbbreviations = {
  portugal: 'PT',
  'united states': 'US',
  usa: 'US',
  germany: 'DE',
  deutschland: 'DE',
  china: 'CN',
  spain: 'ES',
  españa: 'ES',
  brazil: 'BR',
  brasil: 'BR',
  australia: 'AU',
  canada: 'CA',
  'south korea': 'KR',
  korea: 'KR',
  uae: 'AE',
  'united arab emirates': 'AE',
  dubai: 'AE',
  russia: 'RU',
  rusia: 'RU',
  argentina: 'AR',
  japan: 'JP',
  'south africa': 'ZA',
  'republic of south africa': 'ZA'
}

export const getCountryCode = (country) => {
  const normalizedCountry = country.trim().toLowerCase()
  return countryAbbreviations[normalizedCountry] || country
}
