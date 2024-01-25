import CountryFlag from 'react-country-flag';

interface NationalityFlagProps {
  nationalityCode: string;
}

const NationalityFlag: React.FC<NationalityFlagProps> = ({ nationalityCode }) => (
  <CountryFlag countryCode={nationalityCode} svg />
);

export default NationalityFlag;