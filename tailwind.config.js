const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');

module.exports = {
  purge: [
    join(__dirname, './apps/**/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './libs/shared/ui/src/lib/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, './libs/**/**/src/lib/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {},
  darkMode: false, // false or true
  theme: {
    extend: {
      screens: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px',
        '2xl': '1280px',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          phone: '10px',
        },
      },
      fontFamily: {
        sans: ['Noto Sans', 'sans-serif'],
        eksell: ['Eksell Display', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        red: '#DE4B3E',
        black: '#292929',
        'sub-black': '#757575',
        border: '#E6E6E6',
        pink: '#EA4B89',
        white: '#FFF',
        'dark-blue': '#2D3748',
        green: '#04C35C',
        blue: '#2B6CB0',
      },
      fontSize: {
        11: '11px',
        12: '12px',
        13: '13px',
        xs: '14px',
        sm: '16px',
        18: '18px',
        lg: '23px',
        xl: '30px',
      },
      spacing: {
        0: '0px',
        1: '10px',
        2: '20px',
        3: '30px',
        4: '40px',
        5: '50px',
        6: '60px',
        7: '70px',
        8: '80px',
        9: '90px',
        10: '100px',
        11: '110px',
        12: '120px',
        13: '130px',
        14: '140px',
        15: '150px',
        16: '160px',
        17: '170px',
        18: '180px',
        19: '190px',
        20: '200px',
        0.1: '1px',
        0.2: '2px',
        0.3: '3px',
        0.4: '4px',
        0.5: '5px',
        0.6: '6px',
        0.7: '7px',
        0.8: '8px',
        0.9: '9px',
        1.1: '11px',
        1.2: '12px',
        1.3: '13px',
        1.4: '14px',
        1.5: '15px',
        1.6: '16px',
        1.7: '17px',
        1.8: '18px',
        1.9: '19px',
        2.1: '21px',
        2.2: '22px',
        2.3: '23px',
        2.4: '24px',
        2.5: '25px',
        2.6: '26px',
        2.7: '27px',
        2.8: '28px',
        2.9: '29px',
        3.1: '31px',
        3.2: '32px',
        3.3: '33px',
        3.4: '34px',
        3.5: '35px',
        3.6: '36px',
        3.7: '37px',
        3.8: '38px',
        3.9: '39px',
        4.1: '41px',
        4.2: '42px',
        4.3: '43px',
        4.4: '44px',
        4.5: '45px',
        4.6: '46px',
        4.7: '47px',
        4.8: '48px',
        4.9: '49px',
        5.1: '51px',
        5.2: '52px',
        5.3: '53px',
        5.4: '54px',
        5.5: '55px',
        5.6: '56px',
        5.7: '57px',
        5.8: '58px',
        5.9: '59px',
        6.1: '61px',
        6.2: '62px',
        6.3: '63px',
        6.4: '64px',
        6.5: '65px',
        6.6: '66px',
        6.7: '67px',
        6.8: '68px',
        6.9: '69px',
        7.1: '71px',
        7.2: '72px',
        7.3: '73px',
        7.4: '74px',
        7.5: '75px',
        7.6: '76px',
        7.7: '77px',
        7.8: '78px',
        7.9: '79px',
        8.1: '81px',
        8.2: '82px',
        8.3: '83px',
        8.4: '84px',
        8.5: '85px',
        8.6: '86px',
        8.7: '87px',
        8.8: '88px',
        8.9: '89px',
        9.1: '91px',
        9.2: '92px',
        9.3: '93px',
        9.4: '94px',
        9.5: '95px',
        9.6: '96px',
        9.7: '97px',
        9.8: '98px',
        9.9: '99px',
        10: '100px',
        10.1: '101px',
        10.2: '102px',
        10.3: '103px',
        10.4: '104px',
        10.5: '105px',
        10.6: '106px',
        10.7: '107px',
        10.8: '108px',
        10.9: '109px',
        11.1: '111px',
        11.2: '112px',
        11.3: '113px',
        11.4: '114px',
        11.5: '115px',
        11.6: '116px',
        11.7: '117px',
        11.8: '118px',
        11.9: '119px',
        12.1: '121px',
        12.2: '122px',
        12.3: '123px',
        12.4: '124px',
        12.5: '125px',
        12.6: '126px',
        12.7: '127px',
        12.8: '128px',
        12.9: '129px',
        13.1: '131px',
        13.2: '132px',
        13.3: '133px',
        13.4: '134px',
        13.5: '135px',
        13.6: '136px',
        13.7: '137px',
        13.8: '138px',
        13.9: '139px',
        14.1: '141px',
        14.2: '142px',
        14.3: '143px',
        14.4: '144px',
        14.5: '145px',
        14.6: '146px',
        14.7: '147px',
        14.8: '148px',
        14.9: '149px',
        15.1: '151px',
        15.2: '152px',
        15.3: '153px',
        15.4: '154px',
        15.5: '155px',
        15.6: '156px',
        15.7: '157px',
        15.8: '158px',
        15.9: '159px',
        16.1: '161px',
        16.2: '162px',
        16.3: '163px',
        16.4: '164px',
        16.5: '165px',
        16.6: '166px',
        16.7: '167px',
        16.8: '168px',
        16.9: '169px',
        17.1: '171px',
        17.2: '172px',
        17.3: '173px',
        17.4: '174px',
        17.5: '175px',
        17.6: '176px',
        17.7: '177px',
        17.8: '178px',
        17.9: '179px',
        18.1: '181px',
        18.2: '182px',
        18.3: '183px',
        18.4: '184px',
        18.5: '185px',
        18.6: '186px',
        18.7: '187px',
        18.8: '188px',
        18.9: '189px',
        19.1: '191px',
        19.2: '192px',
        19.3: '193px',
        19.4: '194px',
        19.5: '195px',
        19.6: '196px',
        19.7: '197px',
        19.8: '198px',
        19.9: '199px',
        20: '200px',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['last'],
      scale: ['group-hover'],
    },
  },
  plugins: [],
};
