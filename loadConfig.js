require('dotenv').config();

function getConfig() {
  return {
    gateway: process.env.GATEWAY || 'pushinpay',
    environment: process.env.ENVIRONMENT || 'production',
    generateQRCodeOnMobile: process.env.GENERATE_QR_CODE_ON_MOBILE === 'true',
    
    syncpay: {
      clientId: process.env.SYNCPAY_CLIENT_ID || '',
      clientSecret: process.env.SYNCPAY_CLIENT_SECRET || ''
    },
    
    pushinpay: {
      token: process.env.PUSHINPAY_TOKEN || ''
    },
    
    webhook: {
      baseUrl: process.env.WEBHOOK_BASE_URL || 'https://privacy-sync.vercel.app',
      secret: process.env.WEBHOOK_SECRET || ''
    },
    
    model: {
      name: process.env.MODEL_NAME || 'Mithaly ketlyn',
      handle: process.env.MODEL_HANDLE ? (process.env.MODEL_HANDLE.startsWith('@') ? process.env.MODEL_HANDLE : `@${process.env.MODEL_HANDLE}`) : '@eu.mihalyc',
      bio: process.env.MODEL_BIO || 'Tenho 22 aninhos… com os peitos perfeitos pra tu apertar enquanto mete gostoso, e a BUNDA MAIS GOSTOSA que você vai ver! 🍑 Aqui é o meu cantinho mais íntimo… Você vai me ver: transando, me tocando, gemendo e gozando!🔥 De frente, de costas, de quatro… e com o dedinho passando onde você mais sonha🫦 Faço avaliações, personalizados e o que mais você quiser.🔞 Curiosidade mata, vem me ver abertinha pra você! ❤‍🔥'
    },
    
    plans: {
      monthly: {
        buttonId: process.env.PLAN_MONTHLY_BUTTON_ID || 'btn-1-mes',
        label: process.env.PLAN_MONTHLY_LABEL || '1 mês',
        priceLabel: process.env.PLAN_MONTHLY_PRICE_LABEL || 'R$ 24,99',
        price: parseFloat(process.env.PLAN_MONTHLY_PRICE) || 24.99,
        description: process.env.PLAN_MONTHLY_DESCRIPTION || 'Assinatura mensal'
      },
      quarterly: {
        buttonId: process.env.PLAN_QUARTERLY_BUTTON_ID || 'btn-3-meses',
        label: process.env.PLAN_QUARTERLY_LABEL || '3 meses (30% off)',
        priceLabel: process.env.PLAN_QUARTERLY_PRICE_LABEL || 'R$ 39,90',
        price: parseFloat(process.env.PLAN_QUARTERLY_PRICE) || 39.90,
        description: process.env.PLAN_QUARTERLY_DESCRIPTION || 'Assinatura trimestral'
      },
      semestrial: {
        buttonId: process.env.PLAN_SEMESTRIAL_BUTTON_ID || 'btn-6-meses',
        label: process.env.PLAN_SEMESTRIAL_LABEL || '6 meses (40% off)',
        priceLabel: process.env.PLAN_SEMESTRIAL_PRICE_LABEL || 'R$ 59,90',
        price: parseFloat(process.env.PLAN_SEMESTRIAL_PRICE) || 59.90,
        description: process.env.PLAN_SEMESTRIAL_DESCRIPTION || 'Assinatura semestral'
      }
    },
    
    redirectUrl: process.env.REDIRECT_URL || 'https://stellabeghini.com/oferta-premiada/'
  };
}

function saveConfig(newConfig) {
  console.log('⚠️ Configuração salva em variáveis de ambiente (.env)');
  console.log('Para alterar configurações, edite o arquivo .env');
}

module.exports = { getConfig, saveConfig };
