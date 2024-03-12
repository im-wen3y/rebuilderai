import styled from '@emotion/styled';
import { Languages, languages } from '@i18n/index';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (lang: Languages) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Container>
      <a href='/'>
        <Logo />
      </a>
      <Menu>
        <MenuItem>{t('HEADER_NAV__.SERVICE')}</MenuItem>
        <MenuItem>{t('HEADER_NAV__.TECHNOLOGY')}</MenuItem>
        <MenuItem>{t('HEADER_NAV__.ABOUT')}</MenuItem>
        <MenuItem>{t('HEADER_NAV__.CONTACT')}</MenuItem>
      </Menu>

      <div>
        {languages.map((lang) => (
          <button key={lang} onClick={() => handleChangeLanguage(lang)}>
            {t(`${lang}`)}
          </button>
        ))}
      </div>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 94px;
  align-items: center;
  justify-content: space-between;
  background-color: #000;
`;

const Menu = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  justify-content: center;
  column-gap: 46px;
`;

const MenuItem = styled.span`
  color: rgb(255, 255, 255);
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 1.2px;
  cursor: pointer;

  :after {
    display: block;
    content: '';
    border-bottom: solid 2px rgb(23, 60, 254);
    transform: scaleX(0);
    transition: transform 0.3s cubic-bezier(0.22, 0.61, 0.36, 1) 0s;
  }
  :hover:after {
    transform-origin: 0px 0px;
    transform: scaleX(1);
    backface-visibility: hidden;
  }
`;

const Logo = styled.div`
  width: 140px;
  height: 32px;
  background-color: #fff;
`;

// main: "#173CFE",
// black: "#000000",
// gray1: "#0E0E0F",
// gray2: "#222323",
// gray3: "#434343",
// gray4: "#616161",
// gray5: "#A3A3A3",
// gray6: "#CFCFCF",
// gray7: "#E4E4E4",
// gray8: "#F1F2F3",
// gray9: "#F7F7F8",
// gray10: "#F6F7F8",
// gray20: "#E6E8EB",
// gray30: "#BDC1C7",
// gray40: "#6F757B",
// gray50: "#282D32",
// red20: "#FF7474",
// red40: "#FF3232",
// white: "#FFFFFF",
// gray02: "#e6e8eb",
// gray03: "#bdc1c7",
// primary02: "#5d6cfa",
// primary04: "#3737cc"
