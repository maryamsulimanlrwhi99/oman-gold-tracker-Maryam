export const TRANSLATIONS = {

  ar: {


    // Header
    siteName: 'ذهب عُمان',
    siteSubtitle: 'متتبع أسعار الذهب',

    navPrices: 'الأسعار',
    navCalculator: 'حاسبة الذهب',
    navTrend: 'اتجاه الأسعار',
    navHistory: 'سجل الأسعار',

    demoData: 'بيانات تجريبية',

    // Hero
    breadcrumbHome: 'الرئيسية',
    breadcrumbPrices: 'أسعار الذهب',

    heroBadge: 'أسعار تجريبية',

    heroTitle: 'أسعار الذهب في سلطنة عُمان',

    heroDescription:
      'تابع أسعار الذهب لمختلف العيارات، واحسب القيمة التقديرية للذهب بسهولة بالريال العُماني.',

    lastUpdated: 'آخر تحديث',
    today: 'اليوم',

    market: 'السوق',
    oman: 'سلطنة عُمان',

    currency: 'العملة',
    omaniRial: 'ريال عُماني',
    currencyShort: 'ر.ع',

    // Today's prices
    todayPricesTitle: 'أسعار الذهب اليوم',

    todayPricesDescription:
      'أسعار الذهب حسب العيار بالريال العُماني لكل جرام',

    goldKarat: 'عيار الذهب',
    rialPerGram: 'ريال عُماني / جرام',

    // Calculator
    calculatorTitle: 'حاسبة الذهب',

    calculatorDescription:
      'اختر عيار الذهب وأدخل الوزن لمعرفة القيمة التقديرية.',

    weightGrams: 'الوزن بالجرام',

    weightPlaceholder: 'مثال: 10',

    calculateButton: 'احسب القيمة',

    estimatedValue: 'القيمة التقديرية',

    enterGoldData: 'أدخل بيانات الذهب',

    calculatorPlaceholder:
      'اختر العيار وأدخل الوزن ثم اضغط على احسب القيمة.',

    gramsOfGold: 'جرام من ذهب',

    // Trend
    trendTitle: 'اتجاه أسعار الذهب خلال 30 يوماً',

    trendDescription:
      'تابع تغير أسعار الذهب خلال آخر 30 يوماً.',

    currentPrice: 'السعر الحالي',
    highestPrice: 'أعلى سعر',
    lowestPrice: 'أقل سعر',

    previousPrice: 'السعر السابق',
    change: 'التغيير',

    // History
    historyTitle: 'سجل أسعار الذهب',

    historyDescription:
      'أسعار الذهب لجميع العيارات خلال آخر 30 يوماً.',

    date: 'التاريخ',

    // Footer
    copyright:
      '© 2026 ذهب عُمان. جميع الحقوق محفوظة.'

  },


  en: {


    // Header
    siteName: 'Maryam gold',
    siteSubtitle: 'Gold Price Tracker',

    navPrices: 'Prices',
    navCalculator: 'Calculator',
    navTrend: 'Price Trend',
    navHistory: 'Price History',

    demoData: 'Demo Data',

    // Hero
    breadcrumbHome: 'Home',
    breadcrumbPrices: 'Gold Prices',

    heroBadge: 'Demo Prices',

    heroTitle: 'Gold Prices in Oman',

    heroDescription:
      'Track gold prices for different karats and easily calculate the estimated value of gold in Omani Rials.',

    lastUpdated: 'Last Updated',
    today: 'Today',

    market: 'Market',
    oman: 'Oman',

    currency: 'Currency',
    omaniRial: 'Omani Rial',
    currencyShort: 'OMR',

    // Today's prices
    todayPricesTitle: "Today's Gold Prices",

    todayPricesDescription:
      'Gold prices by karat in Omani Rials per gram',

    goldKarat: 'Gold Karat',
    rialPerGram: 'OMR / Gram',

    // Calculator
    calculatorTitle: 'Gold Calculator',

    calculatorDescription:
      'Select the gold karat and enter the weight to calculate the estimated value.',

    weightGrams: 'Weight in Grams',

    weightPlaceholder: 'Example: 10',

    calculateButton: 'Calculate Value',

    estimatedValue: 'Estimated Value',

    enterGoldData: 'Enter Gold Details',

    calculatorPlaceholder:
      'Select the karat, enter the weight, then click Calculate Value.',

    gramsOfGold: 'grams of gold',

    // Trend
    trendTitle: '30-Day Gold Price Trend',

    trendDescription:
      'Track gold price changes over the last 30 days.',

    currentPrice: 'Current Price',
    highestPrice: 'Highest Price',
    lowestPrice: 'Lowest Price',

    previousPrice: 'Previous Price',
    change: 'Change',

    // History
    historyTitle: 'Gold Price History',

    historyDescription:
      'Gold prices for all karats during the last 30 days.',

    date: 'Date',

    // Footer
    copyright:
      '© 2026 Omani Gold. All rights reserved.'

  }

} as const;


export type Language = keyof typeof TRANSLATIONS;

export type TranslationKey =
  keyof typeof TRANSLATIONS.ar;